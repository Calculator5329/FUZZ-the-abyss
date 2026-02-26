import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const zones = [
  {
    name: 'Sunlight Zone',
    range: '0 – 200m',
    label: 'EPIPELAGIC',
    color: '#00e5ff',
    bg: 'rgba(0, 80, 120, 0.15)',
    description: 'Where sunlight penetrates. Coral reefs, dolphins, sea turtles. This is the part we think we know.',
    icon: '☀️',
    percent: 5,
  },
  {
    name: 'Twilight Zone',
    range: '200 – 1,000m',
    label: 'MESOPELAGIC',
    color: '#0066ff',
    bg: 'rgba(0, 40, 100, 0.15)',
    description: 'Faint blue light dissolves into nothing. Lanternfish migrate here nightly — the largest animal migration on Earth.',
    icon: '🌑',
    percent: 15,
  },
  {
    name: 'Midnight Zone',
    range: '1,000 – 4,000m',
    label: 'BATHYPELAGIC',
    color: '#7c3aed',
    bg: 'rgba(60, 20, 100, 0.15)',
    description: 'Absolute darkness. No photosynthesis has ever happened here. Life runs on marine snow — a constant drizzle of organic debris from above.',
    icon: '🦑',
    percent: 55,
  },
  {
    name: 'Abyssal Zone',
    range: '4,000 – 6,000m',
    label: 'ABYSSOPELAGIC',
    color: '#00ff9d',
    bg: 'rgba(0, 60, 40, 0.12)',
    description: 'The vast plains of the deep. Pitch black, near-freezing, crushing pressure. And yet: life. Sea cucumbers carpet the muddy floor.',
    icon: '🌊',
    percent: 17,
  },
  {
    name: 'Hadal Zone',
    range: '6,000 – 11,000m',
    label: 'HADOPELAGIC',
    color: '#ff6b6b',
    bg: 'rgba(80, 0, 20, 0.15)',
    description: 'The trenches. Named after Hades. Fewer humans have visited the bottom of the Mariana Trench than have walked on the Moon.',
    icon: '🕳️',
    percent: 8,
  },
];

export default function DepthZones() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mono text-xs tracking-widest block mb-3" style={{ color: 'var(--text-dim)', letterSpacing: '0.35em' }}>
            VERTICAL STRATIFICATION
          </span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-bright)' }}>
            Layers of the{' '}
            <span className="glow-cyan" style={{ color: 'var(--biolume-cyan)' }}>Unknown</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Visual depth bar */}
          <div className="hidden md:flex flex-col w-16 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            {zones.map((z) => (
              <motion.div
                key={z.name}
                className="relative flex items-center justify-center"
                style={{
                  flexBasis: `${z.percent}%`,
                  background: `${z.bg}`,
                  borderBottom: `1px solid rgba(255,255,255,0.05)`,
                }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="w-2 h-2 rounded-full pulse-glow" style={{ background: z.color, boxShadow: `0 0 8px ${z.color}` }} />
              </motion.div>
            ))}
          </div>

          {/* Zone cards */}
          <div className="flex-1 flex flex-col gap-3">
            {zones.map((zone, i) => (
              <motion.div
                key={zone.name}
                className="bio-border rounded-xl p-5 creature-card"
                style={{ background: zone.bg, backdropFilter: 'blur(8px)' }}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-1 creature-emoji" style={{ color: zone.color, transition: 'transform 0.3s' }}>{zone.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-lg font-semibold" style={{ color: zone.color }}>{zone.name}</h3>
                      <span className="mono text-xs" style={{ color: 'var(--text-dim)', letterSpacing: '0.15em' }}>{zone.label}</span>
                      <span className="mono text-xs ml-auto" style={{ color: 'var(--text-dim)' }}>{zone.range}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{zone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
