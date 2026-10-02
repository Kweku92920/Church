import Link from 'next/link';

const leaders = [
  { name: 'Pastor Emmanuel Mensah', role: 'Area Head', location: 'LA AREA', description: 'Provides spiritual oversight and leadership across all districts and assemblies in the LA Area.' },
  { name: 'Pastor Daniel Osei', role: 'Area Secretary', location: 'LA AREA', description: 'Coordinates administrative affairs and supports the Area Head in leadership responsibilities.' },
  { name: 'Pastor Samuel Appiah', role: 'District Pastor', location: 'CENTRAL LA DISTRICT', description: 'Leads the Central LA District with a heart for urban ministry and community outreach.' },
  { name: 'Pastor Michael Boateng', role: 'District Pastor', location: 'SOUTH BAY DISTRICT', description: 'Shepherds the South Bay District, focusing on family ministry and discipleship.' },
  { name: 'Pastor Joseph Kusi', role: 'District Pastor', location: 'SAN FERNANDO VALLEY DISTRICT', description: 'Oversees the San Fernando Valley District and its growing congregation.' },
  { name: 'Pastor Isaac Owusu', role: 'District Pastor', location: 'ORANGE COUNTY DISTRICT', description: 'Leads ministry across Orange County with a focus on evangelism and outreach.' },
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
        <h2 className="font-serif text-3xl font-bold text-[#1C0D0D] md:text-4xl">Meet the Team</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600 md:text-base">
          Our leaders are committed to shepherding the LA Area with humility, wisdom, and a heart for the Gospel.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="flex flex-col overflow-hidden rounded-2xl border border-stone-200/70 bg-[#F6F2EC] transition duration-200 hover:shadow-md">
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 to-stone-800">
                <span aria-hidden="true" className="font-serif text-5xl font-bold tracking-widest text-amber-100/80">
                  {leader.name.split(' ').filter((part) => part !== 'Pastor').map((part) => part[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="font-serif text-xl font-bold text-[#1C0D0D]">{leader.name}</h3>
                <p className="mt-1 text-xs font-semibold text-[#8B2621]">{leader.role}</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">{leader.location}</p>
                <p className="mt-4 flex-grow text-xs leading-relaxed text-stone-600">{leader.description}</p>
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
