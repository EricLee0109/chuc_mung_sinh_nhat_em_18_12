'use client'

import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import SectionTitle from '@/components/ui/SectionTitle'
import MemoryCarousel from '@/components/shared/MemoryCarousel'
import { memories } from '@/constants/memories'
import { Icon } from '@iconify/react'

export default function MemoriesPage() {
  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 min-h-screen flex flex-col px-4 py-4 md:py-8 md:px-6">
        {/* Header - Mobile Optimized */}
        <div className="mb-4 md:mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-pinky-text hover:text-pinky-primary transition-colors text-sm md:text-base mb-4 md:mb-6"
          >
            <Icon icon="mdi:arrow-left" width={20} height={20} className="mr-2 md:w-6 md:h-6" />
            Về trang chủ
          </Link>

          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold text-pinky-text text-center">
              Kỉ niệm của chúng ta 💕
            </h1>
          </FadeIn>
        </div>

        {/* Carousel - Takes remaining space */}
        <FadeIn delay={0.3}>
          <div className="flex-1 flex flex-col min-h-0">
            <MemoryCarousel memories={memories} />
          </div>
        </FadeIn>

        {/* Instructions - Hidden on mobile, shown on desktop */}
        <FadeIn delay={0.4}>
          <div className="hidden md:block text-center mt-4 text-pinky-secondary text-sm">
            <p>💡 Vuốt trái/phải hoặc dùng phím mũi tên để điều hướng</p>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}

