import { NextRequest } from 'next/server';
import { getEvents, saveEvents, generateId, type EventItem } from '@/lib/data';
import { isAdmin } from '@/lib/auth';

export async function GET() {
  const events = await getEvents();
  return Response.json(events);
}

export async function POST(request: NextRequest) {
  if (!(await isAdmin())) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const title = String(body.title ?? '').trim();
  if (!title) {
    return Response.json({ error: 'Title is required.' }, { status: 400 });
  }

  const event: EventItem = {
    id: generateId(),
    title,
    date: String(body.date ?? new Date().toISOString().slice(0, 10)),
    time: String(body.time ?? '').trim(),
    location: String(body.location ?? '').trim(),
    description: String(body.description ?? '').trim(),
    category: body.category === 'announcement' ? 'announcement' : 'event',
    image: String(body.image ?? '').trim(),
    createdAt: new Date().toISOString(),
  };

  const events = await getEvents();
  events.unshift(event);
  await saveEvents(events);

  return Response.json(event, { status: 201 });
}
