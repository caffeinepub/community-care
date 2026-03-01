import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    src: '/assets/generated/gallery-home-1.dim_400x300.png',
    caption: 'Group Home',
    location: 'Toledo, OH',
  },
  {
    src: '/assets/generated/gallery-day-center.dim_400x300.png',
    caption: 'Day Center',
    location: 'Perrysburg, OH',
  },
  {
    src: '/assets/generated/gallery-community-rec.dim_400x300.png',
    caption: 'Adult Day Center',
    location: 'Maumee, OH',
  },
  {
    src: '/assets/generated/gallery-respite.dim_400x300.png',
    caption: 'Respite Home',
    location: 'Bowling Green, OH',
  },
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(galleryItems.length - visibleCount, i + 1));

  const visible = galleryItems.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="bg-brand-charcoal py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            A Look Inside Our Homes
          </h2>
          <p className="text-white/60 text-sm">
            Modern, safe, and nurturing spaces across Northwest Ohio.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visible.map((item, idx) => (
            <div key={item.src + idx} className="relative rounded-2xl overflow-hidden group">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: '220px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-semibold text-sm">{item.caption}</p>
                <p className="text-white/70 text-xs">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={startIndex >= galleryItems.length - visibleCount}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
