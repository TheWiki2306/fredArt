'use client'

import type { Metadata } from 'next'
import { GalleryGrid } from '@/components/GalleryGrid'
import { artworks } from '@/data/artworks'
import { useMemo, useState } from 'react'

// export const metadata: Metadata = {
//   title: 'Galleries | Art Portfolio',
//   description: 'Browse artworks across series and time.',
// }

export default function Galleries() {
  const [year, setYear] = useState<string>('all')
  const [medium, setMedium] = useState<string>('all')

  const years = useMemo(() => Array.from(new Set(artworks.map((a) => a.year))).filter(Boolean), [])
  const media = useMemo(
    () => Array.from(new Set(artworks.map((a) => a.medium))).filter(Boolean),
    [],
  )

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      const okYear = year === 'all' || a.year === year
      const okMedium = medium === 'all' || a.medium === medium
      return okYear && okMedium
    })
  }, [year, medium])

  return (
    <main className="glass pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Galleries</h1>
        <p className="mt-2 text-gray-300">Explore artworks across series and time.</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <label className="text-sm text-gray-400">
            Year
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="ml-2 rounded border border-neutral-300 px-2 py-1 text-sm"
            >
              <option value="all">All</option>
              {years.map((y) => (
                <option key={y} value={y!}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-gray-400">
            Medium
            <select
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
              className="ml-2 rounded border border-neutral-300 px-2 py-1 text-sm"
            >
              <option value="all">All</option>
              {media.map((m) => (
                <option key={m} value={m!}>
                  {m}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8">
          <GalleryGrid artworks={filtered} />
        </div>
      </div>
    </main>
  )
}
