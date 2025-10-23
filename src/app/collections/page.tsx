import Link from 'next/link'

const collections = [
  { slug: 'lovers-tales', name: 'Lovers Tales' },
  { slug: 'guy-man', name: 'Guy Man' },
  { slug: 'adesuwa', name: 'Adesuwa Collections' },
  { slug: 'ancestral', name: 'Ancestral' },
  { slug: 'core', name: 'Core' },
]

export default function Collections() {
  return (
    <main className="glass pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Collections</h1>
        <ul className="mt-6 grid sm:grid-cols-2 gap-4">
          {collections.map((c) => (
            <li
              key={c.slug}
              className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50"
            >
              <Link href={`/galleries#${c.slug}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
