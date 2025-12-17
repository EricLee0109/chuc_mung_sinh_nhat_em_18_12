'use client'

import { Button } from '@nextui-org/react'
import { clsx } from '@/utils/clsx'

interface PinkButtonProps {
  children: React.ReactNode
  className?: string
  onPress?: () => void
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isDisabled?: boolean
}

export default function PinkButton({
  children,
  className,
  onPress,
  variant = 'solid',
  size = 'md',
  isDisabled = false,
}: PinkButtonProps) {
  return (
    <Button
      className={clsx(
        'bg-pinky-primary text-white hover:bg-pinky-secondary transition-all duration-300',
        className
      )}
      onPress={onPress}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      style={{
        backgroundColor: variant === 'solid' ? '#FF6FAE' : undefined,
      }}
    >
      {children}
    </Button>
  )
}

