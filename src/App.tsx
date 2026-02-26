import ParticleOcean from './components/ParticleOcean';
import Hero from './components/Hero';
import DepthZones from './components/DepthZones';
import Creatures from './components/Creatures';
import MindBenders from './components/MindBenders';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--abyss-black)', minHeight: '100vh', position: 'relative' }}>
      {/* Persistent animated bioluminescent particles */}
      <ParticleOcean />

      {/* Global depth gradient — darkens as you scroll down */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,10,30,0) 0%, rgba(2,4,8,0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <DepthZones />
        <Creatures />
        <MindBenders />
        <Footer />
      </main>
    </div>
  );
}
