'use client'

import { useState, useEffect, useRef } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  delay?: number | null
  onComplete?: () => void
}

export default function TypingText({ text, speed = 50, className = '', delay = 0, onComplete }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const onCompleteCalledRef = useRef(false)
  const onCompleteRef = useRef(onComplete)
  const previousDelayRef = useRef<number | null | undefined>(delay)
  const previousTextRef = useRef(text)

  // Update ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Reset when text changes or when delay changes from null to a number
  useEffect(() => {
    const textChanged = previousTextRef.current !== text
    const delayJustSet = previousDelayRef.current === null && delay !== null && delay !== undefined
    
    // Only reset if text changed or delay was just set
    if (textChanged || delayJustSet) {
      setDisplayedText('')
      setCurrentIndex(0)
      setIsStarted(delay === 0 && delay !== null)
      onCompleteCalledRef.current = false
    }
    
    previousDelayRef.current = delay
    previousTextRef.current = text
  }, [text, delay])

  // Start typing when delay is set
  useEffect(() => {
    if (delay === null || delay === undefined) {
      // Don't start yet, waiting for delay to be set
      setIsStarted(false)
      return
    }

    if (delay === 0 && !isStarted) {
      // Start immediately
      setIsStarted(true)
    } else if (delay > 0 && !isStarted) {
      // Start after delay
      const startTimeout = setTimeout(() => {
        setIsStarted(true)
      }, delay)
      return () => clearTimeout(startTimeout)
    }
  }, [delay, isStarted])

  useEffect(() => {
    if (!isStarted) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && onCompleteRef.current && !onCompleteCalledRef.current) {
      // Call onComplete only once when typing is finished
      onCompleteCalledRef.current = true
      onCompleteRef.current()
    }
  }, [currentIndex, text, speed, isStarted])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}

