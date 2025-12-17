'use client'

import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { Icon } from '@iconify/react'

export default function LetterPage() {
  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-pinky-text mb-8 hover:text-pinky-primary transition-colors">
          <Icon icon="mdi:arrow-left" width={24} height={24} className="mr-2" />
          Back to Home
        </Link>

        <FadeIn>
          <SectionTitle>A Letter From My Heart 💌</SectionTitle>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <div className="prose prose-lg max-w-none">
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  My Dearest,
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  On this special day, I wanted to create something unique for you - something that captures
                  not just moments, but feelings. This website is more than code; it's a collection of
                  memories, emotions, and love translated into pixels and animations.
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Every memory we've shared, every laugh, every moment of joy - they're all here,
                  preserved in this digital space I built just for you. I hope that as you explore
                  these pages, you feel the same warmth and happiness that I feel when I'm with you.
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  You deserve the world, and while I can't give you that, I can give you this:
                  a piece of my heart, coded with care, designed with love, and created with the
                  hope that it brings a smile to your face.
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Happy Birthday, my love. May this year bring you endless joy, countless adventures,
                  and all the happiness you bring to others.
                </p>
                
                <p className="text-pinky-text text-xl font-semibold mt-8 text-right">
                  With all my love,<br />
                  Forever yours 💕
                </p>
              </div>
            </GlassCard>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}

