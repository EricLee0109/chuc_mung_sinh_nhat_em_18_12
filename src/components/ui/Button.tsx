'use client'

import { Button as NextUIButton, ButtonProps as NextUIButtonProps } from '@nextui-org/react'

export interface ButtonProps extends Omit<NextUIButtonProps, 'variant' | 'color'> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  const colorMap = {
    primary: 'primary' as const,
    secondary: 'default' as const,
    danger: 'danger' as const,
  }

  return (
    <NextUIButton
      color={colorMap[variant]}
      {...props}
    >
      {props.children}
    </NextUIButton>
  )
}

