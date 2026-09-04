/**
 * ============================================================================
 *  CONTENU DU PORTFOLIO — MODIFIE TOUT ICI
 * ----------------------------------------------------------------------------
 *  Ce fichier centralise TOUS les textes, projets, compétences et coordonnées.
 *  Chaque champ texte est un objet { fr, en } — utilise field[lang] dans les
 *  composants (lang vient de useLanguage()).
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

export type Bi = { fr: string; en: string }

/* --- Identité --- */
export const site = {
  name: 'S.O.E.N',
  monogram: 'SN',
  role: { fr: 'Brand & Marketing Assistant chez Hellenist', en: 'Brand & Marketing Assistant at Hellenist' } as Bi,
  degree: { fr: 'Bachelor in Management, spécialisation International Business', en: 'Bachelor in Management specialized in International Business' } as Bi,
  location: { fr: 'Nice, France', en: 'Nice, France' } as Bi,
  metaDescription: {
    fr: 'Portfolio de Stella Nezri, Assistante Brand & Marketing en alternance chez Hellenist, marque de parfum de niche basée à Nice, dans le cadre de son Bachelor in Management, spécialisation International Business à l’IPAG Business School.',
    en: 'Portfolio of Stella Nezri, Brand & Marketing Assistant on a work-study program at Hellenist, a niche perfume brand based in Nice, as part of her Bachelor in Management specialized in International Business at IPAG Business School.',
  } as Bi,
} as const

/* --- Navigation (ordre = ordre dans le menu) --- */
export const nav = [
  { label: { fr: 'Accueil', en: 'Home' } as Bi, href: '/' },
  { label: { fr: 'À propos', en: 'About' } as Bi, href: '/a-propos' },
  { label: { fr: 'Compétences', en: 'Skills' } as Bi, href: '/competences' },
  { label: { fr: 'Réalisations', en: 'Portfolio' } as Bi, href: '/realisations' },
  { label: { fr: 'Étude de cas', en: 'Case Study' } as Bi, href: '/etude-de-cas' },
  { label: { fr: 'Projets personnels', en: 'Personal Projects' } as Bi, href: '/projets-personnels' },
  { label: { fr: 'Contact', en: 'Contact' } as Bi, href: '/contact' },
] as const
export const headerNav = nav.filter((item) => item.href !== '/contact')

/* --- Coordonnées & liens --- */
export const contact = {
  email: 'stella.nzri@gmail.com',
  phone: '+33 6 12 75 40 49',
  city: { fr: 'Nice & Côte d’Azur - mobilité internationale', en: 'Nice & French Riviera — open to international relocation' } as Bi,
  availability: { fr: 'En alternance chez Hellenist (rythme 1 semaine école / 3 semaines entreprise) — ouverte aux missions ponctuelles et collaborations', en: 'Work-study at Hellenist (schedule: 1 week school / 3 weeks company) — open to one-off projects and collaborations' } as Bi,
  cvUrl: "/CV-Stella-Nezri-FR-US.pdf",
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stella-nezri-829b3522a/', handle: '/in/stella-nezri' },
    { label: 'Instagram', href: 'https://www.instagram.com/stella.nzr/', handle: '@stella.nzr' },
  ],
} as const

/* --- HERO (page d'accueil) --- */
export const hero = {
  eyebrow: { fr: 'Portfolio — Édition 2026', en: 'Portfolio — 2026 Edition' } as Bi,
  backgroundImage: '/hero-background.webp',
  titleLines: ['Stella', 'Nezri'],
  valueProposition: {
    fr: 'Bilingue, deux ans à transformer des idées en contenus qui engagent. Depuis septembre 2026, je mets ce savoir-faire au service d’Hellenist, marque de parfum de niche, en tant qu’Assistante Brand & Marketing.',
    en: 'Bilingual, two years spent turning ideas into content that engages. Since September 2026, I’ve been putting that know-how to work at Hellenist, a niche perfume brand, as Brand & Marketing Assistant.',
  } as Bi,
  primaryCta: { label: { fr: 'Me recruter', en: 'Hire me' } as Bi, href: '/contact' },
  secondaryCta: { label: { fr: 'Voir mes réalisations', en: 'View my work' } as Bi, href: '/realisations' },
  facts: [
    { value: { fr: '2 ans', en: '2 years' } as Bi, label: { fr: 'd’expérience en environnement B2B', en: 'of experience in B2B environments' } as Bi },
    { value: { fr: '+28 %', en: '+28%' } as Bi, label: { fr: 'de croissance d’une communauté LinkedIn', en: 'LinkedIn community growth' } as Bi },
    { value: { fr: '3 langues', en: '3 languages' } as Bi, label: { fr: 'FR · EN · ESP', en: 'FR · EN · ES' } as Bi },
  ],
} as const

