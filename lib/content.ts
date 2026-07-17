/**
 * ============================================================================
 *  CONTENU DU PORTFOLIO — MODIFIE TOUT ICI
 * ----------------------------------------------------------------------------
 *  Ce fichier centralise TOUS les textes, projets, compétences et coordonnées.
 *  Tu peux tout changer sans toucher au design ni au code des pages.
 *  - Remplace les textes entre guillemets.
 *  - Ajoute / supprime des éléments dans les tableaux [ ... ].
 *  - Les images sont dans /public/images — remplace les fichiers ou les chemins.
 * ============================================================================
 */

import {
  Compass,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react'

/* --- Identité --- */
export const site = {
  name: 'S.O.E.N',
  monogram: 'SN', // initiales affichées dans le sceau
  role: 'Assistante Marketing - en recherche d’alternance',
  degree: 'Bachelor in Management, spécialisation International Business',
  location: 'Nice, France',
  metaDescription:
    'Portfolio de Stella Nezri, Assistante Marketing bilingue franco-américaine avec 2 ans d’expérience, en recherche d’une alternance de 12 mois orientée développement, export et commerce international pour son Bachelor in Management (International Business) à l’IPAG Business School Nice.',
} as const

/* --- Navigation (ordre = ordre dans le menu) --- */
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Étude de cas', href: '/etude-de-cas' },
  { label: 'Projets personnels', href: '/projets-personnels' },
  { label: "Contact", href: "/contact" },
] as const
export const headerNav = nav.filter((item) => item.label !== 'Contact')


/* --- Coordonnées & liens --- */
export const contact = {
  email: 'stella.nzri@gmail.com',
  phone: '+33 6 12 75 40 49',
  city: 'Nice & Côte d’Azur - mobilité internationale',
  availability: 'Disponible dès août 2026 - rythme 1 semaine école / 3 semaines entreprise',
  cvUrl: "/CV-Stella-Nezri-FR-US.pdf", // remplace par le lien vers ton CV (PDF)
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stella-nezri-829b3522a/', handle: '/in/stella-nezri' },
    { label: 'Instagram', href: 'https://www.instagram.com/stella.nzr/', handle: '@stella.nzr' },
  ],
} as const

/* --- HERO (page d'accueil) --- */
export const hero = {
  eyebrow: 'Portfolio — Édition 2026',
  backgroundImage: '/hero-background.png',
  titleLines: ['Stella', 'Nezri'],
  valueProposition:
    'Bilingue franco-américaine, deux ans à transformer des idées en contenus qui engagent. Je cherche l’alternance qui donnera une dimension internationale à ce savoir-faire.',
  primaryCta: { label: 'Me recruter', href: '/contact' },
  secondaryCta: { label: 'Voir mes réalisations', href: '/realisations' },
  facts: [
    { value: '2 ans', label: 'd’expérience en environnement B2B' },
    { value: 'FR · EN', label: 'bilingue franco-américaine' },
    { value: '3 langues', label: 'dont l’espagnol' },
  ],
} as const

