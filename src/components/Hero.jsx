import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const lightRef = useRef(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const rect = light.parentElement.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      light.style.setProperty('--x', `${x}px`);
      light.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil so text stays legible but interaction passes through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Cursor light/parallax overlay (non-blocking) */}
      <div
        ref={lightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: prefersReduced
            ? 'transparent'
            : 'radial-gradient(600px 600px at var(--x, 50%) var(--y, 50%), rgba(120,119,198,0.15), transparent 60%)',
        }}
      />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          I Build AI Videos & No-Code Websites That Stand Out.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Fast. Realistic. Designed for your brand.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
