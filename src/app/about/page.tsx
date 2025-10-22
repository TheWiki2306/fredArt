import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Art Portfolio',
  description: "Learn about the artist's journey, philosophy, and artistic practice.",
}

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 fade-in">
            About the Artist
          </h1>
          <p className="text-xl text-gray-600 fade-in-delay-1">
            Exploring contemporary African art through texture, color, and narrative
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Artist Image */}
            <div className="fade-in">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/api/placeholder/500/500"
                  alt="Artist portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="fade-in-delay-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Eghosa Raymond Akenbor</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Based in Benin City, Nigeria, Eghosa Raymond Akenbor is a contemporary artist
                  whose work bridges traditional African aesthetics with modern artistic expression.
                  His practice encompasses painting, mixed media, and experimental techniques that
                  explore themes of identity, culture, and social commentary.
                </p>
                <p>
                  With over a decade of artistic exploration, Akenbor's work has been featured in
                  numerous exhibitions across Nigeria and internationally. His distinctive style
                  combines bold color palettes with intricate textures, creating pieces that are
                  both visually striking and conceptually profound.
                </p>
                <p>
                  As an art educator, Akenbor is passionate about nurturing the next generation of
                  African artists, sharing his knowledge and techniques through workshops and
                  mentorship programs in his community.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Artworks Created</div>
            </div>
            <div className="text-center fade-in-delay-1">
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Exhibitions</div>
            </div>
            <div className="text-center fade-in-delay-2">
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mt-20 text-center fade-in-delay-3">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Connect With Me</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in commissioning a piece, collaborating on a project, or learning more
              about my work? I'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
