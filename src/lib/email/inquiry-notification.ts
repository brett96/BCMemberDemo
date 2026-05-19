import { setSiteSetting } from "@/lib/site-settings";
import {
  getLeadNotifyEmail,
  getSmtpFromAddress,
  getSmtpTransport,
  isSmtpConfigured,
} from "@/lib/email/smtp";

export type InquiryEmailPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  message: string;
  submittedAt: string;
};

function buildInquiryEmailBody(payload: InquiryEmailPayload): string {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company / organization: ${payload.company || "(not provided)"}`,
    `Phone: ${payload.phone || "(not provided)"}`,
    `I am interested as: ${payload.role || "(not provided)"}`,
    "",
    "Message:",
    payload.message || "(none)",
    "",
    `Submitted (UTC): ${payload.submittedAt}`,
  ].join("\n");
}

export type InquiryEmailResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Notifies the BookCover team via SMTP (matches legacy /api/bookcover-inquiry).
 */
export async function sendInquiryNotificationEmail(
  payload: InquiryEmailPayload
): Promise<InquiryEmailResult> {
  if (!isSmtpConfigured()) {
    const msg =
      "Email is not configured (set SMTP_HOST, SMTP_USER, and SMTP_PASS).";
    await setSiteSetting("last_email_error", msg);
    return { ok: false, error: msg };
  }

  const transport = getSmtpTransport();
  const from = getSmtpFromAddress();
  const to = getLeadNotifyEmail();

  if (!transport || !from) {
    const msg = "Email is not configured (missing SMTP_FROM or SMTP_USER).";
    await setSiteSetting("last_email_error", msg);
    return { ok: false, error: msg };
  }

  try {
    await transport.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: `BookCover Inquiry - ${payload.name}`,
      text: buildInquiryEmailBody(payload),
    });
    await setSiteSetting("last_email_error", "");
    return { ok: true };
  } catch (e) {
    const msg = `Email send failed: ${e instanceof Error ? e.message : String(e)}`;
    console.error("[bookcover-inquiry] email", e);
    await setSiteSetting("last_email_error", msg);
    return { ok: false, error: msg };
  }
}
