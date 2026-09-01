/* ============================================================================
   ⚡  EDIT YOUR PORTFOLIO HERE  ⚡
   ----------------------------------------------------------------------------
   This is the ONLY file you ever need to change to update your website.
   You do NOT need to know how to code.

   THE RULES (just 3):
     1. Only change the text INSIDE the "quotes".
     2. Keep every comma  ,  and every  { } [ ]  exactly where it is.
     3. To HIDE something, leave its text empty like this:  ""
        (or empty the whole list like this:  [] )

   After editing on GitHub, click "Commit changes" and your live site
   updates by itself in about a minute. That's it.
   ============================================================================ */

window.PORTFOLIO = {

  /* ==========================================================================
     1. THE BASICS
     ========================================================================== */
  basics: {
    fullName:  "Saikireeti Yenugula",
    shortName: "Sai Kireeti",              // used in the navbar logo

    // The professional headline under your name (like a LinkedIn headline).
    // Describes CAPABILITY, never a job title you have not held.
    headline:  "Technical Project Management | Technology Consulting | AI Transformation",

    // The short paragraph in the hero. 2–3 sentences works best.
    intro:     "Four years delivering enterprise technology across Cognizant, Paragon Customer Communications (UK) and Atos Syntel — project delivery, PMO, migration programmes, production support and stakeholder management. Because I came up through hands-on technical roles, I plan realistically and speak the same language as the engineers I lead. I begin an MBA at Aston Business School in September 2026, moving into project management and technology consulting.",

    email:     "saikireeti29@gmail.com",

    /* ►► YOUR PHONE NUMBER GOES HERE ◄◄
       You do not have a UK number yet. When you get one, put it between the
       quotes below exactly as you would write it, for example:
           phone:     "+44 7123 456789",
       Save, and it appears by itself in TWO places — the contact block at the
       bottom of the page and the footer — as a tappable link on a phone.
       Nothing else needs changing. Leave it as "" and both stay hidden. */
    phone:     "",

    // The small pill at the very top of the page — the first thing anyone reads.
    status:    "MBA Candidate · Aston Business School",

    // Second pill next to the one above. Recruiters scan for availability first,
    // so it is stated in the very first line of the page. Keep it SHORT — a long
    // one wraps onto two lines on a phone. Leave "" to hide the pill entirely.
    availabilityBadge: "Open to UK opportunities",

    // Used in the contact block at the bottom.
    location:  "Birmingham, UK",
    linkedin:  "https://www.linkedin.com/in/saikireeti-yenugula-362950221",
    /* DELIBERATELY EMPTY — decided 2026-08-19. He does not want a GitHub link on
       the portfolio. Leave this as "" and do not "helpfully" fill it in. */
    github:    "",

    // Your CV. Drop the PDF into  assets/  and put the file name here.
    cvUrl:     "assets/Saikireeti_Yenugula_CV.pdf",
    cvLabel:   "Download CV",

    // YOUR PHOTO: save a square/portrait photo as  assets/img/profile.jpg
    // Leave "" to show your initials instead.
    photo:     "assets/img/profile.jpg",

    // Browser tab title + Google/LinkedIn preview text
    pageTitle: "Saikireeti Yenugula — Technology Delivery & Project Management",
    metaDesc:  "Technology delivery and project management professional with 4 years delivering enterprise technology for major UK insurers and utilities. MBA candidate at Aston University, moving into technology and AI transformation consulting.",

    // Set this AFTER your site is live
    siteUrl:   "https://saikireeti19.github.io/portfolio/"
  },


  /* ==========================================================================
     2. THE ROLES YOU ARE TARGETING  (small pills in the hero)
     These are roles you WANT — not roles you have already held.
     ========================================================================== */
  // Shown above the chips so nobody mistakes them for roles already held.
  targetRolesLabel: "Targeting",

  targetRoles: [
    "Technical Project Manager",
    "Project / Delivery Manager",
    "Technology Consultant",
    "AI Transformation Consultant",
    "Cyber Security Consultant"
  ],


  /* ==========================================================================
     3. HEADLINE NUMBERS  (the proof strip — this is what hiring managers scan)
     ========================================================================== */
  /* Six proof tiles, laid out 3 + 3. Every figure here must be one you can defend
     in an interview — two zeros, a percentage and three counts. Do NOT add a
     precise-looking number you cannot source: "zero failed deployments" is both
     true and stronger than an invented "99.8% success rate". */
  metrics: [
    { value: "4",       suffix: "yrs", label: "UK client delivery across 3 global firms" },
    { value: "0",       suffix: "",    label: "UAT defects at go-live on a major migration" },
    { value: "0",       suffix: "",    label: "Failed deployments across 10+ releases a day" },
    { value: "30",      suffix: "%",   label: "Less development time after automation" },
    { value: "15",      suffix: "",    label: "Engineers led and trained" },
    { value: "30–40",   suffix: "",    label: "Lateral hires guided from offer to day one" }
  ],


  /* ==========================================================================
     3b. PROJECT IMPACT CHART  (the interactive bars under the metrics)
     Shows the measurable improvement delivered by the automation tool.
     Every "value" is a PERCENTAGE IMPROVEMENT against the old way of working,
     so every bar points the same direction: bigger = better.
     Empty the list  []  to hide the whole chart.
     ========================================================================== */
  impact: {
    kicker:   "Measured impact",
    heading:  "What the automation delivered",
    note:     "At Cognizant we built a converter that turns PDPX files into JLD for development in the Quadient suite. Every figure below is measured against the manual, pre-automation way of working.",
    baseline: "Hover or tab a dial for detail.",
    items: [
      {
        label: "Faster form delivery",
        value: 30,
        note:  "The converter removed the manual rebuild step, so noticeably more forms clear each delivery cycle."
      },
      {
        label: "Development time saved",
        value: 30,
        note:  "Repetitive conversion and data-mapping work that used to be done by hand is now automated."
      },
      {
        label: "More AI-assisted delivery",
        value: 40,
        note:  "Generative-AI tooling now supports drafting, conversion checks and documentation — up around 40% on previous delivery cycles."
      }
      /* The 60% account-revenue-growth dial was REMOVED on request: it invites a
         question about absolute figures he cannot disclose. The figure is still
         recorded in HANDOVER.md if it is ever needed for an interview. */
    ]
  },


  /* ==========================================================================
     3c. CAREER DIRECTION
     Sits directly under the numbers and BEFORE "About" on purpose: it answers
     "why is someone from a technical background applying for a PM role?" before
     a recruiter has time to wonder. Empty the "stages" list AND the paragraphs
     to hide the whole section.
     ========================================================================== */
  careerDirection: {
    kicker:  "Career direction",
    heading: "Technology → Delivery → Transformation",
    stages: [
      { label: "Technology",     detail: "Customer communications development, production support and platform upgrades." },
      { label: "Delivery",       detail: "Release coordination, PMO governance and leading a 15-engineer team to a zero-defect go-live." },
      { label: "Transformation", detail: "Automation tooling, AI-assisted delivery and the move into technology consulting." }
    ],
    paragraphs: [
      "My career has moved from hands-on development in customer communications technology into technical delivery, project coordination and business transformation.",
      "I begin an MBA at Aston Business School in September 2026 to build the strategic, leadership and commercial perspective that technology project management and consulting demand."
    ]
  },


  /* ==========================================================================
     4. ABOUT
     ========================================================================== */
  about: {
    heading: "About",
    kicker:  "Who I am",
    paragraphs: [
      "Four years across three global firms — Cognizant, Paragon Customer Communications (UK) and Atos Syntel — building and running enterprise customer-communication platforms for major UK insurers and utilities, including Chubb.",
      "I came up through hands-on technical roles, so I know how delivery actually works: requirements, build, test cycles, controlled releases, go-live and support. On the Chubb migration I led a 15-member team to go-live with zero UAT defects — and trained all 15 on the platform from scratch.",
      "I also ran hiring for my practice, and was the named contact every external hire spoke to between accepting an offer and day one. Around 30–40 lateral hires came through that process with me.",
      "I begin an MBA at Aston Business School in September 2026, moving further into technology consulting and AI-enabled transformation."
    ],
    principles: [
      { title: "Delivery, end to end",              text: "I've owned every stage — requirements, build, UAT, release and production support — so the plans I make reflect how the work really happens." },
      { title: "Evidence over opinion",             text: "I track what matters: defects, turnaround, SLA adherence, capacity. Decisions follow the data." },
      { title: "Build the team, not just the thing", text: "I trained 15 engineers from zero on a new platform, cutting our reliance on external hiring." }
    ]
  },


  /* ==========================================================================
     5. CASE STUDIES  ← the most important section
     Each one follows: Context → What I did → Result.
     ========================================================================== */
  caseStudiesHeading: "Selected Work",
  caseStudiesKicker:  "Evidence",
  caseStudies: [
    {
      title:   "Legacy Platform Migration for a Global Insurer",
      client:  "Chubb (UK & Australia)",
      org:     "Cognizant",
      period:  "2025 — Sep 2026",
      role:    "Programmer Analyst — acting project manager for the migration",
      summary: "Migrated an insurer's legacy communication platform onto a modern stack — delivered with zero UAT defects at go-live.",
      context: "Chubb's customer communications ran on a legacy Xpression platform that was slow to change and inconsistent in branding. It needed migrating to Quadient without disrupting live customer communications.",
      actions: [
        "Planned and led the migration of legacy forms to Quadient, rebuilding them as reusable blocks and templates.",
        "Created Base Templates (BT) and Style Masters so every communication stayed on-brand and consistent.",
        "Owned the release path across TEST, UAT and PROD, with full approval and audit compliance.",
        "Led a 15-member team across Agile and Waterfall delivery, tracking work on JIRA and ServiceNow and reporting status daily to senior stakeholders.",
        "Trained all 15 team members on the platform from the ground up."
      ],
      results: [
        { value: "0",    label: "UAT defects at go-live" },
        { value: "~30%", label: "Higher development efficiency" },
        { value: "~40%", label: "Less reliance on external hiring" }
      ],
      tags: ["Technical Delivery", "Migration Programme", "Team Leadership", "Full SDLC", "Agile & Waterfall"]
    },
    {
      title:   "Scaling the Team Behind the Delivery",
      client:  "Internal — Technology Competency",
      org:     "Cognizant",
      period:  "2025 — Sep 2026",
      role:    "Programmer Analyst — resourcing & onboarding POC alongside delivery",
      summary: "Ran hiring end-to-end for the practice, then acted as the single point of contact that carried every new joiner from offer roll-out through to day one.",
      context: "Delivery commitments were growing faster than the team could staff them, and unfilled roles were putting billable project work at risk. Accepted offers were also the fragile part — candidates go quiet between offer and joining, and a drop-out means starting the whole hire again.",
      actions: [
        "Ran hiring end-to-end: sourcing, screening and technical-panel interviews across technology competencies.",
        "Mapped every candidate to Service Orders (SOs) and project skill requirements so the right people landed on the right work.",
        "Became the named point of contact for external hires after offer roll-out — candidates came to me directly with onboarding questions, background-verification (BGV) problems and date-of-joining changes, and I chased each one through with HR and the internal teams.",
        "Checked in with every candidate every other day across the offer-to-joining window, so the experience stayed personal and accepted offers did not quietly lapse.",
        "Coordinated induction, access and documentation, and ran process-compliance audits to keep hiring records audit-ready.",
        "Introduced gamified Mentimeter feedback sessions to surface team issues early, escalating them to senior management, and founded 'GammiFriday', a monthly department-wide engagement event."
      ],
      results: [
        { value: "30–40", label: "Lateral hires guided from offer to day one" },
        { value: "~20%",  label: "Faster new-joiner ramp-up" },
        { value: "100%",  label: "Audit-ready hiring records" }
      ],
      tags: ["Talent Acquisition", "Candidate Experience", "Offer-to-Join Management", "BGV & Onboarding", "Workforce Planning", "Employee Engagement"]
    },
    {
      title:   "Running Delivery & Production Support at Scale",
      client:  "Multiple UK clients across insurance, banking and other domains",
      org:     "Paragon Customer Communications (UK) · Atos Syntel",
      period:  "2022 — 2025",
      role:    "Quadient Analyst / Associate Consultant — delivery, support & PMO",
      summary: "Kept high-volume customer communications running for multiple UK clients across insurance, banking and other domains, coordinating 10+ releases a day with zero failed deployments.",
      context: "High-volume customer communications for multiple UK clients across insurance, banking and other domains meant constant production change. Any failed release would land directly on live customer letters, bills and statements.",
      actions: [
        "Analysed business requirements and built customer communication templates, maintaining style masters for brand consistency.",
        "Coordinated 10+ controlled releases a day across test and production environments, reviewing work and assigning tasks to the team.",
        "Ran production support — debugged incidents from job IDs, monitored services and resubmitted failed jobs after queue or network failures.",
        "Patched and upgraded platform components on servers to keep the environment stable, secure and current.",
        "Automated repetitive configuration and data-mapping work, and owned PMO status reporting for the delivery centre."
      ],
      results: [
        { value: "0",    label: "Failed deployments" },
        { value: "~30%", label: "Less manual effort after automation" },
        { value: "~15%", label: "Fewer repeat issues after standardisation" }
      ],
      tags: ["Delivery Management", "Release Coordination", "Production Support", "PMO & Reporting", "Stakeholder Management"]
    }
  ],


  /* ==========================================================================
     6. CAREER TIMELINE
     ========================================================================== */
  experienceHeading: "Experience",
  experienceKicker:  "Career",
  experience: [
    {
      role:    "Programmer Analyst — Delivery & Resourcing Lead",
      company: "Cognizant",
      meta:    "Client: Chubb (UK & Australia) · India",
      /* Cognizant ends Sep 2026, when the MBA starts. Written as a closed date
         range rather than "Present" on purpose: he loses access to update this
         site, so nothing here may depend on being edited later. */
      period:  "Jul 2025 — Sep 2026",
      points: [
        "Led a 15-member team on the Chubb legacy platform migration, delivered with zero UAT defects at go-live.",
        "Built a PDPX→JLD converter that removed the manual rebuild step — around 30% less development time and 30% faster form delivery.",
        "Trained all 15 engineers on the platform from scratch, cutting the practice's reliance on external hiring by around 40%.",
        "Owned end-to-end hiring for the practice and was the named onboarding contact for 30–40 lateral hires.",
        "Owned the release path across TEST, UAT and PROD with full approval and audit compliance.",
        "Awarded the Cognizant Cheers Award for delivery excellence and clean deployments."
      ],
      // Small tags under the bullets. Only list what you genuinely used in THIS role.
      tech: ["Quadient Inspire", "JIRA", "ServiceNow", "Generative AI (Claude)", "Agile & Waterfall"]
    },
    {
      role:    "Quadient Analyst & PMO",
      company: "Paragon Customer Communications (UK)",
      meta:    "UK business · Multiple UK clients across insurance, banking and other domains · India",
      period:  "Feb 2025 — Jul 2025",
      points: [
        "Employed in-house by this UK business, having delivered on its account for three years from Atos Syntel.",
        "Coordinated 10+ production releases a day with a zero-failed-deployment record.",
        "Owned PMO planning, governance and status reporting across 60+ activities.",
        "Analysed business requirements and turned them into customer communication templates and multi-format document outputs.",
        "Maintained Style Masters so every communication stayed on-brand across UK insurance, banking and utility brands."
      ],
      tech: ["Quadient Inspire", "Requirements Analysis", "Style Masters", "Multi-format Output", "PMO Reporting"]
    },
    {
      role:    "Associate Consultant — Delivery & Production Support",
      company: "Atos Syntel",
      meta:    "Client: Paragon Customer Communications (UK) · India",
      period:  "Sep 2022 — Feb 2025",
      points: [
        "Ran controlled releases across TEST, UAT and PROD at 10+ a day, with full audit compliance and no failed deployments.",
        "Supported the Delivery Director on planning, progress tracking and status reporting.",
        "Debugged live incidents from job IDs, monitored services and resubmitted failed jobs after queue and network failures."
      ],
      tech: ["Quadient Inspire", "Windows / Linux", "RabbitMQ", "Release & Deployment", "Production Support"]
    }
  ],


  /* ==========================================================================
     7. SKILLS
     ========================================================================== */
  skillsHeading: "Capabilities",
  skillsKicker:  "What I bring",
  skills: [
    /* Kept deliberately short. Each group maps to a role you are targeting, so the
       list reads as a considered profile rather than a keyword dump. Things a
       recruiter already assumes (Documentation, MS Office) are left out on purpose
       — listing them only dilutes the items that actually matter. */
    { group: "Project & Delivery Management", items: ["Project & Programme Management", "Full SDLC — requirements → build → UAT → release → support", "Planning, Estimation & Risk Management", "Release Coordination (TEST / UAT / PROD)", "Production Support & Incident Management", "Agile & Waterfall"] },
    { group: "Business Analysis & Governance", items: ["Requirements Analysis", "Stakeholder Management", "PMO Governance & Reporting", "Process Improvement & Automation"] },
    { group: "Leadership & Hiring",  items: ["Team Leadership (15 engineers)", "Technical Hiring & Interviewing", "Offer-to-Join & Onboarding Ownership", "Training & Mentoring"] },
    /* Technology uses "subgroups" instead of "items" — four labelled lines instead
       of a wall of chips. Deliberate: it shows genuine technical range for
       technology-consulting and delivery roles WITHOUT reading like a developer CV,
       which matters for the MBA transition. Customer Communications comes first
       because it is the differentiator. Keep this to four short lines — if it grows
       past that it starts to look like a job application for a coding role. */
    { group: "Technology", subgroups: [
      { label: "Customer Communications", items: ["Quadient Inspire Designer", "Interactive", "Scaler", "Content Manager", "OpenText Xpression"] },
      /* Java, Python, PL/SQL and Perl were proposed and then withdrawn on
         2026-08-19 — he does not want to claim them. Do not add them back. */
      { label: "Programming & Data",      items: ["SQL / MySQL", "JavaScript"] },
      { label: "Web",                     items: ["HTML", "CSS"] },
      { label: "Platforms & Messaging",   items: ["Linux", "Windows", "RabbitMQ"] }
    ] },
    { group: "Tools",                items: ["JIRA", "Confluence", "ServiceNow", "Git (basic)", "Microsoft Excel", "Power BI (Basic)", "Generative AI (Claude)"] },
    // Honest "direction of travel" — things you are actively learning, not claiming.
    { group: "Currently Building",   items: ["AI Agents & Automation", "AI Transformation & Enablement", "Cyber Security Fundamentals", "MBA — Strategy & Leadership"] }
  ],


  /* ==========================================================================
     8. EDUCATION  (set highlight: true on the one to stand out)
     "badge" is the little label on the highlighted one.
     ========================================================================== */
  educationHeading: "Education & Certifications",
  educationKicker:  "Credentials",
  education: [
    {
      highlight: true,
      badge:  "Current",
      period: "Sep 2026 — Sep 2027",
      degree: "MBA — Master of Business Administration",
      school: "Aston Business School, Aston University · Birmingham, UK",
      detail: "Triple-accredited business school (AACSB, AMBA and EQUIS) — a standard held by fewer than 1% of business schools worldwide. Studying strategy, leadership and transformation."
    },
    {
      highlight: false,
      period: "2024",
      degree: "B.Tech — Electronics & Communication Engineering",
      school: "India",
      detail: ""
    }
  ],

  /* Certification badges.
     "mark"   = the 1–2 letters shown in the coloured circle (the issuer's initials).
     "issuer" = who awarded it.        "name" = what it is called.
     "url"    = OPTIONAL. Paste the verification link (Credly, Microsoft Learn) and
                the badge becomes clickable, which recruiters trust far more than a
                claim. Leave "" and it stays plain text — nothing breaks.
     A plain string still works too, e.g. "Some Certificate", if you prefer. */
  certifications: [
    { category: "Cloud & Data", items: [
      { mark: "MS", issuer: "Microsoft", name: "Azure Fundamentals (AZ-900)",     url: "" },
      { mark: "MS", issuer: "Microsoft", name: "Power BI (Basic)",                url: "" }
    ] },
    { category: "Customer Communications", items: [
      { mark: "Q",  issuer: "Quadient",  name: "Inspire Designer",                url: "" },
      { mark: "Q",  issuer: "Quadient",  name: "Inspire Scaler",                  url: "" },
      { mark: "Q",  issuer: "Quadient",  name: "Inspire Interactive",             url: "" }
    ] },
    { category: "AI", items: [
      { mark: "A",  issuer: "Anthropic", name: "AI Fluency for Small Businesses", url: "" },
      { mark: "A",  issuer: "Anthropic", name: "Claude Code in Action",           url: "" },
      { mark: "A",  issuer: "Anthropic", name: "Claude 101",                      url: "" }
    ] }
  ],

  awards: [
    { title: "Cognizant Cheers Award", detail: "For delivery excellence, seamless deployment across environments and ownership of code reviews." }
  ],


  /* ==========================================================================
     9. BEYOND WORK  (engagement, outreach, volunteering)
     Empty the list  []  to hide the whole section.
     ========================================================================== */
  beyondHeading: "Beyond the Day Job",
  beyondKicker:  "Community & culture",
  beyond: [
    {
      title: "Campus Outreach — Student Mentoring",
      text:  "Supported company outreach programmes at colleges, speaking with students about using LinkedIn effectively, building professional networks, and starting an IT career in the age of AI."
    },
    {
      title: "Employee Engagement — 'GammiFriday'",
      text:  "Founded a monthly department-wide engagement event, and introduced gamified Mentimeter sessions that surfaced team concerns early so management could act on them."
    },
    {
      title: "Community Welfare & Fundraising",
      text:  "Volunteer with a family-led charitable initiative: pitching to donors to raise funds, serving free daily meals to elderly people, and providing books and essentials to underprivileged students."
    }
  ],


  /* ==========================================================================
     10. CONTACT
     ========================================================================== */
  contact: {
    heading: "Let's talk",
    kicker:  "Contact",
    text:    "I am open to project management, delivery and technology consulting roles, and to wider management positions where a delivery background transfers well. I pick up new technologies and domains quickly and genuinely enjoy doing so, so I welcome roles that stretch me into unfamiliar ground — including internships and part-time work alongside my MBA.",
    // Short badge line. Leave "" to hide.
    availability: "Open across the UK · Birmingham & London",
    // Longer availability detail. Leave "" to hide.
    availabilityNote: "Open to roles anywhere in the UK, London included, and willing to relocate for the right one. I am in Birmingham for the MBA from September 2026, and available for internships and part-time work immediately — remotely or on site."
  },


  /* ==========================================================================
     11. LOOK & FEEL
     ========================================================================== */
  settings: {
    // Accent colour used for links, buttons and highlights.
    // Deep navy blue — the professional-services standard, and high contrast.
    // Other good options: "#1d4ed8" (brighter navy) · "#0f766e" (teal) · "#334155" (graphite)
    accent: "#1e40af",
    // Which theme loads first for new visitors: "light", "dark", or "system".
    defaultTheme: "system",
    // Show the little scroll-progress bar at the very top of the page?
    showScrollProgress: true,
    footerNote: "Built and maintained by Saikireeti Yenugula."
  }

};
