'use client'

import { useState, useEffect, useRef } from 'react'

interface CountdownProps {
  targetDate: Date
  className?: string
}

export default function Countdown({ targetDate, className = '' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Use ref to store target timestamp to avoid re-renders
  // Convert Date to timestamp (number) for stable comparison
  const targetTimestamp = targetDate.getTime()
  const targetTimestampRef = useRef(targetTimestamp)

  // Update ref only if timestamp actually changes
  useEffect(() => {
    if (targetTimestampRef.current !== targetTimestamp) {
      targetTimestampRef.current = targetTimestamp
    }
  }, [targetTimestamp])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetTimestampRef.current
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, []) // Empty dependency array - only run once on mount

  return (
    <div className={`flex gap-4 justify-center ${className}`}>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.days}</div>
        <div className="text-sm text-pinky-secondary">Ngày</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.hours}</div>
        <div className="text-sm text-pinky-secondary">Giờ</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.minutes}</div>
        <div className="text-sm text-pinky-secondary">Phút</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.seconds}</div>
        <div className="text-sm text-pinky-secondary">Giây</div>
      </div>
    </div>
  )
}

