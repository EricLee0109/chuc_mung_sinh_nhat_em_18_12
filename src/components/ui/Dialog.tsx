'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
}

export function Dialog({ isOpen, onClose, title, children, size = 'md' }: DialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            {title && (
              <ModalHeader className="flex flex-col gap-1">
                {title}
              </ModalHeader>
            )}
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
              {/* Footer content can be customized here */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

