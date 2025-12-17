'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/react'

export function GlobalAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set up event listeners
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      setIsMuted(true)
    }
    const handleError = (e: Event) => {
      console.error('Audio error:', e)
      setIsPlaying(false)
      setIsMuted(true)
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    // Load the audio
    audio.load()

    // Check saved state and restore if needed
    const savedState = localStorage.getItem('audioEnabled')
    if (savedState === 'true') {
      // Restore playing state if it was playing before
      setIsMuted(false)
      setIsPlaying(true)
      // Try to play, but don't force it (browser autoplay restrictions)
      audio.play().catch(() => {
        // Auto-play was prevented, user needs to click
        setIsMuted(true)
        setIsPlaying(false)
      })
    }

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  // Persist audio state across navigation
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // If audio was playing before navigation, keep it playing
    const savedState = localStorage.getItem('audioEnabled')
    if (savedState === 'true' && isPlaying && !audio.paused) {
      // Audio is already playing, do nothing
      return
    } else if (savedState === 'true' && isMuted && !isPlaying) {
      // User wants it playing but it's paused, try to resume
      audio.play().catch(() => {
        // Can't auto-play, wait for user interaction
      })
    }
  }, [pathname, isPlaying, isMuted])

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isMuted) {
        // Play the audio
        await audio.play()
        setIsMuted(false)
        setIsPlaying(true)
        localStorage.setItem('audioEnabled', 'true')
      } else {
        // Pause the audio
        audio.pause()
        setIsMuted(true)
        setIsPlaying(false)
        localStorage.setItem('audioEnabled', 'false')
      }
    } catch (error) {
      console.error('Error toggling audio:', error)
      // If play() fails, reset state
      setIsMuted(true)
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/music/love.mp3" 
        loop 
        preload="auto"
        crossOrigin="anonymous"
      />
      <Button
        isIconOnly
        variant="light"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full w-12 h-12 md:w-14 md:h-14"
        onPress={toggleAudio}
        aria-label={isMuted ? 'Play music' : 'Pause music'}
      >
        <Icon
          icon={isMuted ? 'mdi:volume-off' : 'mdi:volume-high'}
          width={20}
          height={20}
          className="md:w-6 md:h-6 text-pinky-primary"
        />
      </Button>
    </>
  )
}

