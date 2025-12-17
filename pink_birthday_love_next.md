# 💗 Pink Birthday Love – Next.js Template

A **production-ready, cute & emotional** birthday website template built with **Next.js + TailwindCSS + Hero UI + Iconify**.
Designed for developers who want to gift something **personal, unique, and unforgettable**.

---

## ✨ Features

- 🎀 Cute pink **glassmorphism UI**
- 💖 Floating hearts & soft animations
- ⌨️ Typing text & smooth fade-in
- 🎵 Optional background music (user-controlled)
- 📸 Memories gallery with GlassCard
- 💌 Letter page with emotional typography
- 🎁 Surprise reveal + confetti
- 🚀 Ready to deploy on Vercel

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **TailwindCSS**
- **Hero UI**
- **Iconify**
- TypeScript

---

## 📁 Project Structure

```txt
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ memories/page.tsx
│  ├─ timeline/page.tsx
│  ├─ letter/page.tsx
│  ├─ surprise/page.tsx
│  └─ loading.tsx
│
├─ components/
│  ├─ layout/
│  ├─ ui/
│  │  ├─ GlassCard.tsx
│  │  ├─ PinkButton.tsx
│  │  └─ SectionTitle.tsx
│  ├─ effects/
│  │  ├─ FloatingHearts.tsx
│  │  ├─ FadeIn.tsx
│  │  └─ Confetti.tsx
│  └─ shared/
│     ├─ TypingText.tsx
│     ├─ Countdown.tsx
│     └─ AudioToggle.tsx
│
├─ constants/
│  ├─ memories.ts
│  └─ timeline.ts
│
├─ styles/
│  ├─ animations.css
│  └─ globals.css
│
└─ public/
   ├─ images/
   └─ music/
```

---

## 🎨 Design System

### 🎀 Color Palette

```ts
pinky: {
  bg: '#FFF0F6',
  primary: '#FF6FAE',
  secondary: '#FF9ACB',
  accent: '#FFD6E7',
  text: '#C9184A'
}
```

---

## 🧩 Core UI Component – GlassCard

```tsx
export default function GlassCard({ children, className }) {
  return (
    <div className={clsx(
      'relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,105,180,0.25)]',
      className
    )}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
```

---

## 🎞 Animations & Micro-interactions

### Fade In on Scroll

```tsx
export function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

### Floating Hearts Background

```tsx
<div className="absolute inset-0 overflow-hidden">
  {[...Array(12)].map((_, i) => (
    <span
      key={i}
      className="absolute animate-float text-pinky-secondary"
      style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 1.5}s` }}
    >
      💕
    </span>
  ))}
</div>
```

### Confetti Surprise

Use on Surprise Page after button click.

```tsx
import confetti from 'canvas-confetti'

confetti({
  particleCount: 120,
  spread: 70,
  origin: { y: 0.6 }
})
```

---

## 🎵 Audio UX Rule

- ❌ No auto-play
- ✅ User-controlled toggle
- ✅ Save state in localStorage

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

---

## 🌐 Deploy

1. Push repo to GitHub
2. Import into **Vercel**
3. Done 🎉

---

## 💌 Author Intent

> "This project is not just a website.
> It's a memory, a feeling, and a love letter written in code."

---

## ⭐ Tip for Maximum Impact

- Show site at **00:00 on birthday**
- Combine with a handwritten card + QR code
- Let her scroll slowly, don’t explain — let her feel

---

Happy building 💗

