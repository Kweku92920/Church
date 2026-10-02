import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(filename: string, fallback: T): Promise<T> {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const raw = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(filename: string, data: T): Promise<void> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// ---- Types ----
export type Sermon = {
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

export type GalleryImage = {
  id: string;
  ministry: string;
  url: string;
  alt: string;
  caption: string;
  createdAt: string;
};

export type EventItem = {
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

// ---- Sermons ----
export async function getSermons(): Promise<Sermon[]> {
  return readJson<Sermon[]>('sermons.json', []);
}

export async function saveSermons(sermons: Sermon[]): Promise<void> {
  await writeJson('sermons.json', sermons);
}

// ---- Gallery ----
export async function getGalleryImages(ministry?: string): Promise<GalleryImage[]> {
  const all = await readJson<GalleryImage[]>('gallery.json', []);
  if (ministry) return all.filter((img) => img.ministry === ministry);
  return all;
}

export async function saveGalleryImages(images: GalleryImage[]): Promise<void> {
  await writeJson('gallery.json', images);
}

// ---- Events ----
export async function getEvents(): Promise<EventItem[]> {
  return readJson<EventItem[]>('events.json', []);
}

export async function saveEvents(events: EventItem[]): Promise<void> {
  await writeJson('events.json', events);
}

// ---- ID generator ----
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// ---- YouTube helpers ----
export function extractYouTubeId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return '';
}
