import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>
      {/* Deep radial gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(0, 40, 80, 0.4) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Depth meter on the left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2 hidden md:flex" style={{ zIndex: 2 }}>
        <span className="mono text-xs" style={{ color: 'var(--text-dim)', writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>DEPTH</span>
        <div className="w-px h-48 relative overflow-hidden" style={{ background: 'rgba(0,229,255,0.1)' }}>
          <motion.div
            className="absolute top-0 w-full"
            style={{ background: 'linear-gradient(to bottom, var(--biolume-cyan), transparent)' }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
        <span className="mono text-xs" style={{ color: 'var(--biolume-cyan)' }}>∞</span>
      </div>

      {/* Main content */}
      <div className="relative text-center px-6 max-w-5xl mx-auto w-full" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="mono text-sm tracking-widest mb-6 block" style={{ color: 'var(--biolume-cyan)', letterSpacing: '0.4em' }}>
            ▼ &nbsp; DESCENDING &nbsp; ▼
          </span>
        </motion.div>

        <motion.h1
          className="font-bold leading-none mb-4"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', letterSpacing: '-0.02em' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <span className="glow-cyan" style={{ color: 'var(--biolume-cyan)' }}>THE</span>
          <br />
          <span style={{ color: 'var(--text-bright)' }}>ABYSS</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-mid)', fontWeight: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          We have better maps of Mars than of our own ocean floor.
          <br />
          <span style={{ color: 'var(--text-dim)' }}>95% of it remains unexplored.</span>
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { label: '11 km', sub: 'deepest point' },
            { label: '~1°C', sub: 'avg. deep temp' },
            { label: '1,100 atm', sub: 'max pressure' },
            { label: '200,000+', sub: 'known species' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bio-border rounded-lg px-5 py-3 text-center"
              style={{ background: 'rgba(5, 13, 26, 0.6)', backdropFilter: 'blur(8px)' }}
            >
              <div className="mono text-xl font-bold glow-cyan" style={{ color: 'var(--biolume-cyan)' }}>{stat.label}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-dim)', letterSpacing: '0.1em' }}>{stat.sub.toUpperCase()}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ zIndex: 2, color: 'var(--text-dim)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="mono text-xs tracking-widest">SCROLL TO DESCEND</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} style={{ color: 'var(--biolume-cyan)' }} />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--abyss-black))', zIndex: 1 }}
      />
    </section>
  );
}
