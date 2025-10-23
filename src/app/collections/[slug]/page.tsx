import { Navigation } from '@/components/Navigation'
import { GalleryGrid } from '@/components/GalleryGrid'
import { collections } from '@/data/artworks'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = collections[slug as keyof typeof collections]

  if (!collection) {
    return { title: 'Collection Not Found' }
  }

  return {
    title: collection.name,
    description: collection.description,
  }
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params
  const collection = collections[slug as keyof typeof collections]

  if (!collection) {
    return notFound()
  }

  return (
    <>
      <Navigation />
      <main className="glass pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{collection.name}</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              {collection.description}
            </p>
            <div className="mt-8">
              <span className="inline-block px-4 py-2 bg-white/50 dark:bg-black/20 rounded-full text-sm font-medium">
                {collection.artworks.length} Artworks
              </span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid artworks={collection.artworks} />
          </div>
        </section>
      </main>
    </>
  )
}
