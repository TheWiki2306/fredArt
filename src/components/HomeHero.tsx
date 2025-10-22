import Link from 'next/link'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Experimental abstract artist
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight">
              Contemporary African Art
            </h1>
            <p className="mt-3 text-neutral-600 max-w-prose">
              A curated selection of paintings exploring identity, color, and movement. Discover
              featured works and collections.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/galleries"
                className="inline-flex items-center rounded-full bg-black px-5 py-2 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Explore galleries
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                Meet the artist
              </Link>
            </div>
          </div>
          <div className="order-first lg:order-none">
            <div className="aspect-[4/3] w-full rounded-2xl bg-[url('/vercel.svg')] bg-center bg-no-repeat bg-[length:50%] bg-neutral-50 border border-neutral-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
