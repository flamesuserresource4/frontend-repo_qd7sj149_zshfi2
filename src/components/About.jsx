import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-pink-500/20 ring-1 ring-white/10"
        >
          {/* Placeholder for portrait or image */}
          <div className="flex h-full w-full items-center justify-center text-white/70">
            Your image or AI portrait here
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className=""
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">About</h2>
          <p className="mt-4 text-white/70">
            I craft cinematic AI-generated videos and launch performant no-code websites. My
            approach blends design, storytelling, and automation to deliver work that looks real,
            moves fast, and feels on-brand. Everything here is modular—swap in your own media,
            duplicate sections, and scale as you go.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
