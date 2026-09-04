/**
 * English copy — the source dictionary.
 *
 * Its shape defines the `Dictionary` type, so every other locale is checked
 * against it at build time: a missing or misspelled key in `fr.ts` fails
 * `npm run build` rather than silently rendering `undefined`.
 *
 * The `items` maps are keyed by the ids in `src/data`, which is what keeps
 * structure (icons, images, links) separate from prose.
 */
export const en = {
  nav: {
    sections: "Sections",
    footer: "Footer",
    services: "Services",
    skills: "Stack",
    projects: "Projects",
    faq: "FAQ",
    contact: "Contact",
    hireMe: "Hire me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    skipToContent: "Skip to content",
    /** aria-label on the switcher; `{lang}` is replaced with the target. */
    switchLanguage: "Switch to {lang}",
  },
  hero: {
    availability: "Available for freelance work",
    role: "Full Stack Developer",
    bio: "I build web products end to end — from the interface a customer touches to the API and database behind it. My work is fast, accessible and typed all the way through, because a site that looks good but loads slowly has already lost the visitor. Landing pages, web apps and internal dashboards are where I spend most of my time.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
  },
  social: {
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    email: "Email",
  },
  services: {
    eyebrow: "// what I do",
    titleLead: "Services built around",
    titleAccent: "shipping",
    intro:
      "Three things I do well, rather than a list of everything I could technically take on.",
    items: {
      "landing-pages": {
        title: "Landing Page Development",
        description:
          "Conversion-focused pages built to load fast and turn visitors into enquiries — not just look good in a screenshot.",
        points: [
          "Conversion-optimised layout",
          "Core Web Vitals budget",
          "SEO & analytics wired in",
        ],
      },
      "web-apps": {
        title: "Web Application Development",
        description:
          "Interactive, data-driven products with authentication, real-time updates and an API layer that holds up as the app grows.",
        points: [
          "Auth & role-based access",
          "REST APIs and integrations",
          "Real-time features",
        ],
      },
      dashboards: {
        title: "System & Management Dashboards",
        description:
          "Admin panels and internal tools that make messy operations legible — built around the workflow your team actually runs.",
        points: [
          "Custom admin panels",
          "Reporting & data tables",
          "Workflow automation",
        ],
      },
    },
  },
  skills: {
    eyebrow: "// the toolkit",
    titleLead: "Tech I reach for",
    titleAccent: "every day",
    intro:
      "Grouped by where it sits in the stack. Depth over novelty — these are the tools I have shipped production work with.",
    categories: {
      frontend: {
        label: "Frontend",
        blurb:
          "Component-driven interfaces built with React and Next.js, typed end to end and styled with a design-token system rather than ad-hoc CSS.",
      },
      backend: {
        label: "Backend",
        blurb:
          "APIs, authentication and real-time layers — from Next.js route handlers to standalone Node services, with schema-safe database access.",
      },
      databases: {
        label: "Databases",
        blurb:
          "Relational and document stores, modelled for the queries the product actually makes and migrated without downtime.",
      },
      testing: {
        label: "Testing",
        blurb:
          "Unit tests around the logic that would be expensive to get wrong, and end-to-end tests that drive the real UI in a real browser.",
      },
      cloud: {
        label: "Cloud & Infrastructure Tools",
        blurb:
          "Version control, CI and the hosted services a project leans on once it is live — deployment, edge, storage, media and error tracking.",
      },
    },
  },
  projects: {
    eyebrow: "// selected work",
    titleLead: "Recent",
    titleAccent: "projects",
    intro:
      "A few things I have built. Each one links to a live demo and the source where it is public.",
    liveDemo: "Live demo",
    /** `{project}` is replaced with the project title. */
    sourceCode: "{project} source code on GitHub",
    items: {
      "dental-clinic": {
        title: "Dental Clinic Platform",
        description:
          "Marketing site plus a booking flow, with a Sanity-backed CMS so the clinic edits its own content.",
        imageAlt:
          "Dental clinic website homepage with an appointment booking panel",
      },
      "driving-school": {
        title: "Driving School Landing Page",
        description:
          "A single-page site for a driving school, built on a strict design-token system and scroll-linked motion.",
        imageAlt: "Driving school landing page showing course cards and pricing",
      },
      "admin-dashboard": {
        title: "Operations Dashboard",
        description:
          "Internal admin panel with role-based access, live metrics and exportable reporting tables.",
        imageAlt: "Analytics dashboard with charts, KPI tiles and a data table",
      },
      "chat-app": {
        title: "Real-Time Chat App",
        description:
          "Authenticated messaging with presence and typing indicators pushed over websockets.",
        imageAlt: "Chat application with a conversation list and message thread",
      },
    },
  },
  faq: {
    eyebrow: "// questions",
    titleLead: "Frequently",
    titleAccent: "asked",
    intro:
      "The things people usually want to know before we start talking specifics.",
    items: {
      services: {
        question: "What kind of projects do you take on?",
        answer:
          "Mainly three: conversion-focused landing pages, full web applications with authentication and a real backend, and internal dashboards or management systems. If a project mixes all three, that is usually the most interesting kind.",
      },
      process: {
        question: "How do you work through a project?",
        answer:
          "We start with a short call to pin down the goal and scope. I then send a written breakdown with milestones and a fixed price. From there you get a staging link that updates as I build, so you review real screens rather than mockups, and nothing lands as a surprise at the end.",
      },
      timeline: {
        question: "How long does a project usually take?",
        answer:
          "A landing page is typically one to two weeks. A web application or dashboard runs from four weeks upward depending on how many features and integrations it needs. You get a firm timeline in the proposal before any work starts.",
      },
      stack: {
        question: "Why React and Next.js for everything?",
        answer:
          "Next.js gives server rendering, image optimisation and API routes in one framework, which means fast pages and a backend without running separate infrastructure. Everything is written in TypeScript, so whoever maintains the project after me gets the same guardrails I had.",
      },
      handover: {
        question: "Do I own the code, and what happens after launch?",
        answer:
          "You own the repository and every asset outright. I hand over documented code, deploy it to your hosting, and stay available for a support window after launch to cover fixes and small changes.",
      },
      availability: {
        question: "Are you available for freelance or long-term collaboration?",
        answer:
          "Yes to both — one-off builds and ongoing retainers where I act as the development side of a small team. Send a message with a rough scope and I will reply within a day with whether I am a good fit.",
      },
    },
  },
  contact: {
    eyebrow: "// get in touch",
    titleLead: "Let’s build",
    titleAccent: "something",
    intro:
      "Tell me what you have in mind. I read every message and reply within a day.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder:
        "What are you building? A sentence or two about the goal and timeline is plenty to start.",
      send: "Send message",
      sending: "Sending…",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please give me a little more detail (10 characters or more).",
      },
      successTitle: "Message sent",
      successBody: "Thanks for reaching out — I’ll reply within a day.",
      errorTitle: "Something went wrong",
      errorBody: "Please try again, or reach me on WhatsApp.",
    },
    direct: {
      title: "Reach me directly",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Start a chat",
      basedInLabel: "Based in",
      location: "Agadir, Morocco",
      responseTitle: "Response time",
      responseBody: "Usually within 24 hours, Monday to Saturday.",
    },
  },
  whatsapp: {
    /** Prefilled message body for the wa.me link. */
    prefill: "Hi Abdelhamid, I'd like to talk about a project.",
    ariaLabel: "Chat on WhatsApp",
    landmark: "Quick contact",
  },
  footer: {
    role: "Full Stack Developer",
    location: "Agadir, Morocco",
    builtWith: "Built with Next.js and Tailwind CSS.",
  },
  meta: {
    title: "Abdelhamid Oug-Lhacen — Full Stack Developer",
    description:
      "Full stack developer building landing pages, web applications and management dashboards with Next.js, TypeScript and Node.js.",
    ogDescription:
      "Full stack developer building landing pages, web applications and management dashboards.",
  },
};

/** Every other locale must match this shape exactly. */
export type Dictionary = typeof en;
