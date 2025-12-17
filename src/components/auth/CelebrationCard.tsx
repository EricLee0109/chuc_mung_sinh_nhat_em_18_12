'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import GlassCard from '@/components/ui/GlassCard'
import PinkButton from '@/components/ui/PinkButton'

interface CelebrationCardProps {
  loverName: string
  onContinue: () => void
}

export default function CelebrationCard({ loverName, onContinue }: CelebrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-pinky-bg/95 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-md"
      >
        <GlassCard className="relative overflow-hidden">
          {/* Floating hearts background - Mobile optimized */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-pinky-secondary text-xl md:text-2xl"
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100 - 50}%`],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeInOut',
                }}
              >
                💕
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 text-center">
            {/* Animated celebration emoji - Mobile first sizing */}
            <motion.div
              animate={{
                rotate: [0, 15, -15, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-6xl md:text-8xl mb-4"
            >
              🎉
            </motion.div>

            {/* Success message - Mobile first typography */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl font-bold text-pinky-text mb-3"
            >
              Chính xác rồi! 💖
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl text-pinky-secondary mb-2 px-2"
            >
              Em nhớ tên anh là{' '}
              <span className="font-bold text-pinky-primary text-lg md:text-2xl">
                {loverName}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-lg text-pinky-secondary mb-6 space-y-2 px-2"
            >
              <p>Anh rất vui vì điều đó! 🥰 hẹ hẹ</p>
              <p>Em sẵn sàng bắt đầu hành trình của chúng ta chưaaa?</p>
            </motion.div>

            {/* Decorative hearts - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="flex justify-center gap-1 md:gap-2 mb-6"
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                  className="text-xl md:text-2xl"
                >
                  💕
                </motion.span>
              ))}
            </motion.div>

            {/* Continue button - Mobile first */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <PinkButton
                size="lg"
                className="w-full text-sm md:text-base"
                onPress={onContinue}
              >
                <span>Bắt đầu hành trình của chúng ta</span>
                <Icon icon="mdi:arrow-right" className="ml-2" width={18} height={18} />
              </PinkButton>
            </motion.div>

            {/* Cute message at bottom - Mobile optimized */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs md:text-sm text-pinky-secondary mt-4 px-2"
            >
              Món quà đặc biệt đang chờ em... ✨
            </motion.p>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

