'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  }

  const field =
    'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder-stone-400 focus:border-[#8B2621] focus:outline-none focus:ring-2 focus:ring-[#8B2621]/10';

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-stone-800">
      <section className="relative flex h-[300px] items-center justify-center overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-stone-900 to-[#1C0D0D]" />
        <div className="relative z-10 max-w-3xl px-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-stone-100">Contact</span>
          </div>
          <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-xl text-sm text-stone-300 md:text-base">
            We would love to hear from you. Send a message and the Area Office will get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <h2 className="font-serif text-2xl font-bold text-[#1C0D0D]">Area Office</h2>
          <ul className="space-y-4 text-sm text-stone-600">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[#B8860B]" /><span>La Area Office, Accra, Ghana</span></li>
            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#B8860B]" /><span>(213) 555-0142</span></li>
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#B8860B]" /><span>info@coplaarea.org</span></li>
            <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-[#B8860B]" /><span>Mon – Fri, 8:00 AM – 4:30 PM</span></li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-stone-200/70 bg-[#F6F2EC] p-6 shadow-sm md:p-8 lg:col-span-3">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-xs font-semibold text-stone-700">Your name
              <input name="name" required maxLength={200} placeholder="Full name" className={`${field} mt-1.5 font-normal`} />
            </label>
            <label className="block text-xs font-semibold text-stone-700">Email
              <input name="email" type="email" required placeholder="you@example.com" className={`${field} mt-1.5 font-normal`} />
            </label>
          </div>
          <label className="block text-xs font-semibold text-stone-700">Subject
            <input name="subject" maxLength={200} placeholder="How can we help?" className={`${field} mt-1.5 font-normal`} />
          </label>
          <label className="block text-xs font-semibold text-stone-700">Message
            <textarea name="message" required rows={6} maxLength={5000} placeholder="Write your message…" className={`${field} mt-1.5 font-normal`} />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'} <Send className="h-4 w-4" />
          </button>
          {status === 'sent' && <p role="status" className="text-sm font-medium text-emerald-800">Thank you! Your message has been sent to the Area Office.</p>}
          {status === 'error' && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}
        </form>
      </section>
    </div>
  );
}
