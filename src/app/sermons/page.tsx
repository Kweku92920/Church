'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Tag, 
  Folder
} from 'lucide-react';

const categories = ['All', 'Teaching', 'Worship', 'Faith', 'Prayer', 'Family', 'Missions'];

const sermonsData = [
  {
    id: 'walking-in-power',
    title: 'Walking in the Power of the Holy Spirit',
    speaker: 'Pastor Emmanuel Mensah',
    date: 'SEPTEMBER 7, 2026',
    duration: '42 min',
    description: 'A message on how every believer can experience the daily power and leading of the Holy Spirit.',
    series: 'Living by the Spirit',
    topic: 'Teaching',
    category: 'Teaching',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'heart-of-true-worship',
    title: 'The Heart of True Worship',
    speaker: 'Pastor Daniel Osei',
    date: 'AUGUST 31, 2026',
    duration: '38 min',
    description: 'Discovering what it means to worship God in spirit and in truth from the depths of the heart.',
    series: 'Worship That Pleases God',
    topic: 'Worship',
    category: 'Worship',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'faith-for-impossible',
    title: 'Faith for the Impossible',
    speaker: 'Pastor Samuel Appiah',
    date: 'AUGUST 24, 2026',
    duration: '45 min',
    description: 'Learning to trust God for the things that are beyond our natural ability and understanding.',
    series: 'Faith That Works',
    topic: 'Faith',
    category: 'Faith',
    image: 'https://images.unsplash.com/photo-1517486800579-eadac886f9f7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'power-of-prayer',
    title: 'The Power of Persistent Prayer',
    speaker: 'Pastor Michael Boateng',
    date: 'AUGUST 17, 2026',
    duration: '40 min',
    description: 'Understanding how focused, consistent prayer shifts circumstances and transforms lives.',
    series: 'Deepening Prayer',
    topic: 'Prayer',
    category: 'Prayer',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'building-godly-home',
    title: 'Building a Godly Home',
    speaker: 'Pastor Joseph Kusi',
    date: 'AUGUST 10, 2026',
    duration: '44 min',
    description: 'Principles for establishing biblical values, unity, and love within the family structure.',
    series: 'Family & Faith',
    topic: 'Family',
    category: 'Family',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'light-to-nations',
    title: 'A Light to the Nations',
    speaker: 'Pastor Isaac Owusu',
    date: 'AUGUST 3, 2026',
    duration: '39 min',
    description: 'Fulfilling the Great Commission through localized outreach and global missions.',
    series: 'Global Mission',
    topic: 'Missions',
    category: 'Missions',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function SermonsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSermons = sermonsData.filter(
    (sermon) => selectedCategory === 'All' || sermon.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans">
{/* 3. HERO BANNER SECTION */}
      <section className="relative h-[360px] w-full flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=80" 
            alt="Open Bible on table" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D0D] via-black/50 to-[#1C0D0D]/70 z-0" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-stone-300 mb-3 flex items-center justify-center gap-2 font-medium">
            <Link href="/" className="hover:underline">Home</Link> 
            <span>&rsaquo;</span> 
            <span className="text-stone-100">Sermons</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Sermons &amp; Media
          </h1>
          <p className="text-stone-300 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Be encouraged and equipped by messages from our pastors and leaders.
          </p>
        </div>
      </section>

      {/* 4. SECTION TITLE */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
          <span className="w-8 h-[1px] bg-[#B8860B]/40"></span>
          THE WORD
          <span className="w-8 h-[1px] bg-[#B8860B]/40"></span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C0D0D]">
          Sermon Library
        </h2>
      </section>

      {/* 5. CATEGORY FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-6 pb-12 flex justify-center">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition duration-150 ${
                  isActive
                    ? 'bg-[#8B2621] text-white shadow-sm'
                    : 'bg-[#F5EFEC] text-stone-700 hover:bg-stone-200/70 border border-stone-200/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* 6. SERMON CARDS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon) => (
            <div 
              key={sermon.id} 
              className="bg-[#F6F2EC] rounded-2xl overflow-hidden border border-stone-200/70 hover:shadow-md transition duration-200 flex flex-col"
            >
              {/* Image Container with Duration Badge */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-stone-300 relative">
                <img 
                  src={sermon.image} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                  {sermon.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#8B2621] uppercase mb-2">
                  <Calendar className="w-3 h-3 text-[#8B2621]" />
                  <span>{sermon.date}</span>
                </div>

                {/* Title & Speaker */}
                <h3 className="font-serif font-bold text-xl text-[#1C0D0D] leading-snug mb-1">
                  {sermon.title}
                </h3>
                <p className="text-xs font-medium text-stone-500 mb-4">
                  {sermon.speaker}
                </p>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed mb-6 flex-grow">
                  {sermon.description}
                </p>

                {/* Bottom Tags */}
                <div className="flex items-center gap-4 text-[11px] text-stone-500 pt-3 border-t border-stone-200/60 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Folder className="w-3 h-3 text-stone-400" />
                    {sermon.series}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-stone-400" />
                    {sermon.topic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      
</div>
  );
}
