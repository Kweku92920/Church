import { NextRequest } from 'next/server';
import { getAdminPassword, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const password = String(body.password ?? '');

  if (password === getAdminPassword()) {
    return Response.json({ ok: true }, {
      status: 200,
      headers: { 'Set-Cookie': setSessionCookie() },
    });
  }

  return Response.json({ error: 'Invalid password.' }, { status: 401 });
}
