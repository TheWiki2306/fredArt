import Image from "next/image";
import { notFound } from "next/navigation";
import { artworks } from "@/data/artworks";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export default async function ArtworkPage({ params }: PageProps) {
  const { slug } = await params;
  const artwork = artworks.find((a) => a.slug === slug);
  if (!artwork) return notFound();

  return (
    <main className="min-h-screen p-6 sm:p-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative w-full aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">{artwork.title}</h1>
          <p className="text-sm text-neutral-500 mt-1">
            {[artwork.year, artwork.medium].filter(Boolean).join(" • ")}
          </p>
        </div>
      </div>
    </main>
  );
}


