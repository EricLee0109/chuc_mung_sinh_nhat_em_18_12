# 💗 Pink Birthday Love – Next.js Template

A **production-ready, cute & emotional** birthday website template built with **Next.js + TailwindCSS + Next UI + Iconify**.
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

- **Next.js 14 (App Router)**
- **TailwindCSS**
- **Next UI (Hero UI)**
- **Iconify**
- **Framer Motion** (animations)
- **Canvas Confetti** (surprise effects)
- **TypeScript**

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx          # Home page
│  ├─ memories/page.tsx # Memories gallery
│  ├─ timeline/page.tsx # Timeline of events
│  ├─ letter/page.tsx   # Love letter
│  ├─ surprise/page.tsx # Surprise reveal
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
   ├─ images/          # Memory images
   └─ music/           # Background music
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

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Customization

### Adding Your Memories

1. Add your images to `public/images/` (name them: `memory1.jpg`, `memory2.jpg`, etc.)
2. Update `src/constants/memories.ts` with your actual memories

### Adding Your Timeline

1. Edit `src/constants/timeline.ts` with your personal events

### Adding Background Music

1. Place your music file in `public/music/` as `birthday-song.mp3`
2. The audio toggle will appear automatically

### Customizing the Letter

1. Edit `src/app/letter/page.tsx` with your personal message

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
- Let her scroll slowly, don't explain — let her feel

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next UI Documentation](https://nextui.org/)
- [Iconify Documentation](https://iconify.design/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Happy building 💗
