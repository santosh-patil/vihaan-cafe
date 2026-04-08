'use client'

import { Card } from '@/components/ui/card'
import { Armchair, Users, Lightbulb, Music } from 'lucide-react'

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

  return (
    <section id="ambiance" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Experience</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Cozy Cafe Space
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed for comfort and connection, our cafe is your perfect escape from the everyday hustle.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-8 bg-card border border-border hover:shadow-lg transition-shadow group">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            )
          })}
        </div>

        {/* Image gallery placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden h-80 flex items-center justify-center border border-border group cursor-pointer">
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors"></div>
            <div className="text-center relative z-10">
              <Armchair className="w-12 h-12 text-primary mx-auto mb-3 opacity-50" />
              <p className="text-foreground/60">Interior View</p>
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden h-80 flex items-center justify-center border border-border group cursor-pointer">
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors"></div>
            <div className="text-center relative z-10">
              <Users className="w-12 h-12 text-accent mx-auto mb-3 opacity-50" />
              <p className="text-foreground/60">Social Space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
