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
    date: 'January 15, 2024',
    title: 'First Meeting',
    description: 'The day our story began. I knew from that moment that you were special.',
    icon: 'mdi:heart',
  },
  {
    id: '2',
    date: 'February 14, 2024',
    title: 'First Date',
    description: 'Valentine\'s Day - our first official date. The butterflies were real.',
    icon: 'mdi:calendar-heart',
  },
  {
    id: '3',
    date: 'March 20, 2024',
    title: 'First "I Love You"',
    description: 'The words that changed everything. I meant every single one.',
    icon: 'mdi:heart-multiple',
  },
  {
    id: '4',
    date: 'April 10, 2024',
    title: 'Our First Trip',
    description: 'Adventures together, creating memories that will last forever.',
    icon: 'mdi:airplane',
  },
  {
    id: '5',
    date: 'May 5, 2024',
    title: 'Meeting the Family',
    description: 'You meeting my family - a milestone that meant the world to me.',
    icon: 'mdi:account-group',
  },
  {
    id: '6',
    date: 'Today',
    title: 'Your Special Day',
    description: 'Today is all about you. Happy Birthday, my love!',
    icon: 'mdi:gift',
  },
]

