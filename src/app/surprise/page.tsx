'use client'

import { useState } from 'react'
import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import PinkButton from '@/components/ui/PinkButton'
import { Confetti } from '@/components/effects/Confetti'
import { Icon } from '@iconify/react'

export default function SurprisePage() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [confettiTrigger, setConfettiTrigger] = useState(false)

  const handleReveal = () => {
    setShowSurprise(true)
    setConfettiTrigger(true)
    setTimeout(() => setConfettiTrigger(false), 100)
  }

  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      <Confetti trigger={confettiTrigger} />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-pinky-text mb-8 hover:text-pinky-primary transition-colors">
          <Icon icon="mdi:arrow-left" width={24} height={24} className="mr-2" />
          Back to Home
        </Link>

        <FadeIn>
          <SectionTitle>Your Surprise 🎁</SectionTitle>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {!showSurprise ? (
            <FadeIn delay={0.2}>
              <GlassCard>
                <div className="text-center py-12">
                  <div className="text-8xl mb-8 animate-bounce">🎁</div>
                  <h3 className="text-3xl font-bold text-pinky-text mb-4">
                    Ready for your surprise?
                  </h3>
                  <p className="text-pinky-secondary text-lg mb-8">
                    Click the button below to reveal something special...
                  </p>
                  <PinkButton size="lg" onPress={handleReveal}>
                    Reveal Surprise! ✨
                  </PinkButton>
                </div>
              </GlassCard>
            </FadeIn>
          ) : (
            <FadeIn>
              <GlassCard>
                <div className="text-center py-12">
                  <div className="text-8xl mb-8">🎉</div>
                  <h3 className="text-4xl font-bold text-pinky-text mb-6">
                    Surprise! 🎊
                  </h3>
                  <div className="space-y-4 text-lg text-pinky-secondary">
                    <p>
                      This entire website is your gift! Every page, every animation,
                      every moment captured here was created with you in mind.
                    </p>
                    <p>
                      But wait, there&apos;s more... The real surprise is waiting for you
                      in person. Check your messages or look around - you might find
                      something special! 💕
                    </p>
                    <p className="text-pinky-primary font-semibold text-xl mt-8">
                      I hope this brings a smile to your face today and always.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          )}
        </div>
      </main>
    </div>
  )
}

