'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur dark:nav-blur-dark transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-accent rounded-full flex items-center justify-center hover:gradient-accent-hover transition-smooth">
              <span className="text-white font-bold text-sm">FO</span>
            </div>
            {/* <span className="font-semibold text-amber-900 text-lg transition-smooth">
              Fred Osarodion
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-500 hover:text-amber-950 transition-colors">
              Home
            </Link>
            <Link
              href="/galleries"
              className="text-gray-500 hover:text-amber-950 transition-colors"
            >
              Galleries
            </Link>
            <div className="relative group">
              <button className="text-gray-500 hover:text-amber-950 transition-colors flex items-center space-x-1">
                <span>Collections</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/collections"
                  className="block px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 first:rounded-t-lg"
                >
                  All Collections
                </Link>
                <Link
                  href="/collections/abstract-expressions"
                  className="block px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  Abstract Expressions
                </Link>
                <Link
                  href="/collections/figurative-works"
                  className="block px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  Figurative Works
                </Link>
                <Link
                  href="/collections/landscape-series"
                  className="block px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 last:rounded-b-lg"
                >
                  Landscape Series
                </Link>
              </div>
            </div>
            <Link href="/blog" className="text-gray-500 hover:text-amber-950 transition-colors">
              Blog
            </Link>
            <Link
              href="/contact"
              className="gradient-accent text-white px-4 py-2 rounded-full hover:gradient-accent-hover btn-primary transition-smooth"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg ">
            <svg className="w-6 h-6 stroke-current gradient-accent" fill="none" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-500 hover:text-amber-950  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/galleries"
                className="text-gray-500 hover:text-amber-950  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galleries
              </Link>
              <div className="space-y-2">
                <span className="text-gray-500 hover:text-amber-950 font-medium">Collections</span>
                <div className="ml-4 space-y-2">
                  <Link
                    href="/collections"
                    className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Collections
                  </Link>
                  <Link
                    href="/collections/abstract-expressions"
                    className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Abstract Expressions
                  </Link>
                  <Link
                    href="/collections/figurative-works"
                    className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Figurative Works
                  </Link>
                  <Link
                    href="/collections/landscape-series"
                    className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Landscape Series
                  </Link>
                </div>
              </div>
              <Link
                href="/blog"
                className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="gradient-accent text-white px-4 py-2 rounded-full hover:gradient-accent-hover btn-primary transition-smooth text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
