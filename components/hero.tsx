'use client'

import { Sparkles, Coffee } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 pt-24 pb-32 sm:pt-40 sm:pb-48 text-primary-foreground">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Decorative blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-8 border border-white/20">
            <Coffee className="w-4 h-4" />
            <span className="text-sm font-semibold">Authentic Cafe Experience</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight text-balance">
            Bun Maska <br />& Irani Chai
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            More than just a beverage. It&apos;s a ritual. Experience the authentic taste in our modern, cozy cafe. From traditional chai to gourmet burgers and fresh coffee.
          </p>

          {/* CTA Button */}
          <a href="#menu" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 active:scale-95">
            Explore Menu
          </a>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="backdrop-blur bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-black mb-2">50+</div>
              <p className="text-sm text-primary-foreground/70 font-medium">Menu Items</p>
            </div>
            <div className="backdrop-blur bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-black mb-2">8AM</div>
              <p className="text-sm text-primary-foreground/70 font-medium">Open Daily</p>
            </div>
            <div className="backdrop-blur bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-black mb-2">100%</div>
              <p className="text-sm text-primary-foreground/70 font-medium">Fresh & Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
