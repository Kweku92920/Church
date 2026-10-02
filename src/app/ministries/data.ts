export type Ministry = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const ministriesData: Ministry[] = [
  {
    id: 'mens-ministry',
    title: "Men's Ministry",
    description: 'Equipping men to lead their families and communities with godly character and integrity.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
    icon: '♂',
  },
  {
    id: 'womens-ministry',
    title: "Women's Ministry",
    description: 'Empowering women to grow in faith, serve with love, and support one another in every season.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    icon: '♀',
  },
  {
    id: 'youth-ministry',
    title: 'Youth Ministry',
    description: 'Raising the next generation of passionate, Spirit-filled young leaders for Christ.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
    icon: '🔥',
  },
  {
    id: 'childrens-ministry',
    title: "Children's Ministry",
    description: 'Nurturing children in the love of God through joyful, age-appropriate teaching and care.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    icon: '❤️',
  },
  {
    id: 'choir-worship',
    title: 'Choir & Worship',
    description: 'Leading the congregation into the presence of God through music and heartfelt praise.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    icon: '🎵',
  },
  {
    id: 'missions-evangelism',
    title: 'Missions & Evangelism',
    description: 'Carrying the Gospel to our neighborhoods, our city, and the nations of the world.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
    icon: '🌍',
  },
];
