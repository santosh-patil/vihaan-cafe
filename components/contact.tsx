'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Reveal from '@/components/reveal'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Vihaan\'s Cafe',
      link: 'https://maps.app.goo.gl/527mHX46Sc88WNaFA',
      linkText: 'View on Map'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 89835 05272',
      subtext: 'Call us anytime'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '8:00 AM - 10:00 PM',
      subtext: 'Open 7 days a week'
    },
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl float-mid"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re located in a cozy corner of the city. Come visit us for the best Bun Maska & Irani Chai experience!
          </p>
        </Reveal>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <Reveal key={idx} delayMs={idx * 100}>
                <Card className="p-6 bg-card border border-border hover:shadow-md transition-all hover:border-primary/50 group cursor-pointer">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-primary font-medium text-sm">{info.content}</p>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:text-accent/80 mt-2 inline-block underline">
                      {info.linkText}
                    </a>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-2">{info.subtext}</p>
                  )}
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