/* --- À PROPOS --- */
export const about = {
  intro: {
    fr: [
      'Je suis Stella, 21 ans, Brand & Marketing Assistant bilingue franco-américaine. J’aime apprendre, tester, comprendre. La création de contenu autant que la stratégie commerciale ne sont, au fond, que deux façons de nourrir la même curiosité.',
      'Chaque expérience, qu’elle ait eu lieu derrière un écran ou sur le terrain, m’a appris quelque chose de différent. C’est ce parcours que je raconte ici.',
    ],
    en: [
      'I’m Stella, 21, a bilingual French-American Brand & Marketing Assistant. I like learning, testing, understanding. Content creation and sales strategy are, at their core, just two ways of feeding the same curiosity.',
      'Every experience, whether behind a screen or out in the field, has taught me something different. This is the path I’m telling here.',
    ],
  },
  paragraphs: {
    fr: [
      'Depuis septembre 2026, j’occupe le poste d’Assistante Brand & Marketing en alternance chez Hellenist, une marque de parfum de niche basée à Nice. Je participe à la création et à la programmation de contenus pour les réseaux sociaux, à la coordination des supports marketing et commerciaux, et au suivi des rendez-vous et présentations pour les distributeurs et partenaires.',
      'Avant Hellenist, j’ai passé près de deux ans chez Ludi SFM, société niçoise B2B de fourniture et de maintenance de machines à sous et jeux de casinos, où j’ai conçu des supports commerciaux bilingues FR/EN, créé des contenus visuels et fait grandir la page LinkedIn de l’entreprise.',
      'Mais mon parcours ne s’est pas construit uniquement derrière un ordinateur.',
      'J’ai grandi en région parisienne jusqu’à mes 17 ans, entre une mère américaine et un père marseillais : le français et l’anglais ont toujours été deux langues du quotidien, pas deux matières scolaires. Cette double culture m’a très tôt donné le goût de regarder les choses sous plusieurs angles, et une certaine allergie aux réponses toutes faites.',
      'Après le bac, j’ai posé mes valises à Nice en démarrant par une Licence en Langues Étrangères Appliquées Anglais-Espagnol, histoire de poser des bases solides avant de me spécialiser. J’ai vite compris que ce que je cherchais n’était pas seulement les langues en elles-mêmes, mais tout ce qu’elles permettent de faire une fois qu’on les met au service d’une stratégie. J’ai donc fini par bifurquer vers un Bachelor en Marketing Digital. C’est là que j’ai compris que ma curiosité pour le langage, l’image, la psychologie de la vente, pouvait devenir un vrai métier plutôt qu’une liste de centres d’intérêt.',
      'Avant d’évoluer dans le marketing, j’ai travaillé directement au contact des clients, notamment au Crowne Plaza Hotel à Nice puis chez ZARA à Cannes. Ces expériences B2C m’ont appris la relation client, la rigueur opérationnelle, la gestion de la pression et surtout l’importance de comprendre les besoins d’une personne avant de vouloir lui vendre une solution.',
      'Ce qui me fait avancer, au fond, c’est tout ce qui nourrit mon âme : me renseigner, discuter, sortir de ma zone de confort intellectuelle. En septembre 2026, j’ai intégré ma 3e année de Bachelor in Management en spécialisation International Business, à l’IPAG Business School, une formation entièrement dispensée en anglais, en parallèle de mon alternance chez Hellenist, la suite logique d’un parcours construit sur l’envie d’apprendre, pas sur un plan tracé d’avance.',
    ],
    en: [
      'Since September 2026, I’ve been working as a Brand & Marketing Assistant on a work-study program at Hellenist, a niche perfume brand based in Nice. I help create and schedule social media content, coordinate marketing and sales materials, and support meetings and presentations for distributors and partners.',
      'Before Hellenist, I spent nearly two years at Ludi SFM, a Nice-based B2B company supplying and maintaining cabinets and games for casinos, where I designed bilingual FR/EN sales materials, created visual content, and grew the company’s LinkedIn page.',
      'But my path wasn’t built entirely behind a computer.',
      'I grew up in the Paris region until I was 17, with an American mother and a father from Marseille, South of France: French and English were always two everyday languages, not two school subjects. This dual culture gave me an early taste for looking at things from multiple angles, and a certain allergy to ready-made answers.',
      'After graduating high school, I settled in Nice, starting with a degree in Applied Foreign Languages (English-Spanish), to build a solid foundation before specializing. I quickly realized what I was looking for wasn’t the languages themselves, but everything they let you do once you put them to work for a strategy. So I ended up pivoting toward a Bachelor’s in Digital Marketing. That’s where I understood that my curiosity for language, imagery, and the psychology of selling could become an actual career rather than just a list of interests.',
      'Before moving into marketing, I worked directly with customers, notably at the Crowne Plaza Hotel in Nice and then at ZARA in Cannes. These B2C experiences taught me customer relations, operational rigor, handling pressure, and above all the importance of understanding someone’s needs before trying to sell them a solution.',
      'What drives me, at heart, is everything that feeds my soul and mind: learning, discussing, stepping outside my intellectual comfort zone. In September 2026, I started my 3rd year of a Bachelor in Management specialized in International Business, at IPAG Business School, a program taught entirely in English, alongside my work-study program at Hellenist, the logical next step in a path built on the desire to learn, not on a plan mapped out in advance.',
    ],
  },
  facts: [
    { label: { fr: 'Formation', en: 'Education' } as Bi, value: { fr: 'B1 & B2 Marketing Digital • B3 in Management spé International Business', en: 'Years 1–2: Digital Marketing • Year 3: Management, International Business' } as Bi },
    { label: { fr: 'Expérience', en: 'Experience' } as Bi, value: { fr: '4 ans — Marketing • Communication • Vente • Relation client', en: '4 years — Marketing • Communications • Sales • Customer relations' } as Bi },
    { label: { fr: 'Langues', en: 'Languages' } as Bi, value: { fr: 'Français & Anglais (bilingue), Espagnol (intermédiaire)', en: 'French & English (bilingual), Spanish (intermediate)' } as Bi },
    { label: { fr: 'Rythme', en: 'Schedule' } as Bi, value: { fr: 'Alternance 1 semaine école / 3 semaines entreprise', en: 'Work-study: 1 week school / 3 weeks company' } as Bi },
    { label: { fr: 'Localisation', en: 'Location' } as Bi, value: { fr: 'Nice — mobilité internationale', en: 'Nice — open to international relocation' } as Bi },
    { label: { fr: 'Disponibilité', en: 'Availability' } as Bi, value: { fr: 'En alternance chez Hellenist (depuis sept. 2026)', en: 'Work-study at Hellenist (since Sept. 2026)' } as Bi },
  ],
  portrait: '/images/portrait-stella-a-propos.webp',
} as const

