'use client'

import { Card } from '@/components/ui/card'
import { Coffee, UtensilsCrossed, Flame } from 'lucide-react'

export default function MenuSection() {
  const menuItems = [
    {
      category: 'Tea / Coffee',
      icon: Coffee,
      items: [
        { name: 'Irani Chai', price: '₹25' },
        { name: 'Irani Malai Chai', price: '₹30' },
        { name: 'Black Lemon Tea', price: '₹25' },
        { name: 'Hot Coffee', price: '₹35' },
        { name: 'Cold Coffee', price: '₹60' },
        { name: 'Black Coffee', price: '₹30' },
        { name: 'Hot Chocolate', price: '₹60' },
      ]
    },
    {
      category: 'Bun Items',
      icon: Flame,
      items: [
        { name: 'Bun Maska', price: '₹70' },
        { name: 'Bun Maska Jam', price: '₹90' },
        { name: 'Bun Maska Grill', price: '₹120' },
        { name: 'Bun Maska Cheese', price: '₹100' },
        { name: 'Bun Omlet', price: '₹130' },
        { name: 'Bun Butter Cheese Omlet', price: '₹190' },
      ]
    },
    {
      category: 'Burgers',
      icon: UtensilsCrossed,
      items: [
        { name: 'Classic Veg Burger', price: '₹100' },
        { name: 'Veg Cheese Burger', price: '₹130' },
        { name: 'Classic Chicken Burger', price: '₹150' },
        { name: 'Chicken Cheese Burger', price: '₹180' },
        { name: 'Fried Chicken Burger', price: '₹110' },
        { name: 'Fried Chicken Burger with Cheese', price: '₹140' },
      ]
    },
    {
      category: 'Egg Items',
      icon: Coffee,
      items: [
        { name: 'Plain Omlet', price: '₹45' },
        { name: 'Masala Omlet', price: '₹60' },
        { name: 'Masala Cheese Omlet', price: '₹70' },
        { name: 'Egg Bhurji 2 Pav', price: '₹100' },
        { name: 'Cheese Egg Bhurji', price: '₹140' },
        { name: 'Half Fry', price: '₹100' },
      ]
    },
    {
      category: 'Sandwiches',
      icon: Flame,
      items: [
        { name: 'Veg Sandwich', price: '₹70' },
        { name: 'Veg Cheese Sandwich', price: '₹100' },
        { name: 'Veg Grilled Sandwich', price: '₹100' },
        { name: 'Egg Grilled Sandwich', price: '₹130' },
        { name: 'Chicken Sandwich', price: '₹100' },
        { name: 'Chicken Cheese Grilled Sandwich', price: '₹140' },
      ]
    },
    {
      category: 'Snacks & Sides',
      icon: UtensilsCrossed,
      items: [
        { name: 'Veg Samosa', price: '₹30' },
        { name: 'Chicken Samosa', price: '₹50' },
        { name: 'French Fries', price: '₹80' },
        { name: 'Peri Peri French Fries', price: '₹70' },
        { name: 'Garlic Bread', price: '₹70' },
        { name: 'Cream Roll', price: '₹100' },
      ]
    },
  ]

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-20">
          <span className="text-primary font-black text-sm uppercase tracking-widest">Our Collections</span>
          <h2 className="text-5xl sm:text-6xl font-black text-foreground mt-3 mb-6 leading-tight">
            Taste Our Specialty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Handpicked flavors from our kitchen. Every item is a crafted experience.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((section, idx) => {
            const Icon = section.icon
            return (
              <div key={idx} className="group">
                {/* Section card header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-border group-hover:border-primary transition-colors">
                  <div className="bg-primary/15 p-4 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">{section.category}</h3>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-3 flex-1">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-start gap-3 pb-3 border-b border-border/40 hover:border-primary/30 transition-colors group/item cursor-pointer">
                      <h4 className="font-semibold text-foreground group-hover/item:text-primary transition-colors text-sm">{item.name}</h4>
                      <span className="text-primary font-black whitespace-nowrap text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* View full menu button */}
        <div className="text-center mt-16">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all font-bold text-lg group hover:scale-105 active:scale-95">
            View Complete Menu
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
