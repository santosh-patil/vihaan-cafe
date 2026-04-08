'use client'

import Link from 'next/link'
import { Coffee, Clock, MapPin, Phone, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Hero from '@/components/hero'
import MenuSection from '@/components/menu-section'
import About from '@/components/about'
import Ambiance from '@/components/ambiance'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <MenuSection />
      <Ambiance />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
