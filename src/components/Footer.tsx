export function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Art Portfolio</p>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-neutral-700">
            Privacy
          </a>
          <a href="/terms" className="hover:text-neutral-700">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
