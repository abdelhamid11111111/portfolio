import type { Dictionary } from "./en";

/**
 * French copy.
 *
 * Typed as `Dictionary`, so TypeScript rejects a missing, extra or misspelled
 * key at build time. Translated for meaning rather than word for word, a few
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
    bio: "Vos clients cherchent déjà ce que vous proposez. Faites en sorte qu’ils vous trouvent, vous, et pas vos concurrents. Je crée des landing pages, des applications web et des tableaux de bord rapides et modernes qui font remarquer votre activité, inspirent confiance et transforment plus de visiteurs en clients.",
    cta: "Lancez votre projet",
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
          "Des pages orientées conversion, conçues pour charger vite et transformer les visiteurs en demandes, pas seulement pour faire joli en capture d’écran.",
        points: [
          "Mise en page optimisée pour la conversion",
          "Design moderne",
          "Google Analytics",
          "Visible sur Google",
        ],
      },
      "web-apps": {
        title: "Développement d’applications web",
        description:
          "Des produits interactifs pilotés par la donnée, avec authentification, mises à jour en temps réel et une couche API qui tient la charge à mesure que l’application grandit.",
        points: [
          "Sécurité",
          "Authentification et gestion des rôles",
          "API REST et intégrations",
          "Fonctionnalités en temps réel",
        ],
      },
      dashboards: {
        title: "Tableaux de bord et systèmes de gestion",
        description:
          "Des interfaces d’administration et des tableaux de bord analytiques qui transforment l’activité brute en données claires et exploitables, de l’engagement des utilisateurs et des classements jusqu’au chiffre d’affaires et au suivi des commandes.",
        points: [
          "Panneaux d’administration sur mesure",
          "Reporting et tableaux de données",
          "Tableaux de données et visualisations",
          "Suivi des métriques en temps réel",
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
          "API, authentification et couches temps réel, des route handlers Next.js aux services Node autonomes, avec un accès à la base sûr au niveau du schéma.",
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
    caseStudy: "Étude de cas",
    sourceCode: "Code source de {project} sur GitHub",
    showMore: "Voir plus de projets",
    showLess: "Voir moins de projets",
    items: {
      "dental-clinic": {
        title: "Landing page pour clinique dentaire",
        description:
          "Un site vitrine orienté conversion avec un parcours de prise de rendez-vous intégré, conçu pour transformer les visiteurs en rendez-vous confirmés, adossé à un CMS Sanity pour que la clinique mette à jour son contenu sans toucher au code.",
        imageAlt:
          "Page d’accueil du site d’une clinique dentaire avec un panneau de prise de rendez-vous",
      },
      "Event Ticketing Platform": {
        title: "Site de billetterie et de vente en ligne",
        description:
          "Un site de billetterie avec navigation par événement, recherche et réservation en deux étapes, adossé à un tableau de bord d’administration pour gérer les événements, le chiffre d’affaires et les commandes en temps réel.",
        imageAlt:
          "Page d’accueil d’une plateforme de billetterie présentant les événements à venir",
      },
      "English School": {
        title: "École d’anglais",
        description:
          "Une landing page avec une section héro animée en 3D, une présentation des cours épinglée au défilement et un design system fondé sur des tokens, pensée pour un défilement fluide et cinématographique, de la première impression jusqu’à l’inscription.",
        imageAlt:
          "Landing page d’une école d’anglais avec une section héro animée en 3D",
      },
      "Architect": {
        title: "Landing page de studio d’architecture",
        description:
          "Un site vitrine pour une agence d’architecture, conçu pour être aussi soigné que les projets qu’il présente : défilement fluide, apparitions élégantes et un langage visuel qui dit « premium » avant même le premier mot.",
        imageAlt:
          "Landing page d’un studio d’architecture présentant des projets en plein écran",
      },
      "workout-community": {
        title: "Site workout-community",
        description:
          "Une application de fitness communautaire où les membres rejoignent des défis par catégorie et par niveau, suivent leurs séries et s’affrontent sur des classements, pensée pour qu’on y revienne chaque jour et pas seulement le jour de l’inscription.",
        imageAlt:
          "Application de fitness communautaire affichant les défis en cours et le classement",
      },
      "gym": {
        title: "Landing page de salle de sport",
        description:
          "Une landing page conçue pour transformer les visiteurs en adhérents : visuels affirmés, informations claires sur les cours et les abonnements, et un chemin direct de la découverte à l’inscription.",
        imageAlt:
          "Landing page de salle de sport présentant le planning des cours et les formules d’abonnement",
      },
      "HR-System": {
        title: "HR-System",
        description:
          "Un petit outil interne qui réunit les collaborateurs, les départements et les évaluations au même endroit.",
        imageAlt:
          "Tableau des collaborateurs d’un système RH avec photos, postes, départements et actions de modification",
      },
    },
  },
  caseStudies: {
    eyebrow: "// étude de cas",
    back: "Retour aux projets",
    liveDemo: "Démo en ligne",
    sourceCode: "Code source",
    meta: {
      builtFor: "Conçu pour",
      timeline: "Durée",
      type: "Type",
    },
    challengeTitle: "Le problème",
    approachTitle: "Ce que j’ai construit",
    outcomeTitle: "Le résultat",
    featuresTitle: "Ce que ça fait",
    walkthroughTitle: "À l’intérieur du produit",
    walkthroughIntro:
      "Un parcours écran par écran, de ce que voit l’utilisateur au tableau de bord qui fait tourner le tout.",
    stackTitle: "Réalisé avec",
    cta: {
      title: "Vous voulez quelque chose comme ça ?",
      body: "Dites-moi ce dont votre activité a besoin et je vous dis ce qu’il faut pour le construire.",
      action: "Démarrer un projet",
    },
    items: {
      "Event Ticketing Platform": {
        title: "Réservation d’événements et vente de billets",
        tagline:
          "Une plateforme de billetterie où le visiteur trouve son événement et réserve en deux étapes, pendant que l’organisateur voit les ventes arriver en temps réel.",
        summary:
          "TicketFlow est une plateforme de billetterie pour celles et ceux qui veulent découvrir et réserver un événement sans tunnel d’achat pénible. Elle couvre tout, de la navigation par catégorie au parcours de réservation en deux étapes, adossée à un tableau de bord qui suit les ventes, le chiffre d’affaires et les commandes en temps réel.",
        coverAlt:
          "Page d’accueil d’une plateforme de billetterie listant les événements à venir",
        meta: {
          builtFor: "Les organisateurs d’événements et les salles",
          timeline: "2 semaines",
          type: "Application web",
        },
        challenge:
          "Les organisateurs avaient besoin de publier leurs événements et de vendre des billets sans bricoler ensemble un site, un système de paiement et un tableur pour savoir qui a acheté quoi. Les acheteurs, eux, avaient besoin d’un chemin simple entre « je regarde » et « c’est réservé » : pas de confusion autour du compte, pas de formulaire sans issue.",
        approach:
          "Un parcours de réservation complet avec recherche, filtres par catégorie et Réservation en deux étapes, associé à un espace d’administration pour créer et gérer les événements. Les commandes, le chiffre d’affaires et les ventes de billets sont suivis en direct, avec des graphiques qui transforment des transactions brutes en chiffres réellement lisibles.",
        outcome:
          "Les organisateurs voient en direct comment chaque événement se comporte, billets vendus, chiffre d’affaires par catégorie, historique des commandes, sans toucher à une base de données ni demander un export à un développeur. Les acheteurs, eux, vont vite de la découverte d’un événement au billet en poche.",
        features: [
          "Navigation et recherche d’événements par date, catégorie et lieu",
          "Réservation en deux étapes avec choix des places et des quantités",
          "Tableau de bord en direct : chiffre d’affaires, commandes et fréquentation",
        ],
        blocks: {
          "browse-events": {
            title: "Choisir un événement",
            body: "Chaque page d’événement présente tout ce qu’un acheteur doit savoir avant de s’engager : date, heure, lieu, prix et description complète, pour qu’il n’y ait plus rien à deviner au moment de payer.",
            alt: "Page de liste d’événements avec filtres et cartes d’événement",
          },
          checkout: {
            title: "Réservation en deux étapes",
            body: "Un court formulaire « qui participe » recueille le nom, l’e-mail et le téléphone de l’acheteur, rattachés à l’événement et au prix exacts, puis passe directement à la confirmation : pas d’écran superflu, pas de compte à créer pour commencer.",
            alt: "Écran de paiement avec sélection des billets et récapitulatif",
          },
          "my-tickets": {
            title: "Les billets déjà achetés",
            body: "« Mes billets » rassemble au même endroit tout ce que l’acheteur a pris : détails de l’événement, quantité, prix total et un numéro de commande à citer en cas de vérification.",
            alt: "Page Mes billets listant les billets achetés avec les dates des événements",
          },
          "admin-overview": {
            title: "Le tableau de bord d’administration",
            body: "Chiffre d’affaires, billets vendus et événements actifs en un coup d’œil, avec la tendance des ventes sur 7 jours et une répartition par catégorie qui montre d’où vient l’argent, plus un aperçu qui signale la catégorie sur laquelle insister.",
            alt: "Vue d’ensemble du tableau de bord avec indicateurs clés et graphique de chiffre d’affaires",
          },
          "admin-events": {
            title: "Répartition des ventes par ville",
            body: "Un classement des billets vendus et du chiffre d’affaires par ville, avec recherche et pagination, et une répartition visuelle côte à côte qui montre d’un coup d’œil où les ventes se concentrent, plus un aperçu de la prochaine ville à viser.",
            alt: "Écran de répartition des ventes par ville avec classement et graphique",
          },
          "admin-revenue": {
            title: "Ventes par événement",
            body: "Un tableau classé et consultable de tous les événements par billets vendus et chiffre d’affaires brut, avec la catégorie et le lieu visibles d’emblée, pour repérer facilement ceux qui marchent vraiment.",
            alt: "Tableau des ventes par événement avec billets vendus et chiffre d’affaires",
          },
          orders: {
            title: "Gérer les événements",
            body: "Le contrôle complet sur chaque annonce : recherche par titre, filtre par catégorie, puis consultation, modification ou suppression directement depuis le tableau, avec un bouton de création rapide pour en ajouter un nouveau.",
            alt: "Tableau de gestion des événements avec recherche, filtres et actions",
          },
        },
      },
      "workout-community": {
        title: "FitHub",
        tagline:
          "Une plateforme fitness communautaire où les membres rejoignent de vrais défis, consignent chaque séance et grimpent dans un classement qui ne récompense qu’une chose : être là.",
        summary:
          "FitHub est une plateforme de fitness construite autour des défis plutôt que du suivi en solo. Le membre choisit un défi par catégorie et par niveau, consigne ses séances au fil de l’eau et gagne des points qui le placent dans un classement public, avec, derrière, un tableau de bord d’administration qui gère les utilisateurs, les défis et les statistiques du site.",
        coverAlt:
          "Page d’accueil de FitHub présentant les défis d’entraînement et le fil de la communauté",
        meta: {
          builtFor: "Les communautés sportives et les coachs",
          timeline: "3 semaines",
          type: "Application web",
        },
        challenge:
          "Les applications de fitness savent enregistrer ce que vous avez fait ; elles savent mal vous faire revenir. La plupart des gens n’abandonnent pas parce que le suivi est compliqué, mais parce que rien n’est en jeu et que personne ne le remarque. Il fallait donc rendre la régularité visible, comparable et digne d’être défendue.",
        approach:
          "Le défi est l’unité autour de laquelle tout s’articule : chacun porte une catégorie, un niveau de difficulté et des points de récompense. S’y inscrire relie le membre au défi, et chaque séance consignée, durée, intensité, calories, ressenti, alimente les points qui font vivre le classement. Derrière, un espace d’administration gère les membres, les défis et qui a le droit de rester.",
        outcome:
          "Le membre voit sa série et son rang bouger le jour même où il s’entraîne, et c’est précisément ce qui le fait continuer à consigner. L’exploitant, lui, dispose d’un tableau de bord qui dit qui est actif, quels défis attirent et d’où vient le trafic, sans jamais ouvrir la base de données.",
        features: [
          "Des défis par catégorie et par niveau, du cardio au HIIT",
          "Consignation des séances : durée, intensité, calories et ressenti",
          "Classement par points de l’ensemble des membres",
          "Suivi personnel des défis avec séries et progression",
          "Tableau de bord : utilisateurs, défis, bannissements et statistiques du site",
        ],
        blocks: {
          "my-challenges": {
            title: "Vos défis, au même endroit",
            body: "Tout ce que le membre a rejoint, les défis en cours d’un côté et les terminés de l’autre. Chaque carte porte la barre de progression, la série en cours, les jours restants et le bouton pour consigner la séance du jour : l’action suivante n’est jamais à plus d’un geste.",
            alt: "Page Mes défis avec progression, série en cours et jours restants sur chaque défi",
          },
          "admin-dashboard": {
            title: "Le tableau de bord à l’ouverture",
            body: "Membres, défis actifs, séances consignées et calories brûlées sur l’ensemble de la plateforme, avec une semaine d’inscriptions aux défis en dessous. Il dit si la communauté a grandi cette semaine avant même qu’on pose la question.",
            alt: "Tableau de bord avec totaux de membres, défis, séances et calories au-dessus d’un graphique d’inscriptions hebdomadaires",
          },
          "training-habits": {
            title: "Comment la communauté s’entraîne vraiment",
            body: "Les catégories que les gens choisissent, l’intensité qu’ils y mettent, ce qu’ils ressentent après et le moment de la journée où ils s’y mettent. De quoi transformer un tas de séances isolées en une image de ce que ce public réclame.",
            alt: "Graphiques des catégories préférées, de l’intensité des séances, des niveaux et des horaires d’entraînement",
          },
          "top-challenges": {
            title: "Les défis qui fonctionnent",
            body: "Chaque défi classé selon le nombre de participants, à côté de sa catégorie, son niveau, sa durée et sa récompense. Ceux qu’il faut reconduire et ceux dont personne n’a voulu apparaissent d’un même coup d’œil.",
            alt: "Tableau des meilleurs défis classés par participants avec catégorie, niveau, durée et récompense",
          },
          "visitor-analytics": {
            title: "Qui est sur le site en ce moment",
            body: "Visiteurs en direct, sessions, temps passé moyen et taux de rebond, avec la courbe quotidienne du mois. De quoi distinguer une semaine calme d’une page qui a discrètement cassé.",
            alt: "Statistiques de visite avec visiteurs en direct, sessions, taux de rebond et courbe quotidienne",
          },
          "traffic-sources": {
            title: "D’où vient le trafic",
            body: "Sources, appareils, pays, navigateurs et les pages sur lesquelles les gens arrivent vraiment. Assez pour savoir quel canal mérite l’effort et lequel ne l’a jamais mérité.",
            alt: "Répartition des sources de trafic, des appareils, des pays, des pages et des navigateurs",
          },
          "manage-challenges": {
            title: "Gérer le catalogue de défis",
            body: "Une recherche, des filtres par catégorie, niveau ou statut, puis la consultation, la modification ou la suppression depuis le même tableau. En publier un nouveau tient à un bouton.",
            alt: "Tableau de gestion des défis avec recherche, filtres, statut et actions par ligne",
          },
          "members-overview": {
            title: "Garder un œil sur les membres",
            body: "Combien de membres, combien sont en plein défi, combien ont décroché, et qui s’est inscrit cette semaine. C’est le troisième chiffre qui sert, parce qu’il désigne les personnes à reconquérir.",
            alt: "Vue d’ensemble des membres avec totaux, membres engagés dans un défi, inactifs et inscriptions de la semaine",
          },
          "member-list": {
            title: "Chaque membre, une ligne",
            body: "Niveau, moment d’entraînement préféré, défis rejoints, séances consignées et date d’arrivée, le tout consultable par nom. C’est la différence entre savoir qu’un chiffre a monté et savoir qui l’a fait monter.",
            alt: "Tableau des membres listant niveau, horaire préféré, défis, séances et date d’inscription",
          },
        },
      },
      "HR-System": {
        title: "Système de gestion RH",
        tagline:
          "Un petit outil interne qui réunit les collaborateurs, les départements et les évaluations au même endroit.",
        summary:
          "Une application RH simple, réalisée comme projet d’entraînement. Elle enregistre les collaborateurs et le département auquel ils appartiennent, garde une évaluation par personne et affiche un court récapitulatif chiffré. C’est tout le périmètre.",
        coverAlt:
          "Liste des collaborateurs avec photos, noms, postes et départements",
        meta: {
          builtFor: "Une petite équipe RH",
          timeline: "1 semaine",
          type: "Application web interne",
        },
        challenge:
          "Les fiches des collaborateurs, les départements et les notes d’évaluation finissent souvent dans des fichiers séparés : une question aussi simple que « qui travaille dans quel département » prend plus de temps qu’elle ne devrait.",
        approach:
          "Quatre écrans : collaborateurs, départements, évaluations et récapitulatif. Chacun liste ce qui existe et permet d’ajouter, de modifier ou de supprimer une entrée, avec une fiche de profil derrière chaque ligne.",
        outcome:
          "Tout est au même endroit, et le récapitulatif donne un aperçu rapide des effectifs, des salaires et des notes. C’est un petit projet d’entraînement, pas un produit fini.",
        features: [
          "Ajouter, modifier et supprimer des collaborateurs",
          "Des départements avec un nom, un lieu et une date de création",
          "Recherche d’un collaborateur par nom ou par département",
          "Une fiche de profil par collaborateur, avec les infos personnelles et le poste",
          "Une évaluation par collaborateur, avec une note et des commentaires",
          "Une page de récapitulatif avec les totaux de base et deux graphiques",
        ],
        blocks: {
          employees: {
            title: "La liste des collaborateurs",
            body: "L’écran d’ouverture : chaque collaborateur avec sa photo, son poste et son département, et un champ de recherche pour retrouver quelqu’un par son nom ou par son département.",
            alt: "Tableau des collaborateurs avec photos, postes, départements et boutons modifier et supprimer",
          },
          departments: {
            title: "Les départements",
            body: "Les départements auxquels les collaborateurs sont rattachés, chacun avec un lieu et sa date de création. C’est ici qu’on en ajoute, renomme ou supprime un.",
            alt: "Tableau des départements avec le nom, la date de création, le lieu et les actions",
          },
          "employee-profile": {
            title: "La fiche d’un collaborateur",
            body: "Ouvrir un collaborateur affiche toute sa fiche sur une seule page : photo, poste, département, e-mail, téléphone, date de naissance et date d’embauche.",
            alt: "Fiche de profil avec photo, poste, e-mail, téléphone, date de naissance et date d’embauche",
          },
          "employment-details": {
            title: "Le poste et la dernière évaluation",
            body: "Plus bas sur la même page : le poste, le département et le salaire annuel, puis la dernière évaluation de la personne avec sa note et les commentaires qui vont avec.",
            alt: "Détails du poste avec département et salaire, au-dessus d’une évaluation avec note en étoiles et commentaires",
          },
          reviews: {
            title: "Les évaluations",
            body: "Toutes les évaluations dans un seul tableau, avec le commentaire, la date et la note. Les boutons au-dessus restreignent la liste à une plage de notes.",
            alt: "Tableau des évaluations avec le nom, le commentaire, la date et la note, et des boutons de filtre par plage de notes",
          },
          reports: {
            title: "Un court récapitulatif",
            body: "Les totaux en haut : le nombre de collaborateurs, le salaire moyen, le plus haut et le plus bas, et la note moyenne. En dessous, les effectifs par département et la note moyenne par département.",
            alt: "Page de récapitulatif avec les totaux d’effectifs et de salaires, un camembert des effectifs par département et un histogramme des notes moyennes",
          },
        },
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
      "why-website": {
        question: "Pourquoi avoir un site web ?",
        answer:
          "Vos clients cherchent déjà en ligne. S’ils ne vous trouvent pas, ils trouvent votre concurrent, et vous n’entendrez même jamais parler de la vente que vous avez perdue. Un site les garde chez vous et vend pour vous, jour et nuit.",
      },
      google: {
        question: "Est-ce qu’on me trouvera sur Google ?",
        answer:
          "Oui. Chaque page est construite pour être trouvée : votre activité apparaît quand quelqu’un cherche ce que vous faites.",
      },
      speed: {
        question: "En combien de temps le site est-il prêt ?",
        answer:
          "Quelques semaines dans la plupart des cas. Vous avez une date précise avant de commencer, et je m’y tiens.",
      },
      follow: {
        question: "Est-ce que je suis le projet pendant sa réalisation ?",
        answer:
          "Oui, étape par étape. Vous voyez le site prendre forme et vous validez chaque étape : aucune surprise à la fin.",
      },
      support: {
        question: "Et si j’ai besoin d’aide après la mise en ligne ?",
        answer:
          "Je suis joignable 24h/24, 7j/7. Écrivez-moi à tout moment, pour une question, une petite modification ou une urgence.",
      },
      problems: {
        question: "Et si quelque chose ne fonctionne pas sur le site ?",
        answer:
          "Je le règle. Tout problème que vous ou vos visiteurs rencontrez, envoyez-le-moi et je m’en occupe.",
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
          "Les deux, des projets ponctuels comme des forfaits mensuels où je tiens le rôle de la partie développement d’une petite équipe. Envoyez-moi un message avec les grandes lignes et je vous réponds sous un jour pour vous dire si je suis la bonne personne.",
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
      successBody: "Merci de votre message, je vous réponds sous un jour.",
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
    title: "Abdelhamid Oug-Lhacen, Développeur Full Stack",
    description:
      "Développeur full stack : landing pages, applications web et tableaux de bord de gestion avec Next.js, TypeScript et Node.js.",
    ogDescription:
      "Développeur full stack : landing pages, applications web et tableaux de bord de gestion.",
  },
};