/* --- À PROPOS --- */
export const about = {
  intro: [
    'Je suis Stella, 21 ans, Assistante Marketing bilingue franco-américaine. J’aime apprendre, tester, comprendre et la création de contenu autant que la stratégie commerciale ne sont finalement que deux façons de nourrir la même curiosité.',
    'Chaque expérience, qu’elle ait eu lieu derrière un écran ou sur le terrain, m’a appris quelque chose de différent. C’est ce parcours que je raconte ici.',
  ],
  paragraphs: [
    'Depuis novembre 2024, j’occupe le poste d’Assistante Marketing en alternance chez Ludi SFM, une Société B2B de Fourniture et de Maintenance pour les machines à sous et jeux de casinos. J’y conçois des supports commerciaux bilingues FR/EN, je crée des contenus visuels et textuels, et j’anime la page LinkedIn afin de la faire grandir.',
    'Mais mon parcours ne s’est pas construit uniquement derrière un ordinateur.',
    'J’ai grandi en région parisienne jusqu’à mes 17 ans, entre une mère américaine et un père marseillais : le français et l’anglais ont toujours été deux langues du quotidien, pas deux matières scolaires. Cette double culture m’a très tôt donné le goût de regarder les choses sous plusieurs angles, et une certaine allergie aux réponses toutes faites.',
    'Après le bac, j’ai posé mes valises à Nice en démarrant par une Licence en Langues Étrangères Appliquées Anglais-Espagnol, histoire de poser des bases solides avant de me spécialiser. J’ai vite compris que ce que je cherchais n’était pas seulement les langues en elles-mêmes, mais tout ce qu’elles permettent de faire une fois qu’on les met au service d’une stratégie. J’ai donc fini par bifurquer vers un Bachelor en Marketing Digital. C’est là que j’ai compris que ma curiosité pour le langage, l’image, la psychologie de la vente, pouvait devenir un vrai métier plutôt qu’une liste de centres d’intérêt.',
    'Avant d’évoluer dans le marketing, j’ai travaillé directement au contact des clients, notamment au Crowne Plaza Hotel à Nice puis chez ZARA à Cannes. Ces expériences B2C m’ont appris la relation client, la rigueur opérationnelle, la gestion de la pression et surtout l’importance de comprendre les besoins d’une personne avant de vouloir lui vendre une solution.',
    'Ce qui me fait avancer, au fond, c’est tout ce qui nourrit mon âme : ce qui me pousse à me renseigner, à discuter, à sortir de ma zone de confort intellectuelle. En septembre 2026, j’intègre ma 3e année de Bachelor in Management, spécialisation International Business, à l’IPAG Business School, une formation entièrement dispensée en anglais et je recherche une alternance de 12 mois en développement, export ou commerce international, la suite logique d’un parcours construit sur l’envie d’apprendre, pas sur un plan tracé d’avance.',
  ],
  facts: [
    { label: 'Formation', value: 'B1 & B2 Marketing Digital • B3 in Management spé International Business' },
    { label: 'Expérience', value: '3 ans — Marketing • Communication • Vente • Relation client' },
    { label: 'Langues', value: 'Français & Anglais (bilingue), Espagnol (B1)' },
    { label: 'Rythme', value: 'Alternance 1 semaine école / 3 semaines entreprise' },
    { label: 'Localisation', value: 'Nice — mobilité internationale' },
    { label: 'Disponibilité', value: 'Août 2026' },
  ],
  portrait: '/images/portrait-stella-a-propos.jpg',
} as const

/* --- COMPÉTENCES  --- */
export const softSkills = [
  { label: "Autonomie", icon: Compass, level: 85 },
  { label: "Rigueur & sens du détail", icon: Target, level: 90 },
  { label: 'Créativité', icon: Lightbulb, level: 75 },
  { label: "Dynamisme", icon: Zap, level: 80 },
  { label: "Fiabilité", icon: ShieldCheck, level: 95 },
  { label: "Aisance relationnelle", icon: Users, level: 84 },
  { label: "Adaptabilité", icon: Compass, level: 80 },
  { label: "Polyvalence opérationnelle", icon: Sparkles, level: 95 },
] as const

export const hardSkills = {
  intro:
    'Un savoir-faire à la croisée de la création de contenu, du marketing et de la relation client, avec une forte dimension interculturelle.',
  groups: [
    {
      title: 'Marketing & Communication',
      items: ['Création de contenus & supports FR/EN', 'Stratégie & gestion de réseaux sociaux (LinkedIn B2B)', 'Identité visuelle & charte graphique', 'Suivi des tendances', 'Copywriting & rédaction technique', 'Communication externe'],
    },
    {
      title: 'Commerce & Relation client',
      items: ['Stratégie de vente', 'Relation client', 'Gestion des stocks & réassort', 'Atteinte d’objectifs chiffrés', 'Veille tendances & actualités'],
    },
    {
      title: 'Outils',
      items: ['Photoshop', 'Illustrator', 'Affinity', 'Canva', 'Notion', 'CapCut', 'Word/Pages', 'Powerpoint/Numbers', 'Excel/Keynote'],
    },
    {
      title: 'Réseaux Sociaux',
      items: ['Meta Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X (Twitter)', 'Snapchat', 'BeReal'],
    },
    {
      title: 'International & Langues',
      items: ['Français (Natif)', 'Anglais (Bilingue découlant de ma double nationalité)', 'Espagnol (B1)', 'Adaptabilité interculturelle', 'Communication multilingue'],
    },
  ],
} as const

