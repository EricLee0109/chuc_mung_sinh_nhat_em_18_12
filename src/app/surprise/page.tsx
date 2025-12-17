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
          Về trang chủ
        </Link>

        <FadeIn>
          <SectionTitle>Bất ngờ dành cho em 🎁</SectionTitle>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {!showSurprise ? (
            <FadeIn delay={0.2}>
              <GlassCard>
                <div className="text-center py-12">
                  <div className="text-8xl mb-8 animate-bounce">🎁</div>
                  <h3 className="text-3xl font-bold text-pinky-text mb-4">
                    Sẵn sàng cho bất ngờ chưa?
                  </h3>
                  <p className="text-pinky-secondary text-lg mb-8">
                    Nhấp vào nút bên dưới để khám phá điều đặc biệt...
                  </p>
                  <PinkButton size="lg" onPress={handleReveal}>
                    Mở bất ngờ! ✨
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
                    Bất ngờ! 🎊
                  </h3>
                  <div className="space-y-4 text-lg text-pinky-secondary">
                    <p>
                      Toàn bộ trang web này là món quà dành cho em! Mỗi trang, mỗi animation,
                      mỗi khoảnh khắc được ghi lại ở đây đều được tạo ra với em trong tâm trí.
                    </p>
                    <p>
                      Nhưng đợi đã, còn nhiều hơn nữa... Bất ngờ thật sự đang chờ em
                      ở ngoài đời thực. Kiểm tra tin nhắn của em hoặc nhìn xung quanh - em có thể tìm thấy
                      điều gì đó đặc biệt! 💕
                    </p>
                    <p className="text-pinky-primary font-semibold text-xl mt-8">
                      Anh hy vọng điều này sẽ mang lại nụ cười trên khuôn mặt em hôm nay và mãi mãi.
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

