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
    date: '15 tháng 1, 2024',
    title: 'Lần đầu gặp nhau',
    description: 'Ngày câu chuyện của chúng ta bắt đầu. Anh biết từ khoảnh khắc đó rằng em rất đặc biệt.',
    icon: 'mdi:heart',
  },
  {
    id: '2',
    date: '14 tháng 2, 2024',
    title: 'Buổi hẹn đầu tiên',
    description: 'Ngày Valentine - buổi hẹn chính thức đầu tiên của chúng ta. Những con bướm trong bụng là có thật.',
    icon: 'mdi:calendar-heart',
  },
  {
    id: '3',
    date: '20 tháng 3, 2024',
    title: 'Lần đầu nói "Anh yêu em"',
    description: 'Những lời nói đã thay đổi tất cả. Anh thật lòng với từng lời một.',
    icon: 'mdi:heart-multiple',
  },
  {
    id: '4',
    date: '10 tháng 4, 2024',
    title: 'Chuyến đi đầu tiên của chúng ta',
    description: 'Cùng nhau phiêu lưu, tạo ra những kỉ niệm sẽ mãi mãi.',
    icon: 'mdi:airplane',
  },
  {
    id: '5',
    date: '5 tháng 5, 2024',
    title: 'Gặp gia đình',
    description: 'Em gặp gia đình anh - một cột mốc có ý nghĩa rất lớn với anh.',
    icon: 'mdi:account-group',
  },
  {
    id: '6',
    date: 'Hôm nay',
    title: 'Ngày đặc biệt của em',
    description: 'Hôm nay tất cả dành cho em. Chúc mừng sinh nhật, em yêu của anh!',
    icon: 'mdi:gift',
  },
]

