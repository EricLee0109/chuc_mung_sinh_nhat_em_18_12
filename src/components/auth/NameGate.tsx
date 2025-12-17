'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@nextui-org/react'
import PinkButton from '@/components/ui/PinkButton'
import GlassCard from '@/components/ui/GlassCard'
import CelebrationCard from './CelebrationCard'
import { Icon } from '@iconify/react'

interface NameGateProps {
  onSuccess: (name: string) => void
}

const validNames = ['Lê Thái Khoa', 'Thái Khoa', 'Khoa']

export default function NameGate({ onSuccess }: NameGateProps) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [validatedName, setValidatedName] = useState('')

  // Convert to title case (uppercase first letter of each word)
  const toTitleCase = (str: string): string => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim()
  }

  const handleSubmit = (e?: FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    setIsSubmitting(true)
    setError('')

    // Convert input to title case
    const formattedName = toTitleCase(name)

    // Check if the formatted name matches any valid name (case-insensitive)
    const isValid = validNames.some(
      (validName) => validName.toLowerCase() === formattedName.toLowerCase()
    )

    if (isValid) {
      // Store the name
      localStorage.setItem('loverName', formattedName)
      setValidatedName(formattedName)
      setShowCelebration(true)
      setIsSubmitting(false)
    } else {
      setError('Em nhập sai tên anh rồi kìa 😒, em nhập lại đi')
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (value: string) => {
    setError('')
    setName(value)
  }

  const handleCelebrationContinue = () => {
    localStorage.setItem('nameGatePassed', 'true')
    setShowCelebration(false)
    setTimeout(() => {
      onSuccess(validatedName)
    }, 300)
  }

  // Show celebration card if name is validated
  if (showCelebration) {
    return (
      <CelebrationCard
        loverName={validatedName}
        onContinue={handleCelebrationContinue}
      />
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-pinky-bg/95 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="w-full max-w-md"
        >
          <GlassCard>
            <div className="text-center mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-6xl mb-4"
              >
                💕
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold text-pinky-text mb-2">
                Hello my darling 🤣
              </h2>
              <p className="text-pinky-secondary">
                Please enter your lover&apos;s name to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                label="Input your lover name"
                placeholder="Enter name here..."
                value={name}
                onValueChange={handleInputChange}
                isInvalid={!!error}
                variant="bordered"
                size="lg"
                classNames={{
                  input: 'text-pinky-text',
                  label: 'text-pinky-text',
                  inputWrapper: [
                    'border-pinky-primary/30',
                    'hover:!border-pinky-primary',
                    'focus-within:!border-pinky-primary',
                    'data-[hover=true]:!border-pinky-primary',
                    'group-data-[focus=true]:!border-pinky-primary',
                    '[&:hover]:border-pinky-primary',
                    '[&:focus-within]:border-pinky-primary',
                  ].join(' '),
                }}
                startContent={
                  <Icon icon="mdi:heart" className="text-pinky-primary" width={20} height={20} />
                }
                autoFocus
                autoComplete="off"
              />

              <PinkButton
                size="lg"
                className="w-full"
                isDisabled={!name.trim() || isSubmitting}
                onPress={() => handleSubmit()}
              >
                {isSubmitting ? (
                  <>
                    <Icon icon="mdi:loading" className="animate-spin mr-2" width={20} height={20} />
                    Checking...
                  </>
                ) : (
                  <>
                    Continue
                    <Icon icon="mdi:arrow-right" className="ml-2" width={20} height={20} />
                  </>
                )}
              </PinkButton>

              {/* Prettier Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="mt-4"
                  >
                    <div className="bg-gradient-to-r from-red-50/80 to-pink-50/80 backdrop-blur-sm border border-red-200/50 rounded-2xl p-4 flex items-start gap-3 shadow-lg">
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        className="flex-shrink-0"
                      >
                        <Icon
                          icon="mdi:heart-broken"
                          width={24}
                          height={24}
                          className="text-red-400"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-red-600 font-medium text-sm md:text-base">
                          {error}
                        </p>
                        <p className="text-red-400 text-xs mt-1">
                          Tên anh mà em nỡ nhập sai đấy 💕
                        </p>
                      </div>
                      <button
                        onClick={() => setError('')}
                        className="flex-shrink-0 hover:opacity-70 transition-opacity text-red-400"
                        aria-label="Dismiss error"
                      >
                        <Icon icon="mdi:close" width={18} height={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

