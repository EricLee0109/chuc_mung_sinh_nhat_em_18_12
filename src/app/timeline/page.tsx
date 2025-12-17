'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { timeline } from '@/constants/timeline'
import { Icon } from '@iconify/react'

export default function TimelinePage() {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/letter')
  }

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

        {/* Navigation Footer */}
        <FadeIn delay={0.5}>
          <div className="max-w-3xl mx-auto mt-12 md:mt-16">
            <GlassCard className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-pinky-text mb-4">
                  Em có muốn đọc lá thư từ trái tim anh hong? 💌
                </h2>
                <p className="text-base md:text-lg text-pinky-secondary leading-relaxed">
                  Anh đã viết một lá thư đặc biệt dành cho em, em đã sẵn sàng để đọc nó chứ?
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={handleGoBack}
                  className="group relative flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-pinky-text font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-[0_8px_32px_rgba(255,111,174,0.2)] hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Xem lại hành trình</span>
                </button>
                
                <button
                  onClick={handleContinue}
                  className="group relative flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-full bg-pinky-primary/80 backdrop-blur-xl border border-pinky-primary/50 text-white font-medium text-sm md:text-base transition-all duration-300 hover:bg-pinky-primary hover:border-pinky-primary hover:shadow-[0_8px_32px_rgba(255,111,174,0.4)] hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Em muốn đọc! 💕</span>
                </button>
              </div>
            </GlassCard>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}

