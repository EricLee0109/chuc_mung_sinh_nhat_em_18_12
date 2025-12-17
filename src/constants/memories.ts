export interface Memory {
  id: string
  image: string
  title: string
  description: string
  date: string
}

export const memories: Memory[] = [
  {
    id: '1',
    image: '/images/memory1.jpg',
    title: 'First Meeting',
    description: 'The day we first met, and everything changed.',
    date: '2024-01-15',
  },
  {
    id: '2',
    image: '/images/memory2.jpg',
    title: 'First Date',
    description: 'Our first date, filled with laughter and joy.',
    date: '2024-02-14',
  },
  {
    id: '3',
    image: '/images/memory3.jpg',
    title: 'Special Moment',
    description: 'A moment I will never forget.',
    date: '2024-03-20',
  },
  {
    id: '4',
    image: '/images/memory4.jpg',
    title: 'Adventure Together',
    description: 'Exploring new places hand in hand.',
    date: '2024-04-10',
  },
  {
    id: '5',
    image: '/images/memory5.jpg',
    title: 'Celebration',
    description: 'Celebrating our milestones together.',
    date: '2024-05-05',
  },
  {
    id: '6',
    image: '/images/memory6.jpg',
    title: 'Perfect Day',
    description: 'Every day with you is perfect.',
    date: '2024-06-01',
  },
]

