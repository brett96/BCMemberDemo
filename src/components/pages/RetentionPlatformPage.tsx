import type { ReactNode } from "react";
import { SeeMoreStrip } from "@/components/layout/SeeMoreStrip";
import { CheckIcon } from "@/components/icons";

const copy = {
  fontSize: 14,
  lineHeight: 1.8,
  color: "var(--slate)",
  marginBottom: 20,
} as const;

function FeatureRow({
  sage,
  children,
}: {
  sage?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`feature-row${sage ? " sage" : ""}`}>
      <span style={{ flexShrink: 0, marginTop: 1, color: "var(--teal)" }}>
        <CheckIcon />
      </span>
      <div style={{ fontSize: 13, color: "var(--slate)" }}>{children}</div>
    </div>
  );
}

function MockupLogo() {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        background: "var(--teal)",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width={11}
        height={11}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="mockup-frame">
      <div className="mockup-header">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MockupLogo />
          <span
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 11,
              fontWeight: 900,
              color: "white",
            }}
          >
            BookCover Retention
          </span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,.4)" }}>
            / Dashboard
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,.5)" }}>
            YourHealthPlan · MA · 47,832 members
          </span>
          <div
            style={{
              width: 22,
              height: 22,
              background: "var(--teal)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 9,
              fontWeight: 900,
              color: "white",
            }}
          >
            JD
          </div>
        </div>
      </div>

      <div className="mockup-subnav">
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 800,
            color: "var(--teal)",
            background: "var(--mint)",
            borderRadius: 5,
            padding: "3px 9px",
          }}
        >
          Dashboard
        </div>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            color: "var(--muted)",
            padding: "3px 9px",
          }}
        >
          Members
        </div>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            color: "var(--muted)",
            padding: "3px 9px",
          }}
        >
          Reports
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              background: "var(--mint)",
              border: "1px solid var(--border)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: 9,
              color: "var(--slate)",
            }}
          >
            Filter ▾
          </div>
          <div
            style={{
              background: "var(--teal)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: 9,
              color: "white",
              fontWeight: 700,
            }}
          >
            + New Campaign
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          background: "white",
          borderBottom: "1px solid var(--border-m)",
        }}
      >
        {[
          { val: "47,832", lbl: "Total Members", color: "var(--teal)" },
          {
            val: "2,841",
            lbl: (
              <>
                High Risk <span style={{ color: "var(--red)" }}>▲+214</span>
              </>
            ),
            color: "var(--red)",
          },
          { val: "38,214", lbl: "Registered (80%)", color: "var(--teal)" },
          { val: "487", lbl: "Action Needed", color: "var(--amber)" },
        ].map((kpi, i) => (
          <div
            key={i}
            style={{
              padding: "9px 11px",
              borderRight: i < 3 ? "1px solid var(--border-m)" : undefined,
              borderTop: `3px solid ${kpi.color}`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontSize: 18,
                fontWeight: 900,
                color: kpi.color,
              }}
            >
              {kpi.val}
            </div>
            <div style={{ fontSize: 8, color: "var(--muted)" }}>{kpi.lbl}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "var(--sage)",
          padding: "7px 14px",
          borderBottom: "1px solid var(--border-m)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 800,
            color: "var(--forest)",
            textTransform: "uppercase",
            letterSpacing: ".8px",
          }}
        >
          NBA Queue
        </div>
        <div style={{ fontSize: 9, color: "var(--muted)" }}>
          12 members · 3 action types
        </div>
      </div>

      <div
        style={{
          background: "#FEF0F0",
          borderLeft: "3px solid var(--red)",
          padding: "4px 14px",
          borderBottom: "1px solid #f9dcdc",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: "8.5px",
            fontWeight: 800,
            color: "var(--red)",
            textTransform: "uppercase",
            letterSpacing: ".7px",
          }}
        >
          📞 Call Member — 3 members requiring immediate outreach
        </div>
      </div>
      <div style={{ background: "white" }}>
        {[
          {
            name: "Johnson, Margaret",
            meta: "MA-Gold HMO · DOB 03/14/1952",
            risk: "Risk 92 ▲",
            riskBg: "var(--red-lt)",
            riskColor: "var(--red)",
            reason: "Coverage denial frustration",
            badge: "URGENT",
            badgeBg: "var(--red)",
            badgeColor: "white",
            rowBg: "#FEF8F8",
          },
          {
            name: "Chen, Wei",
            meta: "D-SNP · DOB 08/22/1948",
            risk: "Risk 87 ▲",
            riskBg: "var(--red-lt)",
            riskColor: "var(--red)",
            reason: "ANOC plan termination risk",
            badge: "URGENT",
            badgeBg: "var(--red)",
            badgeColor: "white",
            rowBg: "#FEF8F8",
          },
          {
            name: "Davis, Robert",
            meta: "MA-PPO · DOB 11/03/1950",
            risk: "Risk 74 ▲",
            riskBg: "var(--amber-lt)",
            riskColor: "var(--amber)",
            reason: "3 unanswered messages",
            badge: "THIS WEEK",
            badgeBg: "var(--amber-lt)",
            badgeColor: "var(--amber)",
            rowBg: undefined,
          },
        ].map((row) => (
          <NbaRow key={row.name} {...row} />
        ))}
      </div>

      <div
        style={{
          background: "#EEF6FB",
          borderLeft: "3px solid var(--teal)",
          padding: "4px 14px",
          borderBottom: "1px solid #CBE8F6",
          borderTop: "1px solid var(--border-m)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: "8.5px",
            fontWeight: 800,
            color: "var(--teal)",
            textTransform: "uppercase",
            letterSpacing: ".7px",
          }}
        >
          📬 Send Notification — 5 members awaiting outreach
        </div>
      </div>
      <div style={{ background: "white" }}>
        <NbaRow
          name="Williams, Patricia"
          meta="Medicaid · DOB 05/19/1959"
          risk="Risk 68"
          riskBg="var(--amber-lt)"
          riskColor="var(--amber)"
          reason="Pre-ANOC benefit change"
          badge="THIS WEEK"
          badgeBg="var(--teal-lt)"
          badgeColor="var(--teal)"
          rowBg="var(--mint)"
        />
        <NbaRow
          name="Martinez, James"
          meta="MA-HMO · DOB 09/30/1953"
          risk="Risk 41"
          riskBg="var(--teal-lt)"
          riskColor="var(--teal)"
          reason="Unused dental — Q4 deadline"
          badge="SCHEDULED"
          badgeBg="var(--teal-lt)"
          badgeColor="var(--teal)"
        />
      </div>

      <div
        style={{
          background: "#F4F0FB",
          borderLeft: "3px solid #6741a8",
          padding: "4px 14px",
          borderBottom: "1px solid #ddd3f5",
          borderTop: "1px solid var(--border-m)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: "8.5px",
            fontWeight: 800,
            color: "#6741a8",
            textTransform: "uppercase",
            letterSpacing: ".7px",
          }}
        >
          📋 Send Survey — 4 members · post-action follow-up
        </div>
      </div>
      <div style={{ background: "white" }}>
        <NbaRow
          name="Thompson, Linda"
          meta="MA-HMO · DOB 02/07/1956"
          risk="Risk 35"
          riskBg="var(--teal-lt)"
          riskColor="var(--teal)"
          reason="Post-call satisfaction survey"
          badge="POST-ACTION"
          badgeBg="#F4F0FB"
          badgeColor="#6741a8"
        />
      </div>

      <div
        style={{
          background: "var(--sage)",
          borderTop: "1px solid var(--border-m)",
          padding: "7px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 9, color: "var(--muted)" }}>
          ☐ Select members to bulk action
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              border: "1px solid var(--red)",
              background: "var(--red-lt)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: "8.5px",
              color: "var(--red)",
              fontWeight: 800,
            }}
          >
            📞 Log Call
          </div>
          <div
            style={{
              border: "1px solid var(--teal)",
              background: "var(--teal-lt)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: "8.5px",
              color: "var(--teal)",
              fontWeight: 800,
            }}
          >
            📬 Notify
          </div>
          <div
            style={{
              border: "1px solid #9b7dd4",
              background: "#F4F0FB",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: "8.5px",
              color: "#6741a8",
              fontWeight: 800,
            }}
          >
            📋 Survey
          </div>
        </div>
      </div>
    </div>
  );
}

