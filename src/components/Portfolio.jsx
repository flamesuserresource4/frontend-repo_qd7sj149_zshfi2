import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const projects = [
  {
    id: 'p1',
    title: 'AI Fashion Reel',
    tags: ['AI Video', 'Style Transfer'],
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Product Promo',
    tags: ['Motion', 'Brand'],
    type: 'image',
    src: 'https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Landing Microsite',
    tags: ['No-Code', 'Web'],
    type: 'image',
    src: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Looping Logo',
    tags: ['GIF', 'Brand'],
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1580130718383-ea1f7e28796b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'UX Motion',
    tags: ['Motion', 'Prototype'],
    type: 'image',
    src: 'https://images.unsplash.com/photo-1704244377806-43632e6c338d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVWCUyME1vdGlvbnxlbnwwfDB8fHwxNzYyMzY1Njk1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p6',
    title: 'Brand Film',
    tags: ['AI Video', 'Narrative'],
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
];

function Card({ item, onOpen }) {
  return (
    <motion.button
      layout
      whileHover={{ y: -4 }}
      className="group relative flex aspect-[4/3] w-full items-stretch overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
      onClick={() => onOpen(item)}
    >
      {item.type === 'image' ? (
        <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
      ) : (
        <video
          className="h-full w-full object-cover"
          src={item.src}
          poster={item.poster}
          muted
          playsInline
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-left">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80 ring-1 ring-white/10">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
      </div>
    </motion.button>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const prefersReduced = useReducedMotion();

  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Portfolio</h2>
          <p className="mt-2 text-white/60">Tap a card to expand and preview inline.</p>
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <Card key={p.id} item={p} onOpen={setActive} />
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={active.id}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: prefersReduced ? 1 : 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: prefersReduced ? 1 : 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
            >
              {active.type === 'image' ? (
                <img src={active.src} alt={active.title} className="h-[60vh] w-full object-cover" />
              ) : (
                <video
                  className="h-[60vh] w-full object-cover"
                  src={active.src}
                  poster={active.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              )}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{active.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80 ring-1 ring-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
