import Link from 'next/link';

const leaders = [
   { name: 'Apostle Dr Dieudonne Komla Nuekpe', role: 'Area Head', location: 'LA AREA', },

  { name: 'Apostle Dr Col Benjamin Godson Kumi-Woode', role: 'Area Head', location: 'LA BURMA CAMP WC', },

  { name: 'Apostle Anthony Owusu Sekyere', role: 'Area Secretary', location: 'LA PIWC Accra', },

  { name: 'Pastor Augustine Dorman', role: 'District Pastor', location: 'LA LABONE DISTRICT', },

  { name: 'Pastor Daniel K Amuzu', role: 'District Pastor', location: 'LA NIMA DISTRICT', },
  
  { name: 'Pastor Edward Owusu Boakye', role: 'District Pastor', location: 'LA AVENOR DISTRICT', },

  { name: 'Pastor Joseph Opuni Frimpong', role: 'District Pastor', location: 'LA KOTOBABI DISTRICT', },
  { name: 'Pastor Paul Komi Adzigbli', role: 'District Pastor', location: 'LA MAAMOBI DISTRICT', },
  { name: 'Pastor Sylvester Ayiah', role: 'District Pastor', location: 'LA NIMA ALASKA DISTRICT', },
  { name: 'Pastor Peter Eshun', role: 'District Pastor', location: 'LA LA DISTRICT', },
{ name: 'Major Collins Badu Agyapong', role: 'District Pastor', location: 'LA BURMA CAMP', },
{ name: 'Pastor Mark Mohammed Alhassan', role: 'District Pastor', location: 'LA ABELEMKPE DISTRICT', },
{ name: 'Pastor Manasseh Kojo Blantyne Nabaku', role: 'District Pastor', location: 'LA CANAAN DISTRICT', },
{ name: 'Pastor Emmanuel Osei Agyapong', role: 'District Pastor', location: 'LA ADABRAKA DISTRICT', },
{ name: 'Pastor Paul Odai Laryea', role: 'District Pastor', location: 'DANQUAH WC', },
{ name: 'Pastor Godwin Ako-Addo', role: 'District Pastor', location: 'LA ALAJO DISTRICT', },
{ name: 'Pastor Vincent Cudjoe Amuzu', role: 'District Pastor', location: 'MERRY VILLAS DISTRICT', },

{ name: 'Pastor Emmanuel Opoku Mensah', role: 'District Pastor', location: 'LA CAPRICE DISTRICT', },
{ name: 'Pastor Samuel Nii Engman', role: 'District Pastor', location: 'LA OSU DISTRICT', },
{ name: 'Pastor Michael Odoi Manieson', role: 'District Pastor', location: 'LA ROMAN RIDGE DISTRICT', },
{ name: 'Pastor Gordon Ansah', role: 'District Pastor', location: 'LA ACCRA NEWTOWN DISTRICT', },
{ name: 'Pastor Stephen Osei Nyampong', role: 'District Pastor', location: 'LA KOKOMLEMLE DISTRICT', },
{ name: 'Pastor Hamza Obuobi Osei', role: 'District Pastor', location: 'LA SOUTH LA DISTRICT', },
{ name: 'Pastor Daniel Nana Sei Mensah', role: 'District Pastor', location: 'LA PIWC FRENCH', },
{ name: 'Pastor Jones Dwomoh Amankwah', role: 'District Pastor', location: 'LA ONYAMETEASE WC', }
  
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-slate-800">
      <section className="relative flex h-[340px] w-full items-center justify-center overflow-hidden bg-stone-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-stone-900 to-[#1C0D0D]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D0D] via-black/40 to-[#1C0D0D]/60" />
        <div className="relative z-10 max-w-3xl px-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span className="text-stone-100">Leadership</span>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-6xl">Our Leadership</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-300 md:text-lg">
            Faithful servants called to shepherd, equip, and serve the people of God.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-center">
        <div className="mb-2 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#B8860B]">
          <span className="h-px w-8 bg-[#B8860B]/40" />
          Servant Leaders
          <span className="h-px w-8 bg-[#B8860B]/40" />
        </div>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600 md:text-base">
          Our leaders are committed to shepherding the La Area with humility, wisdom, and a heart for the Gospel.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="group flex flex-col items-center overflow-hidden rounded-2xl border border-stone-200/70 bg-white text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#B8860B] via-amber-400 to-[#8B2621]" />
              <div className="flex w-full flex-grow flex-col items-center px-6 pb-7 pt-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-950 to-stone-800 ring-4 ring-amber-100 transition group-hover:ring-amber-300">
                  <span aria-hidden="true" className="font-serif text-3xl font-bold tracking-widest text-amber-100/90">
                    {leader.name.split(' ').filter((part) => !['Pastor', 'Apostle', 'Dr', 'Col', 'Major'].includes(part)).map((part) => part[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-[#1C0D0D]">{leader.name}</h3>
                <span className="mt-3 inline-block rounded-full bg-[#8B2621]/10 px-3 py-1 text-[11px] font-semibold text-[#8B2621]">{leader.role}</span>
                <p className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  <span className="h-px w-4 bg-[#B8860B]/50" />
                  {leader.location}
                  <span className="h-px w-4 bg-[#B8860B]/50" />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#180A0A] px-6 py-12 text-center text-white">
        <blockquote className="mx-auto max-w-3xl font-serif text-lg italic text-amber-100/90 md:text-xl">
          “Go into all the world and preach the gospel to every creature.”
        </blockquote>
        <p className="mt-2 text-xs font-medium uppercase tracking-widest text-stone-400">— Mark 16:15</p>
      </section>
    </div>
  );
}
