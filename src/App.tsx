import { useEffect, useState } from 'react';

import { ParticleCanvas, BackgroundOrbs, GridOverlay } from '@/components/background/Background';
import NavigationBar       from '@/components/sections/NavigationBar';
import HeroSection         from '@/components/sections/HeroSection';
import WhyChooseUs         from '@/components/sections/WhyChooseUs';
import BestsellersPricing  from '@/components/sections/BestsellersPricing';
import FeaturesCarousel    from '@/components/sections/FeaturesCarousel';
import CustomerTestimonials from '@/components/sections/CustomerTestimonials';
import Faq                 from '@/components/sections/Faq';
import ContactSection      from '@/components/sections/ContactSection';
import Footer              from '@/components/sections/Footer';

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setScrollPct(Math.min((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative' }}>

      {/* Animated background */}
      <ParticleCanvas />
      <BackgroundOrbs />
      <GridOverlay />

      {/* Scroll progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 9998,
        height: 2, width: `${scrollPct}%`,
        background: 'linear-gradient(90deg, #D0021B 0%, #ff5555 100%)',
        transition: 'width 0.08s linear',
        boxShadow: '0 0 10px rgba(208,2,27,0.7)',
        pointerEvents: 'none',
      }} />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavigationBar />
        <main>
          <HeroSection />
          <WhyChooseUs />
          <BestsellersPricing />
          <FeaturesCarousel />
          <CustomerTestimonials />
          <Faq />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* WhatsApp floating button */}
      <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }} className="group">
        <span className="wa-ping" />
        <a
          href="https://wa.me/917702521717"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 58, height: 58, borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 6px 24px rgba(37,211,102,0.4)',
            position: 'relative', zIndex: 1,
            transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
          }}
          onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = 'scale(1.14)'; a.style.boxShadow = '0 10px 36px rgba(37,211,102,0.55)'; }}
          onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.transform = 'scale(1)'; a.style.boxShadow = '0 6px 24px rgba(37,211,102,0.4)'; }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="27" height="27">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <span style={{
          position: 'absolute', right: 70, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(5,5,5,0.95)', color: '#F0F0F0',
          fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 500,
          padding: '7px 14px', borderRadius: 9999,
          whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.07)',
          opacity: 0, transition: 'opacity 0.2s', pointerEvents: 'none',
        }} className="group-hover:opacity-100">
          Chat with us
        </span>
      </div>
    </div>
  );
}
