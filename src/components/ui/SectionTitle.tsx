'use client'

import { clsx } from '@/utils/clsx'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        'text-4xl md:text-5xl font-bold text-pinky-text text-center mb-8',
        className
      )}
    >
      {children}
    </h2>
  )
}

