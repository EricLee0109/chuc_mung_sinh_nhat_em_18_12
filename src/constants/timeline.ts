export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  icon: string
}

export const timeline: TimelineEvent[] = [
  {
    id: '1',
    date: '21 tháng 9, 2025',
    title: 'Ngày anh chính thức kết bạn với em',
    description: 'Ngày câu chuyện của chúng ta bắt đầu. Anh biết từ khoảnh khắc đó em rất đặc biệt và anh cảm thấy thích em từ lúc đó',
    icon: 'mdi:heart',
  },
  {
    id: '2',
    date: '22 tháng 9, 2025',
    title: 'Ngày anh rủ em đi nhậu',
    description: 'Ngày anh rủ em đi nhậu (có khứa bạn của anh đi cùng) - Nhưng em ngại không đi. Vậy nên anh và bạn của anh đi nhậu mà không có em =)))',
    icon: 'mdi:calendar-heart',
  },
  {
    id: '3',
    date: '27 tháng 9, 2025',
    title: 'Ngày đầu tiên anh đi chơi với em"',
    description: 'Em nói em ăn gì cũng được, thế là anh dẫn em đi ăn mì cay 🔥 thế là em nước mắt nước mũi tèm lem =)))) bỏ cả tô mì luôn',
    icon: 'mdi:heart-multiple',
  },
  {
    id: '4',
    date: '28 tháng 9, 2025',
    title: 'Ngày đi chơi thứ hai với em đầy cảm xức',
    description: 'Cùng nhau phiêu lưu, dạo phố ra quán cafe ngồi nch với nhau và nghe em kể chuyện, hiểu về em hơn, và cảm xúc nhất là lúc bị em đánh bại bởi một nụ honnn =)))))))))',
    icon: 'mdi:airplane-takeoff',
  },
  {
    id: '5',
    date: '7 tháng 1, 2026',
    title: 'Chuyến đi chơi xa đầu tiên với em - comming soon',
    description: 'Anh sẽ tranh thủ sắp xếp thời gian để đi Vũng Tàu với em - mong em sẽ đồng ý và sắp xếp thời gian đi với anh nháaaa 🥰',
    icon: 'mdi:airplane',
  },
  {
    id: '6',
    date: 'Hôm nay',
    title: 'Ngày đặc biệt của em',
    description: 'Và cuối cùng là hôm nay ngày đặc biệt của em. Chúc mừng sinh nhật em, bé iu cụa toi! 💕',
    icon: 'mdi:gift',
  },
]