/**
 * --- RÉALISATIONS (catalogue numéroté) ---
 * Chaque projet a un numéro (généré automatiquement), une catégorie (pour les filtres),
 * et une fiche détaillée qui s'ouvre au clic.
 */
export type Project = {
  slug: string
  title: string
  category: 'Contenu' | 'Digital' | 'Traduction' | 'Vente'
  year: string
  client: string
  role: string
  cover: string
  summary: string
  challenge: string
  approach: string[]
  results: { value: string; label: string }[]
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'linkedin-ludi',
    title: 'Animation & croissance LinkedIn',
    category: 'Digital',
    year: '2024 → 2026',
    client: 'Ludi SFM — Nice',
    role: 'Marketing & Community Management',
    cover: '/images/recrut-linkedin-ludi.png',
    summary:
      'Gestion et animation de la page LinkedIn de l’entreprise, avec une ligne de contenu régulière et cohérente.',
    challenge:
      'Développer la visibilité et la communauté de l’entreprise sur LinkedIn avec une présence légèrement modernisée.',
    approach: [
      'Définition d’une ligne éditoriale et d’un rythme de publication.',
      'Création de posts et de visuels alignés à l’identité de la marque.',
      'Veille sur les tendances et l’actualité du secteur pour nourrir le contenu.',
    ],
    results: [
      { value: '986 → 1 264', label: 'abonnés LinkedIn' },
      { value: '+28 %', label: 'de communauté' },
      { value: 'Régulier', label: 'Rythme de publication selon les installations' },
    ],
    tags: ['LinkedIn', 'Community management', 'Création de contenu'],
  },
  {
    slug: 'creation-visuelle',
    title: 'Création de contenu visuel FR/EN',
    category: 'Contenu',
    year: '2024 → 2026',
    client: 'Ludi SFM — Nice',
    role: 'Création visuelle',
    cover: '/images/goodies-ludi-beige.jpeg',
    summary:
      'Conception de contenus visuels bilingues : posts, goodies, signatures et éléments de marque.',
    challenge:
      'Doter l’entreprise d’une identité visuelle cohérente sur l’ensemble de ses points de contact.',
    approach: [
      'Création de visuels pour les réseaux et les supports internes.',
      'Design de goodies et de signatures email aux couleurs de la marque.',
      'Déclinaison bilingue de chaque contenu.',
    ],
    results: [
      { value: 'Multi-supports', label: 'posts, goodies, signatures' },
      { value: 'Canva · Photoshop · Affinity', label: 'outils de création' },
      { value: 'FR / EN', label: 'déclinaisons de supports' },
    ],
    tags: ['Design', 'Direction artistique', 'Outils de création'],
  },
  {
    slug: 'retail-zara',
    title: 'Performance vente en boutique',
    category: 'Vente',
    year: '2024',
    client: 'ZARA — Cannes',
    role: 'Vendeuse (CDD)',
    cover: '/images/zara-retail-pic.jpg',
    summary:
      'Vente, merchandising et gestion des stocks en boutique, avec des objectifs commerciaux quotidiens.',
    challenge:
      'Atteindre des objectifs de vente élevés tout en assurant une expérience client irréprochable.',
    approach: [
      'Conseil et démonstration produit auprès d’une clientèle exigeante.',
      'Gestion des stocks et réassort en continu.',
      'Suivi des tendances pour orienter les recommandations.',
    ],
    results: [
      { value: '≃ 45k €', label: 'de ventes par jour' },
      { value: 'Objectifs', label: 'régulièrement atteints' },
      { value: 'Flexibilité', label: 'sur les temps forts' },
    ],
    tags: ['Vente directe', 'Relation client', 'Gestion de la pression'],
  },
  {
    slug: 'kit-instagram',
    title: 'Kit Instagram — Atelier Meaunn',
    category: 'Digital',
    year: '2026',
    client: 'Atelier Meaunn',
    role: 'Stratégie de contenu & Brand Identity',
    cover: '/images/kit-ig-template-atelier-meaunn.png',
    summary:
      'Conception d’une stratégie Instagram complète pour une marque artisanale de luminaires.',
    challenge:
      'Construire de zéro une stratégie Instagram complète pour une jeune marque artisanale de luminaires en papier, en traduisant à l’écran l’univers poétique et écoresponsable de la créatrice.',
    approach: [
      'Définition de 6 piliers de contenus (ambiance, artisanat, création, engagement, BTS, témoignages).',
      'Création de templates pour posts, dumps, stories et highlights, alignés à l’identité visuelle de la marque.',
      'Élaboration d’un planning éditorial et d’une campagne Ads ciblée (budget, cible, dates clés).',
    ],
    results: [
      { value: '6', label: 'piliers de contenus' },
      { value: '3', label: 'séries de templates' },
      { value: '12 jours', label: 'planning de campagne Ads' },
    ],
    tags: ['Instagram', 'Stratégie de contenu', 'Brand Identity', 'Media Planning'],
  },
  {
    slug: 'supports-bilingues',
    title: 'Supports commerciaux bilingues FR/EN',
    category: 'Contenu',
    year: '2024 → 2026',
    client: 'Ludi SFM — Nice',
    role: 'Production & Traduction',
    cover: '/images/luckyup-alfastreet.png',
    summary:
      'Production et traduction de supports commerciaux en français et en anglais : règles de jeux, fiches produits, présentations.',
    challenge:
      'Rendre l’offre accessible et cohérente auprès d’une clientèle internationale, dans deux langues.',
    approach: [
      'Traduction FR/EN des règles de jeux et des fiches produits.',
      'Mise en forme de présentations claires et professionnelles.',
      'Harmonisation du ton et du vocabulaire entre les deux langues.',
    ],
    results: [
      { value: 'FR / EN', label: 'supports bilingues' },
      { value: '100 %', label: 'de cohérence de marque' },
      { value: 'B2B', label: 'clientèle internationale' },
    ],
    tags: ['Bilingue', 'Traduction', 'Supports commerciaux', 'Identité de marque'],
  },
]

