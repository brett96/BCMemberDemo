export const HERO_STATS = [
  {
    num: "95%",
    label: "Member Retention",
    text: "We have seen increases of up to 10% in total member retention, with some clients reporting 95% retention rates after using our tools.",
  },
  {
    num: "12×",
    label: "More Member Touchpoints",
    text: "From 1–2 plan interactions per year to continuous, personalized engagement driven by real member data.",
  },
  {
    num: "1:1",
    label: "Personalized at Member Level",
    text: "Every interaction tailored to each individual member's actual plan, claims, and utilization data — never generic, never one-size-fits-all.",
  },
] as const;

export const CARRIER_LINES = [
  "Medicare Advantage",
  "Medicaid / LTSS",
  "Individual & Family Plans",
  "Dual Eligible (D-SNP)",
  "Commercial → Medicare Transitions",
] as const;

export const PROBLEMS = [
  {
    title: "Retention Is Chronically Under-Resourced",
    text: "Carriers focus retention teams on risk scoring and population-level strategy. Individual member outreach — the kind that actually prevents churn — rarely happens at scale. Most members never hear from their plan between enrollment and the next AEP.",
    icon: "minus",
  },
  {
    title: "The Broker Industry Is Working Against You",
    text: "First-year commissions incentivize brokers and FMOs to churn members regardless of whether switching serves the member's interest. The FMO/broker industry is estimated at $60B and growing to $90B by 2030 — with the explicit goal of moving members at AEP.",
    icon: "shield",
  },
  {
    title: "Unused Benefits Drive Dissatisfaction",
    text: "Members who never use their dental, vision, OTC, or wellness benefits attribute that failure to the plan — even when the coverage was available all along. Unused benefits create the perception of poor value and are a leading driver of non-renewal.",
    icon: "activity",
  },
  {
    title: "Members Feel Like Policy Numbers, Not People",
    text: "The transactional nature of most plan-member interactions — EOBs, ID cards, and call center scripts — fails to build the trusted relationship that drives loyalty. Members switch because they were never engaged to begin with.",
    icon: "users",
  },
] as const;

export const MARKET_STATS = [
  { num: "$90B", lbl: "FMO/Broker market by 2030" },
  { num: "2×", lbl: "Plan switching rate since 2023" },
  { num: "50–70%", lbl: "Typical retention rate today" },
] as const;

export const GAP_PROBLEMS = [
  {
    num: "Problem 01",
    title: "Risk Scoring Without Action",
    text: "Knowing which members are at risk of leaving is only half the equation. Most tools stop there. Without member-level outreach tools, risk scores become reports — not retention.",
    icon: "minus",
  },
  {
    num: "Problem 02",
    title: "Segment-Level vs. Individual Outreach",
    text: "Population-level campaigns treat all members the same. Effective retention requires personalized, data-driven outreach based on each member's actual plan usage and health journey — one member at a time.",
    icon: "users",
  },
  {
    num: "Problem 03",
    title: "No Cross-Product Retention Strategy",
    text: "Members transitioning between product lines — Individual to Medicare, Medicaid to commercial — represent the highest-risk attrition moments. Most carriers have no coordinated strategy to capture these members.",
    icon: "activity",
  },
  {
    num: "Problem 04",
    title: "Lack of Powerful Member-Level Tools",
    text: "The industry has simply not invested in tools that engage individual members in a meaningful, personalized way. What exists is built for populations — not people. The result is members who feel like policy numbers, not valued plan participants.",
    icon: "monitor",
  },
] as const;

export const SOLUTIONS = [
  {
    num: "01",
    title: "Real-Time Member Risk Intelligence",
    text: "BookCover connects via standardized FHIR Patient-Access APIs — eliminating the need for custom integration — as well as SFTP flat files and Salesforce, generating individual member risk scores updated in real time. Not segment averages. Individual scores for every member, through whatever data channel your infrastructure supports.",
    icon: "file",
  },
  {
    num: "02",
    title: "AI-Powered Member Engagement App",
    text: "A white-labeled member-facing mobile website that delivers proactive, personalized guidance — answering benefit questions using real plan data, surfacing Rx savings, and prompting members to use benefits they're missing. Your brand. Your members. Real impact.",
    icon: "message",
  },
  {
    num: "03",
    title: "Retention Team Command Center",
    text: "A powerful retention dashboard giving your team real-time visibility into every member's engagement level, risk score trajectory, and next best action. Trigger targeted campaigns, surface at-risk members, and manage outreach — all from one platform.",
    icon: "chart",
  },
  {
    num: "04",
    title: "Dedicated Retention Consulting",
    text: "BookCover creates and manages your retention campaigns from start to finish. Every campaign is custom-built for your health plan — your membership, your benefits, your goals. We sit inside your team so there are no handoffs, no delays, and no gaps between strategy and execution.",
    icon: "users",
  },
  {
    num: "05",
    title: "Cross-Product Retention Strategy",
    text: "Capture members transitioning between Individual, Medicaid, and Medicare products. BookCover's data platform tracks members across product lines and triggers proactive outreach at the highest-risk transition moments — before they're lost to a competitor.",
    icon: "heart",
  },
  {
    num: "06",
    title: "CAHPS & Quality Metric Insights",
    text: "Member engagement data from BookCover feeds directly into CAHPS survey readiness, star rating improvement initiatives, and quality metric tracking — turning retention outreach into measurable quality improvement.",
    icon: "mail",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    title: "Member-Level, Not Segment-Level",
    text: "Every other retention vendor works at the population level. BookCover generates individual member scores and triggers individual member outreach — the way effective retention actually works.",
    icon: "shield",
  },
  {
    title: "Powered by Real Claims Data",
    text: "Using standardized FHIR APIs — eliminating the need for custom integration — our AI reads each member's actual claims history, formulary utilization, deductible accumulators, and plan benefits, ensuring every outreach is relevant, accurate, and timely.",
    icon: "file",
  },
  {
    title: "Campaign Creation and Management — Included",
    text: "We do not hand you a tool and walk away. We build and manage your custom retention campaigns — message copy, timing, segmentation, A/B testing, compliance review, and reporting. Your plan is unique; your campaigns should be too.",
    icon: "users",
  },
  {
    title: "Proven Across All Lines of Business",
    text: "BookCover works across Medicare, Medicaid, Individual, and D-SNP — and actively manages cross-product transitions, capturing members as they age in or move between product lines.",
    icon: "activity",
  },
  {
    title: "CMS Compliance — Built In, Not Bolted On",
    text: "Our team continuously monitors CMS final rules, ANOC requirements, and marketing guidelines to ensure every communication, campaign, and workflow remains fully compliant. We treat compliance as a core competency — not an afterthought.",
    icon: "check",
  },
] as const;

