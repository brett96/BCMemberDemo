import { SeeMoreStrip } from "@/components/layout/SeeMoreStrip";
import {
  ActivityIcon,
  BarChartIcon,
  CheckIcon,
  FileIcon,
  HeartIcon,
  MailIcon,
  MessageIcon,
  MinusCircleIcon,
  PhoneIcon,
  SearchIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";
import {
  CERCA_HIGHLIGHTS,
  CARRIER_LINES,
  DIFFERENTIATORS,
  GAP_PROBLEMS,
  HERO_STATS,
  HOW_STEPS,
  IMPACT_STATS,
  MARKET_STATS,
  PROBLEMS,
  SOLUTIONS,
  VS_ROWS,
} from "@/content/overview";

type IconKey =
  | "minus"
  | "shield"
  | "activity"
  | "users"
  | "file"
  | "message"
  | "chart"
  | "heart"
  | "mail"
  | "search"
  | "phone"
  | "check"
  | "monitor";

function ProblemIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    minus: <MinusCircleIcon />,
    shield: <ShieldIcon className="" />,
    activity: <ActivityIcon />,
    users: <UsersIcon />,
    file: <FileIcon />,
    message: <MessageIcon />,
    chart: <BarChartIcon />,
    heart: <HeartIcon />,
    mail: <MailIcon />,
    search: <SearchIcon />,
    phone: <PhoneIcon />,
    check: <CheckIcon />,
    monitor: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  };
  return <>{icons[name] ?? <ShieldIcon />}</>;
}

