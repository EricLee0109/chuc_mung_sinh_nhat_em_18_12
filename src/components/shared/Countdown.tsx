'use client'

import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
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
  }, [targetDate])

  return (
    <div className={`flex gap-4 justify-center ${className}`}>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.days}</div>
        <div className="text-sm text-pinky-secondary">Days</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.hours}</div>
        <div className="text-sm text-pinky-secondary">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.minutes}</div>
        <div className="text-sm text-pinky-secondary">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-pinky-text">{timeLeft.seconds}</div>
        <div className="text-sm text-pinky-secondary">Seconds</div>
      </div>
    </div>
  )
}