/* --- COMPÉTENCES  --- */
export const softSkills = [
  { label: { fr: 'Autonomie', en: 'Autonomy' } as Bi, icon: Compass, level: 85 },
  { label: { fr: 'Rigueur & sens du détail', en: 'Attention to detail' } as Bi, icon: Target, level: 90 },
  { label: { fr: 'Créativité', en: 'Creativity' } as Bi, icon: Lightbulb, level: 75 },
  { label: { fr: 'Dynamisme', en: 'Drive' } as Bi, icon: Zap, level: 80 },
  { label: { fr: 'Fiabilité', en: 'Reliability' } as Bi, icon: ShieldCheck, level: 95 },
  { label: { fr: 'Aisance relationnelle', en: 'Interpersonal skills' } as Bi, icon: Users, level: 84 },
  { label: { fr: 'Adaptabilité', en: 'Adaptability' } as Bi, icon: Compass, level: 80 },
  { label: { fr: 'Polyvalence opérationnelle', en: 'Operational versatility' } as Bi, icon: Sparkles, level: 95 },
] as const

export const hardSkills = {
  intro: {
    fr: 'Un savoir-faire à la croisée de la création de contenu, du marketing et de la relation client, avec une forte dimension interculturelle.',
    en: 'Expertise at the crossroads of content creation, marketing, and customer relations, with a strong intercultural dimension.',
  } as Bi,
  groups: [
    {
      title: { fr: 'Marketing & Communication', en: 'Marketing & Communication' } as Bi,
      items: {
        fr: ['Création de contenus & supports FR/EN', 'Stratégie & gestion de réseaux sociaux (LinkedIn B2B)', 'Identité visuelle & charte graphique', 'Suivi des tendances', 'Copywriting & rédaction technique', 'Communication externe'],
        en: ['Content creation & materials (FR/EN)', 'Social media strategy & management (B2B LinkedIn)', 'Visual identity & brand guidelines', 'Trend monitoring', 'Copywriting & technical writing', 'External communications'],
      },
    },
    {
      title: { fr: 'Commerce & Relation client', en: 'Sales & Customer Relations' } as Bi,
      items: {
        fr: ['Stratégie de vente', 'Relation client', 'Gestion des stocks & réassort', 'Atteinte d’objectifs chiffrés', 'Veille tendances & actualités'],
        en: ['Sales strategy', 'Customer relations', 'Inventory management & restocking', 'Meeting sales targets', 'Trend & industry monitoring'],
      },
    },
    {
      title: { fr: 'Outils', en: 'Tools' } as Bi,
      items: {
        fr: ['Photoshop', 'Illustrator', 'Affinity', 'Canva', 'Notion', 'CapCut', 'Word/Pages', 'Powerpoint/Numbers', 'Excel/Keynote'],
        en: ['Photoshop', 'Illustrator', 'Affinity', 'Canva', 'Notion', 'CapCut', 'Word/Pages', 'Powerpoint/Numbers', 'Excel/Keynote'],
      },
    },
    {
      title: { fr: 'Réseaux Sociaux', en: 'Social Media' } as Bi,
      items: {
        fr: ['Meta Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X (Twitter)', 'Snapchat', 'BeReal'],
        en: ['Meta Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X (Twitter)', 'Snapchat', 'BeReal'],
      },
    },
    {
      title: { fr: 'International & Langues', en: 'International & Languages' } as Bi,
      items: {
        fr: ['Français (Natif)', 'Anglais (Bilingue découlant de ma double nationalité)', 'Espagnol (B1)', 'Adaptabilité interculturelle', 'Communication multilingue'],
        en: ['French (Native)', 'English (Bilingual, from dual nationality)', 'Spanish (Intermediate)', 'Intercultural adaptability', 'Multilingual communication'],
      },
    },
  ],
} as const

/**
 * --- RÉALISATIONS (catalogue numéroté) ---
 */
export type Project = {
  slug: string
  title: Bi
  category: 'Contenu' | 'Digital' | 'Traduction' | 'Retail'
  categoryLabel: Bi
  year: string
  client: string
  role: Bi
  cover: string
  summary: Bi
  challenge: Bi
  approach: { fr: string[]; en: string[] }
  results: { value: Bi; label: Bi }[]
  tags: { fr: string[]; en: string[] }
  gallery: Array<{ src: string; alt?: string; type?: 'image' | 'video' }>
}

