import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative sm:h-screen min-h-screen pt-30 md:mt-0 flex items-center justify-center overflow-hidden gradient-artistic">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder/placeholder-bg.jpg"
          alt="Studio background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium mb-4 fade-in">
            Experimental Abstract Artist
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 fade-in fade-in-delay-1">
            Frederick Osarodion
          </h1>
          <p className="text-2xl text-gray-300 opacity-80 mb-8 max-w-2xl mx-auto fade-in fade-in-delay-2">
            Best of contemporary African work of art
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-3">
          <a
            href="#featured"
            className="bg-white text-gray-500 px-8 py-3 rounded-full font-semibold hover-lift transition-smooth shadow-lg"
          >
            View Gallery
          </a>
          <a
            href="/about"
            className="glass text-white px-8 py-3 rounded-full font-semibold hover-lift transition-smooth border border-white/20"
          >
            Meet The Artist
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto fade-in fade-in-delay-4">
          <div className="text-center glass rounded-lg p-4 hover-lift">
            <div className="text-3xl text-white sm:text-4xl font-bold mb-2  bg-clip-text">15+</div>
            <div className="text-sm opacity-80">Years in Business</div>
          </div>
          <div className="text-center glass rounded-lg p-4 hover-lift">
            <div className="text-3xl sm:text-4xl font-bold mb-2  bg-clip-text text-white">500+</div>
            <div className="text-sm opacity-80">Happy Customers</div>
          </div>
          <div className="text-center glass rounded-lg p-4 hover-lift">
            <div className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-white">200+</div>
            <div className="text-sm opacity-80">Art Projects Delivered</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator">
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
