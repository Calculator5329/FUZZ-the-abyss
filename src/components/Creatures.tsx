import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const creatures = [
  {
    name: 'Anglerfish',
    latin: 'Melanocetus johnsonii',
    depth: '200 – 2,000m',
    glyph: '🎣',
    color: '#ff6b6b',
    fact: 'The female is the monster you know. The male is a tiny parasite that fuses to her body and never lets go — dissolving into her until only his gonads remain. Deep-sea romance.',
    size: 'Up to 20 cm (female)',
  },
  {
    name: 'Giant Squid',
    latin: 'Architeuthis dux',
    depth: '200 – 1,000m',
    glyph: '🦑',
    color: '#7c3aed',
    fact: 'Nobody filmed a living giant squid in its natural habitat until 2004. For centuries it was pure mythology. The eye can be 30 cm wide — the largest of any living animal.',
    size: 'Up to 13 meters',
  },
  {
    name: 'Vampire Squid',
    latin: 'Vampyroteuthis infernalis',
    depth: '600 – 900m',
    glyph: '🧛',
    color: '#9d4edd',
    fact: 'Its scientific name literally means "vampire squid from hell." Despite the name, it eats marine snow — tiny drifting particles of organic matter. The most metal vegetarian alive.',
    size: 'Up to 30 cm',
  },
  {
    name: 'Barreleye Fish',
    latin: 'Macropinna microstoma',
    depth: '600 – 800m',
    glyph: '👁️',
    color: '#00e5ff',
    fact: 'Those green glowing orbs inside its transparent head? Those are its eyes — not the white spots you might assume were eyes. It can rotate them to look directly upward to spot prey silhouetted against the faint light above.',
    size: 'Up to 15 cm',
  },
  {
    name: 'Dumbo Octopus',
    latin: 'Grimpoteuthis',
    depth: '3,000 – 7,000m',
    glyph: '🐙',
    color: '#00ff9d',
    fact: 'The deepest known octopus. It flaps ear-like fins to move — hence the name. It\'s also the most adorable thing living in complete crushing darkness 5 km below the surface.',
    size: 'Up to 1.8 meters',
  },
  {
    name: 'Goblin Shark',
    latin: 'Mitsukurina owstoni',
    depth: '100 – 1,300m',
    glyph: '🦈',
    color: '#f97316',
    fact: 'A living fossil unchanged for 125 million years. Its jaw can shoot forward to catch prey — a feature called slingshot feeding. It has been seen fewer than 50 times. Hopefully.',
    size: 'Up to 3.8 meters',
  },
];

export default function Creatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState<number | null>(null);

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
            CRYPTIC FAUNA
          </span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-bright)' }}>
            Things That{' '}
            <span className="glow-green" style={{ color: 'var(--biolume-green)' }}>Live Down There</span>
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-dim)' }}>Click any creature. You were warned.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creatures.map((c, i) => (
            <motion.div
              key={c.name}
              className="bio-border rounded-2xl p-6 cursor-pointer creature-card"
              style={{
                background: active === i
                  ? `rgba(5, 13, 26, 0.9)`
                  : 'rgba(5, 13, 26, 0.5)',
                backdropFilter: 'blur(12px)',
                borderColor: active === i ? `${c.color}55` : undefined,
                boxShadow: active === i ? `0 0 40px ${c.color}20, inset 0 0 20px ${c.color}08` : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="flex items-start gap-3 mb-3">
                <span
                  className="text-4xl creature-emoji"
                  style={{ display: 'inline-block', transition: 'transform 0.3s', color: c.color }}
                >
                  {c.glyph}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg" style={{ color: c.color }}>{c.name}</h3>
                  <p className="mono text-xs italic" style={{ color: 'var(--text-dim)' }}>{c.latin}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3">
                <span className="mono text-xs px-2 py-1 rounded whitespace-nowrap" style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}30` }}>
                  {c.depth}
                </span>
                <span className="mono text-xs px-2 py-1 rounded whitespace-nowrap" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-dim)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {c.size}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{ height: active === i ? 'auto' : 0, opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="depth-line mb-3" />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{c.fact}</p>
              </motion.div>

              {active !== i && (
                <p className="text-xs mt-2" style={{ color: 'var(--text-dim)' }}>
                  Tap to reveal →
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
