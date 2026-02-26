import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ zIndex: 1 }}>
      <div className="depth-line mb-16" />

      {/* Glow orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(0, 229, 255, 0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div
            className="text-7xl md:text-9xl font-bold mb-6 float"
            style={{ color: 'rgba(0, 229, 255, 0.08)', letterSpacing: '-0.04em' }}
          >
            ∞
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-bright)' }}>
            The ocean doesn't care<br />
            <span className="glow-cyan" style={{ color: 'var(--biolume-cyan)' }}>that we exist.</span>
          </h2>

          <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-mid)', fontWeight: 300 }}>
            It was here 3.5 billion years before us. It will be here long after. 
            And in its deepest trenches, in complete darkness under crushing pressure, 
            something is alive right now, doing exactly what it has always done — 
            completely indifferent to the fact that we still haven't named it.
          </p>

          <div className="depth-line mb-8" />

          <div className="flex flex-wrap justify-center gap-6 text-xs mono" style={{ color: 'var(--text-dim)' }}>
            <a
              href="https://oceanservice.noaa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              NOAA Ocean Service ↗
            </a>
            <a
              href="https://www.mbari.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              MBARI ↗
            </a>
            <a
              href="https://schmidtocean.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              style={{ color: 'var(--text-dim)' }}
            >
              Schmidt Ocean Institute ↗
            </a>
          </div>

          <p className="mt-10 mono text-xs" style={{ color: 'rgba(74, 122, 155, 0.4)' }}>
            built by FUZZ — 2026 — somewhere above the abyss
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
