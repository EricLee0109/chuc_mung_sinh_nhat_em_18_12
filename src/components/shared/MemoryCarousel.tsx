'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import GlassCard from '@/components/ui/GlassCard'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react'

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
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Touch/swipe handlers
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 100 // Increased threshold for more deliberate swipes

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
    setCurrentIndex((prev) => {
      // If already at the last image, show modal
      if (prev === memories.length - 1) {
        setTimeout(() => {
          setIsModalOpen(true)
        }, 300)
        return prev
      }
      const nextIndex = prev + 1
      // Show modal when reaching the last image
      if (nextIndex === memories.length - 1) {
        // Small delay to let the animation complete
        setTimeout(() => {
          setIsModalOpen(true)
        }, 500)
      }
      return nextIndex
    })
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

  const handleConfirm = () => {
    setIsModalOpen(false)
    // Navigate to timeline page as the next journey
    router.push('/timeline')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Main Card Display - Mobile First - Vertical Layout */}
      <div
        className="relative flex-1 min-h-[70vh] md:min-h-[650px] mb-4 md:mb-6"
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
                {/* Memory Image - Vertical/Portrait Orientation */}
                <div className="w-full aspect-[3/4] bg-pinky-accent rounded-2xl mb-4 md:mb-6 flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                  {currentMemory.image && !imageErrors.has(currentIndex) ? (
                    <Image
                      src={currentMemory.image}
                      alt={currentMemory.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={currentIndex === 0}
                      onError={() => {
                        setImageErrors((prev) => new Set(prev).add(currentIndex))
                      }}
                    />
                  ) : (
                    <Icon
                      icon="mdi:image"
                      width={48}
                      height={48}
                      className="text-pinky-secondary md:w-16 md:h-16"
                    />
                  )}
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

        {/* Navigation Buttons - Glassmorphic Modern Design */}
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <button
            onClick={goToPrevious}
            className="group relative flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-3.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-pinky-text font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-[0_8px_32px_rgba(255,111,174,0.2)] hover:scale-105 active:scale-95"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Sparkle effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-1 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
              <div className="absolute bottom-1 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-150" />
            </div>
            <Icon icon="mdi:chevron-left" width={20} height={20} className="relative z-10" />
            <span className="hidden sm:inline relative z-10">Previous</span>
            <span className="sm:hidden relative z-10">Prev</span>
          </button>

          {/* Card Counter - Glassmorphic Style */}
          <div className="text-center text-pinky-text text-sm md:text-base font-medium px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30">
            {currentIndex + 1} / {memories.length}
          </div>

          <button
            onClick={goToNext}
            className="group relative flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-3.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-pinky-text font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-[0_8px_32px_rgba(255,111,174,0.2)] hover:scale-105 active:scale-95"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Sparkle effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-1 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
              <div className="absolute bottom-1 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-150" />
            </div>
            <span className="hidden sm:inline relative z-10">Next</span>
            <span className="sm:hidden relative z-10">Next</span>
            <Icon icon="mdi:chevron-right" width={20} height={20} className="relative z-10" />
          </button>
        </div>
      </div>

      {/* End of Carousel Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCancel}
        size="md"
        classNames={{
          base: 'bg-transparent',
          backdrop: 'bg-black/60 backdrop-blur-sm',
          wrapper: 'p-4',
        }}
        hideCloseButton
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="relative rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/50 p-6 md:p-8 shadow-[0_20px_60px_rgba(255,111,174,0.3)]">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-pinky-primary/10 blur-2xl pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10">
                <ModalHeader className="flex flex-col gap-2 p-0 mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-pinky-text text-center">
                    Anh cảm ơn em đã dành cho anh những kỉ niệm đáng nhớ cùng em 💕
                  </h2>
                </ModalHeader>
                
                <ModalBody className="p-0 mb-6">
                  <p className="text-base md:text-lg text-pinky-secondary text-center leading-relaxed">
                    Dù mình chưa có ảnh với nhau, nên anh để của em để mình cùng ngắm vậy :3 Em có đồng ý cùng anh đi tiếp đến hành trình tiếp theo hongggg
                  </p>
                </ModalBody>
                
                <ModalFooter className="p-0 gap-3">
                  <button
                    onClick={handleCancel}
                    className="group relative flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-pinky-text font-medium text-sm md:text-base transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:shadow-[0_8px_32px_rgba(255,111,174,0.2)] hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Xem lại lần nữa nha</span>
                  </button>
                  
                  <button
                    onClick={handleConfirm}
                    className="group relative flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-full bg-pinky-primary/80 backdrop-blur-xl border border-pinky-primary/50 text-white font-medium text-sm md:text-base transition-all duration-300 hover:bg-pinky-primary hover:border-pinky-primary hover:shadow-[0_8px_32px_rgba(255,111,174,0.4)] hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Em đồng ý! 💕</span>
                  </button>
                </ModalFooter>
              </div>
            </div>
          </motion.div>
        </ModalContent>
      </Modal>
    </div>
  )
}

