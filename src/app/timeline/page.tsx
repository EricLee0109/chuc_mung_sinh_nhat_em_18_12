'use client'

import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { timeline } from '@/constants/timeline'
import { Icon } from '@iconify/react'

export default function TimelinePage() {
  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-pinky-text mb-8 hover:text-pinky-primary transition-colors">
          <Icon icon="mdi:arrow-left" width={24} height={24} className="mr-2" />
          Về trang chủ
        </Link>

        <FadeIn>
          <SectionTitle>Hành trình của chúng ta ⏰</SectionTitle>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-6">
          {timeline.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.1}>
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pinky-primary flex items-center justify-center">
                    <Icon icon={event.icon} width={24} height={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-pinky-primary mb-1">{event.date}</div>
                    <h3 className="text-xl font-semibold text-pinky-text mb-2">{event.title}</h3>
                    <p className="text-pinky-secondary">{event.description}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </main>
    </div>
  )
}

