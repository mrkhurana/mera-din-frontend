'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { DM_Serif_Display } from 'next/font/google'

const brandFont = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const navItems = [
  { label: "Today's Alignment", href: '/' },
  { label: 'Compatibility Finder', href: '/compatibility' },
  { label: 'Moon Signs Guide', href: '/moon-signs' },
  { label: 'Zodiac Overview', href: '/zodiac' },
  { label: 'Weekly Outlook', href: '/weekly', comingSoon: true },
]

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setDrawerOpen(false)
      }
    }
    if (drawerOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [drawerOpen])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-y border-stone-200 bg-white">
        <div className="relative h-14 flex items-center justify-between px-4 sm:px-6 max-w-5xl mx-auto">

          {/* Left — Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
            aria-expanded={drawerOpen}
            aria-controls="nav-drawer"
            className="flex items-center justify-center w-9 h-9 text-stone-600 hover:text-stone-900 transition-colors rounded-md"
          >
            <HamburgerIcon />
          </button>

          {/* Center — Brand (absolutely centered) */}
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className={`${brandFont.className} absolute left-1/2 -translate-x-1/2 text-[1.45rem] leading-tight tracking-[0.01em] text-stone-900 hover:text-yellow-800 transition-colors select-none whitespace-nowrap`}
          >
            Mera Din Kaisa Jayega
          </Link>

          {/* Right — empty spacer to keep brand centered */}
          <span className="w-9 h-9" aria-hidden="true" />
        </div>
      </header>

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-stone-900/20 transition-opacity duration-200 ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-stone-200 flex flex-col transition-transform duration-200 ease-in-out ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-stone-100 shrink-0">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation"
            className="flex items-center justify-center w-8 h-8 text-stone-500 hover:text-stone-900 transition-colors rounded"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Drawer navigation">
          {navItems.map((item) =>
            item.comingSoon ? (
              <span
                key={`${item.href}-${item.label}`}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-stone-400 cursor-default rounded-lg select-none"
              >
                {item.label}
                <span className="text-[10px] font-bold text-yellow-700 bg-yellow-50 border border-yellow-200 px-1.5 py-0.5 rounded tracking-wide">
                  SOON
                </span>
              </span>
            ) : (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-5 border-t border-stone-100 shrink-0">
          <p className={`${brandFont.className} text-base text-stone-400 tracking-wide`}>
            Mera Din Kaisa Jayega
          </p>
          <p className="text-[11px] text-stone-400 mt-0.5">meradinkaisajayega.online</p>
        </div>
      </div>
    </>
  )
}
