import { useReveal } from '@/hooks/useReveal';

const plans = [
  {
    name: 'Basic Plan', subtitle: 'Quick & Clean', price: '₹1,999', popular: false, wedding: false,
    waText: "Hi%20Cineo%20Hub%2C%20I%27m%20interested%20in%20the%20Basic%20package!",
    features: ['1 Hour Shoot', '1 Edited Reel Delivered', 'Fast Delivery (10 mins post shoot)', 'Trained Cinematographer', 'Cineo Hub Branding Included', 'Cineo Hub Creative Direction Included'],
  },
  {
    name: 'Silver Plan', subtitle: 'Event Essential', price: '₹4,999', popular: true, wedding: false,
    waText: "Hi%20Cineo%20Hub%2C%20I%27m%20interested%20in%20the%20Silver%20package!",
    features: ['Up to 3 Hours Shoot', '3 Edited Reels Delivered', 'Fast Delivery (10 mins post shoot)', 'Trained Cinematographer', 'Cineo Hub Branding Included', 'Cineo Hub Creative Direction Included', 'Priority Support'],
  },
  {
    name: 'Gold Plan', subtitle: 'Full Coverage', price: '₹9,999', popular: false, wedding: false,
    waText: "Hi%20Cineo%20Hub%2C%20I%27m%20interested%20in%20the%20Gold%20package!",
    features: ['8 Hours Shoot', '8 Edited Reels Delivered', 'Fast Delivery (10 mins post shoot)', 'Senior Cinematographer', 'Cineo Hub Branding Included', 'Cineo Hub Creative Direction Included', 'Priority Support', 'Dedicated Shoot Coordinator'],
  },
  {
    name: 'Wedding Package', subtitle: 'For Your Special Day', price: '₹12,999', popular: false, wedding: true,
    waText: "Hi%20Cineo%20Hub%2C%20I%27m%20interested%20in%20the%20Wedding%20package!",
    features: ['1 Edited Reel Delivered', '8 Hours Coverage', 'Trained Cinematographer', 'Cineo Hub Branding Included', 'Cineo Hub Creative Direction Included', 'Priority Support', 'Dedicated Shoot Coordinator'],
  },
];

export default function BestsellersPricing() {
  const ref = useReveal();
  const weddingGold = '#C9A227';
  const weddingGoldDark = '#8A6A1F';

  return (
    <section id="pricing" ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="eyebrow-pill">Pricing Plans</span>
          <h2 className="section-title">Choose Your <span>Perfect Plan</span></h2>
          <p className="section-sub">Simple, transparent pricing — no hidden charges</p>
        </div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 860, margin: '0 auto' }}>
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`reveal delay-${idx + 1}${plan.popular ? ' pricing-card-popular' : ''}`}
              style={{
                position: 'relative',
                background: plan.popular
                  ? 'linear-gradient(160deg, #1c0808 0%, #161616 60%)'
                  : plan.wedding
                  ? 'linear-gradient(160deg, #171106 0%, #161616 60%)'
                  : '#161616',
                border: plan.popular
                  ? '1px solid rgba(208,2,27,0.45)'
                  : plan.wedding
                  ? '1px solid rgba(201,162,39,0.45)'
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                padding: '40px 28px 32px',
                boxShadow: plan.popular
                  ? '0 0 60px rgba(208,2,27,0.12), 0 20px 40px rgba(0,0,0,0.4)'
                  : plan.wedding
                  ? '0 0 40px rgba(201,162,39,0.12), 0 20px 40px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.3)',
                transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.boxShadow = plan.popular
                  ? '0 0 80px rgba(208,2,27,0.2), 0 24px 48px rgba(0,0,0,0.5)'
                  : plan.wedding
                  ? '0 0 60px rgba(201,162,39,0.2), 0 24px 48px rgba(0,0,0,0.5)'
                  : '0 12px 40px rgba(0,0,0,0.5)';
                if (!plan.popular) d.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const d = e.currentTarget as HTMLDivElement;
                d.style.boxShadow = plan.popular
                  ? '0 0 60px rgba(208,2,27,0.12), 0 20px 40px rgba(0,0,0,0.4)'
                  : plan.wedding
                  ? '0 0 40px rgba(201,162,39,0.12), 0 20px 40px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.3)';
                d.style.transform = plan.popular ? 'scale(1.02)' : 'scale(1)';
              }}
            >
              {plan.popular && (
                <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)' }}>
                  <span className="star-pop" style={{
                    display: 'inline-block', background: '#D0021B', color: '#fff',
                    fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                    padding: '5px 16px', borderRadius: 9999, whiteSpace: 'nowrap',
                    boxShadow: '0 4px 16px rgba(208,2,27,0.4)',
                  }}>
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {plan.wedding && (
                <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)' }}>
                  <span style={{
                    display: 'inline-block', background: `linear-gradient(135deg, ${weddingGold}, ${weddingGoldDark})`,
                    color: '#0a0a0a', fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                    padding: '5px 16px', borderRadius: 9999, whiteSpace: 'nowrap',
                    boxShadow: '0 4px 16px rgba(201,162,39,0.45)',
                  }}>
                    💍 Wedding Special
                  </span>
                </div>
              )}

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F2F2F2', fontWeight: 700, fontSize: '1.3rem', marginBottom: 4 }}>
                {plan.name}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                color: plan.wedding ? weddingGold : '#D0021B',
                fontSize: '0.9rem', fontWeight: 500, marginBottom: 22, opacity: 0.9,
              }}>
                "{plan.subtitle}"
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 28 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '2.4rem', color: plan.wedding ? weddingGold : '#FF1A1A', lineHeight: 1 }}>
                  {plan.price}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#555', fontSize: '0.85rem' }}>+ GST</span>
              </div>

              <div style={{ height: 1, background: plan.wedding ? 'rgba(201,162,39,0.2)' : 'rgba(255,255,255,0.06)', marginBottom: 22 }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 13, flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke={plan.wedding ? weddingGold : '#D0021B'}
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#aaa', fontSize: '0.875rem', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <button
                  onClick={() => window.open(`https://wa.me/917702521717?text=${plan.waText}`, '_blank')}
                  className="btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}
                >
                  Book Now
                </button>
              ) : plan.wedding ? (
                <button
                  onClick={() => window.open(`https://wa.me/917702521717?text=${plan.waText}`, '_blank')}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.85rem' }}
                >
                  Book Now
                </button>
              ) : (
                <button
                  onClick={() => window.open(`https://wa.me/917702521717?text=${plan.waText}`, '_blank')}
                  style={{
                    width: '100%', padding: '14px', borderRadius: 9999,
                    background: 'transparent', border: '1.5px solid rgba(208,2,27,0.5)',
                    color: '#D0021B', fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px',
                    textTransform: 'uppercase', cursor: 'pointer',
                    transition: 'background 0.25s, color 0.25s, border-color 0.25s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#D0021B'; b.style.color = '#fff'; b.style.borderColor = '#D0021B'; b.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.color = '#D0021B'; b.style.borderColor = 'rgba(208,2,27,0.5)'; b.style.transform = 'scale(1)'; }}
                >
                  Book Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

