// Clé = libellé FR exact tel qu'écrit dans hardSkills.groups[].items.fr
export const skillProjects: Record<string, string[]> = {
  // Marketing & Communication
  'Création de contenus & supports FR/EN': ['linkedin-ludi', 'creation-visuelle', 'supports-bilingues', 'portfolio-soen'],
  'Stratégie & gestion de réseaux sociaux (LinkedIn B2B)': ['linkedin-ludi', 'kit-instagram'],
  'Identité visuelle & charte graphique': ['creation-visuelle', 'kit-instagram', 'feed-instagram-identite', 'identite-visuelle-soen', 'portfolio-soen'],
  'Suivi des tendances': ['linkedin-ludi', 'unboxing-tiktok', 'publicite-photobooth-tiktok'],
  'Copywriting & rédaction technique': ['linkedin-ludi', 'supports-bilingues'],
  'Communication externe': ['linkedin-ludi', 'kit-instagram', 'tfwa-my-odyssey'],
  'Animation de stand & événementiel': ['tfwa-my-odyssey'],
  'Présentation de produit': ['tfwa-my-odyssey'],

  // Commerce & Relation client
  'Stratégie de vente': ['retail-zara', 'proposition-crm-hubspot'],
  'Relation client': ['retail-zara', 'proposition-crm-hubspot', 'tfwa-my-odyssey'],
  'Gestion des stocks & réassort': ['retail-zara'],
  'Atteinte d’objectifs chiffrés': ['retail-zara'],
  'Veille tendances & actualités': ['linkedin-ludi', 'unboxing-tiktok', 'publicite-photobooth-tiktok'],
  'Culture produit (parfumerie de niche)': ['tfwa-my-odyssey'],
  'Organisation & logistique événementielle': ['tfwa-my-odyssey'],

  // Outils
  'Canva': ['creation-visuelle', 'kit-instagram', 'feed-instagram-identite'],
  'Photoshop': ['creation-visuelle'],
  'CapCut': ['unboxing-tiktok', 'publicite-photobooth-tiktok'],

  // Réseaux sociaux
  'Instagram': ['kit-instagram', 'feed-instagram-identite'],
  'LinkedIn': ['linkedin-ludi'],
  'TikTok': ['unboxing-tiktok', 'publicite-photobooth-tiktok'],

  // International & Langues
  'Communication multilingue': ['creation-visuelle', 'supports-bilingues', 'portfolio-soen'],
}

export const personalSlugs = [
  'focus-shooting-photo',
  'unboxing-tiktok',
  'feed-instagram-identite',
  'publicite-photobooth-tiktok',
  'identite-visuelle-soen',
  'proposition-crm-hubspot',
  'portfolio-soen',
]

export const projectHref = (slug: string) =>
  `/${personalSlugs.includes(slug) ? 'projets-personnels' : 'realisations'}?projet=${slug}`

// Pour le lien retour sur les fiches projets : renvoie les libellés FR des compétences
export const skillsForProject = (slug: string) =>
  Object.entries(skillProjects)
    .filter(([, slugs]) => slugs.includes(slug))
    .map(([label]) => label)
