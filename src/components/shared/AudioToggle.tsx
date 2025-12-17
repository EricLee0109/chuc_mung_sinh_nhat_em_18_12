'use client'

import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/react'

export default function AudioToggle({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

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

    // Check saved state
    const savedState = localStorage.getItem('audioEnabled')
    if (savedState === 'false') {
      setIsMuted(true)
      // Don't auto-play, wait for user interaction
    }

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [src])

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
        src={src} 
        loop 
        preload="auto"
        crossOrigin="anonymous"
      />
      <Button
        isIconOnly
        variant="light"
        className="fixed bottom-6 right-6 z-50 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full w-14 h-14"
        onPress={toggleAudio}
        aria-label={isMuted ? 'Play music' : 'Pause music'}
      >
        <Icon
          icon={isMuted ? 'mdi:volume-off' : 'mdi:volume-high'}
          width={24}
          height={24}
          className="text-pinky-primary"
        />
      </Button>
    </>
  )
}

