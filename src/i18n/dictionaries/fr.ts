import type { Dictionary } from "./en";

/**
 * French copy.
 *
 * Typed as `Dictionary`, so TypeScript rejects a missing, extra or misspelled
 * key at build time. Translated for meaning rather than word for word — a few
 * headings are deliberately not literal, because the English ones rely on
 * wordplay that does not survive the crossing.
 */
export const fr: Dictionary = {
  nav: {
    sections: "Sections",
    footer: "Pied de page",
    services: "Services",
    skills: "Stack",
    projects: "Projets",
    faq: "FAQ",
    contact: "Contact",
    hireMe: "Me recruter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    skipToContent: "Aller au contenu",
    switchLanguage: "Passer en {lang}",
  },
  hero: {
    availability: "Disponible pour des missions freelance",
    role: "Développeur Full Stack",
    bio: "Je conçois des produits web rapides et accessibles pour les PME, de l’interface que vos clients manipulent jusqu’à la base de données qui la fait tourner. Si vous n’avez pas encore de site, ou si le vôtre est lent et laborieux, vous perdez des visiteurs avant même qu’ils découvrent ce que vous proposez. Je vous aide à corriger cela avec des landing pages, des applications web et des tableaux de bord qui se chargent instantanément et convertissent mieux.",
    viewProjects: "Voir les projets",
    contactMe: "Me contacter",
  },
  social: {
    github: "Profil GitHub",
    linkedin: "Profil LinkedIn",
    email: "E-mail",
  },
  services: {
    eyebrow: "// ce que je fais",
    titleLead: "Des services pensés pour",
    titleAccent: "livrer",
    intro:
      "Trois choses que je fais bien, plutôt qu’une liste de tout ce que je pourrais techniquement accepter.",
    items: {
      "landing-pages": {
        title: "Création de landing pages",
        description:
          "Des pages orientées conversion, conçues pour charger vite et transformer les visiteurs en demandes — pas seulement pour faire joli en capture d’écran.",
        points: [
          "Mise en page optimisée pour la conversion",
          "Budget Core Web Vitals",
          "SEO et analytics intégrés",
        ],
      },
      "web-apps": {
        title: "Développement d’applications web",
        description:
          "Des produits interactifs pilotés par la donnée, avec authentification, mises à jour en temps réel et une couche API qui tient la charge à mesure que l’application grandit.",
        points: [
          "Authentification et gestion des rôles",
          "API REST et intégrations",
          "Fonctionnalités en temps réel",
        ],
      },
      dashboards: {
        title: "Tableaux de bord et systèmes de gestion",
        description:
          "Des interfaces d’administration et des outils internes qui rendent lisibles des opérations désordonnées — construits autour du flux de travail réel de votre équipe.",
        points: [
          "Panneaux d’administration sur mesure",
          "Reporting et tableaux de données",
          "Automatisation des processus",
        ],
      },
    },
  },
  skills: {
    eyebrow: "// la boîte à outils",
    titleLead: "Les technos que j’utilise",
    titleAccent: "au quotidien",
    intro:
      "Regroupées selon leur place dans la stack. La profondeur plutôt que la nouveauté : ce sont les outils avec lesquels j’ai livré en production.",
    categories: {
      frontend: {
        label: "Frontend",
        blurb:
          "Des interfaces à base de composants avec React et Next.js, typées de bout en bout et stylées par un système de design tokens plutôt qu’au CSS improvisé.",
      },
      backend: {
        label: "Backend",
        blurb:
          "API, authentification et couches temps réel — des route handlers Next.js aux services Node autonomes, avec un accès à la base sûr au niveau du schéma.",
      },
      databases: {
        label: "Bases de données",
        blurb:
          "Bases relationnelles et documentaires, modélisées pour les requêtes que le produit fait réellement et migrées sans interruption de service.",
      },
      testing: {
        label: "Tests",
        blurb:
          "Des tests unitaires sur la logique qu’il coûterait cher de rater, et des tests end-to-end qui pilotent la vraie interface dans un vrai navigateur.",
      },
      cloud: {
        label: "Cloud et infrastructure",
        blurb:
          "Gestion de versions, CI et les services hébergés sur lesquels un projet s’appuie une fois en ligne : déploiement, edge, stockage, médias et suivi des erreurs.",
      },
    },
  },
  projects: {
    eyebrow: "// travaux sélectionnés",
    titleLead: "Projets",
    titleAccent: "récents",
    intro:
      "Quelques réalisations. Chacune renvoie vers une démo en ligne et vers le code source lorsqu’il est public.",
    liveDemo: "Démo en ligne",
    sourceCode: "Code source de {project} sur GitHub",
    items: {
      "dental-clinic": {
        title: "Plateforme pour clinique dentaire",
        description:
          "Site vitrine et parcours de prise de rendez-vous, avec un CMS Sanity pour que la clinique gère elle-même son contenu.",
        imageAlt:
          "Page d’accueil du site d’une clinique dentaire avec un panneau de prise de rendez-vous",
      },
      "driving-school": {
        title: "Landing page d’auto-école",
        description:
          "Un site en une page pour une auto-école, bâti sur un système strict de design tokens et des animations liées au défilement.",
        imageAlt:
          "Landing page d’auto-école présentant les formules de formation et les tarifs",
      },
      "admin-dashboard": {
        title: "Tableau de bord opérationnel",
        description:
          "Panneau d’administration interne avec gestion des rôles, indicateurs en direct et tableaux de reporting exportables.",
        imageAlt:
          "Tableau de bord analytique avec graphiques, indicateurs clés et tableau de données",
      },
      "chat-app": {
        title: "Application de chat en temps réel",
        description:
          "Messagerie authentifiée avec indicateurs de présence et de saisie transmis par websockets.",
        imageAlt:
          "Application de chat avec une liste de conversations et un fil de messages",
      },
    },
  },
  faq: {
    eyebrow: "// questions",
    titleLead: "Questions",
    titleAccent: "fréquentes",
    intro: "Ce que l’on me demande le plus souvent avant d’entrer dans le détail.",
    items: {
      services: {
        question: "Quels types de projets acceptez-vous ?",
        answer:
          "Principalement trois : des landing pages orientées conversion, des applications web complètes avec authentification et un vrai backend, et des tableaux de bord ou systèmes de gestion internes. Quand un projet mêle les trois, c’est en général le plus intéressant.",
      },
      process: {
        question: "Comment se déroule un projet ?",
        answer:
          "On commence par un court appel pour cadrer l’objectif et le périmètre. Je vous envoie ensuite un découpage écrit avec des jalons et un prix fixe. À partir de là, vous recevez un lien de préproduction mis à jour au fil du développement : vous validez de vrais écrans plutôt que des maquettes, et rien ne tombe comme une surprise à la fin.",
      },
      timeline: {
        question: "Combien de temps prend un projet ?",
        answer:
          "Une landing page prend généralement une à deux semaines. Une application web ou un tableau de bord démarre à quatre semaines et dépend du nombre de fonctionnalités et d’intégrations. Le calendrier est ferme et figure dans la proposition avant tout démarrage.",
      },
      stack: {
        question: "Pourquoi React et Next.js pour tout ?",
        answer:
          "Next.js réunit le rendu serveur, l’optimisation des images et les routes API dans un seul framework : des pages rapides et un backend sans infrastructure séparée à maintenir. Tout est écrit en TypeScript, si bien que la personne qui reprendra le projet après moi disposera des mêmes garde-fous.",
      },
      handover: {
        question:
          "Suis-je propriétaire du code, et que se passe-t-il après la mise en ligne ?",
        answer:
          "Vous êtes pleinement propriétaire du dépôt et de tous les fichiers. Je livre un code documenté, je le déploie sur votre hébergement et je reste disponible pendant une période de support après la mise en ligne, pour les correctifs et les petites évolutions.",
      },
      availability: {
        question:
          "Êtes-vous disponible en freelance ou pour une collaboration longue durée ?",
        answer:
          "Les deux — des projets ponctuels comme des forfaits mensuels où je tiens le rôle de la partie développement d’une petite équipe. Envoyez-moi un message avec les grandes lignes et je vous réponds sous un jour pour vous dire si je suis la bonne personne.",
      },
    },
  },
  contact: {
    eyebrow: "// prenons contact",
    titleLead: "Créons",
    titleAccent: "quelque chose",
    intro:
      "Dites-moi ce que vous avez en tête. Je lis chaque message et je réponds sous un jour.",
    form: {
      name: "Nom",
      email: "E-mail",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@entreprise.com",
      messagePlaceholder:
        "Que construisez-vous ? Une ou deux phrases sur l’objectif et le calendrier suffisent pour commencer.",
      send: "Envoyer le message",
      sending: "Envoi…",
      errors: {
        name: "Merci d’indiquer votre nom.",
        email: "Merci d’indiquer une adresse e-mail valide.",
        message: "Merci de m’en dire un peu plus (10 caractères minimum).",
      },
      successTitle: "Message envoyé",
      successBody: "Merci de votre message — je vous réponds sous un jour.",
      errorTitle: "Une erreur est survenue",
      errorBody: "Merci de réessayer, ou joignez-moi sur WhatsApp.",
    },
    direct: {
      title: "Me joindre directement",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Démarrer une discussion",
      basedInLabel: "Basé à",
      location: "Agadir, Maroc",
      responseTitle: "Délai de réponse",
      responseBody: "En général sous 24 heures, du lundi au samedi.",
    },
  },
  whatsapp: {
    prefill: "Bonjour Abdelhamid, j’aimerais parler d’un projet.",
    ariaLabel: "Discuter sur WhatsApp",
    landmark: "Contact rapide",
  },
  footer: {
    role: "Développeur Full Stack",
    location: "Agadir, Maroc",
    builtWith: "Réalisé avec Next.js et Tailwind CSS.",
  },
  meta: {
    title: "Abdelhamid Oug-Lhacen — Développeur Full Stack",
    description:
      "Développeur full stack : landing pages, applications web et tableaux de bord de gestion avec Next.js, TypeScript et Node.js.",
    ogDescription:
      "Développeur full stack : landing pages, applications web et tableaux de bord de gestion.",
  },
};
