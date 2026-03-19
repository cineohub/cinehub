import { useReveal } from '@/hooks/useReveal';

const features = [
  { emoji: '📍', title: 'Live Tracking',         description: 'Know where your cinematographer is, in real-time. Stay updated from arrival to final wrap.' },
  { emoji: '🎧', title: 'Customer Support',       description: '24/7 support to keep your day running smoothly. Anytime help, just a message or call away.' },
  { emoji: '👩', title: 'Female Cinematographer', description: 'Female users can confidently get skilled female cinematographers for their shoots.' },
  { emoji: '🤝', title: 'Pick a Partner',         description: 'Personalized partner selection for every shoot — choose who you work with.' },
];

export default function FeaturesSection() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-page">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow-pill">Get to know Cineo Hub</span>
          <h2 className="section-title">Features That Make Us <span>Stand Out</span></h2>
          <p className="section-sub">Built around your comfort, safety, and convenience.</p>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 860, margin: '0 auto' }}>
          {features.map((f, i) => (
            <div key={i} className={`ch-card reveal delay-${i + 1}`} style={{ padding: '32px 28px' }}>
              <div className="emoji-icon">{f.emoji}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F2F2F2', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#888', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