type NbaRowProps = {
  name: string;
  meta: string;
  risk: string;
  riskBg: string;
  riskColor: string;
  reason: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  rowBg?: string;
};

function NbaRow({
  name,
  meta,
  risk,
  riskBg,
  riskColor,
  reason,
  badge,
  badgeBg,
  badgeColor,
  rowBg,
}: NbaRowProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.5fr .9fr 1.1fr .7fr",
        padding: "5px 14px",
        background: rowBg,
        borderBottom: "1px solid var(--border-m)",
        fontSize: "8.5px",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontWeight: 800,
            color: "var(--forest)",
          }}
        >
          {name}
        </div>
        <div style={{ color: "var(--muted)", fontSize: 8 }}>{meta}</div>
      </div>
      <div>
        <span
          style={{
            background: riskBg,
            color: riskColor,
            fontWeight: 800,
            fontSize: 8,
            padding: "2px 7px",
            borderRadius: 4,
          }}
        >
          {risk}
        </span>
      </div>
      <div style={{ color: "var(--slate)" }}>{reason}</div>
      <div style={{ textAlign: "right" }}>
        <span
          style={{
            background: badgeBg,
            color: badgeColor,
            fontSize: "7.5px",
            fontWeight: 800,
            padding: "2px 7px",
            borderRadius: 4,
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

function MemberDetailMockup() {
  return (
    <div className="mockup-frame">
      <div className="mockup-header">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MockupLogo />
          <span
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 11,
              fontWeight: 900,
              color: "white",
            }}
          >
            BookCover Retention
          </span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,.4)" }}>
            / Members / Johnson, M.
          </span>
        </div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,.5)" }}>
          ← Back to Dashboard
        </div>
      </div>

      <div className="mockup-subnav">
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 800,
            color: "var(--teal)",
            background: "var(--mint)",
            borderRadius: 5,
            padding: "3px 9px",
          }}
        >
          Profile
        </div>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            color: "var(--muted)",
            padding: "3px 9px",
          }}
        >
          Communications
        </div>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            color: "var(--muted)",
            padding: "3px 9px",
          }}
        >
          Chat History
        </div>
        <div
          style={{ marginLeft: "auto", display: "flex", gap: 6 }}
        >
          <div
            style={{
              border: "1px solid var(--teal)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: "8.5px",
              color: "var(--teal)",
              fontWeight: 700,
            }}
          >
            Send Message
          </div>
          <div
            style={{
              background: "var(--red)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: "8.5px",
              color: "white",
              fontWeight: 800,
            }}
          >
            📞 Call Now
          </div>
        </div>
      </div>

      <div
        style={{
          background: "var(--sage)",
          padding: "10px 14px",
          borderBottom: "1px solid var(--border-m)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            background: "var(--teal)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 15,
            fontWeight: 900,
            color: "white",
            flexShrink: 0,
          }}
        >
          MJ
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 13,
              fontWeight: 900,
              color: "var(--forest)",
            }}
          >
            Margaret Johnson
          </div>
          <div style={{ fontSize: 9, color: "var(--muted)" }}>
            H1234-001 · Gold Plus HMO · DOB 03/14/1952 · (213) 555-0142
          </div>
        </div>
        <div
          style={{
            background: "var(--red-lt)",
            border: "1px solid #f5c0c0",
            borderRadius: 7,
            padding: "5px 10px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 18,
              fontWeight: 900,
              color: "var(--red)",
              lineHeight: 1,
            }}
          >
            92
          </div>
          <div
            style={{
              fontSize: 8,
              color: "var(--red)",
              fontWeight: 700,
            }}
          >
            RISK · HIGH ▲
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#FEF8F8",
          borderBottom: "1px solid #f9d0d0",
          padding: "9px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "var(--red)",
            borderRadius: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width={13}
            height={13}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13" />
            <path d="M2 2l20 20" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 9,
              fontWeight: 800,
              color: "var(--red)",
              textTransform: "uppercase",
              letterSpacing: ".5px",
              marginBottom: 2,
            }}
          >
            System Recommendation
          </div>
          <div style={{ fontSize: "9.5px", color: "#6b1010", lineHeight: 1.4 }}>
            <strong>Phone outreach recommended</strong> — member experienced a
            prior auth denial and expressed frustration. Calling to explain the
            appeal process and next steps is likely to reduce churn risk.
          </div>
        </div>
        <div
          style={{
            background: "var(--red)",
            color: "white",
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: 8,
            fontWeight: 800,
            padding: "5px 10px",
            borderRadius: 6,
            whiteSpace: "nowrap",
          }}
        >
          📞 Log Call
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          background: "white",
          borderBottom: "1px solid var(--border-m)",
        }}
      >
        {[
          ["Enrolled Since", "Jan 2023"],
          ["Last Login", "Apr 5, 2026"],
          ["Total Sessions", "247"],
        ].map(([label, val], i) => (
          <div
            key={label}
            style={{
              padding: "8px 12px",
              borderRight: i < 2 ? "1px solid var(--border-m)" : undefined,
            }}
          >
            <div
              style={{
                fontSize: 8,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: ".4px",
                marginBottom: 2,
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontSize: 11,
                fontWeight: 800,
                color: "var(--forest)",
              }}
            >
              {val}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "white",
          padding: "10px 12px",
          borderBottom: "1px solid var(--border-m)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: "8.5px",
            fontWeight: 800,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: ".6px",
            marginBottom: 7,
          }}
        >
          Plan Metrics — 2026
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 6,
          }}
        >
          {[
            {
              label: "Medical Ded.",
              val: "$320",
              max: "/ $500",
              color: "var(--teal)",
              pct: "64%",
            },
            {
              label: "Rx Deductible",
              val: "$250",
              max: "/ $650",
              color: "var(--amber)",
              pct: "38%",
              track: "var(--amber-lt)",
            },
            {
              label: "OOPM / MOOP",
              val: "$1,240",
              max: "/ $3,400",
              color: "var(--pine)",
              pct: "36%",
            },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                background: "var(--sage)",
                border: "1px solid var(--border-m)",
                borderTop: `2px solid ${m.color}`,
                borderRadius: 7,
                padding: "7px 9px",
              }}
            >
              <div style={{ fontSize: 8, color: "var(--muted)", marginBottom: 2 }}>
                {m.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontSize: 14,
                  fontWeight: 900,
                  color: m.color,
                }}
              >
                {m.val}
                <span
                  style={{
                    fontSize: 8,
                    color: "var(--muted)",
                    fontWeight: 400,
                  }}
                >
                  {m.max}
                </span>
              </div>
              <div
                style={{
                  background: m.track ?? "var(--border-m)",
                  borderRadius: 3,
                  height: 4,
                  marginTop: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    background: m.color,
                    height: "100%",
                    width: m.pct,
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "white",
          padding: "10px 12px",
          borderBottom: "1px solid var(--border-m)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: "8.5px",
            fontWeight: 800,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: ".6px",
            marginBottom: 7,
          }}
        >
          Chat History — Member Website
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <ChatBubble
            sender="Member"
            time="Apr 5, 2:39 PM"
            accent="var(--teal)"
            bg="var(--mint)"
            senderColor="var(--forest)"
          >
            &quot;My doctor ordered an MRI but it was denied. What do I do?&quot;
          </ChatBubble>
          <ChatBubble
            sender="BookCover AI"
            time="Apr 5, 2:39 PM"
            accent="var(--blue)"
            bg="var(--sage)"
            senderColor="var(--teal)"
          >
            Denial identified: &quot;insufficient medical necessity.&quot; Appeal
            steps provided.{" "}
            <span style={{ color: "var(--red)", fontWeight: 700 }}>
              Coordinator alerted.
            </span>
          </ChatBubble>
          <ChatBubble
            sender="Member"
            time="Mar 10, 11:02 AM"
            accent="var(--teal)"
            bg="var(--mint)"
            senderColor="var(--forest)"
          >
            &quot;Can I get a cheaper version of my blood pressure medication?&quot;
          </ChatBubble>
          <ChatBubble
            sender="BookCover AI"
            time="Mar 10, 11:02 AM"
            accent="var(--blue)"
            bg="var(--sage)"
            senderColor="var(--teal)"
          >
            Generic Lisinopril — Tier 1 $0 at CVS vs $54/mo brand.{" "}
            <span style={{ color: "var(--teal)", fontWeight: 700 }}>
              Rx savings notification sent.
            </span>
          </ChatBubble>
        </div>
      </div>

      <div style={{ background: "white", padding: "10px 12px" }}>
        <div
          style={{
            fontFamily: "var(--font-nunito), Nunito, sans-serif",
            fontSize: "8.5px",
            fontWeight: 800,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: ".6px",
            marginBottom: 7,
          }}
        >
          Outreach &amp; Communications Log
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <LogEntry
            dotColor="var(--red)"
            bg="var(--red-lt)"
            border="#f5c0c0"
          >
            Apr 5 — Coverage denial frustration detected · Coordinator alerted
            · <strong>Rescore pending</strong>
          </LogEntry>
          <LogEntry dotColor="var(--teal)" bg="var(--teal-lt)">
            Mar 28 — Benefits reminder sent · Dental booked ✓ ·{" "}
            <strong>Risk rescored: 71→64</strong>
          </LogEntry>
          <LogEntry dotColor="var(--border)" bg="var(--mint)">
            Mar 10 — Rx savings notification sent · Opened · Satisfaction
            survey sent
          </LogEntry>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  sender,
  time,
  accent,
  bg,
  senderColor,
  children,
}: {
  sender: string;
  time: string;
  accent: string;
  bg: string;
  senderColor: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        background: bg,
        border: "1px solid var(--border-m)",
        borderLeft: `2px solid ${accent}`,
        borderRadius: 6,
        padding: "6px 9px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <span style={{ fontSize: "8.5px", fontWeight: 800, color: senderColor }}>
          {sender}
        </span>
        <span style={{ fontSize: 8, color: "var(--muted)" }}>{time}</span>
      </div>
      <div style={{ fontSize: 9, color: "var(--slate)" }}>{children}</div>
    </div>
  );
}

