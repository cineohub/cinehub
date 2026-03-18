import { useReveal } from '@/hooks/useReveal';

const contactRows = [
  { emoji: '📍', href: 'https://maps.google.com/?q=CineoHub+Guntur', primary: 'CineoHub, Guntur', secondary: 'Andhra Pradesh, India', external: true },
  { emoji: '📞', href: 'tel:+917702521717', primary: '+91 7702521717', secondary: 'Tap to call', external: false },
  { emoji: '📧', href: 'mailto:Cineohub7@gmail.com', primary: 'Cineohub7@gmail.com', secondary: 'Tap to email', external: false },
  { emoji: '🕐', href: null, primary: 'Open 24/7', secondary: 'Always available for you', external: false },
];

const socials = [
  { href: 'https://facebook.com/CineHub', label: 'Facebook', svgPath: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />, wa: false },
  { href: 'https://instagram.com/weareCineHub', label: 'Instagram', svgPath: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>, wa: false },
  { href: 'https://wa.me/917702521717', label: 'WhatsApp', svgPath: null, wa: true },
];

export default function ContactSection() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-alt">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow-pill">Find Us</span>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <p className="section-sub">We're available 24/7 — reach out anytime</p>
        </div>

        {/* Strict 2-col grid, equal height */}
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 28,
          alignItems: 'stretch',
        }}>

          {/* Left: Contact card */}
          <div className="reveal reveal-left" style={{
            background: '#161616',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#F2F2F2', fontWeight: 700, fontSize: '1.4rem', marginBottom: 28,
              }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {contactRows.map(({ emoji, href, primary, secondary, external }) => {
                  const inner = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, transition: 'transform 0.25s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateX(5px)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)'; }}
                    >
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(208,2,27,0.1)', border: '1px solid rgba(208,2,27,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1rem', flexShrink: 0,
                      }}>{emoji}</div>
                      <div>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#F0F0F0', fontWeight: 600, fontSize: '0.92rem', margin: 0 }}>{primary}</p>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#555', fontSize: '0.78rem', margin: '2px 0 0' }}>{secondary}</p>
                      </div>
                    </div>
                  );
                  return href
                    ? <a key={primary} href={href} target={external ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a>
                    : <div key={primary}>{inner}</div>;
                })}
              </div>
            </div>

            {/* Socials */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 28, paddingTop: 22 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#444', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 14 }}>Follow us</p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map(({ href, label, svgPath, wa }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: 7,
                      padding: '8px 16px', borderRadius: 9999,
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      fontFamily: "'DM Sans', sans-serif", color: '#777', fontSize: '0.8rem', fontWeight: 500,
                      textDecoration: 'none', transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.borderColor = wa ? 'rgba(37,211,102,0.5)' : 'rgba(208,2,27,0.5)';
                      a.style.color = wa ? '#25D366' : '#D0021B';
                      a.style.background = wa ? 'rgba(37,211,102,0.06)' : 'rgba(208,2,27,0.06)';
                      a.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.borderColor = 'rgba(255,255,255,0.08)';
                      a.style.color = '#777';
                      a.style.background = 'rgba(255,255,255,0.04)';
                      a.style.transform = 'translateY(0)';
                    }}
                  >
                    {wa ? (
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{svgPath}</svg>
                    )}
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map — fills full height */}
          <div className="reveal reveal-right" style={{
            borderRadius: 20, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            minHeight: 460,
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3828.7953057338314!2d80.4348!3d16.3334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7551a5a29b91%3A0x7317787b33b812e7!2sMixing%20Hub!5e0!3m2!1sen!2sin!4v1773775777926!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', minHeight: 460 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cine O Hub — Mixing Hub, Guntur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

