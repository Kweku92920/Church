import { isAdmin } from '@/lib/auth';
import AdminLogin from './AdminLogin';
import AdminShell from './AdminShell';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAdmin())) {
    return <AdminLogin />;
  }

  return <AdminShell>{children}</AdminShell>;
}
