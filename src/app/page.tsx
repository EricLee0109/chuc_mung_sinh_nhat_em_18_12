'use client'

import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import TypingText from '@/components/shared/TypingText'
import Countdown from '@/components/shared/Countdown'
import PinkButton from '@/components/ui/PinkButton'
import GlassCard from '@/components/ui/GlassCard'
import AudioToggle from '@/components/shared/AudioToggle'

export default function Home() {
  // Set target date to December 18th at midnight
  const targetDate = new Date()
  targetDate.setMonth(11) // December (0-indexed, so 11 = December)
  targetDate.setDate(18)
  targetDate.setHours(0, 0, 0, 0)

  // If the date has passed this year, set it to next year
  if (targetDate.getTime() < Date.now()) {
    targetDate.setFullYear(targetDate.getFullYear())
  }

  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      <AudioToggle src="/music/love.mp3" />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-pinky-text mb-6">
              💕 Happy Birthday! 💕
            </h1>
            <div className="text-2xl md:text-3xl text-pinky-secondary mb-8">
              <TypingText text="This is a special gift, made with love just for you..." />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pinky-text mb-6">
               My Love&apos;s Birthday will coming in...
            </h2>
            <Countdown targetDate={targetDate} />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/memories">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">📸</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Memories</h3>
                  <p className="text-pinky-secondary">Our beautiful moments together</p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/timeline">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">⏰</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Timeline</h3>
                  <p className="text-pinky-secondary">Our journey together</p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/letter">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">💌</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Letter</h3>
                  <p className="text-pinky-secondary">A message from my heart</p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/surprise">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎁</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Surprise</h3>
                  <p className="text-pinky-secondary">Something special awaits</p>
                </div>
              </GlassCard>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <p className="text-pinky-text text-lg mb-6">
              Scroll down to explore, or click on any card above to begin your journey
            </p>
            <div className="text-4xl animate-bounce">👇</div>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
