import { GalleryGrid } from './GalleryGrid'
import { artworks } from '@/data/artworks'

export function FeaturedSection() {
  return (
    <section id="featured" className="py-20 glass transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Featured Art Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Contemporary African Art</p>
        </div>

        <GalleryGrid artworks={artworks} />

        <div className="text-center mt-12 fade-in fade-in-delay-1">
          <a
            href="/gallery"
            className="inline-flex items-center px-8 py-3 gradient-accent text-white rounded-full font-semibold hover:gradient-accent-hover btn-primary transition-smooth shadow-lg"
          >
            See All Collections
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
