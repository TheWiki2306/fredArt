import Link from 'next/link'

const collections = [
  { slug: 'lovers-tales', name: 'Lovers Tales', blurb: 'Love, connection, and human stories' },
  { slug: 'guy-man', name: 'Guy Man', blurb: 'Masculinity and contemporary identity' },
  { slug: 'adesuwa', name: 'Adesuwa Collections', blurb: 'Feminine beauty and heritage' },
  { slug: 'ancestral', name: 'Ancestral', blurb: 'Roots and traditions in focus' },
  { slug: 'core', name: 'Core', blurb: 'Essential expressions and forms' },
]

export function CollectionsSpotlight() {
  return (
    <section className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Collections spotlight
            </h2>
            <p className="text-sm text-neutral-600 mt-1">A few directions across series and time</p>
          </div>
          <Link href="/collections" className="text-sm text-neutral-700 hover:text-black">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections`}
              className="block rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors"
            >
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-neutral-600 mt-1">{c.blurb}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
