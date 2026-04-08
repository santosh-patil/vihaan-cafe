'use client'

import { Card } from '@/components/ui/card'
import { Armchair, Users, Lightbulb, Music } from 'lucide-react'
import Reveal from '@/components/reveal'
import Image from 'next/image'

export default function Ambiance() {
  const features = [
    {
      icon: Armchair,
      title: 'Cozy Seating',
      desc: 'Comfortable booths and armchairs designed for relaxation and conversation.'
    },
    {
      icon: Lightbulb,
      title: 'Warm Lighting',
      desc: 'Ambient lighting that creates the perfect atmosphere for any time of day.'
    },
    {
      icon: Users,
      title: 'Community Vibes',
      desc: 'A welcoming space where locals and visitors connect over great food.'
    },
    {
      icon: Music,
      title: 'Curated Playlist',
      desc: 'Smooth jazz and indie music sets the perfect backdrop for your visit.'
    },
  ]

  const galleryImages = [
    {
      src: '/photos/cafe-entrance-day.jpg',
      alt: "Vihaan's Cafe entrance in daylight",
    },
    {
      src: '/photos/cafe-interior-day.jpg',
      alt: "Vihaan's Cafe interior seating and counter",
    },
    {
      src: '/photos/cafe-entrance-evening.jpg',
      alt: "Vihaan's Cafe entrance in evening lights",
    },
  ]

  return (
    <section id="ambiance" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl float-fast"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Experience</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Cozy Cafe Space
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed for comfort and connection, our cafe is your perfect escape from the everyday hustle.
          </p>
        </Reveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Reveal key={idx} delayMs={idx * 120}>
                <Card className="p-8 bg-card border border-border hover:shadow-lg transition-shadow group">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>

        {/* Real cafe gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <Reveal key={image.src} delayMs={idx * 120}>
              <div className="relative rounded-2xl overflow-hidden border border-border group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
