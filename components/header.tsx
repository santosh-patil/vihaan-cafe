'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/vihaans-cafe-logo.jpg"
            alt="Vihaan's Cafe Logo"
            width={50}
            height={50}
            className="rounded-lg group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg text-foreground leading-none">Vihaan&apos;s</span>
            <span className="text-xs text-muted-foreground">More than Just Coffee</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm text-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#ambiance" className="text-sm text-foreground hover:text-primary transition-colors">Ambiance</a>
          <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#menu" className="text-sm text-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#ambiance" className="text-sm text-foreground hover:text-primary transition-colors">Ambiance</a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
