import { NextRequest } from 'next/server';
import { getEvents, saveEvents } from '@/lib/data';
import { isAdmin } from '@/lib/auth';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const events = await getEvents();
  const filtered = events.filter((e) => e.id !== id);
  await saveEvents(filtered);
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
  const events = await getEvents();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return Response.json({ error: 'Not found' }, { status: 404 });

  events[index] = { ...events[index], ...body };
  await saveEvents(events);
  return Response.json(events[index]);
}
