import { isAdmin } from '@/lib/auth';
import AdminLogin from './AdminLogin';
import AdminShell from './AdminShell';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!isAdmin()) {
    return <AdminLogin />;
  }

  return <AdminShell>{children}</AdminShell>;
}
