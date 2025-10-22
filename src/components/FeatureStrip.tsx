export function FeatureStrip() {
  return (
    <section className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Years in practice
          </div>
          <div className="text-2xl font-semibold">15+</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">Artworks</div>
          <div className="text-2xl font-semibold">200+</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">Themes</div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-700">
            <span className="rounded-full border border-neutral-300 px-3 py-1">Identity</span>
            <span className="rounded-full border border-neutral-300 px-3 py-1">Movement</span>
            <span className="rounded-full border border-neutral-300 px-3 py-1">Culture</span>
          </div>
        </div>
      </div>
    </section>
  )
}
