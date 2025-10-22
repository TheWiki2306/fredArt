import { Navigation } from '@/components/Navigation'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'

const blogPosts = {
  'contemporary-african-art-evolution': {
    title: 'The Evolution of Contemporary African Art',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Art History',
    image: '/placeholder/blog-1.jpg',
    content: `
      <p>The landscape of contemporary African art has undergone a remarkable transformation over the past few decades. What was once primarily associated with traditional crafts and colonial-era representations has evolved into a dynamic, multifaceted movement that challenges preconceptions and pushes creative boundaries.</p>
      <h2>The Roots of Change</h2>
      <p>The evolution began in the post-independence era when African artists started to reclaim their cultural narratives. Artists like El Anatsui, Yinka Shonibare, and Julie Mehretu have been instrumental in this transformation, creating works that speak to both local and global audiences.</p>
      <h2>Global Recognition</h2>
      <p>Today, contemporary African art enjoys unprecedented global recognition. Major museums and galleries worldwide are increasingly featuring African artists, and the art market has responded with growing interest and investment in African contemporary works.</p>
    `,
  },
  'artistic-process-revealed': {
    title: 'My Artistic Process: From Inspiration to Creation',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Process',
    image: '/placeholder/blog-2.jpg',
    content: `
      <p>Every artist has a unique journey from initial inspiration to final creation. For me, this process is deeply personal yet universal in its exploration of human experience and cultural identity.</p>
      <h2>Finding Inspiration</h2>
      <p>Inspiration often comes from unexpected places. A conversation with a stranger, the way light falls on a building, or a fragment of traditional music can spark the beginning of a new work.</p>
    `,
  },
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: `Read ${post.title}`,
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return notFound()
  }

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">{post.date}</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
            </div>
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 flex justify-between">
              <a
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                ← Back to Blog
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 gradient-accent text-white rounded-lg hover:gradient-accent-hover transition-all duration-200"
              >
                Connect With Me →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
