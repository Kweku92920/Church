import Link from 'next/link';
import { ArrowRight, MapPin, Users } from 'lucide-react';

const districts = [

  {
    name: 'Abelemkpe District',
    area: 'Greater Accra Area',
    assemblies: 5,
    pastor: 'Pastor Peter Ansah',
  },
  {
    name: 'Accra Newtown District',
    area: 'Greater Accra Area',
    assemblies: 3,
    pastor: 'Pastor Samuel Amoah',
  },
  {
    name: 'Adabraka District',
    area: 'Greater Accra Area',
    assemblies: 5,
    pastor: 'Pastor Kwame Asante',
  },
  {
    name: 'Alajo District',
    area: 'Greater Accra Area',
    assemblies: 4,
    pastor: 'Pastor Joseph Boateng',
  },
  {
    name: 'Avenor District',
    area: 'Greater Accra Area',
    assemblies: 4,
    pastor: 'Pastor David Mensah',
  },
  {
    name: 'Burma Camp WC',
    area: 'Greater Accra Area',
    assemblies: 2,
    pastor: 'Pastor Michael Boateng',
  },
  {
    name: 'Canaan District',
    area: 'Greater Accra Area',
    assemblies: 3,
    pastor: 'Pastor Michael Boateng',
  },
  {
    name: 'Caprice WC',
    area: 'Greater Accra Area',
    assemblies: 2,
    pastor: 'Pastor Daniel Yeboah',
  },
  {
    name: 'Danquah WC',
    area: 'Greater Accra Area',
    assemblies: 2,
    pastor: 'Pastor Joseph Boateng',
  },
  {
    name: 'Kotobabi District',
    area: 'Greater Accra Area',
    assemblies: 5,
    pastor: 'Pastor Samuel Amoah',
  },
  {
    name: 'Kokomlemle District',
    area: 'Greater Accra Area',
    assemblies: 3,
    pastor: 'Pastor Peter Ansah',
  },
  {
    name: 'Labone District',
    area: 'Greater Accra Area',
    assemblies: 3,
    pastor: 'Pastor David Ankrah',
  },
  {
    name: 'Maamobi District',
    area: 'Greater Accra Area',
    assemblies: 4,
    pastor: 'Pastor Gabriel Mensah',
  },
  {
    name: 'Merry Villas District',
    area: 'Greater Accra Area',
    assemblies: 6,
    pastor: 'Pastor Samuel Amoah',
  },
  {
    name: 'Nima District',
    area: 'Greater Accra Area',
    assemblies: 3,
    pastor: 'Pastor Benjamin Addo',
  },
  {
    name: 'Nima Alaska District',
    area: 'Greater Accra Area',
    assemblies: 5,
    pastor: 'Pastor Isaac Owusu',
  },
  {
    name: 'Onyametease WC',
    area: 'Greater Accra Area',
    assemblies: 1,
    pastor: 'Pastor Kwame Asante',
  },
  {
    name: 'Osu District',
    area: 'Greater Accra Area',
    assemblies: 5,
    pastor: 'Pastor Kwame Asante',
  },
  {
    name: 'PIWC Accra',
    area: 'Greater Accra Area',
    assemblies: 1,
    pastor: 'Pastor Samuel Amoah',
  },
  {
    name: 'PIWC French',
    area: 'Greater Accra Area',
    assemblies: 1,
    pastor: 'Pastor Michael Boateng',
  },
  {
    name: 'Roman Ridge District',
    area: 'Greater Accra Area',
    assemblies: 3,
    pastor: 'Pastor Michael Boateng',
  },
  {
    name: 'South La WC',
    area: 'Greater Accra Area',
    assemblies: 2,
    pastor: 'Pastor Gabriel Mensah',
  },
  {
    name: 'Trade Fair District',
    area: 'Greater Accra Area',
    assemblies: 5,
    pastor: 'Pastor Benjamin Addo',
  },
];

export default function DistrictListPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans">
      <section className="relative h-[360px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="text-xs uppercase tracking-widest text-slate-300 mb-3 flex items-center justify-center gap-2 font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-100">Districts</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            LA Area Districts
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Explore the districts that serve and support local assemblies across
            the greater Los Angeles region.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            <span className="w-8 h-[1px] bg-[#B8860B]/40" />
            AREA STRUCTURE
            <span className="w-8 h-[1px] bg-[#B8860B]/40" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C0D0D]">
            24 Districts, One Mission
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-3 leading-relaxed">
            Each district provides pastoral care, coordination, and support for
            the local assemblies in its region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts.map((district) => (
            <article
              key={district.name}
              className="bg-[#F6F2EC] border border-stone-200/70 rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-serif font-bold text-xl text-[#1C0D0D]">
                {district.name}
              </h3>
              <p className="text-xs font-semibold text-[#8B2621] mt-2">
                {district.pastor}
              </p>
              <div className="space-y-3 text-xs text-stone-600 mt-5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>{district.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{district.assemblies} local assemblies</span>
                </div>
              </div>
              <Link
                href={`/assemblies?district=${encodeURIComponent(district.name)}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B2621] hover:text-[#721F1B] transition mt-6 pt-4 border-t border-stone-200/70 w-full"
              >
                View assemblies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
