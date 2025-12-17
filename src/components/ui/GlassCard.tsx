'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { clsx } from '@/utils/clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  const [isPressed, setIsPressed] = useState(false)

  // Gentle floating animation for mobile
  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay,
    },
  }

  // Pulse animation for the glow effect
  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay + 0.5,
    },
  }

  return (
    <motion.div
      className={clsx(
        'relative rounded-3xl p-4 md:p-5',
        'transition-all duration-300',
        'active:scale-[0.98]',
        className
      )}
      animate={{
        ...floatingAnimation,
        ...pulseAnimation,
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,154,203,0.08) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: isPressed
          ? '0 8px 32px rgba(255,111,174,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
          : '0 4px 24px rgba(255,111,174,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
      }}
    >
      {/* Animated gradient overlay - very subtle */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,154,203,0.1) 0%, transparent 50%, rgba(255,214,231,0.05) 100%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
      />

      {/* Subtle shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear',
        }}
        style={{
          width: '60%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.3,
        }}
      >
        {children}
      </motion.div>

      {/* Soft inner glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,111,174,0.08) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 1,
        }}
      />
    </motion.div>
  )
}

