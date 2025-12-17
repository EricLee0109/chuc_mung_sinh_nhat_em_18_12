'use client'

import { useEffect } from 'react'

interface ConfettiProps {
  trigger: boolean
  particleCount?: number
  spread?: number
}

export function Confetti({ trigger, particleCount = 120, spread = 70 }: ConfettiProps) {
  useEffect(() => {
    if (trigger && typeof window !== 'undefined') {
      // Dynamic import to avoid SSR issues
      import('canvas-confetti').then((confetti) => {
        confetti.default({
          particleCount,
          spread,
          origin: { y: 0.6 },
          colors: ['#FF6FAE', '#FF9ACB', '#FFD6E7', '#FFF0F6'],
        })
      })
    }
  }, [trigger, particleCount, spread])

  return null
}

