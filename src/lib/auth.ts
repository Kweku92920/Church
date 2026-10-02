import { cookies } from 'next/headers';

const SESSION_COOKIE = 'cop_admin_session';
const SESSION_VALUE = 'authenticated';

export function isAdmin(): boolean {
  const cookieStore = cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return session?.value === SESSION_VALUE;
}

export function setSessionCookie(): string {
  return `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`;
}

export function clearSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'copadmin2026';
}

export { SESSION_COOKIE, SESSION_VALUE };
