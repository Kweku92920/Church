import { NextRequest } from 'next/server';
import { getSermons, saveSermons, generateId, extractYouTubeId, type Sermon } from '@/lib/data';
import { isAdmin } from '@/lib/auth';

export async function GET() {
  const sermons = await getSermons();
  return Response.json(sermons);
}

export async function POST(request: NextRequest) {
  if (!isAdmin()) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const youtubeUrl = String(body.youtubeUrl ?? '').trim();
  const youtubeId = extractYouTubeId(youtubeUrl);

  if (!youtubeId) {
    return Response.json({ error: 'A valid YouTube URL is required.' }, { status: 400 });
  }

  const title = String(body.title ?? '').trim();
  if (!title) {
    return Response.json({ error: 'Title is required.' }, { status: 400 });
  }

  const sermon: Sermon = {
    id: generateId(),
    title,
    speaker: String(body.speaker ?? '').trim(),
    date: String(body.date ?? new Date().toISOString().slice(0, 10)),
    duration: String(body.duration ?? '').trim(),
    description: String(body.description ?? '').trim(),
    series: String(body.series ?? '').trim(),
    category: String(body.category ?? 'Teaching').trim(),
    youtubeUrl,
    youtubeId,
    thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
  };

  const sermons = await getSermons();
  sermons.unshift(sermon);
  await saveSermons(sermons);

  return Response.json(sermon, { status: 201 });
}