export const projects: Project[] = [
  {
    slug: 'linkedin-ludi',
    title: { fr: 'Animation & croissance LinkedIn', en: 'LinkedIn management & growth' },
    category: 'Digital',
    categoryLabel: { fr: 'Digital', en: 'Digital' },
    year: '2024 → 2026',
    client: 'Ludi SFM — Nice',
    role: { fr: 'Marketing & Community Management', en: 'Marketing & Community Management' },
    cover: '/images/recrut-linkedin-ludi.webp',
    summary: { fr: 'Gestion et animation de la page LinkedIn de l’entreprise, avec une ligne de contenu régulière et cohérente.', en: 'Managing and growing the company’s LinkedIn page, with a consistent, regular content line.' },
    challenge: { fr: 'Développer la visibilité et la communauté de l’entreprise sur LinkedIn avec une présence légèrement modernisée.', en: 'Growing the company’s visibility and community on LinkedIn with a slightly more modern presence.' },
    approach: {
      fr: ['Définition d’une ligne éditoriale et d’un rythme de publication.', 'Création de posts et de visuels alignés à l’identité de la marque.', 'Veille sur les tendances et l’actualité du secteur pour nourrir le contenu.'],
      en: ['Defining an editorial line and a posting schedule.', 'Creating posts and visuals aligned with the brand identity.', 'Monitoring industry trends and news to feed the content.'],
    },
    results: [
      { value: { fr: '986 → 1 264', en: '986 → 1,264' }, label: { fr: 'abonnés LinkedIn', en: 'LinkedIn followers' } },
      { value: { fr: '+28 %', en: '+28%' }, label: { fr: 'de communauté', en: 'community growth' } },
      { value: { fr: 'Régulier', en: 'Consistent' }, label: { fr: 'Rythme de publication selon les installations', en: 'Posting schedule based on installations' } },
    ],
    tags: {
      fr: ['LinkedIn', 'Community management', 'Création de contenu'],
      en: ['LinkedIn', 'Community management', 'Content creation'],
    },
    gallery: [
      { src: '/images/post-recrut-linkedin.webp', alt: 'Post NOUS RECRUTONS Sales Executive' },
      { src: '/images/post-money-gong.webp', alt: 'Post Money Gong' },
      { src: '/images/post-v-line-alfastreet.webp', alt: 'Post V-line' },
      { src: '/images/post-prism-element.webp', alt: 'Post Prism Element' },
    ],
  },
  {
    slug: 'creation-visuelle',
    title: { fr: 'Création de contenu visuel multilingue', en: 'Multilingual visual content creation' },
    category: 'Contenu',
    categoryLabel: { fr: 'Contenu', en: 'Content' },
    year: '2024 → 2026',
    client: 'Ludi SFM — Nice',
    role: { fr: 'Création visuelle', en: 'Visual creation' },
    cover: '/images/goodies-ludi-beige.webp',
    summary: { fr: 'Conception de contenus visuels multilingues : posts, goodies, signatures et éléments de marque.', en: 'Designing multilingual visual content: posts, branded merchandise, signatures, and brand assets.' },
    challenge: { fr: 'Doter l’entreprise d’une identité visuelle cohérente sur l’ensemble de ses points de contact.', en: 'Giving the company a consistent visual identity across all its touchpoints.' },
    approach: {
      fr: ['Création de visuels pour les réseaux et les supports internes.', 'Design de goodies et de signatures email aux couleurs de la marque.', 'Déclinaison bilingue de chaque contenu.'],
      en: ['Creating visuals for social media and internal materials.', 'Designing branded merchandise and email signatures in the brand colors.', 'Producing a bilingual version of every piece of content.'],
    },
    results: [
      { value: { fr: 'Multi-supports', en: 'Multi-format' }, label: { fr: 'posts, goodies, signatures', en: 'posts, merchandise, signatures' } },
      { value: { fr: '3 outils', en: '3 tools' }, label: { fr: 'maîtrisés : Canva, Photoshop, Affinity', en: 'mastered: Canva, Photoshop, Affinity' } },
      { value: { fr: '2 langues', en: '2 languages' }, label: { fr: 'déclinaisons de supports FR/EN', en: 'FR/EN material versions' } },
    ],
    tags: {
      fr: ['Design', 'Direction artistique', 'Outils de création'],
      en: ['Design', 'Art direction', 'Creative tools'],
    },
    gallery: [
      { src: '/images/goodies-ludi-beige.webp', alt: 'Goodies Ludi' },
      { src: '/images/signature-mail-noel-ludi.webp', alt: 'Signature Mail Noël Ludi' },
      { src: '/images/post-modulus.webp', alt: 'Post Chinese NYE Modulus 2025' },
      { src: '/images/card-modulus.webp', alt: 'E-card Chinese NYE Modulus 2025' },
      { src: '/images/post-moduloween.webp', alt: 'Post Moduloween' },
    ],
  },
  {
    slug: 'retail-zara',
    title: { fr: 'Performance vente en boutique', en: 'In-store sales performance' },
    category: 'Retail',
    categoryLabel: { fr: 'Retail', en: 'Retail' },
    year: '2024',
    client: 'ZARA — Cannes',
    role: { fr: 'Vendeuse (CDD)', en: 'Sales Associate (fixed-term contract)' },
    cover: '/images/zara-retail-pic.webp',
    summary: { fr: 'Vente, merchandising et gestion des stocks en boutique, avec des objectifs commerciaux quotidiens.', en: 'Sales, merchandising, and inventory management in-store, with daily sales targets.' },
    challenge: { fr: 'Atteindre des objectifs de vente élevés tout en assurant une expérience client irréprochable.', en: 'Hitting high sales targets while ensuring a flawless customer experience.' },
    approach: {
      fr: ['Conseil et démonstration produit auprès d’une clientèle exigeante.', 'Gestion des stocks et réassort en continu.', 'Suivi des tendances pour orienter les recommandations.'],
      en: ['Advising and demonstrating products to a demanding clientele.', 'Continuous stock management and restocking.', 'Tracking trends to guide recommendations.'],
    },
    results: [
      { value: { fr: '≃ 45k €', en: '≃ €45k' }, label: { fr: 'de ventes par jour en boutique', en: 'in daily in-store sales' } },
      { value: { fr: '5 mois / 5', en: '5 out of 5 months' }, label: { fr: 'objectifs de vente mensuels atteints', en: 'monthly sales targets met' } },
      { value: { fr: 'Flexibilité', en: 'Flexibility' }, label: { fr: 'sur la gestion du rayon pendant les temps forts', en: 'in managing the floor during peak periods' } },
    ],
    tags: {
      fr: ['Vente directe', 'Relation client', 'Gestion de la pression'],
      en: ['Direct sales', 'Customer relations', 'Working under pressure'],
    },
    gallery: [{ src: '/images/zara-retail-pic.webp', alt: 'Retail Zara' }],
  },
  {
    slug: 'kit-instagram',
    title: { fr: 'Kit Instagram — Atelier Meaunn', en: 'Instagram Kit — Atelier Meaunn' },
    category: 'Digital',
    categoryLabel: { fr: 'Digital', en: 'Digital' },
    year: '2026',
    client: 'Atelier Meaunn',
    role: { fr: 'Stratégie de contenu & Brand Identity', en: 'Content strategy & Brand Identity' },
    cover: '/images/kit-instagram-atelier-meaunn-1.webp',
    summary: { fr: 'Conception d’une stratégie Instagram complète pour une marque artisanale de luminaires.', en: 'Designing a complete Instagram strategy for an artisanal lighting brand.' },
    challenge: { fr: 'Construire de zéro une stratégie Instagram complète pour une jeune marque artisanale de luminaires en papier, en traduisant à l’écran l’univers poétique et écoresponsable de la créatrice.', en: 'Building a complete Instagram strategy from scratch for a young artisanal paper-lighting brand, translating the founder’s poetic, eco-conscious world onto the screen.' },
    approach: {
      fr: ['Définition de 6 piliers de contenus (ambiance, artisanat, création, engagement, BTS, témoignages).', 'Création de templates pour posts, dumps, stories et highlights, alignés à l’identité visuelle de la marque.', 'Élaboration d’un planning éditorial et d’une campagne Ads ciblée (budget, cible, dates clés).'],
      en: ['Defining 6 content pillars (mood, craftsmanship, creation process, engagement, behind-the-scenes, testimonials).', 'Creating templates for posts, photo dumps, stories, and highlights, aligned with the brand’s visual identity.', 'Building an editorial calendar and a targeted Ads campaign (budget, audience, key dates).'],
    },
    results: [
      { value: { fr: '6', en: '6' }, label: { fr: 'piliers de contenus', en: 'content pillars' } },
      { value: { fr: '3', en: '3' }, label: { fr: 'séries de templates', en: 'template series' } },
      { value: { fr: '12 jours', en: '12 days' }, label: { fr: 'planning de campagne Ads', en: 'Ads campaign schedule' } },
    ],
    tags: {
      fr: ['Instagram', 'Stratégie de contenu', 'Brand Identity', 'Media Planning'],
      en: ['Instagram', 'Content strategy', 'Brand Identity', 'Media Planning'],
    },
    gallery: [
      { src: '/images/kit-instagram-atelier-meaunn-1.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-2.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-3.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-4.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-5.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-6.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-7.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-8.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-9.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-10.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-11.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-12.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-13.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-14.webp', alt: 'Kit Instagram Atelier Meaunn' },
      { src: '/images/kit-instagram-atelier-meaunn-15.webp', alt: 'Kit Instagram Atelier Meaunn' },
    ],
  },
  {
    slug: 'supports-bilingues',
    title: { fr: 'Supports commerciaux bilingues FR/EN', en: 'Bilingual FR/EN sales materials' },
    category: 'Traduction',
    categoryLabel: { fr: 'Traduction', en: 'Translation' },
    year: '2024 → 2026',
    client: 'Ludi SFM — Nice',
    role: { fr: 'Production & Traduction', en: 'Production & Translation' },
    cover: '/images/luckyup-alfastreet.webp',
    summary: { fr: 'Production et traduction de supports commerciaux en français et en anglais : règles de jeux, fiches produits, présentations.', en: 'Producing and translating sales materials in French and English: game rules, product sheets, presentations.' },
    challenge: { fr: 'Rendre l’offre accessible et cohérente auprès d’une clientèle internationale, dans deux langues.', en: 'Making the offering accessible and consistent for an international clientele, in two languages.' },
    approach: {
      fr: ['Traduction FR/EN des règles de jeux et des fiches produits.', 'Mise en forme de présentations claires et professionnelles.', 'Harmonisation du ton et du vocabulaire entre les deux langues.'],
      en: ['FR/EN translation of game rules and product sheets.', 'Formatting clear, professional presentations.', 'Harmonizing tone and vocabulary between the two languages.'],
    },
    results: [
      { value: { fr: '~15 fiches produits', en: '~15 product sheets' }, label: { fr: 'traduites et mises en forme FR/EN', en: 'translated and formatted FR/EN' } },
      { value: { fr: '65+ règles de jeux', en: '65+ game rules' }, label: { fr: 'traduites', en: 'translated' } },
      { value: { fr: '200+ casinos', en: '200+ casinos' }, label: { fr: 'touchés via ce réseau de distribution B2B', en: 'reached through this B2B distribution network' } },
    ],
    tags: {
      fr: ['Bilingue', 'Traduction', 'Supports commerciaux', 'Identité de marque'],
      en: ['Bilingual', 'Translation', 'Sales materials', 'Brand identity'],
    },
    gallery: [
      { src: '/images/luck-rising-rgl.webp', alt: 'Luck Rising RGL' },
      { src: '/images/luckyup-alfastreet.webp', alt: 'Lucky Up Alfastreet' },
    ],
  },
]

