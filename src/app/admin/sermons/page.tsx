'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2, Loader2, X, Youtube, ExternalLink } from 'lucide-react';

type Sermon = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  description: string;
  series: string;
  category: string;
  youtubeUrl: string;
  youtubeId: string;
  thumbnail: string;
};

const categories = ['Teaching', 'Worship', 'Faith', 'Prayer', 'Family', 'Missions', 'Youth'];

export default function AdminSermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    speaker: '',
    date: new Date().toISOString().slice(0, 10),
    duration: '',
    description: '',
    series: '',
    category: 'Teaching',
    youtubeUrl: '',
  });

  const fetchSermons = useCallback(async () => {
    try {
      const res = await fetch('/api/sermons');
      if (res.ok) setSermons(await res.json());
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchSermons(); }, [fetchSermons]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.youtubeUrl.trim()) { setError('YouTube URL is required.'); return; }
    if (!form.title.trim()) { setError('Title is required.'); return; }

    setSubmitting(true);
    try {
      const res = await fetch('/api/sermons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        await fetchSermons();
        setForm({ title: '', speaker: '', date: new Date().toISOString().slice(0, 10), duration: '', description: '', series: '', category: 'Teaching', youtubeUrl: '' });
        setShowForm(false);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to add sermon.');
      }
    } catch {
      setError('Network error.');
    } finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this sermon?')) return;
    await fetch(`/api/sermons/${id}`, { method: 'DELETE' });
    setSermons(sermons.filter((s) => s.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white mb-1">Sermons</h1>
          <p className="text-stone-400 text-sm">Add and manage YouTube sermon links.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? 'Cancel' : 'Add Sermon'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 mb-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-2">
            <Youtube className="w-4 h-4" />
            Paste a YouTube URL — thumbnail is auto-fetched
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">YouTube URL *</label>
            <input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={form.youtubeUrl}
              onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Title *</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Speaker</label>
              <input type="text" value={form.speaker} onChange={(e) => setForm({ ...form, speaker: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Duration</label>
              <input type="text" placeholder="e.g. 42 min" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30">
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Series</label>
              <input type="text" value={form.series} onChange={(e) => setForm({ ...form, series: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Description</label>
              <input type="text" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30" />
            </div>
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button type="submit" disabled={submitting}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Publish Sermon
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20 text-stone-500">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : sermons.length === 0 ? (
        <p className="text-stone-500 text-sm text-center py-20">No sermons yet. Click &ldquo;Add Sermon&rdquo; to get started.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden group">
              <div className="relative aspect-video bg-stone-800">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => handleDelete(sermon.id)}
                  className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  aria-label="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-sm text-white mb-1 line-clamp-2">{sermon.title}</h3>
                <p className="text-xs text-stone-500 mb-2">{sermon.speaker || 'Unknown speaker'}</p>
                <a href={sermon.youtubeUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-500 hover:underline">
                  <ExternalLink className="w-3 h-3" />
                  View on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
