'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2, Loader2, X, Upload } from 'lucide-react';

type GalleryImage = {
  id: string;
  ministry: string;
  url: string;
  alt: string;
  caption: string;
  createdAt: string;
};

const ministries = [
  { slug: 'youth', label: 'Youth' },
  { slug: 'women', label: 'Women' },
  { slug: 'men', label: 'Men' },
  { slug: 'children', label: 'Children' },
];

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeMinistry, setActiveMinistry] = useState('youth');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    alt: '',
    caption: '',
    imageUrl: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch('/api/gallery');
      if (res.ok) setImages(await res.json());
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchImages(); }, [fetchImages]);

  const filteredImages = images.filter((img) => img.ministry === activeMinistry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.alt.trim()) { setError('Alt text is required before publishing.'); return; }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('ministry', activeMinistry);
      formData.append('alt', form.alt);
      formData.append('caption', form.caption);
      if (file) {
        formData.append('file', file);
      } else if (form.imageUrl) {
        formData.append('imageUrl', form.imageUrl);
      } else {
        setError('Please upload a file or provide an image URL.');
        setSubmitting(false);
        return;
      }

      const res = await fetch('/api/gallery', { method: 'POST', body: formData });
      if (res.ok) {
        await fetchImages();
        setForm({ alt: '', caption: '', imageUrl: '' });
        setFile(null);
        setShowForm(false);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to upload image.');
      }
    } catch {
      setError('Network error.');
    } finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this image?')) return;
    await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white mb-1">Gallery</h1>
          <p className="text-stone-400 text-sm">Upload photos to ministry galleries. Alt text is required.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition"
        >
          {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showForm ? 'Cancel' : 'Add Image'}
        </button>
      </div>

      {/* Ministry tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {ministries.map((m) => (
          <button
            key={m.slug}
            onClick={() => setActiveMinistry(m.slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeMinistry === m.slug
                ? 'bg-amber-600 text-white'
                : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-white'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-stone-900 border border-stone-800 rounded-2xl p-6 mb-6 space-y-4">
          <div className="text-xs font-medium text-stone-400 mb-1">
            Adding to: <span className="text-amber-500">{ministries.find((m) => m.slug === activeMinistry)?.label}</span> Ministry
          </div>

          {/* File upload drop zone */}
          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Upload Image</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="hidden"
                id="gallery-file-upload"
              />
              <label
                htmlFor="gallery-file-upload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-stone-700 hover:border-amber-600/50 rounded-xl py-8 cursor-pointer transition"
              >
                <Upload className="w-6 h-6 text-stone-500 mb-2" />
                <span className="text-sm text-stone-400">
                  {file ? file.name : 'Click to select an image'}
                </span>
              </label>
            </div>
          </div>

          <div className="text-center text-xs text-stone-500">— or —</div>

          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Image URL</label>
            <input
              type="url"
              placeholder="https://..."
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Alt Text * <span className="text-stone-600">(required for accessibility)</span></label>
            <input
              type="text"
              placeholder="Describe the image for screen readers"
              value={form.alt}
              onChange={(e) => setForm({ ...form, alt: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-400 mb-1.5">Caption</label>
            <input
              type="text"
              placeholder="A short story behind the photo"
              value={form.caption}
              onChange={(e) => setForm({ ...form, caption: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button type="submit" disabled={submitting}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Publish Image
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20 text-stone-500">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : filteredImages.length === 0 ? (
        <p className="text-stone-500 text-sm text-center py-20">No images in this gallery yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
              <div className="aspect-square">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-3">
                <p className="text-white text-xs leading-snug">{img.caption || img.alt}</p>
              </div>
              <button
                onClick={() => handleDelete(img.id)}
                className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
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
