'use client'

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-float text-pinky-secondary text-2xl md:text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          💕
        </span>
      ))}
    </div>
  )
}