/* --- ÉTUDE DE CAS MISE EN AVANT : LUDI SHOW --- */
export const caseStudy = {
  eyebrow: { fr: 'Étude de cas', en: 'Case Study' } as Bi,
  title: 'Ludi Show',
  subtitle: {
    fr: ['Ludi SFM est une entreprise niçoise spécialisée dans la fourniture et la maintenance de machines à sous et jeux pour les casinos français, avec un réseau de plus de 200 établissements. L’entreprise s’appuie également sur Modulus, sa société sœur basée à Monaco, qui élargit son rayonnement sur la Principauté ainsi qu’à l’international. C’est dans ce contexte B2B exigeant que s’est déroulé le Ludi Show, l’événement au cœur de cette étude de cas.'],
    en: ['Ludi SFM is a Nice-based company specializing in supplying and maintaining slot machines and casino gaming equipment for French casinos, with a network of over 200 establishments. The company also relies on Modulus, its sister company based in Monaco, which extends its reach into the Principality and internationally. It’s within this demanding B2B context that the Ludi Show, the event at the heart of this case study, took place.'],
  },
  context: {
    fr: 'Ludi SFM m’a confié, dès novembre 2024, une partie de la communication et la création de contenu de l’entreprise. Le Ludi Show en est le point d’orgue : un rendez-vous ludique où se rencontrent contenu, marque et cible. C’est une exposition organisée dans les locaux pour présenter les nouveautés en machines à sous et jeux de casino à une sélection de clients. Pour la 3ème édition, je me suis chargée de plusieurs volets, de l’identité visuelle à l’expérience client sur place.',
    en: 'Since November 2024, Ludi SFM has entrusted me with part of the company’s communications and content creation. The Ludi Show is its highlight: a playful event where content, brand, and audience meet. It’s an on-site exhibition showcasing the latest slot machines and casino games to a select group of clients. For the 3rd edition, I handled several aspects, from the visual identity to the on-site customer experience.',
  } as Bi,
  cover: '/images/bienvenue-ludi-show.webp',
  mission: {
    fr: 'Faire de cette édition un moment de marque cohérent, de l’identité visuelle jusqu’à l’expérience vécue. Concrètement : concevoir l’identité visuelle du Ludi Show, sélectionner et décliner les goodies, et contribuer à l’expérience client.',
    en: 'Making this edition a cohesive brand moment, from the visual identity to the experience itself. Concretely: designing the Ludi Show’s visual identity, selecting and adapting the branded merchandise, and contributing to the customer experience.',
  } as Bi,
  chapters: [
    {
      title: { fr: 'Direction artistique & supports visuels', en: 'Art direction & visual materials' } as Bi,
      text: { fr: 'Conception de l’identité graphique de l’événement : kakemono d’accueil & déclinaison horizontale pour les écrans avec une palette chaleureuse (jaune/noir, palmiers, Côte d’Azur) qui ancre le Ludi Show dans son territoire et reste cohérente avec son identité de marque.', en: 'Designing the event’s graphic identity: a welcome roll-up banner and a horizontal version for screens, using a warm palette (yellow/black, palm trees, the French Riviera) that grounds the Ludi Show in its territory while staying consistent with the brand identity.' } as Bi,
    },
    {
      title: { fr: 'Déclinaison de l’identité sur l’ensemble des goodies', en: 'Adapting the identity across all branded merchandise' } as Bi,
      text: { fr: 'Application du logo de Ludi SFM sur toute la gamme de goodies : casquettes, polos, tote bags, porte-cartes, etc... Chaque support ayant ses propres contraintes de zone et de matière, le placement du branding a été adapté objet par objet.', en: 'Applying the Ludi SFM logo across the full range of branded merchandise: caps, polos, tote bags, card holders, etc. Since each item has its own space and material constraints, the branding placement was adapted item by item.' } as Bi,
    },
    {
      title: { fr: 'Sélection & sourcing des goodies', en: 'Selecting & sourcing the merchandise' } as Bi,
      text: { fr: 'Choix de chaque objet avec un arbitrage qualité perçue / utilité réelle / cohérence avec le positionnement premium de Ludi SFM auprès d’une clientèle professionnelle plutôt que du gadget jetable.', en: 'Choosing each item by weighing perceived quality, actual usefulness, and consistency with Ludi SFM’s premium positioning for a professional clientele, rather than opting for disposable gadgets.' } as Bi,
    },
    {
      title: { fr: 'Mise en place de l’expérience sur place', en: 'Setting up the on-site experience' } as Bi,
      text: { fr: 'Contribution à l’organisation de l’espace le jour de l’événement, pour que l’expérience vécue sur place soit à la hauteur de l’identité visuelle déployée en amont.', en: 'Contributing to organizing the space on the day of the event, so the on-site experience would live up to the visual identity built beforehand.' } as Bi,
    },
  ],
  results: [
    { value: { fr: 'Identité visuelle', en: 'Visual identity' } as Bi, label: { fr: 'du Ludi Show pilotée de bout en bout', en: 'of the Ludi Show managed end-to-end' } as Bi },
    { value: { fr: '4 volets', en: '4 areas' } as Bi, label: { fr: 'gérés en autonomie : direction artistique, goodies, sourcing, expérience sur place', en: 'handled independently: art direction, merchandise, sourcing, on-site experience' } as Bi },
    { value: { fr: '2 formats', en: '2 formats' } as Bi, label: { fr: 'de supports visuels créés : kakemono d’accueil et déclinaison écrans', en: 'of visual materials created: welcome roll-up and screen version' } as Bi },
    { value: { fr: '9', en: '9' } as Bi, label: { fr: 'goodies déclinés, du kakemono aux polos', en: 'branded items produced, from the roll-up banner to the polos' } as Bi },
  ],
  gallery: [
    { type: 'image', src: '/images/enseigne-ludi-hall.webp' },
    { type: 'image', src: '/images/ludi-showroom-barriere.webp' },
    { type: 'image', src: '/images/kakemono-ludi.webp' },
    { type: 'image', src: '/images/ludi-showroom-1.webp' },
    { type: 'image', src: '/images/ludi-showroom-roulette.webp' },
    { type: 'image', src: '/images/ludi-showroom-alfastreet.webp' },
    { type: 'image', src: '/images/Totebag-Black.webp' },
    { type: 'image', src: '/images/Polo.webp' },
    { type: 'image', src: '/images/Porte-carte.webp' },
  ],
} as const

