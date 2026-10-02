import { notFound } from 'next/navigation';
import { ministryPages } from '../content';
import MinistryPageClient from './MinistryPageClient';

export async function generateStaticParams() {
  return ministryPages.map((m) => ({ slug: m.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ministry = ministryPages.find((m) => m.slug === slug);
  if (!ministry) notFound();

  return <MinistryPageClient ministry={ministry} />;
}
