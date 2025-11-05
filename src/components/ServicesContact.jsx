import { motion } from 'framer-motion';
import { Video, Laptop } from 'lucide-react';

export default function ServicesContact() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Services</h2>
        <p className="mt-2 text-white/60">Designed to move fast without sacrificing craft.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ServiceCard
          icon={<Video className="h-6 w-6" />}
          title="AI Video Creation"
          text="Narrative ads, loops, and reels using diffusion, motion guidance, and precision color."
        />
        <ServiceCard
          icon={<Laptop className="h-6 w-6" />}
          title="No-Code Website Design"
          text="High-performance sites with bold art direction. Built in Webflow/framer or your stack."
        />
      </div>

      <div id="contact" className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 p-10 ring-1 ring-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(255,255,255,0.08),transparent)]" />
        <div className="relative">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">Let’s Build Something Amazing.</h3>
          <p className="mt-2 max-w-2xl text-white/70">Tell me about your idea — I’ll bring it to life using AI and no-code.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow hover:opacity-90"
            >
              Start a Project
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 text-white ring-1 ring-white/10">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-white/70">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
