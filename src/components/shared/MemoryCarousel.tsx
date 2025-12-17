'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import GlassCard from '@/components/ui/GlassCard'
import PinkButton from '@/components/ui/PinkButton'

interface Memory {
  id: string
  image: string
  title: string
  description: string
  date: string
}

interface MemoryCarouselProps {
  memories: Memory[]
}

export default function MemoryCarousel({ memories }: MemoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)


  // Touch/swipe handlers
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 80 // Increased threshold for more deliberate swipes

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % memories.length)
  }, [memories.length])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length)
  }, [memories.length])

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [goToNext, goToPrevious])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const transition = {
    x: { 
      type: 'spring', 
      stiffness: 100,  // Reduced from 300 - makes it slower and smoother
      damping: 25,     // Increased from 30 - makes it less bouncy
      mass: 1.2         // Added mass for more weight/smoothness
    },
    opacity: { duration: 0.4 }, // Increased from 0.2 for smoother fade
  }

  const currentMemory = memories[currentIndex]

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Main Card Display - Mobile First */}
      <div
        className="relative flex-1 min-h-[60vh] md:min-h-[500px] mb-4 md:mb-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0"
          >
            <GlassCard className="h-full p-4 md:p-6">
              <div className="h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-pinky-accent rounded-2xl mb-4 md:mb-6 flex items-center justify-center flex-shrink-0">
                  <Icon
                    icon="mdi:image"
                    width={48}
                    height={48}
                    className="text-pinky-secondary md:w-16 md:h-16"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-pinky-text mb-2 md:mb-4">
                      {currentMemory.title}
                    </h3>
                    <p className="text-base md:text-lg text-pinky-secondary mb-3 md:mb-4 leading-relaxed">
                      {currentMemory.description}
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-pinky-primary font-medium">
                    {currentMemory.date}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation - Mobile Optimized */}
      <div className="w-full space-y-4 md:space-y-6">
        {/* Dots Indicator - Prominent on Mobile */}
        <div className="flex items-center justify-center gap-2 md:gap-3">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-pinky-primary w-8 h-3 md:w-10 md:h-3'
                  : 'bg-pinky-accent w-3 h-3 md:w-3 md:h-3 hover:bg-pinky-secondary'
              }`}
              aria-label={`Go to memory ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons - Full Width on Mobile */}
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <PinkButton
            onPress={goToPrevious}
            variant="bordered"
            size="md"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <Icon icon="mdi:chevron-left" width={20} height={20} />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </PinkButton>

          {/* Card Counter */}
          <div className="text-center text-pinky-secondary text-sm md:text-base font-medium px-2">
            {currentIndex + 1} / {memories.length}
          </div>

          <PinkButton
            onPress={goToNext}
            variant="bordered"
            size="md"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <Icon icon="mdi:chevron-right" width={20} height={20} />
          </PinkButton>
        </div>
      </div>
    </div>
  )
}

