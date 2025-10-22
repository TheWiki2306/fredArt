import type { Artwork } from '@/components/ArtworkCard'

export const artworks: Artwork[] = [
  {
    slug: 'sunlit-forest',
    title: 'Sunlit Forest',
    image: '/placeholder/placeholder-4.jpg',
    width: 800,
    height: 600,
    year: '2024',
    medium: 'Oil on canvas',
    collection: 'abstract-expressions',
  },
  {
    slug: 'midnight-city',
    title: 'Midnight City',
    image: '/placeholder/Fredrick-Rapsody-2023.jpg',
    width: 800,
    height: 600,
    year: '2023',
    medium: 'Digital',
    collection: 'figurative-works',
  },
  {
    slug: 'ocean-dream',
    title: 'Ocean Dream',
    image: '/placeholder/placeholder-2.jpg',
    width: 800,
    height: 600,
    year: '2025',
    medium: 'Acrylic',
    collection: 'landscape-series',
  },
  {
    slug: 'golden-hour',
    title: 'Golden Hour',
    image: '/placeholder/placeholder-3.jpg',
    width: 800,
    height: 600,
    year: '2022',
    medium: 'Watercolor',
    collection: 'abstract-expressions',
  },
]

export const collections = {
  'abstract-expressions': {
    name: 'Abstract Expressions',
    description: 'Exploring the boundaries of form and color through abstract compositions.',
    artworks: artworks.filter((artwork) => artwork.collection === 'abstract-expressions'),
  },
  'figurative-works': {
    name: 'Figurative Works',
    description: 'Human form and emotion captured through contemporary artistic lens.',
    artworks: artworks.filter((artwork) => artwork.collection === 'figurative-works'),
  },
  'landscape-series': {
    name: 'Landscape Series',
    description: 'Natural beauty and environmental consciousness in modern art.',
    artworks: artworks.filter((artwork) => artwork.collection === 'landscape-series'),
  },
}