/* --- ÉTUDE DE CAS MISE EN AVANT : LUDI SHOW --- */
export const caseStudy = {
  eyebrow: 'Étude de cas',
  title: 'Ludi Show',
  subtitle: [
    'Assistante Marketing en alternance chez Ludi SFM : de la création de contenu bilingue à l’événement.',
    'Ludi SFM est une entreprise niçoise spécialisée dans la fourniture et la maintenance de machines à sous et jeux pour les casinos français, avec un réseau de plus de 200 établissements. L’entreprise s’appuie également sur Modulus, sa société sœur basée à Monaco, qui élargit son rayonnement sur la Principauté ainsi qu’à l’international. C’est dans ce contexte B2B exigeant que s’est déroulé le Ludi Show, l’événement au cœur de cette étude de cas.',
  ],
  context:
    'Ludi SFM m’a confié, dès novembre 2024, une partie de la communication et la création de contenu de l’entreprise. Le Ludi Show en est le point d’orgue : un rendez-vous ludique où se rencontrent contenu, marque et cible. C’est une exposition organisée dans les locaux pour présenter les nouveautés en machines à sous et jeux de casino à une sélection de clients. Pour la 3ème édition, je me suis chargée de plusieurs volets, de l’identité visuelle à l’expérience client sur place.',
  cover: '/images/bienvenue-ludi-show.png',
  mission:
    'Faire de cette édition un moment de marque cohérent, de l’identité visuelle jusqu’à l’expérience vécue. Concrètement : concevoir l’identité visuelle du Ludi Show, sélectionner et décliner les goodies, et contribuer à l’expérience client.',
  chapters: [
    {
      title: 'Direction artistique & supports visuels',
      text: 'Conception de l’identité graphique de l’événement : kakemono d’accueil & déclinaison horizontale pour les écrans avec une palette chaleureuse (jaune/noir, palmiers, Côte d’Azur) qui ancre le Ludi Show dans son territoire et reste cohérente avec son identité de marque.',
    },
    {
      title: 'Déclinaison de l’identité sur l’ensemble des goodies',
      text: 'Application du logo de Ludi SFM sur toute la gamme de goodies : casquettes, polos, tote bags, porte-cartes, etc... Chaque support ayant ses propres contraintes de zone et de matière, le placement du branding a été adapté objet par objet.',
    },
    {
      title: 'Sélection & sourcing des goodies',
      text: 'Choix de chaque objet avec un arbitrage qualité perçue / utilité réelle / cohérence avec le positionnement premium de Ludi SFM auprès d’une clientèle professionnelle plutôt que du gadget jetable.',
    },
    {
      title: 'Mise en place de l’expérience sur place',
      text: 'Contribution à l’organisation de l’espace le jour de l’événement, pour que l’expérience vécue sur place soit à la hauteur de l’identité visuelle déployée en amont.',
    },
  ],
  results: [
    { value: 'Hausse', label: 'des abonnés LinkedIn' },
    { value: 'Branding', label: 'adapté objet par objet' },
    { value: '9', label: 'goodies déclinés' },
    { value: 'Identité visuelle', label: 'unifiée' },
  ],
  gallery: ['/images/enseigne-ludi-hall.png','/images/ludi-showroom-barrière.jpg','/images/kakemono-ludi.jpg','/images/ludi-showroom-1.jpg', '/images/ludi-showroom-roulette.jpg', '/images/ludi-showroom-alfastreet.jpg', '/images/Totebag-Black.png', '/images/Polo.png', '/images/Porte-carte.png'],
} as const