/* --- PROJETS PERSONNELS (création visuelle) --- */
export type PersonalMedia = { type: 'image' | 'video'; src: string; poster?: string }

export type PersonalProject = {
  slug: string
  title: Bi
  type: Bi
  image: string
  video?: string
  description: Bi
  details?: { fr: string[]; en: string[] }
  gallery: PersonalMedia[]
}

export const personal = {
  intro: {
    fr: 'Design, photo, vidéo, direction artistique : mes projets personnels sont le terrain où je teste, j’affine et je construis mon regard.',
    en: 'Design, photography, video, art direction: my personal projects are where I test, refine, and build my eye.',
  } as Bi,
  instagram: { handle: '@stella.nzr', href: 'https://www.instagram.com/stella.nzr/' },
  items: [
    {
      slug: 'focus-shooting-photo',
      title: { fr: 'FOCUS — Shooting photo', en: 'FOCUS — Photo shoot' },
      type: { fr: 'Photographie & Direction artistique', en: 'Photography & Art direction' },
      image: '/images/focus-design-1.webp',
      description: { fr: 'Modèle photo pour ce shooting et à l’origine de la direction artistique finale, entre regard et typographie serif superposée.', en: 'Photo model for this shoot and behind the final art direction, blending gaze and overlaid serif typography.' },
      details: {
        fr: ['Direction artistique complète du shooting : choix du regard, de la lumière et de la mise en page.', 'Superposition d’une typographie serif pour ancrer l’image dans un univers éditorial plutôt que purement photographique.'],
        en: ['Full art direction of the shoot: choice of gaze, lighting, and layout.', 'Overlaying a serif typeface to ground the image in an editorial world rather than a purely photographic one.'],
      },
      gallery: [
        { type: 'image', src: '/images/focus-design-1.webp' },
        { type: 'image', src: '/images/focus-shoot-1.webp' },
        { type: 'image', src: '/images/focus-shoot-2.webp' },
      ],
    },
    {
      slug: 'unboxing-tiktok',
      title: { fr: 'Unboxing — Tiktok', en: 'Unboxing — TikTok' },
      type: { fr: 'Vidéo', en: 'Video' },
      video: '/videos/unboxing-micros.mp4',
      image: '/images/cover-unboxing-micros.webp',
      description: { fr: 'Montage CapCut dynamique d’un unboxing, rythmé pour capter l’attention dès les premières secondes sur TikTok.', en: 'Dynamic CapCut edit of an unboxing, paced to grab attention within the first seconds on TikTok.' },
      details: {
        fr: ['Montage entièrement réalisé sur CapCut, avec un rythme de coupes calé sur les codes natifs du format court.', 'Accroche construite sur les 3 premières secondes pour éviter le scroll et retenir l’attention jusqu’au bout.'],
        en: ['Editing done entirely in CapCut, with a cutting rhythm matched to short-form video conventions.', 'Hook built around the first 3 seconds to prevent scrolling and hold attention through to the end.'],
      },
      gallery: [
        { type: 'video', src: '/videos/unboxing-micros.mp4', poster: '/images/cover-unboxing-micros.webp' },
      ],
    },
    {
      slug: 'feed-instagram-identite',
      title: { fr: 'Feed Instagram — Identité', en: 'Instagram Feed — Identity' },
      type: { fr: 'Design & Branding', en: 'Design & Branding' },
      image: '/images/feed-ig-atelier-meaunn.webp',
      description: { fr: 'Qui a dit qu’un compte Instagram professionnel ne pouvait pas contenir une structure visuelle cohérente et rythmée à l’image du créateur?', en: 'Who said a professional Instagram account couldn’t have a coherent, rhythmic visual structure that reflects its creator?' },
      details: {
        fr: ['Construction d’une grille de publication pensée pour se lire d’un seul coup d’œil : alternance de plans serrés sur la matière, de mises en scène du produit et de respirations plus lifestyle.', 'Harmonisation de la palette et de la lumière sur l’ensemble des visuels pour que le feed fonctionne comme une vitrine, pas comme une suite de posts isolés.'],
        en: ['Building a posting grid designed to read at a glance: alternating close-up shots of materials, staged product shots, and more lifestyle-driven breathing space.', 'Harmonizing the palette and lighting across all visuals so the feed works as a storefront, not a series of disconnected posts.'],
      },
      gallery: [{ type: 'image', src: '/images/feed-ig-atelier-meaunn.webp' }],
    },
    {
      slug: 'publicite-photobooth-tiktok',
      title: { fr: 'Publicité Photobooth — TikTok', en: 'Photobooth Ad — TikTok' },
      type: { fr: 'Vidéo', en: 'Video' },
      video: '/videos/photobooth-tiktok.mp4',
      image: '/images/cover-photobooth.webp',
      description: { fr: 'Montage et formats courts pour la campagne publicitaire fictive d’un street photobooth, pensés pour l’algorithme et l’engagement TikTok.', en: 'Editing and short-form formats for a fictional ad campaign for a street photobooth, designed for TikTok’s algorithm and engagement.' },
      details: {
        fr: ['Écriture d’un scénario publicitaire fictif pensé pour un format court, avec une accroche dans les 3 premières secondes.', 'Montage rythmé, cuts courts et transitions calées sur le son, dans les codes natifs de TikTok plutôt qu’en simple adaptation d’un format vidéo classique.'],
        en: ['Writing a fictional ad script designed for short-form video, with a hook in the first 3 seconds.', 'Fast-paced editing, short cuts, and transitions timed to the sound, following TikTok’s native conventions rather than simply adapting a traditional video format.'],
      },
      gallery: [
        { type: 'video', src: '/videos/photobooth-tiktok.mp4', poster: '/images/cover-photobooth.webp' },
      ],
    },
    {
      slug: 'identite-visuelle-soen',
      title: { fr: 'Identité visuelle — SOEN', en: 'Visual Identity — SOEN' },
      type: { fr: 'Design & Branding', en: 'Design & Branding' },
      image: '/images/crea-soen-2026.webp',
      description: { fr: 'Construction de mon identité de marque personnelle : logo, palette, typographie et univers verbal autour de mon nom.', en: 'Building my personal brand identity: logo, color palette, typography, and verbal universe built around my name.' },
      details: {
        fr: ['Construction d’un acronyme (Shine. Own. Earn. Navigate.) autour de mon nom pour porter une identité de marque personnelle plutôt qu’un simple portfolio.', 'Choix d’une palette de tons chauds et d’une esthétique proche du "old money" pour incarner une élégance sobre et durable, à l’opposé des codes saturés habituels.'],
        en: ['Building an acronym (Shine. Own. Earn. Navigate.) around my name to carry a personal brand identity rather than just a portfolio.', 'Choosing a warm-toned palette and an "old money" aesthetic to embody an understated, lasting elegance, in contrast to the usual oversaturated visual codes.'],
      },
      gallery: [{ type: 'image', src: '/images/crea-soen-2026.webp' }],
    },
    {
      slug: 'proposition-crm-hubspot',
      title: { fr: 'Proposition de CRM — HubSpot', en: 'CRM Proposal — HubSpot' },
      type: { fr: 'Stratégie & Business', en: 'Strategy & Business' },
      image: '/images/proposition-crm-ludi.webp',
      description: { fr: 'Conception et présentation d’un plan de déploiement de CRM en 3 phases pour Ludi SFM afin de suivre ses 204 casinos clients.', en: 'Designing and presenting a 3-phase CRM rollout plan for Ludi SFM to track its 204 client casinos.' },
      details: {
        fr: ['Structuration d’un plan de déploiement en 3 phases (cadrage & migration des données, prise en main commerciale, pilotage par le reporting) pour rendre le projet finançable et actionnable.', 'Réflexion pensée pour le contexte réel de Ludi SFM : un portefeuille de 204 casinos clients à suivre sans perte d’information entre les commerciaux.'],
        en: ['Structuring a 3-phase rollout plan (scoping & data migration, sales team onboarding, reporting-driven management) to make the project financeable and actionable.', 'Thinking tailored to Ludi SFM’s actual context: a portfolio of 204 client casinos to track without losing information between sales reps.'],
      },
      gallery: [{ type: 'image', src: '/images/proposition-crm-ludi.webp' }],
    },
    {
      slug: 'portfolio-soen',
      title: { fr: 'Portfolio — SOEN', en: 'Portfolio — SOEN' },
      type: { fr: 'Design & Branding', en: 'Design & Branding' },
      image: '/images/portfolio-soen-cover.svg',
      description: { fr: 'Et si je vous disais que vous êtes en train de le parcourir ? Ce portfolio a été conçu par mes soins pour présenter mon travail et mes compétences.', en: 'What if I told you that you’re looking at it right now? This portfolio was designed by me to showcase my work and skills.' },
      details: {
        fr: ['Développement du site en Next.js, TypeScript et Tailwind CSS, avec un contenu entièrement centralisé pour pouvoir tout modifier sans toucher au design.', 'Passage d’un premier prototype généré sur v0.app à une version locale, plus pérenne et éditable, déployée sur Netlify.'],
        en: ['Building the site with Next.js, TypeScript, and Tailwind CSS, with fully centralized content so everything can be edited without touching the design.', 'Moving from an initial prototype generated on v0.app to a more durable, locally editable version, deployed on Netlify.'],
      },
      gallery: [
        { type: 'image', src: '/images/portfolio-soen-cover.webp' },
        { type: 'image', src: '/s-logo-soen.svg' },
      ],
    },
  ] satisfies PersonalProject[],
} as const

/* --- CONTACT --- */
export const contactPage = {
  title: { fr: 'Travaillons ensemble.', en: 'Let’s work together.' } as Bi,
  intro: {
    fr: 'Brand & Marketing Assistant en alternance chez Hellenist, ouverte aux collaborations, missions ponctuelles et opportunités qui donneront une dimension internationale à mon parcours. Parlons-en.',
    en: 'Brand & Marketing Assistant on a work-study program at Hellenist, open to collaborations, one-off projects, and opportunities that add an international dimension to my path. Let’s talk.',
  } as Bi,
  reasons: {
    fr: [
      'Expérience concrète de la relation client au marketing, sur le terrain comme derrière un écran.',
      'À l’aise en environnement international et interculturel.',
      'Profil solaire, créatif et opérationnel : création de contenu, stratégie de vente et développement commercial.',
    ],
    en: [
      'Hands-on experience from customer relations to marketing, both in the field and behind a screen.',
      'Comfortable in international, intercultural environments.',
      'A bright, creative, hands-on profile: content creation, sales strategy, and business development.',
    ],
  },
} as const