export default function OverviewPage() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>
            Retention Is Your
            <br />
            Most Underserved
            <br />
            <span className="gold">Growth Lever.</span>
          </h1>
          <p className="hero-sub">
            BookCover is your expert-led, AI-powered retention solution — purpose-built for health
            plans. We provide real-time, personalized member engagement at scale, helping health
            plans build meaningful relationships with each and every member.
          </p>
          <p className="hero-sub hero-sub-spaced">
            The result: higher member satisfaction, stronger quality scores, and improved retention
            across Medicare Advantage, Medicare Supplement, Medicaid, and Individual product lines.
            We operationalize your retention strategy at scale — one member at a time.
          </p>
        </div>
        <div className="hero-stat-block">
          {HERO_STATS.map((stat, i) => (
            <div key={stat.label}>
              {i > 0 && <div className="hstat-div" />}
              <div className="hstat">
                <div className="hstat-num">{stat.num}</div>
                <div className="hstat-txt">
                  <div className="hstat-lbl">{stat.label}</div>
                  {stat.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="carrier-strip">
        <p>Applicable for carriers across all lines of business</p>
        <div className="carrier-logos">
          {CARRIER_LINES.map((line, i) => (
            <span key={line} style={{ display: "contents" }}>
              {i > 0 && (
                <span className="carrier-divider" aria-hidden="true">
                  |
                </span>
              )}
              <span className="carrier-logo">{line}</span>
            </span>
          ))}
        </div>
      </div>

      <section className="challenge" id="challenge">
        <div className="ch-inner">
          <span className="eyebrow">The Retention Crisis</span>
          <h2>
            Why Health Plans Lose Members
            <br />
            at Every <span className="ac">Renewal Cycle</span>
          </h2>
          <p className="body-copy">
            Health plans across every line of business — Medicare Advantage, Medicare Supplement,
            Medicaid, and Individual markets — share a fundamental and growing retention problem.
            It is largely self-inflicted by an industry that invests billions in acquiring new
            members while systematically underinvesting in keeping them.
          </p>
          <div className="ch-grid">
            <div className="prob-list">
              {PROBLEMS.map((p) => (
                <div key={p.title} className="prob-item">
                  <div className="prob-icon">
                    <ProblemIcon name={p.icon} />
                  </div>
                  <div>
                    <div className="prob-title">{p.title}</div>
                    <div className="prob-txt">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="market-callout">
                <h4>The Market Forces Working Against Retention</h4>
                <p>
                  Technology companies — Sunfire, Connecture, EnrollHere, Healthcare GPS — are
                  investing hundreds of millions in AI-powered new-enrollment solutions for FMOs
                  and brokers. These AI tools will make the sales and marketing of competing plans
                  even more aggressive and targeted, creating even greater pressure on member
                  switching across all product lines. While all these companies tout &quot;retention
                  features,&quot; retention remains a checkbox — not a strategy. The result:
                  increasingly sophisticated AI-powered acquisition technology on one side, largely
                  manual retention on the other.
                </p>
                <div className="market-stat">
                  {MARKET_STATS.map((s) => (
                    <div key={s.lbl} className="ms-item">
                      <div className="ms-num">{s.num}</div>
                      <div className="ms-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-forest">
        <div className="container text-center" style={{ marginBottom: 48 }}>
          <span className="eyebrow light">The Gap in the Market</span>
          <h2 className="white" style={{ marginBottom: 16 }}>
            Why Current Approaches
            <br />
            <span className="ac">Fall Short</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(255,255,255,.92)",
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            The health plan industry has invested heavily in risk scoring and enrollment technology
            — but has left a critical gap at the member level, where retention is actually won or
            lost.
          </p>
        </div>
        <div className="container problem-grid">
          {GAP_PROBLEMS.map((p) => (
            <div key={p.num} className="problem-card-dark">
              <div className="problem-card-header">
                <div className="problem-card-icon">
                  <ProblemIcon name={p.icon} />
                </div>
                <div className="problem-card-label">{p.num}</div>
              </div>
              <div className="problem-card-title">{p.title}</div>
              <div className="problem-card-body">{p.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="solution">
        <div className="sol-inner">
          <div className="text-center">
            <span className="eyebrow">The BookCover Solution</span>
            <h2>
              AI-Powered 1:1 Member Retention
              <br />
              at <span className="ac">Health Plan Scale</span>
            </h2>
            <p className="body-copy ctr">
              BookCover is the only retention solution that combines AI-driven risk intelligence
              with real member-level engagement tools — connecting directly to your member data to
              personalize every interaction based on each member&apos;s actual claims, plan usage,
              and health journey.
            </p>
          </div>
          <div className="sol-grid">
            {SOLUTIONS.map((s) => (
              <div key={s.num} className="sol-card">
                <div className="sol-num">{s.num}</div>
                <div className="sol-icon">
                  <ProblemIcon name={s.icon} />
                </div>
                <div className="sol-title">{s.title}</div>
                <div className="sol-txt">{s.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diff">
        <div className="diff-inner">
          <div className="text-center">
            <span className="eyebrow light">Why BookCover Is Different</span>
            <h2 className="white">
              We Aren&apos;t Chasing
              <br />
              <span className="ac">Commission Dollars.</span>
            </h2>
            <p
              className="body-copy ctr"
              style={{ margin: "0 auto 48px", color: "white" }}
            >
              Unlike the broker-tech ecosystem investing in new enrollment tools, BookCover is
              singularly focused on member retention and health outcomes. We succeed when your
              members stay — not when they switch.
            </p>
          </div>
          <div className="diff-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {DIFFERENTIATORS.map((d) => (
                <div key={d.title} className="diff-card">
                  <div className="diff-icon">
                    <ProblemIcon name={d.icon} />
                  </div>
                  <div>
                    <div className="diff-title">{d.title}</div>
                    <div className="diff-txt">{d.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="vs-table">
                <div className="vs-header">
                  <div>Capability</div>
                  <div style={{ textAlign: "center", color: "var(--gold-l)" }}>BookCover</div>
                  <div style={{ textAlign: "center" }}>Typical Retention Tools</div>
                </div>
                {VS_ROWS.map((row) => (
                  <div key={row.feature} className="vs-row">
                    <div className="vs-feature">{row.feature}</div>
                    <div className={row.bc === "yes" ? "vs-yes" : "vs-partial"}>
                      {row.bc === "yes" ? "✓" : "Partial"}
                    </div>
                    <div className={row.other === "yes" ? "vs-yes" : row.other === "partial" ? "vs-partial" : "vs-no"}>
                      {row.other === "yes" ? "✓" : row.other === "partial" ? "Partial" : "✗"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="vs-alignment">
                <div className="vs-alignment-title">Our Alignment Is Different</div>
                <div className="vs-alignment-txt">
                  We are not in the enrollment business. We do not collect commissions. We succeed
                  only when your members stay — making our incentives perfectly aligned with yours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="how-inner">
          <div className="text-center">
            <span className="eyebrow">How We Work</span>
            <h2>
              From Data to Retention —
              <br />
              <span className="ac">End to End.</span>
            </h2>
            <p className="body-copy ctr" style={{ margin: "0 auto 48px" }}>
              BookCover connects to your member data ecosystem, builds individual member
              intelligence, and deploys engagement tools that keep members informed, supported, and
              loyal — all year long.
            </p>
          </div>
          <div className="how-steps">
            {HOW_STEPS.map((step) => (
              <div key={step.step} className="how-card">
                <div className="how-lbl">{step.step}</div>
                <div className="how-step">
                  <ProblemIcon name={step.icon} />
                </div>
                <div className="how-title">{step.title}</div>
                <div className="how-txt">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cercalabs">
        <div className="cl-inner">
          <div>
            <span className="eyebrow">About CercaLabs</span>
            <h2>
              Two Decades of Health
              <br />
              Plan Technology <span className="ac">Expertise</span>
            </h2>
            <p className="body-copy" style={{ marginBottom: 28 }}>
              BookCover is built by CercaLabs, a team with deep roots in health plan automation and
              member engagement — founded by industry veterans who have worked inside and alongside
              carriers since 2001.
            </p>
            <div className="gap-fail">
              {CERCA_HIGHLIGHTS.map((h) => (
                <div key={h.title} className="fail-card">
                  <div className="fail-icon">
                    <ProblemIcon name={h.icon} />
                  </div>
                  <div>
                    <div className="fail-title">{h.title}</div>
                    <div className="fail-txt">{h.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="cl-mission">
              <div className="cl-pill">
                <div className="badge-dot" />
                <span>Our Mission</span>
              </div>
              <h3>
                We Believe Retention
                <br />
                Is a Greater Good
              </h3>
              <p>
                Most marketing organizations and technology vendors in our space are chasing
                commission dollars — incentivized to move members between plans and carriers
                regardless of whether it is in the member&apos;s best interest. BookCover was
                founded on a different belief.
              </p>
              <p>
                We believe that a health plan&apos;s greatest opportunity isn&apos;t in acquiring
                new members — it&apos;s in becoming so indispensable to the members they already
                have that switching becomes unthinkable. After all, nobody likes shopping for a new
                health plan. Members switch because outside forces push them to — not because they
                want to.
              </p>
              <p>
                When members are genuinely supported — when they understand and use their benefits,
                when their plan proactively helps them navigate their healthcare journey — they make
                better health decisions, cost the plan less, and stay loyal for life. That&apos;s
                better for members, better for carriers, and better for the healthcare system as a
                whole.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-nunito), Nunito, sans-serif",
                  fontWeight: 800,
                  color: "var(--gold-l)",
                  fontSize: 15,
                }}
              >
                BookCover exists to build that relationship — at scale, for every member,
                leveraging the power of AI and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="impact-inner">
          <div className="text-center">
            <span className="eyebrow light">Business Impact</span>
            <h2 className="white" style={{ marginBottom: 48 }}>
              The Numbers That
              <br />
              <span className="ac">Move the Business</span>
            </h2>
          </div>
          <div className="impact-grid">
            {IMPACT_STATS.map((s) => (
              <div key={s.label} className="impact-card">
                <div className="impact-num">{s.num}</div>
                <div className="impact-lbl">{s.label}</div>
                <div className="impact-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SeeMoreStrip nextLabel="Member Tools →" href="/member-tools" />
    </>
  );
}
