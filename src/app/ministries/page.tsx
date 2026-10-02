import Link from 'next/link';
import { ministriesData } from './data';

export default function MinistriesPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Hero Section */}
      <div className="relative bg-stone-900 py-20 px-6 text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600')` }}
        />
       
<div className="relative max-w-3xl mx-auto space-y-4">
  <p className="text-xs uppercase tracking-widest text-amber-400 font-medium">
    <Link href="/" className="hover:underline hover:text-white transition-colors">
      Home
    </Link> 
    <span className="mx-1">&gt;</span> Ministries
  </p>
  <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Ministries</h1>
  <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
    Every member has a place to serve, grow, and belong. Explore our ministries and discover where God is calling you.
  </p>
</div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-px w-12 bg-amber-600/60" />
            <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold">Serve &amp; Belong</span>
            <span className="h-px w-12 bg-amber-600/60" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">A Ministry for Everyone</h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Our ministries exist to help every person encounter God, build community, and use their gifts to serve others.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministriesData.map((ministry) => (
            <div 
              key={ministry.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200/70 flex flex-col justify-between"
            >
              <div>
                {/* Image container with overlay badge */}
                <div className="relative h-52 overflow-hidden bg-stone-100">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-amber-500/90 backdrop-blur-sm text-white flex items-center justify-center text-lg shadow">
                    {ministry.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-semibold text-stone-900">{ministry.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{ministry.description}</p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={`mailto:info@coplaarea.org?subject=${encodeURIComponent(`Getting involved: ${ministry.title}`)}`}
                  className="inline-flex items-center text-sm font-semibold text-stone-900 hover:text-amber-700 transition-colors group"
                >
                  Get involved 
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}