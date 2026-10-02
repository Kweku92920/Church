import { NextRequest } from 'next/server';
import { getSermons, saveSermons, extractYouTubeId } from '@/lib/data';
import { isAdmin } from '@/lib/auth';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sermons = await getSermons();
  const sermon = sermons.find((s) => s.id === id);
  if (!sermon) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json(sermon);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const sermons = await getSermons();
  const filtered = sermons.filter((s) => s.id !== id);
  await saveSermons(filtered);
  return Response.json({ ok: true });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const body = await request.json();
  const sermons = await getSermons();
  const index = sermons.findIndex((s) => s.id === id);
  if (index === -1) return Response.json({ error: 'Not found' }, { status: 404 });

  const youtubeUrl = body.youtubeUrl ?? sermons[index].youtubeUrl;
  const youtubeId = body.youtubeUrl ? extractYouTubeId(youtubeUrl) : sermons[index].youtubeId;

  sermons[index] = {
    ...sermons[index],
    ...body,
    youtubeUrl,
    youtubeId,
    thumbnail: youtubeId
      ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      : sermons[index].thumbnail,
  };
  await saveSermons(sermons);
  return Response.json(sermons[index]);
}
