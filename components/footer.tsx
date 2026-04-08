'use client'

import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-lg leading-none">Vihaan&apos;s</div>
                <div className="text-xs text-primary-foreground/70">Cafe & Bakery</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Crafting memorable moments through authentic flavors and warm hospitality since 2015.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Menu</a></li>
              <li><a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#ambiance" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Ambiance</a></li>
              <li><a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Every Day<br /><span className="text-primary-foreground">8:00 AM - 10:00 PM</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-3">
              Get updates on new menu items and special offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-primary/20 rounded-lg text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-foreground rounded-lg font-medium text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70 gap-4">
          <p>© {currentYear} Vihaan&apos;s Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
