'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2, Loader2, X, Megaphone, Calendar } from 'lucide-react';

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

export default function AdminEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    date: new Date().toISOString().slice(0, 10),
    time: '',
    location: '',
    description: '',
    category: 'event' as 'event' | 'announcement',
    image: '',
  });

  const fetchEvents = useCallback(async () => {
    try {
      const res = await fetch('/api/events');
      if (res.ok) setEvents(await res.json());
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchEvents(); }, [fetchEvents]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.title.trim()) { setError('Title is required.'); return; }

    setSubmitting(true);
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        await fetchEvents();
        setForm({ title: '', date: new Date().toISOString().slice(0, 10), time: '', location: '', description: '', category: 'event', image: '' });
        setShowForm(false);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to publish.');
      }
    } catch {
      setError('Network error.');
    } finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this item?')) return;
    await fetch(`/api/events/${id}`, { method: 'DELETE' });
    setEvents(events.filter((e) => e.id !== id));
  };

  const formatDate = (dateStr: string) => {
    try { return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
    catch { return dateStr; }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white mb-1">Events &amp; Announcements</h1>
          <p className="text-stone-400 text-sm">Post events and announcements to the website.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? 'Cancel' : 'Add Update'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 mb-6 space-y-4">
          {/* Category toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setForm({ ...form, category: 'event' })}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                form.category === 'event' ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/40' : 'bg-stone-800 text-stone-400 border border-stone-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Event
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, category: 'announcement' })}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                form.category === 'announcement' ? 'bg-amber-600/20 text-amber-400 border border-amber-600/40' : 'bg-stone-800 text-stone-400 border border-stone-700'
              }`}
            >
              <Megaphone className="w-4 h-4" />
              Announcement
            </button>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Title *</label>
            <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Time</label>
              <input type="text" placeholder="e.g. 5:00 PM" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Location</label>
              <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Description</label>
            <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none" />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Image URL (optional)</label>
            <input type="url" placeholder="https://..." value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button type="submit" disabled={submitting}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Publish {form.category === 'event' ? 'Event' : 'Announcement'}
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20 text-stone-500">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : events.length === 0 ? (
        <p className="text-stone-500 text-sm text-center py-20">No events or announcements yet.</p>
      ) : (
        <div className="space-y-3">
          {events.map((item) => (
            <div key={item.id} className="bg-stone-900 border border-stone-800 rounded-xl p-4 flex items-start gap-4 group">
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-stone-800 flex items-center justify-center flex-shrink-0">
                  {item.category === 'announcement' ? <Megaphone className="w-6 h-6 text-amber-500" /> : <Calendar className="w-6 h-6 text-emerald-500" />}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.category === 'announcement' ? 'bg-amber-600/15 text-amber-500' : 'bg-emerald-600/15 text-emerald-500'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-stone-500">{formatDate(item.date)}</span>
                </div>
                <h3 className="font-serif font-semibold text-sm text-white mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 line-clamp-2">{item.description}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="flex-shrink-0 w-8 h-8 rounded-lg bg-stone-800 hover:bg-red-600/20 text-stone-500 hover:text-red-400 flex items-center justify-center transition opacity-0 group-hover:opacity-100"
                aria-label="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