/* --- PROJETS PERSONNELS (création visuelle) --- */
export const personal = {
  intro:
    'Design, photo, vidéo, direction artistique : mes projets personnels sont le terrain où je teste, j’affine et je construis mon regard.',
  instagram: { handle: '@stella.nzr', href: 'https://www.instagram.com/stella.nzr/' },
  items: [
    {
      title: 'FOCUS — Shooting photo',
      type: 'Photographie & Direction artistique',
      image: '/images/focus-design.jpeg', 
      description: 'Modèle photo pour ce shooting et à l’origine de la direction artistique finale, entre regard et typographie serif superposée.',
    },
    {
      title: 'Feed Instagram — Identité',
      type: 'Réseaux sociaux',
      image: '/images/feed-ig-atelier-meaunn.jpeg',
      description: 'Qui a dit qu’un compte Instagram lifestyle ne pouvait pas contenir une structure visuelle cohérente et rythmée à l’image du créateur?',
    },
    {
      title: 'Publicité Photobooth — TikTok',
      type: 'Vidéo',
      image: '/images/photobooth.png',
      description: 'Montage et formats courts pour la campagne publicitaire fictive d’un street photobooth, pensés pour l’algorithme et l’engagement TikTok.',
    },
    {
      title: 'Identité visuelle — SOEN',
      type: 'Branding',
      image: '/images/crea-soen-2026.png',
      description: 'Construction de mon identité de marque personnelle : logo, palette, typographie et univers verbal autour de mon nom.',
    },
    {
      title: 'Proposition de CRM — HubSpot',
      type: 'Stratégie',
      image: '/images/proposition-crm-ludi.png',
      description: 'Conception et présentation d’un plan de déploiement de CRM en 3 phases pour Ludi SFM afin de suivre ses 204 casinos clients.',
    },
    {
      title: 'Portfolio — SOEN',
      type: 'Développement web',
      image: '/plain-logo-soen.svg',
      description: 'Et si je vous disais que vous êtes en train de le parcourir ? Ce portfolio a été conçu par mes soins, avec Next.js et VS Code via Claude, pour présenter mon travail et mes compétences.',
    },
  ],
} as const

/* --- CONTACT --- */
export const contactPage = {
  title: 'Travaillons ensemble.',
  intro:
    'Vous cherchez une alternante marketing bilingue, créative, minutieuse et orientée résultats pour une mission de 12 mois orientée développement ou commerce international ? Parlons-en.',
  reasons: [
    'Bilingue franco-américaine, à l’aise en environnement international.',
    'Quatre ans d’expérience terrain de la relation client au marketing.',
    'Profil solaire, créatif et opérationnel : création de contenu, stratégie de vente et développement commercial.',
  ],
} as const
