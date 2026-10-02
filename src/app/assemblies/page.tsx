import LocalAssembliesPage from './AssemblyDirectory';
import { districts } from '../../data/assemblies';

export default async function AssembliesPage({
  searchParams,
}: {
  searchParams: Promise<{ district?: string | string[] }>;
}) {
  const { district } = await searchParams;
  const selectedDistrict =
    typeof district === 'string' && districts.includes(district)
      ? district
      : 'All Districts';

  return <LocalAssembliesPage key={selectedDistrict} initialDistrict={selectedDistrict} />;
}
