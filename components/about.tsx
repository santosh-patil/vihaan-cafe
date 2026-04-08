'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function About() {
  const values = [
    'Authentic recipes passed down through generations',
    'Premium sourced ingredients and quality tea',
    'Sustainable and eco-friendly practices',
    'Community-first approach to hospitality',
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">About Vihaan&apos;s</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-6">
              More Than Just a Cafe
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2015, Vihaan&apos;s Cafe started with a simple mission: to bring the warmth and authenticity of traditional Irani cafes into the modern world. We believe that great coffee and chai aren&apos;t just beverages—they&apos;re moments of connection.
            </p>

            <p className="text-muted-foreground mb-8">
              Our name, Vihaan, means &quot;morning&quot; in Hindi—a nod to our heritage and the idea that every visit should feel like a fresh beginning. From our signature Bun Maska to our carefully curated coffee selection, every detail reflects our commitment to quality and tradition.
            </p>

            {/* Values list */}
            <ul className="space-y-3 mb-8">
              {values.map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn Our Story
            </Button>
          </div>

          {/* Right side - Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl overflow-hidden border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">Vihaan&apos;s</div>
                <p className="text-muted-foreground">Est. 2015</p>
                <p className="text-sm text-muted-foreground mt-2">Crafting moments since day one</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
