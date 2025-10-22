import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedSection } from '@/components/FeaturedSection'

export const metadata: Metadata = {
  title: 'Art Portfolio',
  description: 'Featured artworks from the portfolio.',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
    </main>
  )
}
