'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Video, Images, Calendar, ArrowRight } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ sermons: 0, gallery: 0, events: 0 });

  const fetchStats = useCallback(async () => {
    try {
      const [s, g, e] = await Promise.all([
        fetch('/api/sermons').then((r) => r.json()),
        fetch('/api/gallery').then((r) => r.json()),
        fetch('/api/events').then((r) => r.json()),
      ]);
      setStats({ sermons: s.length, gallery: g.length, events: e.length });
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { fetchStats(); }, [fetchStats]);

  const cards = [
    { href: '/admin/sermons', label: 'Sermons', count: stats.sermons, icon: Video, desc: 'Manage YouTube sermon links' },
    { href: '/admin/gallery', label: 'Gallery', count: stats.gallery, icon: Images, desc: 'Upload photos to ministry galleries' },
    { href: '/admin/events', label: 'Events & Announcements', count: stats.events, icon: Calendar, desc: 'Post events and announcements' },
  ];

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-white mb-1">Dashboard</h1>
      <p className="text-stone-400 text-sm mb-8">Manage your website content from here.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-amber-600/40 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-600/10 text-amber-500 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl font-serif font-bold text-white">{card.count}</span>
              </div>
              <h2 className="font-semibold text-white text-sm mb-1">{card.label}</h2>
              <p className="text-stone-500 text-xs mb-4">{card.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-500 group-hover:gap-2 transition-all">
                Manage <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
