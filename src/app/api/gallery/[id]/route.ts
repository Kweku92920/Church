import { NextRequest } from 'next/server';
import { getGalleryImages, saveGalleryImages } from '@/lib/data';
import { isAdmin } from '@/lib/auth';
import { promises as fs } from 'fs';
import path from 'path';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin()) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const images = await getGalleryImages();
  const target = images.find((img) => img.id === id);
  if (target && target.url.startsWith('/uploads/')) {
    try {
      await fs.unlink(path.join(process.cwd(), 'public', target.url));
    } catch { /* ignore */ }
  }
  const filtered = images.filter((img) => img.id !== id);
  await saveGalleryImages(filtered);
  return Response.json({ ok: true });
}
