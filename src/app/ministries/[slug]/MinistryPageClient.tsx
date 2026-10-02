'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

type Ministry = {
  slug: string;
  title: string;
  tagline: string;
  emoji: string;
  image: string;
  gradient: string;
  accent: string;
  accentBg: string;
  intro: string;
  scripture: { text: string; ref: string };
  meets: { label: string; value: string }[];
  activities: { emoji: string; title: string; text: string }[];
  events: { month: string; day: string; title: string; note: string }[];
};

type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  caption: string;
};

export default function MinistryPageClient({ ministry }: { ministry: Ministry }) {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch(`/api/gallery?ministry=${ministry.slug}`);
      if (res.ok) setGallery(await res.json());
    } catch { /* ignore */ }
  }, [ministry.slug]);

  useEffect(() => { fetchGallery(); }, [fetchGallery]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
        if (e.key === 'ArrowRight') setLightboxIndex((i) => (i !== null && i < gallery.length - 1 ? i + 1 : i));
      };
      window.addEventListener('keydown', handler);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handler);
      };
    }
  }, [lightboxIndex, gallery.length]);

  // Masonry-like varied aspect ratios
  const aspectClasses = [
    'aspect-[16/9]',
    'aspect-[4/5]',
    'aspect-[1/1]',
    'aspect-[4/3]',
    'aspect-[16/10]',
    'aspect-[3/4]',
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* HERO */}
      <section className={`relative h-[420px] w-full flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          <img src={ministry.image} alt={ministry.title} className="w-full h-full object-cover" />
        </div>
        <div className={`absolute inset-0 z-0 bg-gradient-to-br ${ministry.gradient}`} />
        <div className="absolute inset-0 z-0 bg-black/20" />

        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <div className="text-xs uppercase tracking-widest text-white/70 mb-3 flex items-center justify-center gap-2 font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&rsaquo;</span>
            <Link href="/ministries" className="hover:underline">Ministries</Link>
            <span>&rsaquo;</span>
            <span className="text-white">{ministry.title}</span>
          </div>
          <div className="text-5xl mb-3">{ministry.emoji}</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">{ministry.title}</h1>
          <p className="text-white/80 text-base md:text-lg font-normal max-w-xl mx-auto leading-relaxed">{ministry.tagline}</p>
        </div>
      </section>

      {/* INTRO + SCRIPTURE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className={`flex items-center gap-3`}>
              <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${ministry.accent}`}>About This Ministry</span>
            </div>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed">{ministry.intro}</p>
          </div>
          <div className="lg:col-span-1">
            <div className={`rounded-2xl p-8 bg-gradient-to-br ${ministry.gradient} text-white relative overflow-hidden`}>
              <div className="absolute top-2 left-4 text-6xl text-white/10 font-serif">&ldquo;</div>
              <p className="relative font-serif text-lg leading-relaxed mb-4">{ministry.scripture.text}</p>
              <p className={`text-xs font-bold tracking-widest uppercase text-white/80`}>— {ministry.scripture.ref}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEETING TIMES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ministry.meets.map((meet, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200/70 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">{meet.label}</p>
              <p className="text-lg font-serif font-semibold text-stone-900">{meet.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className={`flex items-center justify-center gap-3 mb-2`}>
              <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${ministry.accent}`}>What We Do</span>
              <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Our Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministry.activities.map((act, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-6 border border-stone-200/60 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{act.emoji}</div>
                <h3 className="font-serif font-semibold text-lg text-stone-900 mb-2">{act.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{act.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className={`flex items-center justify-center gap-3 mb-2`}>
            <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
            <span className={`text-xs font-bold uppercase tracking-widest ${ministry.accent}`}>Upcoming</span>
            <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">Ministry Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ministry.events.map((evt, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className={`${ministry.accentBg} text-white px-5 py-3 flex items-center justify-between`}>
                <span className="text-xs font-bold uppercase tracking-wider">{evt.month}</span>
                <span className="text-sm font-bold">{evt.day}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-semibold text-lg text-stone-900 mb-2">{evt.title}</h3>
                <p className="text-sm text-stone-600">{evt.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className={`flex items-center justify-center gap-3 mb-2`}>
              <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${ministry.accent}`}>Living Gallery</span>
              <span className={`h-0.5 w-8 ${ministry.accentBg}`} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-2">Life in {ministry.title}</h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">Moments captured from our gatherings, events, and fellowship.</p>
          </div>

          {gallery.length === 0 ? (
            <div className="text-center py-16 text-stone-400">
              <Images className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No photos yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((img, i) => (
                <div
                  key={img.id}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${aspectClasses[i % aspectClasses.length]}`}
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-xs font-medium leading-snug">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-4">Want to Get Involved?</h2>
        <p className="text-stone-600 text-sm md:text-base mb-6 max-w-xl mx-auto">
          We&apos;d love to connect with you. Reach out to learn more about {ministry.title} and how you can be a part.
        </p>
        <a
          href={`mailto:info@coplaarea.org?subject=${encodeURIComponent(`Getting involved: ${ministry.title}`)}`}
          className={`inline-flex items-center gap-2 ${ministry.accentBg} text-white font-semibold px-7 py-3 rounded-lg transition hover:opacity-90`}
        >
          Get Involved
        </a>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {lightboxIndex > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}
          {lightboxIndex < gallery.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightboxIndex].url}
              alt={gallery[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            {gallery[lightboxIndex].caption && (
              <p className="text-white/80 text-sm mt-4 text-center">{gallery[lightboxIndex].caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
