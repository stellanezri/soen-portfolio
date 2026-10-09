// Clé = libellé FR exact tel qu'écrit dans hardSkills.groups[].items.fr
export const skillProjects: Record<string, string[]> = {
  'Création de contenus & supports FR/EN': ['creation-visuelle', 'supports-bilingues', 'feed-instagram-identite'],
  'Stratégie & gestion de réseaux sociaux (LinkedIn B2B)': ['linkedin-ludi', 'kit-instagram'],
  'Identité visuelle & charte graphique': ['identite-visuelle-soen', 'feed-instagram-identite', 'kit-instagram'],
  'Suivi des tendances': ['unboxing-tiktok', 'publicite-photobooth-tiktok', 'feed-instagram-identite'],
  'Copywriting & rédaction technique': ['linkedin-ludi', 'supports-bilingues'],
  'Communication multilingue': ['supports-bilingues', 'creation-visuelle'],
  'Stratégie de vente': ['retail-zara', 'proposition-crm-hubspot'],
  'Relation client': ['retail-zara'],
  'Gestion des stocks & réassort': ['retail-zara'],
  'Atteinte d’objectifs chiffrés': ['retail-zara'],
  'Veille tendances & actualités': ['unboxing-tiktok', 'publicite-photobooth-tiktok'],
  'Photoshop': ['creation-visuelle', 'identite-visuelle-soen'],
  'Illustrator': ['identite-visuelle-soen'],
  'Affinity': ['identite-visuelle-soen'],
  'Canva': ['kit-instagram', 'feed-instagram-identite'],
  'CapCut': ['unboxing-tiktok', 'publicite-photobooth-tiktok'],
  'Instagram': ['kit-instagram', 'feed-instagram-identite'],
  'LinkedIn': ['linkedin-ludi'],
  'TikTok': ['unboxing-tiktok', 'publicite-photobooth-tiktok'],
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
