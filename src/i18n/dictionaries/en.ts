/**
 * English copy, the source dictionary.
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
    bio: "Your customers are already searching for what you offer. Make sure they find you instead of your competitors. I build fast, modern landing pages, web apps, and dashboards that help your business get noticed, build trust, and turn more visitors into paying customers.",
    cta: "Start Your Project",
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
          "Conversion and focused pages built to load fast and turn visitors into enquiries, not just look good in a screenshot.",
        points: [
          "Conversion and optimized layout",
          "Modern design",
          "Google Analytics",
          "Visible on Google",
        ],
      },
      "web-apps": {
        title: "Web Application Development",
        description:
          "Interactive, data-driven products with authentication, real-time updates and an API layer that holds up as the app grows.",
        points: [
          "Security",
          "Auth & role-based access",
          "REST APIs and integrations",
          "Real-time features",
        ],
      },
      dashboards: {
        title: "System & Management Dashboards",
        description:
          "Admin panels and analytics dashboards that turn raw activity into clear, actionable data, from user engagement and leaderboards to sales revenue and order tracking.",
        points: [
          "Custom admin panels",
          "Reporting",
          "Data tables & visual insights",
          "Real-time metrics tracking"
        ],
      },
    },
  },
  skills: {
    eyebrow: "// the toolkit",
    titleLead: "Tech I reach for",
    titleAccent: "every day",
    intro:
      "Grouped by where it sits in the stack. Depth over novelty, these are the tools I have shipped production work with.",
    categories: {
      frontend: {
        label: "Frontend",
        blurb:
          "Component-driven interfaces built with React and Next.js, typed end to end and styled with a design-token system rather than ad-hoc CSS.",
      },
      backend: {
        label: "Backend",
        blurb:
          "APIs, authentication and real-time layers, from Next.js route handlers to standalone Node services, with schema-safe database access.",
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
          "Version control, CI and the hosted services a project leans on once it is live, deployment, edge, storage, media and error tracking.",
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
    /** Label on the card link that opens the project’s case study page. */
    caseStudy: "Case study",
    /** `{project}` is replaced with the project title. */
    sourceCode: "{project} source code on GitHub",
    /** Labels for the button that reveals the rest of the grid. */
    showMore: "Show more projects",
    showLess: "Show fewer projects",
    items: {
      "dental-clinic": {
        title: "Dental Clinic Landing Page",
        description:
          "A conversion-focused marketing site with an integrated booking flow, built to turn visitors into scheduled appointments, backed by a Sanity CMS so the clinic can update content without touching code.",
        imageAlt:
          "Dental clinic website homepage with an appointment booking panel",
      },
      "Event Ticketing Platform": {
        title: "Event Booking & Sales website",
        description:
          "A ticketing site with event browsing, search, and a two-step checkout, backed by an admin dashboard for managing events, revenue, and orders in real time.",
        imageAlt: "Driving school landing page showing course cards and pricing",
      },
      "English School": {
        title: "English School",
        description:
          "A Landing page with a 3D animated hero, scroll-pinned course walkthrough, and a token-based design system, built for a smooth, cinematic scroll from first impression to enrollment.",
        imageAlt: "Analytics dashboard with charts, KPI tiles and a data table",
      },
      "Architect": {
        title: "Architecture Studio Landing Page",
        description:
          "A showcase site for an architecture firm built to feel as refined as the work it presents, smooth scrolling, elegant reveals, and a design language that says 'premium' before a single word is read.",
        imageAlt: "Chat application with a conversation list and message thread",
      },
      "workout-community": {
        title: "workout-community website",
        description:
          "A community-driven fitness app where users join category and level-based challenges, track streaks, and compete on leaderboards, built to keep people coming back daily, not just signing up once.",
        imageAlt:
          "Community fitness app showing active challenges and a leaderboard",
      },
      "gym": {
        title: "Gym Landing Page",
        description:
          "A high-energy landing page built to turn visitors into members with bold visuals, clear class and membership info, and a straightforward path from browsing to signing up.",
        imageAlt: "Gym landing page showing class schedules and membership plans",
      },
      "HR-System": {
        title: "HR-System",
        description:
          "A small internal tool for keeping employees, departments and performance reviews in one place.",
        imageAlt:
          "HR system employee table with photos, positions, departments and edit actions",
      },
    },
  },
  /**
   * Case study pages, one per project with an entry in
   * `src/data/case-studies.ts`. The chrome (headings, labels, CTA) is shared by
   * every page; everything under `items` is per project.
   *
   * TODO: replace the placeholder prose below with the real story of each
   * project. `blocks` is keyed by the block ids in `src/data/case-studies.ts`:
   * add a screenshot there and it needs the same key here and in `fr.ts`.
   */
  caseStudies: {
    eyebrow: "// case study",
    back: "Back to projects",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    /** Labels for the three facts listed under the title. */
    meta: {
      builtFor: "Built for",
      timeline: "Timeline",
      type: "Type",
    },
    challengeTitle: "The challenge",
    approachTitle: "What I built",
    outcomeTitle: "The outcome",
    featuresTitle: "What it does",
    walkthroughTitle: "Inside the product",
    walkthroughIntro:
      "A screen-by-screen look at the interface, from what the user sees to the dashboard that runs it.",
    stackTitle: "Built with",
    cta: {
      title: "Want something like this?",
      body: "Tell me what your business needs and I will tell you what it takes to build it.",
      action: "Start a project",
    },
    items: {
      "Event Ticketing Platform": {
        title: "Event Booking & Ticket Sales",
        tagline:
          "A ticketing platform where visitors find an event and check out in two steps, and the organiser watches sales land in real time.",
        summary:
          "TicketFlow is an event ticketing platform for people who want to discover and book events without a clunky checkout. It handles everything from browsing events by category to a two-step booking flow, backed by an admin dashboard that tracks sales, revenue, and orders in real time.",
        coverAlt: "Event ticketing platform homepage listing upcoming events",
        meta: {
          builtFor: "Event organisers and venues",
          timeline: "2 weeks",
          type: "Web application",
        },
        challenge:
          "Event organizers needed a way to list events and sell tickets without stitching together a website, a payment flow, and a spreadsheet to track who bought what. Buyers needed a simple path from 'browsing' to 'booked', no account confusion, no dead-end forms.",
        approach:
          "A full booking flow with search, category filters, and a two-step checkout, paired with an admin panel for creating and managing events. Orders, revenue, and ticket sales are tracked live, with charts that turn raw transactions into numbers an owner can actually read.",
        outcome:
          "Organizers get a live view of how each event is performing, tickets sold, revenue by category, order history, without touching a database or asking a developer for a report. Buyers get a fast, low-friction path from finding an event to holding a ticket.",
        features: [
          "Browse and search events by date, category and venue",
          "Two-step checkout with seat and quantity selection",
          "Live admin dashboard for revenue, orders and attendance",
        ],
        blocks: {
          "browse-events": {
            title: "Pick event",
            body: "Each event page lays out everything a buyer needs before committing, date, time, location, price, and a full description, so there's no guessing before checkout starts.",
            alt: "Event listing page with filters and event cards",
          },
          checkout: {
            title: "Checkout in two steps",
            body: "A short who's going form collects the buyer's name, email, and phone, tied to the exact event and price, then moves straight to confirmation, no extra screens, no account required to get started.",
            alt: "Checkout screen showing ticket selection and payment summary",
          },
          "my-tickets": {
            title: "The tickets you already hold",
            body: "'My Tickets' pulls up everything a buyer has purchased in one place, event details, quantity, total price, and an order ID they can reference if anything needs checking.",
            alt: "My Tickets page listing purchased tickets with QR codes and event dates",
          },
          "admin-overview": {
            title: "The admin dashboard",
            body: "Revenue, tickets sold, and active events at a glance, with a 7-day sales trend and a category breakdown showing where the money's coming from, plus a quick insight flagging which category to double down on.",
            alt: "Admin dashboard overview with KPI tiles and a revenue chart",
          },
          "admin-events": {
            title: "City Sales Distribution",
            body: "A ranked breakdown of tickets sold and revenue by city, searchable and paginated, with a side-by-side visual split so it's clear at a glance where sales are concentrated, plus a quick insight on which city to target next.",
            alt: "Event management screen with a create-event form and ticket types",
          },
          "admin-revenue": {
            title: "Event Sales",
            body: "A searchable, ranked table of every event by tickets sold and gross revenue, with category and location at a glance, so it's easy to spot which events are actually performing better.",
            alt: "Revenue reporting screen with sales breakdown per event over time",
          },
          orders: {
            title: "Manage Events",
            body: "Full control over every event listing. Search by title, filter by category, and view, edit, or delete events directly from the table, with a quick-create button for adding new ones.",
            alt: "Orders table with status filters and a detail panel",
          },
        },
      },
      "workout-community": {
        title: "FitHub",
        tagline:
          "A community fitness platform where members join real challenges, log every session, and climb a leaderboard that only rewards showing up.",
        summary:
          "FitHub is a fitness platform built around challenges rather than solo tracking. Members pick a challenge by category and difficulty, log each session as they go, and earn points that place them on a public leaderboard, with an admin dashboard behind it managing users, challenges and site analytics.",
        coverAlt: "FitHub home page showing workout challenges and the community feed",
        meta: {
          builtFor: "Fitness communities and coaches",
          timeline: "3 weeks",
          type: "Web application",
        },
        challenge:
          "Fitness apps are good at recording what you did and bad at making you come back. Most people do not quit because tracking is hard, they quit because nothing is at stake and nobody notices. The problem was building something where consistency is visible, comparable, and worth defending.",
        approach:
          "The challenge is the unit everything hangs off: each one carries a category, a difficulty level and reward points. Joining links a member to it, and every logged workout, duration, intensity, calories, how it felt, feeds the points that drive the leaderboard. Behind it sits an admin side for managing members, challenges and who is allowed to stay.",
        outcome:
          "Members watch their streak and their rank move the same day they train, which is the part that keeps them logging. The operator gets a dashboard that answers who is active, which challenges are pulling people in, and where the traffic is coming from, without opening the database.",
        features: [
          "Challenges by category and difficulty, from cardio to HIIT",
          "Workout logging with duration, intensity, calories and how it felt",
          "Points-based leaderboard ranking every member",
          "Personal challenge tracking with streaks and progress",
          "Admin dashboard for users, challenges, bans and site analytics",
        ],
        blocks: {
          "my-challenges": {
            title: "Your challenges, in one place",
            body: "Everything a member has joined, with active and finished kept apart. Each card carries the progress bar, the streak, the days left and the button to log today's session, so the next thing to do is never more than one tap away.",
            alt: "My Challenges page with progress, streak and days remaining on each challenge",
          },
          "admin-dashboard": {
            title: "The dashboard on opening",
            body: "Members, live challenges, sessions logged and calories burned across the whole platform, with a week of challenge joins underneath. It answers whether the community grew this week before anyone has to ask.",
            alt: "Admin dashboard with member, challenge, workout and calorie totals above a weekly joins chart",
          },
          "training-habits": {
            title: "How the community actually trains",
            body: "Which categories people pick, how hard they push, how they feel afterwards and what time of day they show up. It turns a pile of individual sessions into a picture of what this audience wants more of.",
            alt: "Charts showing favourite categories, workout intensity, member levels and preferred training times",
          },
          "top-challenges": {
            title: "Which challenges are working",
            body: "Every challenge ranked by how many people joined it, next to its category, level, length and reward. The ones worth running again and the ones nobody wanted show up in the same glance.",
            alt: "Top challenges table ranked by participants with category, level, days and reward",
          },
          "visitor-analytics": {
            title: "Who is on the site right now",
            body: "Live visitors, sessions, average time spent and bounce rate, with a daily curve across the month. Enough to tell a quiet week apart from a page that has quietly broken.",
            alt: "Visitor analytics with live visitor count, sessions, bounce rate and a daily visitors chart",
          },
          "traffic-sources": {
            title: "Where the traffic comes from",
            body: "Sources, devices, countries, browsers and the pages people actually land on. Enough to know which channel is worth the effort and which one never was.",
            alt: "Traffic sources, devices, top countries, top pages and browser breakdown",
          },
          "manage-challenges": {
            title: "Running the challenge catalogue",
            body: "Search it, filter by category, level or status, then open, edit or remove any challenge from the same table. Putting a new one up is one button away.",
            alt: "Challenge management table with search, filters, status and row actions",
          },
          "members-overview": {
            title: "Keeping an eye on the members",
            body: "How many members there are, how many are mid-challenge, how many have gone quiet, and who signed up this week. That third number is the useful one, because it names the people worth winning back.",
            alt: "Members overview with totals, members in a challenge, inactive members and weekly signups",
          },
          "member-list": {
            title: "Every member, one row each",
            body: "Level, preferred training time, challenges joined, sessions logged and the day they arrived, searchable by name. It is the difference between knowing a number went up and knowing who moved it.",
            alt: "Member table listing level, preferred workout time, challenges, workouts and join date",
          },
        },
      },
      "HR-System": {
        title: "HR Management System",
        tagline:
          "A small internal tool that keeps employees, departments and performance reviews in one place.",
        summary:
          "A basic HR app I built as a practice project. It stores employees and the departments they belong to, keeps one performance review per employee, and shows a short overview of the numbers. That is the whole scope.",
        coverAlt:
          "Employee list with profile pictures, names, positions and departments",
        meta: {
          builtFor: "A small HR team",
          timeline: "1 week",
          type: "Internal web app",
        },
        challenge:
          "Employee details, departments and review notes usually end up in separate files, so a simple question like who works in which department takes longer to answer than it should.",
        approach:
          "Four screens: employees, departments, reviews and an overview. Each one lists what exists and lets you add, edit or delete an entry, with an employee profile page behind each row.",
        outcome:
          "Everything sits in one place, and the overview gives a quick read on headcount, salaries and ratings. It is a small practice project rather than a finished product.",
        features: [
          "Add, edit and delete employees",
          "Departments with a name, a location and a creation date",
          "Search employees by name or by department",
          "A profile page per employee with personal and job details",
          "One performance review per employee, with a rating and notes",
          "An overview page with basic totals and two charts",
        ],
        blocks: {
          employees: {
            title: "The employee list",
            body: "The screen the app opens on: every employee with their photo, position and department, and a search box for finding someone by name or by the department they are in.",
            alt: "Employee table with profile pictures, positions, departments and edit and delete buttons",
          },
          departments: {
            title: "Departments",
            body: "The departments employees are assigned to, each with a location and the date it was created. Adding, renaming or removing one happens here.",
            alt: "Departments table with name, date of creation, location and actions",
          },
          "employee-profile": {
            title: "An employee's profile",
            body: "Opening an employee shows the full record on one page: photo, position, department, email, phone, date of birth and hire date.",
            alt: "Employee profile page showing photo, position, email, phone, date of birth and hire date",
          },
          "employment-details": {
            title: "Job details and the latest review",
            body: "Further down the same page: position, department and annual salary, followed by that employee's latest review with its rating and the notes behind it.",
            alt: "Employment details with position, department and salary, above a performance review with a star rating and notes",
          },
          reviews: {
            title: "Reviews",
            body: "Every review in one table, with the note, the date and the rating. The buttons above narrow the list down to a rating range.",
            alt: "Reviews table with employee name, note, date and rating, and buttons filtering by rating range",
          },
          reports: {
            title: "A short overview",
            body: "Totals at the top: how many employees, the average, highest and lowest salary, and the average rating. Below them, employees per department and the average rating per department.",
            alt: "Overview page with employee and salary totals, a pie chart of employees per department and a bar chart of average rating per department",
          },
        },
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
      "why-website": {
        question: "Why should I have a website at all?",
        answer:
          "Your customers are already searching online. If they do not find you, they find your competitor instead, and you never even hear about the sale you lost. A site keeps them with you and sells for you, day and night.",
      },
      google: {
        question: "Will people find me on Google?",
        answer:
          "Yes. Every page is built to be found, so your business shows up when someone searches for what you do.",
      },
      speed: {
        question: "How fast can it be ready?",
        answer:
          "A few weeks in most cases. You get an exact date before we start, and I keep to it.",
      },
      follow: {
        question: "Will I know what is happening while you build?",
        answer:
          "Yes, step by step. You see the site as it takes shape and approve each stage, so nothing at the end is a surprise.",
      },
      support: {
        question: "What if I need help after launch?",
        answer:
          "I am reachable 24/7. Write to me any time, whether it is a question, a small change or something urgent.",
      },
      problems: {
        question: "What if something goes wrong on the site?",
        answer:
          "I fix it. Any problem you or your visitors run into, send it over and I take care of it.",
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
          "Yes to both, one-off builds and ongoing retainers where I act as the development side of a small team. Send a message with a rough scope and I will reply within a day with whether I am a good fit.",
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
      successBody: "Thanks for reaching out, I’ll reply within a day.",
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
    title: "Abdelhamid Oug-Lhacen, Full Stack Developer",
    description:
      "Full stack developer building landing pages, web applications and management dashboards with Next.js, TypeScript and Node.js.",
    ogDescription:
      "Full stack developer building landing pages, web applications and management dashboards.",
  },
};

/** Every other locale must match this shape exactly. */
export type Dictionary = typeof en;
