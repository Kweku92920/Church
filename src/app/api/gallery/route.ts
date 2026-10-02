import { NextRequest } from 'next/server';
import { getGalleryImages, saveGalleryImages, generateId, type GalleryImage } from '@/lib/data';
import { isAdmin } from '@/lib/auth';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const ministry = request.nextUrl.searchParams.get('ministry') || undefined;
  const images = await getGalleryImages(ministry);
  return Response.json(images);
}

export async function POST(request: NextRequest) {
  if (!isAdmin()) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const ministry = String(formData.get('ministry') ?? '').trim();
  const alt = String(formData.get('alt') ?? '').trim();
  const caption = String(formData.get('caption') ?? '').trim();
  const file = formData.get('file') as File | null;

  if (!ministry) {
    return Response.json({ error: 'Ministry is required.' }, { status: 400 });
  }
  if (!alt) {
    return Response.json({ error: 'Alt text is required before publishing.' }, { status: 400 });
  }

  let url = '';
  if (file && file.size > 0) {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'gallery');
    await fs.mkdir(uploadDir, { recursive: true });
    const ext = path.extname(file.name) || '.jpg';
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    const filePath = path.join(uploadDir, filename);
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);
    url = `/uploads/gallery/${filename}`;
  } else {
    // Allow URL-based images too
    const imageUrl = String(formData.get('imageUrl') ?? '').trim();
    if (imageUrl) {
      url = imageUrl;
    } else {
      return Response.json({ error: 'An image file or URL is required.' }, { status: 400 });
    }
  }

  const image: GalleryImage = {
    id: generateId(),
    ministry,
    url,
    alt,
    caption,
    createdAt: new Date().toISOString(),
  };

  const images = await getGalleryImages();
  images.push(image);
  await saveGalleryImages(images);

  return Response.json(image, { status: 201 });
}
