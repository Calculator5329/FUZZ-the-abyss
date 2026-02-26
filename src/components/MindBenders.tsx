import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const facts = [
  {
    number: '95%',
    label: 'of the ocean remains unexplored by humans',
    color: '#00e5ff',
    detail: 'More of the ocean floor has been mapped by sonar than visited by anything. But "mapped" is generous — it\'s like knowing a room exists while standing outside in the dark.',
  },
  {
    number: '36,089',
    label: 'feet — the depth of Challenger Deep',
    color: '#7c3aed',
    detail: 'If you dropped Mount Everest into the Mariana Trench, its peak would still be a mile underwater. Let that one sit.',
  },
  {
    number: '~10M',
    label: 'estimated undiscovered deep-sea species',
    color: '#00ff9d',
    detail: 'We\'ve described roughly 250,000 marine species. Conservative estimates suggest we\'re at maybe 2% of what\'s actually down there. The census is open.',
  },
  {
    number: '1970',
    label: 'last time a human touched the deepest point',
    color: '#f97316',
    detail: 'After James Cameron\'s 2012 solo dive, the Hadal zone went untouched for another decade. The Moon gets more foot traffic in science fiction.',
  },
  {
    number: '80%',
    label: 'of Earth\'s volcanic activity is underwater',
    color: '#ff6b6b',
    detail: 'The mid-ocean ridge is the longest mountain range on Earth at 65,000 km. Almost none of it has been directly observed. We live above an entire geological world we\'ve never seen.',
  },
  {
    number: '1977',
    label: 'year we discovered hydrothermal vents (and rewrote biology)',
    color: '#4ade80',
    detail: 'Before 1977, we thought all life required sunlight. Then we found thriving ecosystems 2,600 meters down, powered entirely by chemosynthesis. Life doesn\'t need the sun. That changes everything.',
  },
];

export default function MindBenders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 px-6" style={{ zIndex: 1 }}>
      {/* Section divider */}
      <div className="depth-line mb-24" />

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mono text-xs tracking-widest block mb-3" style={{ color: 'var(--text-dim)', letterSpacing: '0.35em' }}>
            COGNITIVE HAZARDS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-bright)' }}>
            Numbers That{' '}
            <span className="glow-cyan" style={{ color: 'var(--biolume-cyan)' }}>Break Your Brain</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facts.map((f, i) => (
            <motion.div
              key={f.number}
              className="bio-border rounded-2xl p-6"
              style={{ background: 'rgba(5, 13, 26, 0.6)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div
                className="mono text-3xl md:text-4xl font-bold mb-2"
                style={{ color: f.color, textShadow: `0 0 20px ${f.color}60` }}
              >
                {f.number}
              </div>
              <div className="font-medium mb-3" style={{ color: 'var(--text-bright)' }}>{f.label}</div>
              <div className="depth-line mb-3" style={{ background: `linear-gradient(90deg, transparent, ${f.color}50, transparent)` }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{f.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
