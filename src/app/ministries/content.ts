export type MinistryPage = {
  slug: string;
  title: string;
  tagline: string;
  emoji: string;
  image: string;
  gradient: string; // tailwind gradient classes for hero overlay
  accent: string; // text color class
  accentBg: string; // bg color class
  intro: string;
  scripture: { text: string; ref: string };
  meets: { label: string; value: string }[];
  activities: { emoji: string; title: string; text: string }[];
  events: { month: string; day: string; title: string; note: string }[];
};

export const ministryPages: MinistryPage[] = [
  {
    slug: 'youth',
    title: 'Youth Ministry',
    tagline: 'Fired up. Spirit-filled. Made for more.',
    emoji: '🔥',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-orange-700/80 via-rose-900/70 to-stone-950',
    accent: 'text-orange-600',
    accentBg: 'bg-orange-500',
    intro: 'A vibrant community of young people discovering their purpose in Christ, building real friendships and rising up as leaders in church and society.',
    scripture: { text: 'Let no one despise your youth, but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity.', ref: '1 Timothy 4:12' },
    meets: [
      { label: 'Fellowship', value: 'Fridays · 6:00 PM' },
      { label: 'Ages', value: '13 – 35 years' },
      { label: 'Where', value: 'Your local assembly' },
    ],
    activities: [
      { emoji: '🎤', title: 'Worship Nights', text: 'High-energy praise, live music and powerful moments in God’s presence.' },
      { emoji: '📖', title: 'Bible Study & Mentoring', text: 'Grow in the Word with mentors who walk alongside you.' },
      { emoji: '⚽', title: 'Sports & Socials', text: 'Football, games, retreats and hangouts that build lasting friendships.' },
      { emoji: '🚀', title: 'Leadership & Career', text: 'Workshops on purpose, skills, education and entrepreneurship.' },
    ],
    events: [
      { month: 'Monthly', day: '1st', title: 'Youth Prayer Vigil', note: 'All-night prayer and worship' },
      { month: 'Quarterly', day: 'Sat', title: 'Youth Rally & Outreach', note: 'Street evangelism and community service' },
      { month: 'Yearly', day: 'Aug', title: 'Youth Camp', note: 'A week of teaching, fun and fellowship' },
    ],
  },
  {
    slug: 'women',
    title: 'Women’s Ministry',
    tagline: 'Rooted in faith. Flourishing together.',
    emoji: '🌸',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-rose-700/80 via-fuchsia-950/70 to-stone-950',
    accent: 'text-rose-600',
    accentBg: 'bg-rose-500',
    intro: 'A warm sisterhood empowering women to grow in faith, serve with love and support one another in every season of life.',
    scripture: { text: 'She is clothed with strength and dignity, and she laughs without fear of the future.', ref: 'Proverbs 31:25' },
    meets: [
      { label: 'Fellowship', value: 'Sundays · after service' },
      { label: 'Prayer', value: 'Tuesdays · 6:00 PM' },
      { label: 'Where', value: 'Your local assembly' },
    ],
    activities: [
      { emoji: '🙏', title: 'Prayer & Intercession', text: 'Standing together for families, the church and the nation.' },
      { emoji: '💐', title: 'Fellowship & Encouragement', text: 'Teas, testimonies and sisterly care for every season.' },
      { emoji: '🧵', title: 'Skills & Empowerment', text: 'Training in business, finance, health and home-making.' },
      { emoji: '🤲', title: 'Outreach & Charity', text: 'Visiting the sick, supporting widows and caring for the needy.' },
    ],
    events: [
      { month: 'Monthly', day: '2nd', title: 'Women’s Fellowship Day', note: 'Teaching, worship and testimonies' },
      { month: 'Quarterly', day: 'Sat', title: 'Skills & Business Fair', note: 'Learn, share and support each other' },
      { month: 'Yearly', day: 'May', title: 'Women’s Conference', note: 'Area-wide gathering of women' },
    ],
  },
  {
    slug: 'men',
    title: 'Men’s Ministry',
    tagline: 'Standing firm. Leading with integrity.',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-emerald-800/80 via-slate-900/75 to-stone-950',
    accent: 'text-emerald-700',
    accentBg: 'bg-emerald-700',
    intro: 'Equipping men to lead their families and communities with godly character, brotherhood and a life of purpose.',
    scripture: { text: 'Be watchful, stand firm in the faith, act like men, be strong. Let all that you do be done in love.', ref: '1 Corinthians 16:13-14' },
    meets: [
      { label: 'Fellowship', value: 'Saturdays · 7:00 AM' },
      { label: 'Prayer', value: 'Wednesdays · 6:00 PM' },
      { label: 'Where', value: 'Your local assembly' },
    ],
    activities: [
      { emoji: '🧭', title: 'Men’s Bible Study', text: 'Straight-talking teaching on faith, marriage, work and fatherhood.' },
      { emoji: '🤝', title: 'Brotherhood & Mentoring', text: 'Older men investing in younger men and accountability partners.' },
      { emoji: '🏀', title: 'Sports & Retreats', text: 'Fellowship through football, breakfast meetings and retreats.' },
      { emoji: '🔧', title: 'Community Service', text: 'Hands-on projects that serve the church and the neighbourhood.' },
    ],
    events: [
      { month: 'Monthly', day: '1st', title: 'Men’s Breakfast', note: 'Fellowship and a word for the month' },
      { month: 'Quarterly', day: 'Sat', title: 'Community Work Day', note: 'Serving together in our neighbourhoods' },
      { month: 'Yearly', day: 'Jun', title: 'Men’s Conference', note: 'Area-wide gathering of men' },
    ],
  },
  {
    slug: 'children',
    title: 'Children’s Ministry',
    tagline: 'Little hearts. Big faith. Lots of joy!',
    emoji: '🌈',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-sky-600/75 via-indigo-900/70 to-stone-950',
    accent: 'text-sky-600',
    accentBg: 'bg-sky-500',
    intro: 'A safe, joyful place where children learn about Jesus through stories, songs, games and creative activities.',
    scripture: { text: 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.', ref: 'Matthew 19:14' },
    meets: [
      { label: 'Sunday School', value: 'Sundays · during service' },
      { label: 'Ages', value: '0 – 12 years' },
      { label: 'Where', value: 'Your local assembly' },
    ],
    activities: [
      { emoji: '🎨', title: 'Arts & Crafts', text: 'Creative activities that bring Bible stories to life.' },
      { emoji: '🎶', title: 'Songs & Drama', text: 'Singing, dancing and drama performances every term.' },
      { emoji: '📚', title: 'Bible Stories', text: 'Age-appropriate teaching led by caring, trained teachers.' },
      { emoji: '🎈', title: 'Fun Days & Parties', text: 'Games, treats and holiday programmes children love.' },
    ],
    events: [
      { month: 'Weekly', day: 'Sun', title: 'Sunday School', note: 'Lessons, songs and games' },
      { month: 'Termly', day: 'Sat', title: 'Children’s Fun Day', note: 'Games, food and prizes' },
      { month: 'Yearly', day: 'Dec', title: 'Christmas Carol & Party', note: 'Children lead the celebration' },
    ],
  },
];
