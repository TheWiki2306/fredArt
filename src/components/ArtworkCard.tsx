import Image from 'next/image'
import Link from 'next/link'

export type Artwork = {
  slug: string
  title: string
  image: string
  width: number
  height: number
  year?: string
  medium?: string
  collection?: string
}

type ArtworkCardProps = {
  artwork: Artwork
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link
      href={`/art/${artwork.slug}`}
      className="group block rounded-lg overflow-hidden border border-gray-500  bg-white/50 dark:bg-black/20 shadow-md hover:scale-95 transition-shadow"
    >
      <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm text-gray-400 font-medium truncate">{artwork.title}</h3>
        {(artwork.year || artwork.medium) && (
          <p className="text-xs text-neutral-500 truncate">
            {[artwork.year, artwork.medium].filter(Boolean).join(' • ')}
          </p>
        )}
      </div>
    </Link>
  )
}
