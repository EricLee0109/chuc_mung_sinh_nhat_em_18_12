'use client'

import { useState, useEffect } from 'react'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([])

  useEffect(() => {
    // Generate hearts with fixed positions and delays
    const heartCount = 8 // Reduced from 12 for less visual noise
    const newHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: i * 2, // Staggered delays (2s between each)
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-pinky-secondary text-xl md:text-2xl opacity-60"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animation: 'float 8s ease-in-out infinite',
            animationDelay: `${heart.delay}s`,
          }}
        >
          💕
        </span>
      ))}
    </div>
  )
}

