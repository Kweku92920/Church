'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Bell, Megaphone } from 'lucide-react';

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'event' | 'announcement';
  image: string;
  createdAt: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'event' | 'announcement'>('all');

  const fetchEvents = useCallback(async () => {
    try {
      const res = await fetch('/api/events');
      if (res.ok) setEvents(await res.json());
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { fetchEvents(); }, [fetchEvents]);

  const filtered = events.filter((e) => filter === 'all' || e.category === filter);
  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* HERO */}
      <section className="relative h-[320px] w-full flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" alt="Community gathering" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/70 z-0" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-stone-300 mb-3 flex items-center justify-center gap-2 font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-stone-100">Media</span>
            <span>&rsaquo;</span>
            <span className="text-stone-100">Events</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">Events &amp; Announcements</h1>
          <p className="text-stone-300 text-sm md:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Stay connected with what&apos;s happening across the LA Area.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="flex items-center justify-center gap-2">
          {(['all', 'event', 'announcement'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-medium capitalize transition ${
                filter === f
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {f === 'all' ? 'All Updates' : f + 's'}
            </button>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        {sorted.length === 0 ? (
          <div className="text-center py-20 text-stone-400">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="text-sm">No updates yet. Check back soon!</p>
          </div>
        ) : (
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 md:-translate-x-1/2" />

            <div className="space-y-8">
              {sorted.map((item, i) => {
                const isAnnouncement = item.category === 'announcement';
                const isLeft = i % 2 === 0;
                return (
                  <div key={item.id} className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                    {/* Dot */}
                    <div className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full ${isAnnouncement ? 'bg-amber-500' : 'bg-emerald-600'} ring-4 ring-stone-50 z-10`} />

                    {/* Card */}
                    <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-md transition-shadow">
                        {item.image && (
                          <div className="aspect-[16/9] w-full overflow-hidden bg-stone-200">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            {isAnnouncement ? (
                              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                <Megaphone className="w-3 h-3" />
                                Announcement
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                <Bell className="w-3 h-3" />
                                Event
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">{item.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 mb-3">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-stone-400" />
                              {formatDate(item.date)}
                            </span>
                            {item.time && (
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-stone-400" />
                                {item.time}
                              </span>
                            )}
                            {item.location && (
                              <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                                {item.location}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
