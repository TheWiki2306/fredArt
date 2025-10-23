import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Art Portfolio',
  description: 'Learn about the artist&apos;s journey, philosophy, and artistic practice.',
}

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-[#372c03] mb-6 fade-in">
            About the Artist
          </h1>
          <p className="text-xl text-slate-600 fade-in-delay-1">
            Exploring contemporary African art through texture, color, and narrative
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="glass">
        <div className="max-w-6xl mx-auto py-20 px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Artist Image */}
            <div className="fade-in">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder/olu-1.jpg"
                  alt="Artist portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Biography */}
            <div className="fade-in-delay-1">
              <h2 className="text-4xl font-bold mb-6">Frederick Osarodion</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Based in Benin City, Nigeria, Frederick Osarodion is a Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Dolorum corrupti culpa delectus odit. Quia ad sit
                  maiores obcaecati ratione quis eius.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate temporibus
                  voluptatum in at dolor neque, aut impedit, ullam quae magni rem quasi aliquid
                  officia hic cumque illum iste, expedita incidunt voluptas!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quisquam quasi modi
                  quod ut dolor beatae, optio quia, voluptate necessitatibus rerum molestias.
                  Accusamus totam vero soluta aspernatur, excepturi beatae necessitatibus. Neque.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-30 grid md:grid-cols-3 gap-8">
            <div className="text-center glass rounded-lg p-4 hover-lift fade-in">
              <div className="text-4xl font-bold text-orange-300 mb-2">50+</div>
              <div className="text-gray-400">Artworks Created</div>
            </div>
            <div className="text-center glass rounded-lg p-4 hover-lift fade-in-delay-1">
              <div className="text-4xl font-bold text-orange-300 mb-2">15+</div>
              <div className="text-gray-300">Exhibitions</div>
            </div>
            <div className="text-center glass rounded-lg p-4 hover-lift fade-in-delay-2">
              <div className="text-4xl font-bold text-orange-300 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mt-30 text-center fade-in-delay-3">
            <h3 className="text-3xl font-bold mb-6">Connect With Me</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Interested in commissioning a piece, collaborating on a project, or learning more
              about my work? I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block gradient-accent text-white px-8 py-4 rounded-full font-semibold hover:gradient-accent-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