function LogEntry({
  dotColor,
  bg,
  border,
  children,
}: {
  dotColor: string;
  bg: string;
  border?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border ?? "var(--border-m)"}`,
        borderRadius: 6,
        padding: "5px 9px",
        display: "flex",
        alignItems: "center",
        gap: 7,
      }}
    >
      <div
        style={{
          width: 6,
          height: 6,
          background: dotColor,
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <div style={{ fontSize: 9, color: "var(--slate)" }}>{children}</div>
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="mockup-frame">
      <div className="mockup-header">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <MockupLogo />
          <span
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 11,
              fontWeight: 900,
              color: "white",
            }}
          >
            BookCover Retention
          </span>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,.4)" }}>
            / Reports
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,.5)" }}>
            Jan – Oct 2026
          </span>
          <div
            style={{
              background: "var(--teal)",
              borderRadius: 5,
              padding: "3px 9px",
              fontSize: 9,
              color: "white",
              fontWeight: 700,
            }}
          >
            ↓ Export
          </div>
        </div>
      </div>

      <div
        className="mockup-subnav"
        style={{ padding: "7px 14px" }}
      >
        {["Risk Distribution", "Trendlines", "Pre-ANOC", "Campaigns", "CAHPS"].map(
          (tab, i) => (
            <div
              key={tab}
              style={{
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontSize: 9,
                fontWeight: i === 0 ? 800 : 700,
                color: i === 0 ? "var(--teal)" : "var(--muted)",
                padding: "8px 12px",
                borderBottom: i === 0 ? "2px solid var(--teal)" : undefined,
              }}
            >
              {tab}
            </div>
          ),
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          background: "white",
          borderBottom: "1px solid var(--border-m)",
        }}
      >
        {[
          { val: "47,832", lbl: "Total Members", color: "var(--teal)", size: 16 },
          {
            val: "2,841",
            lbl: (
              <>
                High Risk{" "}
                <span style={{ color: "var(--red)", fontWeight: 700 }}>▲+214</span>
              </>
            ),
            color: "var(--red)",
            size: 16,
          },
          {
            val: "12,308",
            lbl: (
              <>
                Medium Risk{" "}
                <span style={{ color: "var(--teal)", fontWeight: 700 }}>▼−87</span>
              </>
            ),
            color: "var(--amber)",
            size: 16,
          },
          {
            val: "32,683",
            lbl: (
              <>
                Low Risk{" "}
                <span style={{ color: "var(--teal)", fontWeight: 700 }}>▲+302</span>
              </>
            ),
            color: "var(--pine)",
            size: 16,
          },
        ].map((kpi, i) => (
          <div
            key={i}
            style={{
              padding: "9px 11px",
              borderRight: i < 3 ? "1px solid var(--border-m)" : undefined,
              borderTop: `3px solid ${kpi.color}`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-nunito), Nunito, sans-serif",
                fontSize: kpi.size,
                fontWeight: 900,
                color: kpi.color,
              }}
            >
              {kpi.val}
            </div>
            <div style={{ fontSize: 8, color: "var(--muted)" }}>{kpi.lbl}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "white",
          borderBottom: "1px solid var(--border-m)",
        }}
      >
        <div style={{ padding: 12, borderRight: "1px solid var(--border-m)" }}>
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 9,
              fontWeight: 800,
              color: "var(--forest)",
              marginBottom: 8,
            }}
          >
            Risk Distribution — All LOBs
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg
              viewBox="0 0 80 80"
              style={{ width: 68, height: 68, flexShrink: 0 }}
            >
              <circle
                cx="40"
                cy="40"
                r="29"
                fill="none"
                stroke="var(--mint)"
                strokeWidth="14"
              />
              <circle
                cx="40"
                cy="40"
                r="29"
                fill="none"
                stroke="var(--red)"
                strokeWidth="14"
                strokeDasharray="10.9 182.2"
                strokeDashoffset="0"
                transform="rotate(-90 40 40)"
              />
              <circle
                cx="40"
                cy="40"
                r="29"
                fill="none"
                stroke="var(--amber)"
                strokeWidth="14"
                strokeDasharray="46.8 182.2"
                strokeDashoffset="-10.9"
                transform="rotate(-90 40 40)"
              />
              <circle
                cx="40"
                cy="40"
                r="29"
                fill="none"
                stroke="var(--teal)"
                strokeWidth="14"
                strokeDasharray="124.5 182.2"
                strokeDashoffset="-57.7"
                transform="rotate(-90 40 40)"
              />
              <text
                x="40"
                y="37"
                textAnchor="middle"
                fontSize="8"
                fontWeight="900"
                fill="var(--forest)"
                fontFamily="Nunito, sans-serif"
              >
                47,832
              </text>
              <text
                x="40"
                y="47"
                textAnchor="middle"
                fontSize="6"
                fill="var(--muted)"
                fontFamily="Nunito, sans-serif"
              >
                members
              </text>
            </svg>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1 }}
            >
              {[
                { color: "var(--red)", label: "High", val: "6% · 2,841", tc: "var(--red)" },
                {
                  color: "var(--amber)",
                  label: "Medium",
                  val: "26% · 12,308",
                  tc: "var(--amber)",
                },
                {
                  color: "var(--teal)",
                  label: "Low",
                  val: "68% · 32,683",
                  tc: "var(--teal)",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{ display: "flex", alignItems: "center", gap: 5 }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      background: row.color,
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ fontSize: "8.5px", color: "var(--slate)" }}>
                    {row.label}
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontFamily: "var(--font-nunito), Nunito, sans-serif",
                      fontSize: 9,
                      fontWeight: 800,
                      color: row.tc,
                    }}
                  >
                    {row.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: 12 }}>
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 9,
              fontWeight: 800,
              color: "var(--forest)",
              marginBottom: 8,
            }}
          >
            High-Risk Rate by Line of Business
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              { lob: "MA", width: "52%", color: "var(--amber)", pct: "5.2%" },
              { lob: "Medicaid", width: "82%", color: "var(--red)", pct: "8.3%" },
              { lob: "IFP", width: "38%", color: "var(--teal)", pct: "3.8%" },
              { lob: "D-SNP", width: "100%", color: "var(--red)", pct: "10.1%" },
            ].map((bar) => (
              <div
                key={bar.lob}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <div
                  style={{
                    fontSize: "8.5px",
                    color: "var(--slate)",
                    width: 46,
                    flexShrink: 0,
                    fontWeight: 600,
                  }}
                >
                  {bar.lob}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--mint)",
                    borderRadius: 3,
                    height: 8,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: bar.color,
                      height: "100%",
                      width: bar.width,
                      borderRadius: 3,
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    fontSize: 9,
                    fontWeight: 800,
                    color: bar.color,
                    width: 28,
                    textAlign: "right",
                  }}
                >
                  {bar.pct}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "white", padding: "10px 12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 9,
              fontWeight: 800,
              color: "var(--forest)",
            }}
          >
            At-Risk Member Details
          </div>
          <div
            style={{
              fontSize: "8.5px",
              color: "var(--teal)",
              fontWeight: 700,
            }}
          >
            View All 2,841 →
          </div>
        </div>
        <div
          style={{
            borderRadius: 7,
            border: "1px solid var(--border-m)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr .8fr .7fr 1fr .8fr .6fr",
              background: "var(--sage)",
              padding: "5px 10px",
              fontFamily: "var(--font-nunito), Nunito, sans-serif",
              fontSize: 8,
              fontWeight: 800,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: ".5px",
            }}
          >
            <div>Member</div>
            <div>Product</div>
            <div>Risk</div>
            <div>Signal</div>
            <div>ANOC Impact</div>
            <div>Details</div>
          </div>
          <ReportRow
            name="Johnson, M."
            dob="DOB 03/14/52"
            product="MA-HMO"
            risk="92"
            riskStyle={{ bg: "var(--red-lt)", color: "var(--red)" }}
            signal="Denial frustration · ↑"
            impact="Premium +$34"
            impactStyle={{ bg: "var(--red-lt)", color: "var(--red)" }}
            rowBg="#FEF8F8"
          />
          <ReportRow
            name="Chen, W."
            dob="DOB 08/22/48"
            product="D-SNP"
            risk="87"
            riskStyle={{ bg: "var(--red-lt)", color: "var(--red)" }}
            signal="No engagement · term"
            impact="Network change"
            impactStyle={{ bg: "var(--amber-lt)", color: "var(--amber)" }}
          />
          <ReportRow
            name="Davis, R."
            dob="DOB 11/03/50"
            product="MA-PPO"
            risk="74"
            riskStyle={{ bg: "var(--amber-lt)", color: "var(--amber)" }}
            signal="Unanswered msgs"
            impact="Benefit cut"
            impactStyle={{ bg: "var(--teal-lt)", color: "var(--teal)" }}
            rowBg="var(--mint)"
          />
        </div>
      </div>
    </div>
  );
}

function ReportRow({
  name,
  dob,
  product,
  risk,
  riskStyle,
  signal,
  impact,
  impactStyle,
  rowBg,
}: {
  name: string;
  dob: string;
  product: string;
  risk: string;
  riskStyle: { bg: string; color: string };
  signal: string;
  impact: string;
  impactStyle: { bg: string; color: string };
  rowBg?: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.3fr .8fr .7fr 1fr .8fr .6fr",
        padding: "5px 10px",
        borderTop: "1px solid var(--border-m)",
        fontSize: "8.5px",
        alignItems: "center",
        background: rowBg,
      }}
    >
      <div>
        <div style={{ fontWeight: 700, color: "var(--forest)" }}>{name}</div>
        <div style={{ fontSize: "7.5px", color: "var(--muted)" }}>{dob}</div>
      </div>
      <div style={{ color: "var(--slate)" }}>{product}</div>
      <div>
        <span
          style={{
            background: riskStyle.bg,
            color: riskStyle.color,
            fontSize: 8,
            fontWeight: 800,
            padding: "1px 6px",
            borderRadius: 4,
          }}
        >
          {risk}
        </span>
      </div>
      <div style={{ color: "var(--slate)" }}>{signal}</div>
      <div>
        <span
          style={{
            background: impactStyle.bg,
            color: impactStyle.color,
            fontSize: 8,
            fontWeight: 700,
            padding: "1px 6px",
            borderRadius: 4,
          }}
        >
          {impact}
        </span>
      </div>
      <div>
        <span
          style={{
            background: "var(--teal)",
            color: "white",
            fontSize: "7.5px",
            fontWeight: 800,
            padding: "2px 7px",
            borderRadius: 4,
          }}
        >
          See More
        </span>
      </div>
    </div>
  );
}

export default function RetentionPlatformPage() {
  return (
    <>
      <div className="section-forest section-pad-xs text-center">
        <span
          className="eyebrow light"
          style={{
            display: "block",
            textAlign: "center",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Retention Team Platform
        </span>
        <h2 className="white" style={{ marginBottom: 12 }}>
          One Platform. Every Member.
          <br />
          <span className="ac">Total Retention Visibility.</span>
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(255,255,255,.88)",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          BookCover&apos;s retention solution gives your team real-time visibility
          into every member&apos;s risk, engagement, and NBA (Next Best Action) —
          with the tools to act immediately, rescore automatically, and measure
          everything.
        </p>
      </div>

      <section className="section-pad-sm section-mint">
        <div className="container-wide">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Dashboard</span>
              <h3 style={{ marginBottom: 14 }}>
                Your Team&apos;s Daily Priorities,
                <br />
                Front and Center
              </h3>
              <p style={copy}>
                When your retention team logs in each morning, the most urgent
                members surface automatically — segmented by the action required.
                A coordinator can call a high-risk member, send a notification, or
                deploy a survey without leaving the platform.
              </p>
              <p style={copy}>
                Once an action is completed and logged, BookCover automatically
                rescores that member based on the interaction — and can trigger a
                follow-up satisfaction survey to capture real member feedback and
                close the loop.
              </p>
              <div className="callout-box">
                <div
                  style={{
                    fontFamily: "var(--font-nunito), Nunito, sans-serif",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "var(--forest)",
                    marginBottom: 4,
                  }}
                >
                  Your Team Is Always in Control
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "var(--slate)",
                  }}
                >
                  BookCover{" "}
                  <strong>
                    never automatically sends notifications to members.
                  </strong>{" "}
                  Our system prioritizes and categorizes recommendations — but
                  every communication is reviewed and triggered by your team. You
                  decide what goes out, when, and to whom. AI scales your capacity;
                  it never replaces your judgment.
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 4,
                }}
              >
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    Registered member roster
                  </strong>{" "}
                  — who has enrolled and their current engagement status
                </FeatureRow>
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    NBA queue segmented by action type
                  </strong>{" "}
                  — Call Member, Send Notification, Send Survey — highest priority
                  first
                </FeatureRow>
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    Auto-rescore after action
                  </strong>{" "}
                  — member risk recalculates when a call is logged or notification
                  is sent
                </FeatureRow>
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    Post-action surveys
                  </strong>{" "}
                  — automatically deployed to capture real member feedback and
                  CAHPS-aligned metrics
                </FeatureRow>
              </div>
            </div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="section-pad-tight section-white">
        <div className="container-wide">
          <div className="grid-2">
            <MemberDetailMockup />
            <div>
              <span className="eyebrow">Member Details</span>
              <h3 style={{ marginBottom: 14 }}>
                Complete Member Intelligence
                <br />
                in a Single View
              </h3>
              <p style={copy}>
                Every member gets a dedicated profile giving your retention team
                the full picture — risk trajectory, plan utilization, engagement
                history, and every conversation the member has had with the
                BookCover member website. Critically, the system also surfaces{" "}
                <strong>actionable recommendations</strong> for lowering each
                member&apos;s risk score: calling the member, reviewing negative
                interactions, or sending a targeted message. Your team reviews the
                recommendation and acts — the system never sends on its own.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <FeatureRow sage>
                  <strong style={{ color: "var(--forest)" }}>
                    Plan metrics at a glance
                  </strong>{" "}
                  — deductible progress, Rx deductible, and OOPM vs. MOOP updated
                  from claims data
                </FeatureRow>
                <FeatureRow sage>
                  <strong style={{ color: "var(--forest)" }}>
                    Full chat history
                  </strong>{" "}
                  — every conversation the member has had with the BookCover AI
                  website, so your team is never starting cold
                </FeatureRow>
                <FeatureRow sage>
                  <strong style={{ color: "var(--forest)" }}>
                    Risk rescore log
                  </strong>{" "}
                  — see exactly when and why the member&apos;s risk score changed
                  after each completed action
                </FeatureRow>
                <FeatureRow sage>
                  <strong style={{ color: "var(--forest)" }}>
                    One-click outreach
                  </strong>{" "}
                  — call, notify, or deploy a survey directly from the member
                  profile without switching screens
                </FeatureRow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-tight-b section-sage">
        <div className="container-wide">
          <span className="eyebrow">Reports &amp; Analytics</span>
          <div className="grid-2">
            <div>
              <h3 style={{ marginBottom: 14 }}>
                Aggregate Insights That
                <br />
                Drive Retention Strategy
              </h3>
              <p style={copy}>
                BookCover&apos;s reporting suite gives your leadership team a full
                picture of retention performance — from population-level risk
                trends to pre-renewal vulnerability — with the data needed to make
                proactive investments before attrition happens.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    Aggregate risk score distribution
                  </strong>{" "}
                  — entire membership segmented by retention risk tier across all
                  product lines
                </FeatureRow>
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    Risk score trendlines
                  </strong>{" "}
                  — see whether retention campaigns are improving or worsening
                  population risk over time
                </FeatureRow>
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    Pre-ANOC vulnerability
                  </strong>{" "}
                  — members most at-risk during renewal season, segmented by LOB,
                  plan change impact, and engagement
                </FeatureRow>
                <FeatureRow>
                  <strong style={{ color: "var(--forest)" }}>
                    CAHPS readiness reports
                  </strong>{" "}
                  — member satisfaction signals mapped to CAHPS domains so you can
                  address issues before measurement windows
                </FeatureRow>
              </div>
            </div>
            <ReportsMockup />
          </div>
        </div>
      </section>

      <SeeMoreStrip
        href="/consultant"
        nextLabel="Your Dedicated Consultant →"
      />
    </>
  );
}
