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
    // The one-line headline under your name. Keep it role-focused.
    headline:  "Project & Change Management · Business Transformation",
    // The short paragraph in the hero. 2 sentences max works best.
    intro:     "I deliver technology change for major UK insurers and utilities — running controlled releases at scale, leading delivery teams, and building the teams that ship the work. Now heading to Aston University for my MBA to move further into management and consulting.",

    email:     "saikireeti29@gmail.com",
    // Leave phone empty ("") to hide it. Recommended to keep it off a public site.
    phone:     "",
    location:  "Relocating to Birmingham, UK · Sep 2026",
    linkedin:  "https://www.linkedin.com/in/saikireeti-yenugula-362950221",
    github:    "",                          // e.g. "https://github.com/LinoVibe" or "" to hide

    // Your CV. Drop the PDF into  assets/  and put the file name here.
    cvUrl:     "assets/Saikireeti_Yenugula_CV.pdf",
    cvLabel:   "Download CV",

    // YOUR PHOTO:  save a square photo as  assets/img/profile.jpg
    // then this line already works. Leave "" to show your initials instead.
    photo:     "assets/img/profile.jpg",

    // Browser tab title + Google/LinkedIn preview text
    pageTitle: "Saikireeti Yenugula — Project & Change Management",
    metaDesc:  "Project and change management professional with 4 years delivering technology change for major UK insurers and utilities. MBA candidate at Aston University.",

    // Set this AFTER your site is live, e.g. "https://linovibe.github.io/portfolio/"
    siteUrl:   "https://linovibe.github.io/portfolio/"
  },


  /* ==========================================================================
     2. THE ROLES YOU ARE TARGETING  (small pills in the hero)
     ========================================================================== */
  targetRoles: [
    "Project Manager",
    "Change Manager",
    "Business Analyst",
    "Technology / Transformation Consultant",
    "HR Operations"
  ],


  /* ==========================================================================
     3. HEADLINE NUMBERS  (the proof strip — this is what hiring managers scan)
     "value" can contain numbers and symbols. "suffix" is added after it.
     ========================================================================== */
  metrics: [
    { value: "4",       suffix: "yrs",  label: "Delivery experience across 3 global firms" },
    { value: "20–25",   suffix: "/day", label: "Production changes managed, zero failed" },
    { value: "100–200", suffix: "",     label: "Professionals hired & onboarded in one year" },
    { value: "15",      suffix: "",      label: "Team members led and trained" }
  ],


  /* ==========================================================================
     4. ABOUT
     ========================================================================== */
  about: {
    heading: "About",
    kicker:  "Who I am",
    paragraphs: [
      "I'm a technology delivery professional with nearly four years across three global firms — Cognizant, Paragon and Atos Syntel — building and running customer-communication platforms for major UK insurers and utilities including Chubb, Bupa, Liberty, Scottish Power and SSE.",
      "My work sits where technology meets coordination: owning change approvals and controlled releases, keeping senior stakeholders aligned, and turning unclear requirements into plans that ship on time. Alongside delivery I've run hiring for my practice — screening, interviewing and placing 100–200 professionals in a single year — and led the engagement programmes that keep teams motivated.",
      "In September 2026 I start my MBA at Aston University in Birmingham. It's a deliberate step: I want to lead programmes and advise on transformation, not just deliver it."
    ],
    // The "how I work" principles — keeps this section from being just a bio.
    principles: [
      { title: "Controlled, not chaotic", text: "Every change goes through approval gates. A zero-failed-change record isn't luck — it's process." },
      { title: "Evidence over opinion",   text: "I track what matters: defects, turnaround, SLA adherence, capacity. Decisions follow the data." },
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
      title:   "Legacy Forms Modernisation for a Global Insurer",
      client:  "Chubb (UK & Australia)",
      org:     "Cognizant",
      period:  "2025 — Present",
      role:    "Technical Project Manager / Programmer Analyst",
      // The short line shown on the closed card
      summary: "Migrated an insurer's legacy communication forms onto a modern platform — delivered with zero UAT defects at go-live.",
      context: "Chubb's customer communications ran on legacy Xpression forms that were slow to change and inconsistent in branding. The programme needed migrating to Quadient without disrupting live customer communications.",
      actions: [
        "Led the migration of legacy forms to Quadient, rebuilding them as reusable blocks and templates.",
        "Created Business Templates and Style Masters so every communication stayed on-brand and consistent.",
        "Managed changeset promotion across TEST, UAT and PROD with full approval-gate compliance.",
        "Led a 15-member team across Agile and Waterfall delivery, tracking work on JIRA and ServiceNow and reporting status daily to senior stakeholders.",
        "Trained all 15 team members on the platform from the ground up."
      ],
      results: [
        { value: "0",    label: "UAT defects at go-live" },
        { value: "~30%", label: "Higher development efficiency" },
        { value: "~40%", label: "Less reliance on external hiring" }
      ],
      tags: ["Migration Delivery", "Change Management", "Team Leadership", "Quadient Inspire", "Agile & Waterfall"]
    },
    {
      title:   "Scaling the Team Behind the Delivery",
      client:  "Internal — Technology Competency",
      org:     "Cognizant",
      period:  "2025 — Present",
      role:    "Resourcing & Talent Lead (alongside delivery)",
      summary: "Owned hiring end-to-end for the practice — onboarding 100–200 professionals in a single year and keeping projects fully staffed.",
      context: "Delivery commitments were growing faster than the team could staff them, and unfilled roles were putting billable project work at risk.",
      actions: [
        "Ran hiring end-to-end: sourcing, screening and technical-panel interviews across technology competencies.",
        "Mapped every candidate to Service Orders (SOs) and project skill requirements so the right people landed on the right work.",
        "Coordinated onboarding and induction — access, documentation and ramp-up.",
        "Ran access and process-compliance audits to keep hiring records audit-ready.",
        "Introduced gamified Mentimeter feedback sessions to surface team issues early, escalating them to senior management, and founded 'GammiFriday', a monthly department-wide engagement event."
      ],
      results: [
        { value: "100–200", label: "Hired & onboarded in one year" },
        { value: "~20%",    label: "Faster new-joiner ramp-up" },
        { value: "100%",    label: "Audit-ready records" }
      ],
      tags: ["Talent Acquisition", "Workforce Planning", "Onboarding", "Employee Engagement", "Compliance"]
    },
    {
      title:   "Controlled Change at Scale for UK Utilities & Insurers",
      client:  "Liberty · Scottish Power · Bupa · SSE · Paragon",
      org:     "Paragon Customer Communications (UK) · Atos Syntel",
      period:  "2022 — 2025",
      role:    "Change Manager · PMO · CCM Developer",
      summary: "Ran 20–25 production changes a day across four UK clients with a zero-failed-change record, while owning PMO governance.",
      context: "High-volume customer communications for four UK brands meant constant production change — and any failed deployment would hit live customer letters, bills and statements.",
      actions: [
        "Acted as change manager, moving 20–25 changesets per day across TEST-UAT and TEST-PROD, approving changes and assigning tasks to the team.",
        "Owned PMO governance for the India delivery centre — RAID logs, governance trackers, planning and status reporting across 60+ activities.",
        "Analysed business requirements and built customer communication templates, maintaining style masters for brand consistency.",
        "Ran production support: debugged incidents via Scaler job IDs, monitored services and resubmitted failed jobs after queue or network failures.",
        "Standardised recurring procedures and documentation, and mentored junior team members."
      ],
      results: [
        { value: "0",    label: "Failed deployments" },
        { value: "~15%", label: "Fewer repeat issues after standardisation" },
        { value: "4",    label: "UK enterprise clients supported" }
      ],
      tags: ["Change & Release", "PMO Governance", "RAID / Risk", "Production Support", "Stakeholder Management"]
    }
  ],


  /* ==========================================================================
     6. CAREER TIMELINE
     ========================================================================== */
  experienceHeading: "Experience",
  experienceKicker:  "Career",
  experience: [
    {
      role:    "Programmer Analyst — Delivery & Resourcing",
      company: "Cognizant",
      meta:    "Client: Chubb (UK & Australia) · India",
      period:  "Jul 2025 — Present",
      points: [
        "Led a 15-member team on the Xpression-to-Quadient migration, delivered with zero UAT defects.",
        "Owned end-to-end hiring for the practice — 100–200 professionals onboarded in a year.",
        "Awarded the Cognizant Cheers Award for delivery excellence and clean deployments."
      ]
    },
    {
      role:    "Quadient Analyst & PMO",
      company: "Paragon Customer Communications (UK)",
      meta:    "Clients: Liberty, Scottish Power, Bupa, SSE · India",
      period:  "Feb 2025 — Jul 2025",
      points: [
        "Managed 20–25 daily production changes with a zero-failed-change record.",
        "Owned PMO governance — RAID logs, planning and reporting across 60+ activities.",
        "Built customer communication templates and multi-format outputs (PDF / JSON)."
      ]
    },
    {
      role:    "Associate Consultant — Change Manager",
      company: "Atos Syntel",
      meta:    "Client: Paragon Customer Communications (UK) · India",
      period:  "Sep 2022 — Feb 2025",
      points: [
        "Change manager for the delivery team, coordinating controlled releases with full audit compliance.",
        "Supported the Delivery Director on planning, progress tracking and status reporting.",
        "Delivered consistently — earned a direct in-house move to the client, Paragon."
      ]
    }
  ],


  /* ==========================================================================
     7. SKILLS
     ========================================================================== */
  skillsHeading: "Capabilities",
  skillsKicker:  "What I bring",
  skills: [
    { group: "Project & Delivery",  items: ["Project & Programme Management", "Migration Delivery", "Planning & Scheduling", "RAID / Risk Governance", "PMO Operations", "Agile & Waterfall"] },
    { group: "Change & Release",    items: ["Change Management", "Release Governance (TEST/UAT/PROD)", "Approval & Audit Compliance", "Production Support", "Incident Resolution"] },
    { group: "People & Talent",     items: ["Talent Acquisition & Interviewing", "Workforce & Resource Planning", "Onboarding & Induction", "Team Leadership (15+)", "Training & Mentoring", "Employee Engagement"] },
    { group: "Business & Analysis", items: ["Requirements Analysis", "Stakeholder Management", "Status Reporting", "Process Improvement", "Documentation"] },
    { group: "Technology",          items: ["Quadient Inspire (Designer, Interactive, Scaler, ICM)", "JavaScript", "HTML / CSS", "JSON", "MySQL", "RabbitMQ", "Sefas"] },
    { group: "Tools & Data",        items: ["JIRA", "ServiceNow", "Microsoft Excel", "Microsoft Office Suite", "Power BI (Basic)", "Generative AI (Claude)"] }
  ],


  /* ==========================================================================
     8. EDUCATION  (set highlight: true on the one to stand out)
     ========================================================================== */
  educationHeading: "Education & Certifications",
  educationKicker:  "Credentials",
  education: [
    {
      highlight: true,
      period: "Sep 2026 — Sep 2027",
      degree: "MBA — Master of Business Administration",
      school: "Aston University · Birmingham, UK",
      detail: "Incoming. Focused on strategy, leadership and transformation."
    },
    {
      highlight: false,
      period: "2024",
      degree: "B.Tech — Electronics & Communication Engineering",
      school: "India",
      detail: ""
    }
  ],

  certifications: [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Power BI (Basic)",
    "Quadient Inspire — Designer",
    "Quadient Inspire — Scaler",
    "Quadient Inspire — Interactive",
    "Claude: AI Fluency for Small Businesses",
    "Claude Code in Action",
    "Claude 101"
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
    text:    "I'm open to project management, change management, business analysis, consulting and HR operations roles in the UK — including internships and part-time work alongside my MBA.",
    // Availability note shown as a small badge. Leave "" to hide.
    availability: "Available from September 2026 · Birmingham, UK"
  },


  /* ==========================================================================
     11. LOOK & FEEL
     ========================================================================== */
  settings: {
    // Accent colour used for links, buttons and highlights.
    accent: "#2f6df6",
    // Which theme loads first for new visitors: "light", "dark", or "system".
    defaultTheme: "system",
    // Show the little scroll-progress bar at the very top of the page?
    showScrollProgress: true,
    footerNote: "Built and maintained by Saikireeti Yenugula."
  }

};
