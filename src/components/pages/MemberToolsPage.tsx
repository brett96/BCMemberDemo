import { CheckIcon, ShieldIcon } from "@/components/icons";
import { SeeMoreStrip } from "@/components/layout/SeeMoreStrip";

type TabName = "Chat" | "Rx" | "Benefits" | "Plan";

function PhoneMock({
  plan,
  activeTab = "Chat",
  children,
}: {
  plan: string;
  activeTab?: TabName;
  children: React.ReactNode;
}) {
  const tabs: TabName[] = ["Chat", "Rx", "Benefits", "Plan"];
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="p-notch">
          <span className="p-bar" />
          <span className="p-dot" />
        </div>
        <div className="p-screen">
          <div className="p-header">
            <div className="p-top">
              <div className="p-brand">YourHealthPlan</div>
              <span className="p-powered">Powered by BookCover</span>
            </div>
            <div className="p-plan">{plan}</div>
          </div>
          <div className="p-tabs">
            {tabs.map((tab) => (
              <div key={tab} className={`p-tab${tab === activeTab ? " on" : ""}`}>
                {tab}
              </div>
            ))}
          </div>
          <div className="p-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

function UcBenefit({ children }: { children: React.ReactNode }) {
  return (
    <div className="uc-benefit">
      <CheckIcon />
      <div className="uc-benefit-text">{children}</div>
    </div>
  );
}

function UcBenefitRisk({ children }: { children: React.ReactNode }) {
  return (
    <div className="uc-benefit" style={{ background: "#fff3f3", border: "1px solid #f9c0c0" }}>
      <CheckIcon />
      <div className="uc-benefit-text">{children}</div>
    </div>
  );
}

function HumiraHeroPhone() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="p-notch">
          <span className="p-bar" />
          <span className="p-dot" />
        </div>
        <div className="p-screen">
          <div className="p-header">
            <div className="p-top">
              <div className="p-brand">YourHealthPlan</div>
              <span className="p-powered">Powered by BookCover</span>
            </div>
            <div className="p-plan">Gold Plus PPO · Active ✓</div>
          </div>
          <div className="p-tabs">
            <div className="p-tab on">Chat</div>
            <div className="p-tab">Rx</div>
            <div className="p-tab">Benefits</div>
            <div className="p-tab">Plan</div>
          </div>
          <div className="p-body" style={{ minHeight: 360 }}>
            <div className="b-user">Is my Humira covered under my plan?</div>
            <div style={{ display: "flex", gap: 5, alignItems: "flex-end" }}>
              <span style={{ width: 22, height: 22, background: "var(--teal)", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldIcon />
              </span>
              <div className="b-text" style={{ borderRadius: "4px 14px 14px 14px", maxWidth: "82%" }}>
                <div className="b-sender" style={{ fontSize: "8.5px", marginBottom: 4 }}>YourHealthPlan AI</div>
                Yes — <strong>Humira (adalimumab)</strong> is covered under your Gold Plus PPO as a Tier 4 specialty drug. Your current copay is <strong>$85/fill</strong> after deductible.
              </div>
            </div>
            <div style={{ display: "flex", gap: 5, alignItems: "flex-end" }}>
              <span style={{ width: 22, height: 22, background: "var(--teal)", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldIcon />
              </span>
              <div className="b-proactive" style={{ borderRadius: "4px 14px 14px 14px", maxWidth: "82%" }}>
                <div style={{ fontSize: "8.5px", fontWeight: 700, color: "#085041", marginBottom: 5 }}>💊 Lowest Cost Pharmacies Near You</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", color: "#1a2332", background: "white", padding: "4px 7px", borderRadius: 6 }}>
                    <span style={{ fontWeight: 700 }}>CVS Specialty</span><span style={{ color: "#085041", fontWeight: 800 }}>$72</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", color: "#1a2332", background: "white", padding: "4px 7px", borderRadius: 6 }}>
                    <span style={{ fontWeight: 700 }}>Walgreens Specialty</span><span>$85</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", color: "#1a2332", background: "white", padding: "4px 7px", borderRadius: 6 }}>
                    <span style={{ fontWeight: 700 }}>Express Scripts Mail</span><span>$68</span>
                  </div>
                </div>
                <div style={{ marginTop: 5, fontSize: 8, color: "#085041", fontStyle: "italic" }}>Express Scripts mail-order saves you $17/fill</div>
              </div>
            </div>
            <div className="b-btn">📋 Start Mail-Order Prescription</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemberToolsPage() {
  return (
    <>
      <div className="mt-hero left">
        <div className="hero-mt-grid">
          <div className="hero-mt-left">
            <span className="eyebrow light" style={{ color: "rgba(255,255,255,.65)" }}>Member-Facing Technology</span>
            <h2>Your Brand. Your Members.<br />Real Engagement — Powered by AI.</h2>
            <p className="hero-mt-desc">BookCover provides a white-labeled member engagement mobile website that works on each member&apos;s actual claims, formulary, and plan data — delivering personalized guidance that members genuinely value and trust. Every interaction is branded as coming from your health plan, never as a generic bot.</p>
            <div className="hero-pills">
              <span className="hero-pill">Drug coverage verification</span>
              <span className="hero-pill">Pharmacy price comparison</span>
              <span className="hero-pill">Benefit utilization</span>
              <span className="hero-pill">AEP plan guidance</span>
            </div>
          </div>
          <HumiraHeroPhone />
        </div>
      </div>

      <div className="mv-strip">
        <div className="mv-inner">
          <div className="mv-item"><div className="mv-num">100%</div><div className="mv-lbl">White-Labeled</div><div className="mv-desc">Fully branded as your health plan — your colors, your name, your members</div></div>
          <div className="mv-item"><div className="mv-num">Real</div><div className="mv-lbl">Claims-Driven Insights</div><div className="mv-desc">Every message powered by each member&apos;s actual plan and utilization data</div></div>
          <div className="mv-item"><div className="mv-num">24/7</div><div className="mv-lbl">Always-On AI Guidance</div><div className="mv-desc">Members get answers at the moment they need them — not call center hours</div></div>
          <div className="mv-item"><div className="mv-num">HIPAA</div><div className="mv-lbl">Compliant & Secure</div><div className="mv-desc">End-to-end encryption, BAA-ready, SOC 2 compliant data infrastructure</div></div>
        </div>
      </div>

      <section className="uc-section">
        <div className="uc-inner">
          <div className="uc-grid">
            <div className="uc-context">
              <div className="uc-tag tag-g">Use Case 1 — Benefits Engagement</div>
              <h3>Proactive Benefits Reminders<br />Before Members Even Ask</h3>
              <p>Most members have benefits they&apos;ve never used — dental cleanings, SilverSneakers gym memberships, OTC allowances, vision exams. Not because they don&apos;t want them, but because nobody told them. BookCover changes that.</p>
              <p>Using each member&apos;s actual benefit utilization data, the platform identifies unused benefits and sends personalized, timely reminders — turning your plan&apos;s richest features into visible, tangible value.</p>
              <div className="uc-benefits">
                <UcBenefit><strong>Reduces &quot;I didn&apos;t know&quot; complaints</strong> — proactive outreach means members can&apos;t say they weren&apos;t told</UcBenefit>
                <UcBenefit><strong>Drives benefit utilization</strong> — directly improving HEDIS measures and member satisfaction scores</UcBenefit>
                <UcBenefit><strong>Demonstrates plan value</strong> — members who use benefits are far more likely to renew</UcBenefit>
                <UcBenefit><strong>Supports CAHPS improvement</strong> — members report higher satisfaction when benefits are surfaced proactively</UcBenefit>
              </div>
              <div className="uc-timing"><div className="uc-timing-dot" />Triggered by utilization data: unused benefits after 90 days, quarterly reminders, end-of-year deadlines</div>
            </div>
            <PhoneMock plan="Your Health Plan HMO · Active ✓">
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-text">👋 Hi Margaret! I noticed you haven&apos;t used your dental benefit yet this year. Your plan includes 2 free cleanings annually — here&apos;s what&apos;s available to you:</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-gold">
                  🦷 <strong>Dental:</strong> 2 cleanings/year + $1,500 annual max<br /><br />
                  👁️ <strong>Vision:</strong> Annual exam + $200 frame allowance<br /><br />
                  🏋️ <strong>SilverSneakers:</strong> Free gym membership — 15,000+ locations<br /><br />
                  💊 <strong>OTC Allowance:</strong> $150/quarter for health supplies
                </div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-proactive">You have until December 31st to use these benefits — would you like me to find a network provider near you?</div>
              </div>
              <div className="b-user">Yes, find a dentist near me!</div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-btn">📍 Find In-Network Providers Near You</div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </section>
<section className="uc-section alt">
        <div className="uc-inner">
          <div className="uc-grid rev">
            <PhoneMock plan="Gold Plus PPO · Active ✓">
              <div className="b-user">My doctor ordered an MRI but it was denied. What do I do?</div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-text">I&apos;m so sorry to hear that — let me pull up the details right now. I can see the denial reason in your claims: <strong>&quot;Insufficient evidence of medical necessity.&quot;</strong> This is one of the most common denial types — and it can be appealed.</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-proactive">Here&apos;s your next step: Your doctor can resubmit the prior authorization with supporting clinical documentation. I&apos;ll send you the appeal form and member services contact now.</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-btn">📋 Download Appeal Form</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-alert">⚡ Your assigned care coordinator has been notified and will follow up within 24 hours.</div>
              </div>
            </PhoneMock>
            <div className="uc-context">
              <div className="uc-tag tag-b">Use Case 2 — Coverage Support & AI Chat</div>
              <h3>24/7 Plan Guidance Powered by<br />Each Member&apos;s Actual Data</h3>
              <p>When members have questions about their coverage — especially at stressful moments like a claim denial or an unexpected bill — they need fast, accurate, personalized answers. Not hold music. Not a generic FAQ.</p>
              <p>BookCover&apos;s AI assistant reads each member&apos;s actual claims, EOBs, and plan data to provide guidance that&apos;s specific to their situation — while automatically escalating frustrated members to your care team with full context.</p>
              <div className="uc-benefits">
                <UcBenefit><strong>Reduces inbound call volume</strong> — AI resolves routine inquiries instantly, 24/7</UcBenefit>
                <UcBenefit><strong>Turns frustration into trust</strong> — empathetic, accurate responses at the moments members need support most</UcBenefit>
                <UcBenefit><strong>Escalates at-risk members</strong> — NLP sentiment detection surfaces frustrated members to your team in real time</UcBenefit>
                <UcBenefit><strong>Full context handoff</strong> — care teams receive complete conversation history when a member is escalated</UcBenefit>
              </div>
              <UcBenefitRisk><strong style={{ color: "#a32d2d" }}>Member record flagged with escalated risk</strong> — when a coverage issue is detected, the member&apos;s risk score is immediately elevated in the retention dashboard, automatically creating a phone outreach task for a retention agent. The agent sees the full conversation context before they call.</UcBenefitRisk>
              <div className="uc-timing"><div className="uc-timing-dot" style={{ background: "#4a7dc8" }} />Always-on AI · Risk escalation triggers agent phone task within minutes</div>
            </div>
          </div>
        </div>
      </section>

      <section className="uc-section">
        <div className="uc-inner">
          <div className="uc-grid">
            <div className="uc-context">
              <div className="uc-tag tag-a">Use Case 3 — Satisfaction Monitoring & Escalation</div>
              <h3>Catch At-Risk Members<br />Before They Disenroll</h3>
              <p>Member dissatisfaction rarely announces itself — it builds quietly until the next AEP, when a broker calls. BookCover&apos;s NLP engine monitors every member interaction for signals of frustration, confusion, or unmet needs — and automatically escalates to your retention team before it becomes a disenrollment.</p>
              <div className="uc-benefits">
                <UcBenefit><strong>Real-time sentiment scoring</strong> — every message is analyzed for frustration signals and risk indicators</UcBenefit>
                <UcBenefit><strong>Proactive member surveys</strong> — targeted satisfaction surveys triggered by specific plan interactions</UcBenefit>
                <UcBenefit><strong>CAHPS pre-survey readiness</strong> — identifies and resolves member issues before official CAHPS measurement windows</UcBenefit>
                <UcBenefit><strong>Retention team alerts</strong> — high-risk members flagged with context so your team can intervene effectively</UcBenefit>
              </div>
              <UcBenefitRisk><strong style={{ color: "#a32d2d" }}>Retention agent notified for phone outreach</strong> — dissatisfied members are flagged in the retention dashboard with an elevated risk score and an assigned phone call task. This coordination between the member website and the agent&apos;s view is designed to close the loop before the member ever considers switching plans.</UcBenefitRisk>
              <div className="uc-timing"><div className="uc-timing-dot" style={{ background: "var(--gold)" }} />Continuous NLP monitoring · Agent phone task created within minutes of risk detection</div>
            </div>
            <PhoneMock plan="Aetna Medicare Advantage · Active ✓">
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-text">Hi Robert — we want to make sure your plan is working for you. How has your experience been lately? We&apos;re here if anything hasn&apos;t gone as expected.</div>
              </div>
              <div className="b-user">Honestly, I&apos;ve been very frustrated. My pharmacy keeps telling me my medication isn&apos;t covered and I&apos;ve had to pay full price twice.</div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-text">I completely understand your frustration — and I&apos;m really sorry this happened. Let me look into this right now. I can see from your claims that Metoprolol was rejected at CVS on Feb 3rd and Feb 24th.</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-proactive">This appears to be a pharmacy billing error. Your medication IS covered on Tier 2. I&apos;ve flagged this for our pharmacy team and a coordinator will call you today to resolve this and arrange a reimbursement.</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-alert" style={{ background: "#fce8e8", borderColor: "#f09595", color: "#6b1010" }}>⚡ Retention Alert Sent — High Frustration Detected. Coordinator assigned.</div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </section>

      <section className="uc-section alt">
        <div className="uc-inner">
          <div className="uc-grid rev">
            <PhoneMock plan="Your Health Plan · Plan Year ✓" activeTab="Plan">
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-text">📅 AEP starts October 15th — we&apos;ve reviewed your 2025 medical and Rx claims to recommend the best plan for you in 2026.</div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-gold">
                  <strong>⭐ Our Recommendation for 2026:</strong><br /><br />
                  <strong>Your Health Plan HMO</strong><br />
                  ✓ $0 premium · MOOP $3,400<br />
                  ✓ All your current doctors in-network<br />
                  ✓ All 3 Rx medications covered Tier 1<br />
                  ✓ Dental + Vision + SilverSneakers<br /><br />
                  Based on your usage, <strong>staying on your current plan saves you $284/year</strong> vs. comparable options.
                </div>
              </div>
              <div className="b-bot"><div className="b-sender">Your Health Plan</div>
                <div className="b-proactive">Would you like to review your options or schedule a call with your plan advisor?</div>
              </div>
              <div className="b-btn gold-btn">📅 Schedule a Plan Review Call</div>
            </PhoneMock>
            <div className="uc-context">
              <div className="uc-tag tag-p">Use Case 4 — AEP Plan Recommendations</div>
              <h3>Retain Members at AEP With<br />Data-Driven Plan Guidance</h3>
              <p>AEP is your highest-risk retention moment — when brokers call, competitors advertise, and members reconsider. BookCover turns this threat into your strongest retention opportunity by delivering personalized plan analysis before your competitors make their move.</p>
              <p>Using each member&apos;s actual claims, Rx utilization, and provider relationships, BookCover analyzes whether their current plan is the right fit for 2026 — and delivers a clear, trusted recommendation directly in the member website, branded as coming from your health plan.</p>
              <div className="uc-benefits">
                <UcBenefit><strong>Proactive outreach before AEP opens</strong> — get your recommendation in front of members before brokers do</UcBenefit>
                <UcBenefit><strong>Claims-based analysis</strong> — recommendations powered by actual utilization, not generic plan comparisons</UcBenefit>
                <UcBenefit><strong>Reduces broker influence</strong> — members who receive a trusted recommendation from their plan are less susceptible to broker pitches</UcBenefit>
                <UcBenefit><strong>Drives plan advisor appointments</strong> — one-tap scheduling increases conversion from interest to confirmed renewal</UcBenefit>
              </div>
              <div className="uc-timing"><div className="uc-timing-dot" style={{ background: "#6741a8" }} />Begins 30 days before AEP opens · Continues through December 7th enrollment deadline</div>
            </div>
          </div>
        </div>
      </section>

      <section className="reg-section">
        <div className="reg-inner">
          <div className="text-center" style={{ marginBottom: 0 }}>
            <span className="eyebrow light" style={{ display: "block", textAlign: "center" }}>Member Registration</span>
            <h2 className="white" style={{ textAlign: "center", marginBottom: 14 }}>Frictionless Engagement.<br /><span className="ac">No Download Required.</span></h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.92)", maxWidth: 600, margin: "0 auto 48px" }}>BookCover uses a Magic Link engagement flow — members receive a single email invitation and are active in under 60 seconds. No passwords. No downloads. No IT tickets.</p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,.92)", maxWidth: 600, margin: "0 auto 0" }}>We minimize the IT integration burden by leveraging the standardized FHIR Patient-Access APIs that CMS already requires health plans to expose for third-party interoperability. Your plan data is already accessible — we connect to it. There is no IT implementation project sponsor required to get started.</p>
          </div>
          <div className="reg-steps">
            <div className="reg-step">
              <div className="reg-step-num">1</div>
              <div className="reg-step-title">Carrier Sends Invitation</div>
              <div className="reg-step-txt">Your retention team or our platform automatically sends a personalized email invitation to eligible members — branded from your health plan.</div>
            </div>
            <div className="reg-step">
              <div className="reg-step-num">2</div>
              <div className="reg-step-title">Member Taps Magic Link</div>
              <div className="reg-step-txt">A single click on the secure link opens the registration page — pre-populated with their plan information. No password creation required.</div>
            </div>
            <div className="reg-step">
              <div className="reg-step-num">3</div>
              <div className="reg-step-title">Confirm & Verify Identity</div>
              <div className="reg-step-txt">Members confirm their name and date of birth for identity verification. The entire process takes under 60 seconds — even for less tech-savvy members.</div>
            </div>
            <div className="reg-step">
              <div className="reg-step-num">4</div>
              <div className="reg-step-title">Immediate Access & Welcome</div>
              <div className="reg-step-txt">Members are immediately enrolled and receive their first personalized plan insight — delivered via the BookCover mobile website — no app download required.</div>
            </div>
          </div>
          <div className="reg-phone-row">
            <div className="reg-phone-mini">
              <div className="reg-phone-lbl">Step 1 — Email Invitation</div>
              <div style={{ background: "white", borderRadius: 10, padding: 10, textAlign: "left" }}>
                <div style={{ fontSize: 9, color: "#aaa", marginBottom: 4, borderBottom: "1px solid #eee", paddingBottom: 4 }}>From: noreply@yourhealthplan.com<br />Subject: <strong style={{ color: "#1a2332" }}>Your personal member benefit tool is ready</strong></div>
                <div style={{ fontSize: "9.5px", color: "#1a2332", lineHeight: 1.5, marginBottom: 6 }}>Hi Margaret,<br /><br />Your health plan has activated a new personalized benefit tool just for you. Click below to get started — it only takes 60 seconds.</div>
                <div style={{ background: "#0070B9", color: "white", borderRadius: 7, padding: "7px 10px", fontSize: "9.5px", fontWeight: 700, textAlign: "center" }}>✨ Access My Plan Benefits</div>
              </div>
            </div>
            <div className="reg-phone-mini">
              <div className="reg-phone-lbl">Step 2 — Welcome Page</div>
              <div className="form-mock">
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>Welcome, Margaret!</div>
                <div style={{ fontSize: 10, color: "#888", marginBottom: 10 }}>Your <strong>Your Health Plan HMO</strong> plan is ready. Please confirm your details to get started.</div>
                <div className="form-field">Full Name: Margaret Johnson</div>
                <div className="form-field">Date of Birth: ••/••/1952</div>
              </div>
            </div>
            <div className="reg-phone-mini">
              <div className="reg-phone-lbl">Step 3 — Quick Confirm</div>
              <div className="form-mock">
                <div style={{ fontSize: 10, color: "#888", marginBottom: 10 }}>Please verify one more detail to protect your account:</div>
                <div className="form-field">Zip Code: 90210</div>
                <div style={{ fontSize: 9, color: "#aaa", marginBottom: 8 }}>🔒 Secure · HIPAA Compliant</div>
                <div className="form-submit">✓ Confirm & Get Started</div>
              </div>
            </div>
            <div className="reg-phone-mini">
              <div className="reg-phone-lbl">Step 4 — Enrolled & Ready</div>
              <div className="success-badge">
                <div className="success-icon">🎉</div>
                <div className="success-txt">You&apos;re all set, Margaret!<br /><br />Your plan dashboard is ready. You have <strong>3 benefits</strong> waiting to be used this year.</div>
              </div>
              <div style={{ marginTop: 8 }}><div className="form-submit">Explore Your Benefits →</div></div>
            </div>
          </div>
        </div>
      </section>

      <SeeMoreStrip href="/retention-platform" nextLabel="Retention Platform →" />
    </>
  );
}
