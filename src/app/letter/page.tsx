'use client'

import Link from 'next/link'
import FloatingHearts from '@/components/effects/FloatingHearts'
import { FadeIn } from '@/components/effects/FadeIn'
import SectionTitle from '@/components/ui/SectionTitle'
import GlassCard from '@/components/ui/GlassCard'
import { Icon } from '@iconify/react'

export default function LetterPage() {
  return (
    <div className="relative min-h-screen bg-pinky-bg overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-pinky-text mb-8 hover:text-pinky-primary transition-colors">
          <Icon icon="mdi:arrow-left" width={24} height={24} className="mr-2" />
          Về trang chủ
        </Link>

        <FadeIn>
          <SectionTitle>Lá thư từ trái tim anh 💌</SectionTitle>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <div className="prose prose-lg max-w-none">
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Bé iu của anh,
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Vào ngày đặc biệt này, anh muốn tạo ra một điều gì đó độc đáo dành cho em - một điều gì đó không chỉ ghi lại
                  những khoảnh khắc, mà còn cả những cảm xúc của anh với em. Trang web này không chỉ là code mà nó là một bộ sưu tập
                  những kỉ niệm, cảm xúc và tình yêu anh dành cho em.
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Mỗi kỉ niệm, tiếng cười, khoảnh khắc vui vẻ cùng nhau - tất cả anh đều để ở đây,
                  anh sẽ lưu giữ trong không gian này mà anh đã xây dựng chỉ dành cho em. Anh hy vọng khi em khám phá
                  những kho báu này, em sẽ cảm nhận được sự ấm áp và hạnh phúc giống như anh cảm thấy khi ở bên em.
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Em xứng đáng có cả thế giới, và dù anh không thể cho em điều đó, nhưng anh có thể cho em điều này:
                  một phần trái tim của anh, được viết bằng sự quan tâm, được thiết kế bằng tình yêu, và được tạo ra với
                  hy vọng sẽ mang lại nụ cười trên khuôn mặt của em nháaaa 🥰🥰🥰.
                </p>
                
                <p className="text-pinky-text text-lg leading-relaxed mb-4">
                  Chúc mừng sinh nhật, em bé iu cụa anh. Mong rằng từ nay và sau này anh sẽ mang lại cho em niềm vui, những chuyến đi phượt khám phá nhiều thứ mới mẻ cùng nhau,
                  và mong em hạnh phúc với tình cảm mà anh dành cho em 💕.
                </p>
                
                <p className="text-pinky-text text-xl font-semibold mt-8 text-right">
                  Với tất cả tấm lòng của anh,<br />
                  Luv Luv U So Much 💕
                </p>
              </div>
            </GlassCard>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}