type VsCell = "yes" | "no" | "partial";

export const VS_ROWS: { feature: string; bc: VsCell; other: VsCell }[] = [
  { feature: "Individual member risk scores", bc: "yes", other: "no" },
  {
    feature: "Real-time claims data via FHIR API (no custom integration)",
    bc: "yes",
    other: "no",
  },
  { feature: "Member-facing engagement app", bc: "yes", other: "no" },
  { feature: "AI-powered proactive outreach", bc: "yes", other: "partial" },
  { feature: "Cross-product retention strategy", bc: "yes", other: "no" },
  { feature: "CMS compliance monitoring & advisory", bc: "yes", other: "no" },
  { feature: "Embedded campaign creation & management", bc: "yes", other: "no" },
  { feature: "Benefit utilization tracking", bc: "yes", other: "partial" },
  { feature: "CAHPS & quality metric support", bc: "yes", other: "no" },
  { feature: "Facebook ad campaign management", bc: "yes", other: "no" },
  { feature: "Pre-ANOC outreach campaigns", bc: "yes", other: "partial" },
] as const;

export const HOW_STEPS = [
  {
    step: "Step 01",
    title: "Flexible Member Data Integration",
    text: "We connect to your member data via standardized FHIR APIs, SFTP flat files, or Salesforce — no custom integration required. We adapt to your data environment from day one.",
    icon: "file",
  },
  {
    step: "Step 02",
    title: "AI Identifies Risk & Opportunity",
    text: "Our AI scores every member individually — flagging attrition risk, unused benefits, Rx savings opportunities, and transition moments in real time.",
    icon: "search",
  },
  {
    step: "Step 03",
    title: "Personalized Member Outreach",
    text: "Personalized messages reach each member through the BookCover mobile website — grounded in their actual plan data, never generic. Every interaction builds trust.",
    icon: "phone",
  },
  {
    step: "Step 04",
    title: "Retention Team Activation",
    text: "Your BookCover team turns member insights into live campaigns without delay. New idea? Data reveals an opportunity? We build it, launch it, and optimize it — fast.",
    icon: "heart",
  },
] as const;

export const CERCA_HIGHLIGHTS = [
  {
    title: "20+ Years of Health Plan Operations",
    text: "Our founders have worked inside and alongside carriers since 2001 — in enrollment automation, MA operations, and AI platform development — giving us a uniquely practical understanding of what carriers actually need.",
    icon: "shield",
  },
  {
    title: "Deep Medicare & Multi-Line Expertise",
    text: "From Medicare Advantage and Medicaid to Individual & Family Plans and D-SNP, we understand the nuances of each product line — including the high-risk transitions between them where retention is most fragile.",
    icon: "search",
  },
  {
    title: "AI-First from Day One",
    text: "BookCover was built as an AI-native platform — not a traditional retention tool with AI bolted on. Every feature, from risk scoring to member outreach, is designed around real-time data and machine learning from the ground up.",
    icon: "activity",
  },
] as const;

export const IMPACT_STATS = [
  {
    num: "↑10%",
    label: "Member Retention Improvement",
    desc: "Demonstrated improvement across Medicare, Medicaid, and Individual lines within 12 months of deployment.",
  },
  {
    num: "12×",
    label: "More Member Touchpoints",
    desc: "From 1–2 plan interactions per year to continuous, personalized engagement driven by real member data.",
  },
  {
    num: "↓20%",
    label: "Routine Member Service Costs",
    desc: "AI handles benefit questions and Rx lookups — reducing inbound call volume and freeing your team for high-value interventions.",
  },
] as const;
