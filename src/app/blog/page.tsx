import Link from 'next/link'

const posts = [
  {
    slug: 'contemporary-african-art-evolution',
    title: 'The Evolution of Contemporary African Art',
    date: '2024-01-15',
    read: '5 min',
  },
  {
    slug: 'artistic-process-revealed',
    title: 'My Artistic Process: From Inspiration to Creation',
    date: '2024-01-10',
    read: '7 min',
  },
]

export default function Blog() {
  return (
    <main className="glass pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-gray-300">Insights, process notes, and exhibition updates.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-neutral-200 p-6 hover:bg-neutral-50 transition-colors"
            >
              <div className="text-sm text-neutral-500">
                {p.date} • {p.read}
              </div>
              <h2 className="text-lg font-semibold mt-2">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <div className="mt-4">
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm text-neutral-700 hover:text-black"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
