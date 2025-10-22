import { ArtworkCard, type Artwork } from './ArtworkCard'
import { ScrollAnimation } from './ScrollAnimation'

type GalleryGridProps = {
  artworks: Artwork[]
}

export function GalleryGrid({ artworks }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {artworks.map((art, index) => (
        <ScrollAnimation key={art.slug} delay={index * 100} direction="up" distance={30}>
          <ArtworkCard artwork={art} />
        </ScrollAnimation>
      ))}
    </div>
  )
}
