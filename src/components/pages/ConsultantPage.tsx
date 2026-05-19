import Image from "next/image";
import type { ReactNode } from "react";

const TEAM_PHOTO =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&fit=crop";

const CAPABILITIES = [
  {
    title: "Retention Strategy Development",
    body: "We design your end-to-end retention strategy — defining target segments, intervention triggers, campaign sequences, and success metrics aligned with your business goals.",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth={2} strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: "Campaign Design & Management",
    body: "From message copy to audience segmentation, timing, A/B testing, and compliance review — we build every campaign from scratch for your plan. No templates dropped in from another client. You approve the strategy; we execute everything else.",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth={2} strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Member Insights & Quality Reporting",
    body: "We translate member engagement data into actionable insights for CAHPS improvement, star rating strategy, and quality measure performance — turning retention data into regulatory value.",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth={2} strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
] as const;

type CampaignItem = {
  title: string;
  desc: string;
  iconBg: string;
  stroke: string;
  icon: ReactNode;
};

const CAMPAIGNS: CampaignItem[] = [
  { title: "Welcome Notification", desc: "Personalized onboarding for new members — plan overview, key benefits, next steps", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /> },
  { title: 'Member Survey — "How Can We Help You?"', desc: "Proactive satisfaction survey triggered by plan interactions and risk score changes", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  { title: "Deductible / OOPM Milestone Notifications", desc: "Alert members as they approach and meet their deductible and out-of-pocket maximum", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
  { title: "Lower-Cost Rx Finder", desc: "Identifies members paying too much for prescriptions and suggests generic alternatives or preferred pharmacies", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /> },
  { title: "Unused Benefits Reminder", desc: "Triggered by utilization data — reminds members about dental, vision, OTC, gym, and other unused benefits before year-end", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
  { title: "Carrier News & Plan Updates", desc: "Keep members informed about plan improvements, network additions, and carrier news that demonstrates plan value", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: (<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>) },
  { title: "Pre-ANOC / Pre-Renewal Notification", desc: "Proactive outreach 30–60 days before AEP — builds trust and drives plan review appointments before brokers make contact", iconBg: "#fef3e0", stroke: "var(--gold)", icon: (<><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>) },
  { title: "Friends & Family Referral", desc: "Engage satisfied members to refer family members approaching Medicare eligibility — turning loyalty into growth", iconBg: "#e1f5ee", stroke: "var(--teal)", icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></>) },
  { title: "Pre-CAHPS Survey Notification", desc: "Identify and address member issues before official CAHPS measurement windows — improving scores before they're counted", iconBg: "#f0eeff", stroke: "#6741a8", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
];

const FB_SERVICES = [
  { title: "Benefit Awareness Campaigns", body: "Targeted ads reminding members about their unused dental, vision, and OTC benefits — driving utilization and demonstrating plan value on their Facebook feed.", icon: (<><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>) },
  { title: "AEP Pre-Season Campaigns", body: "30–60 days before AEP opens, we run targeted campaigns encouraging members to review their plan with you first — before a broker reaches out.", icon: (<><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>) },
  { title: "Member Satisfaction Surveys", body: "Facebook Lead Ads deliver CAHPS-aligned satisfaction surveys directly in the member's feed — increasing response rates and capturing feedback at scale.", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  { title: "Website Registration Drive", body: "Targeted ads driving unregistered members to enroll in the BookCover member website — expanding the engaged population and improving your retention foundation.", icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>) },
] as const;

const METRICS_ITEMS = [
  { strong: "Weekly performance reports", rest: " — campaign open rates, member engagement trends, NBA queue completion, and risk score movement delivered to your inbox", icon: (<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>) },
  { strong: "Executive retention dashboards", rest: " — monthly and quarterly summaries connecting retention metrics to CAHPS scores, star ratings, and membership trends", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
  { strong: "Actionable insight memos", rest: " — when the data reveals an opportunity or risk, your BookCover partner surfaces it with a specific recommendation — not just a chart", icon: (<><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>) },
  { strong: "Pre-AEP vulnerability briefings", rest: " — ahead of every Annual Enrollment Period, you receive a full analysis of your at-risk population with a prioritized outreach plan", icon: (<><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>) },
] as const;

const TRAINING_ITEMS = [
  { strong: "Retention coordinator training", rest: " — onboarding, platform certification, and ongoing coaching for your team's day-to-day users of the BookCover platform", icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>) },
  { strong: "Cross-functional program rollouts", rest: " — working with your clinical, quality, marketing, and IT teams to implement new retention programs that require coordination across departments", icon: (<><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>) },
  { strong: "New feature implementation", rest: " — as BookCover releases new capabilities or CMS compliance requirements change, we lead the rollout so your team doesn't have to manage it alone", icon: (<><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>) },
  { strong: "Executive briefings and planning sessions", rest: " — regular leadership check-ins to align retention performance with organizational goals and plan for the next quarter", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
] as const;


function CampaignRow({ item }: { item: CampaignItem }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        background: "var(--mint)",
        borderRadius: 9,
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          background: item.iconBg,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke={item.stroke} strokeWidth={2.2} strokeLinecap="round">
          {item.icon}
        </svg>
      </div>
      <div>
        <div className="fail-title" style={{ fontSize: 13 }}>{item.title}</div>
        <div style={{ fontSize: 11.5, color: "var(--slate)" }}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function ConsultantPage() {
  return (
    <>
      <div className="mt-hero pine text-center">
        <span className="eyebrow light">Your Dedicated Partner</span>
        <h2 className="white">
          We Provide Leadership
          <br />
          <span className="ac">and Technology.</span>
        </h2>
        <p>
          BookCover creates and manages your retention campaigns — end to end. No two health plans are
          alike, so we build custom retention and communication strategies tailored to your specific
          membership, product lines, and goals. Being embedded in your team means there are no
          delays: when you have an idea, we operationalize it. When the data surfaces an opportunity,
          we act on it.
        </p>
      </div>
            <section className="section-pad-md section-white">
        <div className="container-wide grid-2-wide">
          <div>
            <span className="eyebrow">What We Bring to Your Team</span>
            <h3>
              Your Campaigns. Built,
              <br />
              Managed, and Optimized by Us.
            </h3>
            <p className="body-copy" style={{ marginBottom: 20 }}>
              BookCover creates, deploys, and manages your retention campaigns — every message, every
              workflow, every optimization. No two health plans are alike, and we do not use
              one-size-fits-all playbooks. Every campaign is built around your members, your benefit
              structure, and your retention goals. Having us embedded on your team means your ideas become
              live campaigns in days, not quarters.
            </p>
            <div className="gap-fail">
              {CAPABILITIES.map((cap) => (
                <div key={cap.title} className="fail-card">
                  <div className="fail-icon" style={{ background: "rgba(42,157,114,.12)" }}>
                    {cap.icon}
                  </div>
                  <div>
                    <div className="fail-title">{cap.title}</div>
                    <div className="fail-txt">{cap.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Campaign Library</span>
            <h3>
              Proven Campaigns,
              <br />
              Tailored to Your Members.
            </h3>
            <p className="body-copy" style={{ marginBottom: 20 }}>
              We bring a library of proven campaign types as a starting point — then customize every
              detail for your plan&apos;s brand, benefit structure, and member population. Nothing is
              off-the-shelf. Your BookCover team manages deployment, timing, optimization, and ongoing
              refinement end to end.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CAMPAIGNS.map((item) => (
                <CampaignRow key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-md section-forest">
        <div className="container-wide">
          <span className="eyebrow light">Digital Member Engagement</span>
          <h2 className="white" style={{ marginBottom: 14 }}>
            Meet Members Where They Are —
            <br />
            <span className="ac">On Facebook.</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.92)", maxWidth: 680, marginBottom: 48 }}>
            Over <strong style={{ color: "var(--gold-l)" }}>72% of adults 65 and older</strong> are active
            Facebook users — making it one of the most effective channels for reaching your Medicare
            Advantage membership. BookCover manages targeted Facebook advertising campaigns that extend
            your member engagement beyond the website, meeting members on the platform they already use
            daily.
          </p>
          <div className="grid-2-gap48">
            <div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 16, fontWeight: 800, color: "white", marginBottom: 20 }}>
                What We Run For You
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {FB_SERVICES.map((svc) => (
                  <div
                    key={svc.title}
                    style={{
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: 12,
                      padding: 18,
                      display: "flex",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "rgba(245,193,88,.15)",
                        borderRadius: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--gold-l)" strokeWidth={2} strokeLinecap="round">
                        {svc.icon}
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 800, color: "white", marginBottom: 4 }}>
                        {svc.title}
                      </div>
                      <div style={{ fontSize: 12.5, lineHeight: 1.6, color: "rgba(255,255,255,.88)" }}>{svc.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 16, fontWeight: 800, color: "white", marginBottom: 20 }}>
                Sample Facebook Ad Campaigns
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <div style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                  <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #f0f0f0" }}>
                    <div style={{ width: 32, height: 32, background: "var(--teal)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a2e" }}>YourHealthPlan</div>
                      <div style={{ fontSize: 10, color: "#888" }}>Sponsored · 👥 People like you</div>
                    </div>
                    <div style={{ marginLeft: "auto", color: "#888", fontSize: 14 }}>•••</div>
                  </div>
                  <div style={{ padding: "10px 12px 8px" }}>
                    <div style={{ fontSize: 13, color: "#1a1a2e", lineHeight: 1.5, marginBottom: 8 }}>
                      🎁 <strong>You have unused benefits this year, Margaret!</strong> Your plan includes a free dental cleaning, SilverSneakers gym membership, and $150 in OTC allowance. Don&apos;t let them expire December 31st.
                    </div>
                  </div>
                  <div style={{ background: "#1d9e75", height: 120, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 18, fontWeight: 900, color: "white" }}>$600+ in Benefits</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,.8)" }}>Available in your 2026 plan</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,.6)" }}>Tap to see what you&apos;re missing →</div>
                  </div>
                  <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0f0f0" }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e" }}>Check Your Unused Benefits</div>
                      <div style={{ fontSize: 10, color: "#888" }}>plan.yourhealth.com/benefits</div>
                    </div>
                    <div style={{ background: "var(--teal)", color: "white", fontSize: 11, fontWeight: 700, padding: "7px 14px", borderRadius: 7 }}>View Benefits</div>
                  </div>
                  <div style={{ padding: "6px 12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: 16 }}>
                    <div style={{ fontSize: 11, color: "#888" }}>👍 Like</div>
                    <div style={{ fontSize: 11, color: "#888" }}>💬 Comment</div>
                    <div style={{ fontSize: 11, color: "#888" }}>↗ Share</div>
                  </div>
                </div>

                                <div style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                  <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #f0f0f0" }}>
                    <div style={{ width: 32, height: 32, background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a2e" }}>YourHealthPlan</div>
                      <div style={{ fontSize: 10, color: "#888" }}>Sponsored · 📅 AEP Season</div>
                    </div>
                    <div style={{ marginLeft: "auto", color: "#888", fontSize: 14 }}>•••</div>
                  </div>
                  <div style={{ padding: "10px 12px 8px" }}>
                    <div style={{ fontSize: 13, color: "#1a1a2e", lineHeight: 1.5, marginBottom: 8 }}>
                      📅 <strong>AEP starts October 15th.</strong> Before you make any changes, let us review your 2026 utilization and make sure you&apos;re on the right plan for 2027. We&apos;ve already analyzed your claims — it only takes 15 minutes.
                    </div>
                  </div>
                  <div style={{ background: "linear-gradient(135deg,#1C4332,#276749)", height: 100, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 4 }}>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, fontWeight: 900, color: "white" }}>Free 2027 Plan Review</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.92)" }}>Based on your actual 2026 claims · 15 minutes</div>
                  </div>
                  <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f0f0f0" }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e" }}>Schedule Your Plan Review</div>
                      <div style={{ fontSize: 10, color: "#888" }}>plan.yourhealth.com/aep-review</div>
                    </div>
                    <div style={{ background: "var(--gold)", color: "white", fontSize: 11, fontWeight: 700, padding: "7px 14px", borderRadius: 7 }}>Book Now</div>
                  </div>
                  <div style={{ padding: "6px 12px", borderTop: "1px solid #f0f0f0", display: "flex", gap: 16 }}>
                    <div style={{ fontSize: 11, color: "#888" }}>👍 Like</div>
                    <div style={{ fontSize: 11, color: "#888" }}>💬 Comment</div>
                    <div style={{ fontSize: 11, color: "#888" }}>↗ Share</div>
                  </div>
                </div>

              </div>
              <div
                style={{
                  marginTop: 16,
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 800, color: "var(--gold-l)", marginBottom: 8 }}>
                  How We Target Your Members
                </div>
                <div style={{ fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,.9)" }}>
                  We build Custom Audiences using your member enrollment file — uploading securely to
                  Facebook&apos;s Lookalike Matching. This means our ads reach{" "}
                  <strong style={{ color: "white" }}>your actual members</strong>, not just demographics.
                  Ads are then personalized by segment — unused benefits, AEP risk score, engagement level
                  — for maximum relevance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad-md section-sage">
        <div className="container-wide grid-2">
          <div>
            <span className="eyebrow">Metrics &amp; Reporting</span>
            <h3 style={{ marginBottom: 14 }}>
              Continuous Monitoring.
              <br />
              Insights Delivered to Your Team.
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--slate)", marginBottom: 18 }}>
              Your BookCover partner doesn&apos;t just launch campaigns and move on. They continuously monitor
              engagement metrics, risk score trends, and campaign performance — synthesizing that data into
              clear, executive-ready reporting that tells you exactly what is working and where to focus next.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--slate)", marginBottom: 24 }}>
              We translate platform data into business language — connecting retention activity to member
              satisfaction scores, quality metrics, and bottom-line impact — so your leadership team always
              has the full picture.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {METRICS_ITEMS.map((row) => (
                <div
                  key={row.strong}
                  className="feature-row"
                  style={{ borderLeft: "4px solid var(--teal)", alignItems: "flex-start" }}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth={2} strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    {row.icon}
                  </svg>
                  <div style={{ fontSize: 13, color: "var(--slate)" }}>
                    <strong style={{ color: "var(--forest)" }}>{row.strong}</strong>
                    {row.rest}
                  </div>
                </div>
              ))}
            </div>
          </div>
                    <div className="mockup-frame">
            <div className="mockup-header">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 22, height: 22, background: "var(--teal)", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 11, fontWeight: 900, color: "white" }}>BookCover</span>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,.4)" }}>/ Executive Retention Report — Q3 2026</span>
              </div>
              <div style={{ background: "var(--teal)", borderRadius: 5, padding: "3px 9px", fontSize: 9, color: "white", fontWeight: 700 }}>↓ Download PDF</div>
            </div>
            <div className="mockup-subnav">
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, fontWeight: 800, color: "var(--teal)", background: "var(--mint)", borderRadius: 5, padding: "3px 9px" }}>Q3 Summary</div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, color: "var(--muted)", padding: "3px 9px" }}>Risk Trends</div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, color: "var(--muted)", padding: "3px 9px" }}>Campaigns</div>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, color: "var(--muted)", padding: "3px 9px" }}>CAHPS</div>
              <div style={{ marginLeft: "auto", fontSize: 9, color: "var(--muted)" }}>YourHealthPlan · MA · 47,832 members</div>
            </div>
            <div className="grid-4" style={{ background: "white", borderBottom: "1px solid var(--border-m)", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
              {[
                { val: "94.2%", lbl: "Retention Rate ", sub: "↑ 2.1%", color: "var(--teal)", border: "var(--teal)" },
                { val: "38.4%", lbl: "Avg Campaign Open Rate", sub: "", color: "var(--pine)", border: "var(--pine)" },
                { val: "1,847", lbl: "High-Risk Members Actioned", sub: "", color: "var(--amber)", border: "var(--amber)" },
                { val: "4.2★", lbl: "CAHPS Score ", sub: "↑ 0.3", color: "var(--blue)", border: "var(--blue)" },
              ].map((kpi) => (
                <div key={kpi.lbl} style={{ padding: "9px 11px", borderRight: "1px solid var(--border-m)", borderTop: `3px solid ${kpi.border}` }}>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 17, fontWeight: 900, color: kpi.color }}>{kpi.val}</div>
                  <div style={{ fontSize: 8, color: "var(--muted)" }}>
                    {kpi.lbl}
                    {kpi.sub ? <span style={{ color: "var(--teal)" }}>{kpi.sub}</span> : null}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--sage)", padding: "12px 14px" }}>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 10, fontWeight: 800, color: "var(--forest)", marginBottom: 10 }}>
                Retention Rate Trend — Jan to Sep 2026
              </div>
              <svg viewBox="0 0 460 90" style={{ width: "100%", height: 90 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="consultantRetGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0070B9" stopOpacity=".2" />
                    <stop offset="100%" stopColor="#0070B9" stopOpacity=".02" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="20" x2="460" y2="20" stroke="#C2DCF0" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="45" x2="460" y2="45" stroke="#C2DCF0" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="70" x2="460" y2="70" stroke="#C2DCF0" strokeWidth="0.5" strokeDasharray="4" />
                <line x1="0" y1="82" x2="460" y2="82" stroke="#C2DCF0" strokeWidth="0.5" />
                <text x="2" y="18" fontSize="7" fill="#6A8DAA">96%</text>
                <text x="2" y="43" fontSize="7" fill="#6A8DAA">94%</text>
                <text x="2" y="68" fontSize="7" fill="#6A8DAA">92%</text>
                <text x="28" y="90" fontSize="7" fill="#6A8DAA">Jan</text>
                <text x="76" y="90" fontSize="7" fill="#6A8DAA">Feb</text>
                <text x="124" y="90" fontSize="7" fill="#6A8DAA">Mar</text>
                <text x="172" y="90" fontSize="7" fill="#6A8DAA">Apr</text>
                <text x="220" y="90" fontSize="7" fill="#6A8DAA">May</text>
                <text x="268" y="90" fontSize="7" fill="#6A8DAA">Jun</text>
                <text x="316" y="90" fontSize="7" fill="#6A8DAA">Jul</text>
                <text x="364" y="90" fontSize="7" fill="#6A8DAA">Aug</text>
                <text x="412" y="90" fontSize="7" fill="#6A8DAA">Sep</text>
                <path d="M40,68 C80,66 120,62 160,58 C200,54 240,50 280,46 C320,42 360,36 400,30 C430,26 450,23 460,22" fill="none" stroke="#0070B9" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M40,68 C80,66 120,62 160,58 C200,54 240,50 280,46 C320,42 360,36 400,30 C430,26 450,23 460,22 L460,82 L40,82Z" fill="url(#consultantRetGrad)" />
                <circle cx="40" cy="68" r="3" fill="white" stroke="#0070B9" strokeWidth="1.5" />
                <circle cx="130" cy="60" r="3" fill="white" stroke="#0070B9" strokeWidth="1.5" />
                <circle cx="220" cy="52" r="3" fill="white" stroke="#0070B9" strokeWidth="1.5" />
                <circle cx="310" cy="44" r="3" fill="white" stroke="#0070B9" strokeWidth="1.5" />
                <circle cx="400" cy="30" r="3" fill="white" stroke="#0070B9" strokeWidth="1.5" />
                <line x1="160" y1="15" x2="160" y2="82" stroke="#0070B9" strokeWidth="1" strokeDasharray="3" />
                <rect x="114" y="6" width="92" height="14" rx="3" fill="#0070B9" />
                <text x="160" y="16" textAnchor="middle" fontSize="7" fill="white" fontFamily="Nunito,sans-serif" fontWeight="700">
                  BookCover Launched
                </text>
              </svg>
            </div>
            <div style={{ background: "white", padding: "11px 14px", borderTop: "1px solid var(--border-m)" }}>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, fontWeight: 800, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".6px", marginBottom: 7 }}>
                Q3 Consultant Insight Memo
              </div>
              <div style={{ background: "var(--mint)", borderLeft: "3px solid var(--teal)", borderRadius: 6, padding: "8px 10px", marginBottom: 6 }}>
                <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, fontWeight: 800, color: "var(--forest)", marginBottom: 2 }}>
                  ✓ Retention rate improved 2.1% vs Q2
                </div>
                <div style={{ fontSize: 8.5, color: "var(--slate)" }}>
                  Pre-AEP outreach campaign drove 847 member plan review appointments. Recommend expanding to Medicaid line in Q4.
                </div>
              </div>
              <div style={{ background: "#FEF3E2", borderLeft: "3px solid var(--amber)", borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, fontWeight: 800, color: "var(--amber)", marginBottom: 2 }}>
                  ⚠ Action Recommended: D-SNP Segment
                </div>
                <div style={{ fontSize: 8.5, color: "var(--slate)" }}>
                  D-SNP risk scores trending upward (+12%). Targeted phone outreach campaign recommended before ANOC letters arrive.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="section-pad-md section-white">
        <div className="container-wide grid-2">
          <div className="mockup-frame">
            <Image
              src={TEAM_PHOTO}
              alt="Corporate team in a professional office meeting room"
              width={900}
              height={280}
              style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
            />
            <div style={{ background: "var(--forest)", padding: "14px 18px" }}>
              <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 800, color: "white", marginBottom: 4 }}>
                Embedded in Your Team From Day One
              </div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.8)", lineHeight: 1.6 }}>
                Your BookCover partner attends your team&apos;s planning sessions, works cross-functionally with
                your clinical, marketing, and technology teams, and ensures new programs move from idea to
                implementation — without the usual delays of an outside vendor.
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Training &amp; Implementation</span>
            <h3 style={{ marginBottom: 14 }}>
              We Train Your Team and
              <br />
              Implement New Programs Together.
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--slate)", marginBottom: 18 }}>
              Your BookCover partner doesn&apos;t just run campaigns — they help your organization build lasting
              retention capability. From onboarding your retention coordinators to working cross-functionally
              with your clinical, marketing, and technology teams, we ensure your entire organization gets the
              most from the platform.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--slate)", marginBottom: 24 }}>
              When new features, programs, or compliance requirements arise, we lead the implementation —
              coordinating across your internal stakeholders so changes roll out smoothly, on time, and without
              disrupting your team&apos;s day-to-day operations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TRAINING_ITEMS.map((row) => (
                <div
                  key={row.strong}
                  className="feature-row sage"
                  style={{ borderLeft: "4px solid var(--teal)", alignItems: "flex-start" }}
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth={2} strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    {row.icon}
                  </svg>
                  <div style={{ fontSize: 13, color: "var(--slate)" }}>
                    <strong style={{ color: "var(--forest)" }}>{row.strong}</strong>
                    {row.rest}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
