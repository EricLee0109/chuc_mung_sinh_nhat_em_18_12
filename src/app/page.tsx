'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import TypingText from '@/components/shared/TypingText'
import Countdown from '@/components/shared/Countdown'
import PinkButton from '@/components/ui/PinkButton'
import GlassCard from '@/components/ui/GlassCard'
import NameGate from '@/components/auth/NameGate'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loverName, setLoverName] = useState('')
  const [typingStates, setTypingStates] = useState({
    first: { delay: 0, completed: false },
    second: { delay: null as number | null, completed: false },
    third: { delay: null as number | null, completed: false },
  })

  // Check if user has already passed the name gate
  useEffect(() => {
    const nameGatePassed = localStorage.getItem('nameGatePassed')
    const storedName = localStorage.getItem('loverName')
    
    if (nameGatePassed === 'true' && storedName) {
      setIsAuthenticated(true)
      setLoverName(storedName)
    }
  }, [])

  const handleNameSuccess = (name: string) => {
    setLoverName(name)
    setIsAuthenticated(true)
  }

  // Memoized callbacks to prevent infinite loops
  const handleFirstTypingComplete = useCallback(() => {
    const firstTextLength = "Chúc mừng sinh nhật bé iu 🥰! Nhân dịp sinh nhật, anh muốn dành cho em một món quà đặc biệt nho nhỏ 💕".length
    const firstDuration = firstTextLength * 50
    setTypingStates((prev) => ({
      ...prev,
      first: { ...prev.first, completed: true },
      second: { delay: firstDuration + 500, completed: false },
    }))
  }, [])

  const handleSecondTypingComplete = useCallback(() => {
    const secondTextLength = "Nên anh đã chuẩn bị một số món quà đặc biệt dành cho em 💕 Mong là em sẽ thích nó 💕".length
    const secondDuration = secondTextLength * 10
    setTypingStates((prev) => {
      const secondDelay = prev.second.delay ?? 0
      return {
        ...prev,
        second: { ...prev.second, completed: true },
        third: { delay: secondDelay + secondDuration + 200, completed: false },
      }
    })
  }, [])

  const handleThirdTypingComplete = useCallback(() => {
    setTypingStates((prev) => ({
      ...prev,
      third: { ...prev.third, completed: true },
    }))
  }, [])

  // Set target date to December 18th at midnight - memoized to prevent re-renders
  const targetDate = useMemo(() => {
    const date = new Date()
    date.setMonth(11) // December (0-indexed, so 11 = December)
    date.setDate(18)
    date.setHours(0, 0, 0, 0)

    // If the date has passed this year, set it to next year
    if (date.getTime() < Date.now()) {
      date.setFullYear(date.getFullYear() + 1)
    }

    return date
  }, [])

  // Show name gate if not authenticated
  if (!isAuthenticated) {
    return <NameGate onSuccess={handleNameSuccess} />
  }

  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-pinky-text mb-6">
              💕 Chúc mừng sinh nhật! 💕
            </h1>
            <div className="text-2xl md:text-3xl text-pinky-secondary mb-8">
              <TypingText
                speed={100}
                text="Chúc mừng sinh nhật bé iu 🥰! Nhân dịp sinh nhật, anh muốn dành cho em một món quà nho nhỏ 💕"
                delay={typingStates.first.delay}
                onComplete={handleFirstTypingComplete}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pinky-text mb-6">
              Chỉ còn...
            </h2>
            <Countdown targetDate={targetDate} />
            <h2 className="text-3xl md:text-4xl font-bold text-pinky-text mt-6">
              Là đến sinh nhật của em rồi nè 🥰
            </h2>
            <div className="text-2xl md:text-3xl text-pinky-text mt-8 flex flex-col items-center justify-center gap-4">
              {typingStates.second.delay !== null && (
                <TypingText
                  speed={100}
                  text="Nên anh đã chuẩn bị một số món quà dành cho em 💕"
                  delay={typingStates.second.delay}
                  onComplete={handleSecondTypingComplete}
                />
              )}
              {typingStates.third.delay !== null && (
                <TypingText
                  speed={150}
                  text="Mong là em sẽ thích nó 💕"
                  delay={typingStates.third.delay}
                  onComplete={handleThirdTypingComplete}
                />
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/memories">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">📸</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Kỉ niệm</h3>
                  <p className="text-pinky-secondary">Những khoảnh khắc đẹp của chúng ta</p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/timeline">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">⏰</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Hành trình</h3>
                  <p className="text-pinky-secondary">Hành trình của chúng ta</p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/letter">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">💌</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Lá thư</h3>
                  <p className="text-pinky-secondary">Lời nhắn từ trái tim anh</p>
                </div>
              </GlassCard>
            </Link>

            <Link href="/surprise">
              <GlassCard className="cursor-pointer h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎁</div>
                  <h3 className="text-xl font-semibold text-pinky-text mb-2">Bất ngờ</h3>
                  <p className="text-pinky-secondary">Điều đặc biệt đang chờ em</p>
                </div>
              </GlassCard>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="text-center">
            <p className="text-pinky-text text-lg mb-6">
              Cuộn xuống để khám phá, hoặc nhấp vào bất kỳ thẻ nào ở trên để bắt đầu hành trình của em
            </p>
            <div className="text-4xl animate-bounce">👇</div>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
