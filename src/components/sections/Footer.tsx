import { useReveal } from '@/hooks/useReveal';
import CineHubLogo from '@/components/CineHubLogo';

const footerLinks = [
  { href: '#',        label: 'Privacy'  },
  { href: '#',        label: 'Terms'    },
  { href: '#contact', label: 'Contact'  },
  { href: '#',        label: 'Careers'  },
];

const socials: { href: string; label: string; wa?: boolean; icon?: React.ReactNode }[] = [
  { href: 'https://facebook.com/Cineohub',       label: 'Facebook',  icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
  { href: 'https://instagram.com/weareCineoHub', label: 'Instagram', icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></> },
  { href: 'https://wa.me/917702521717',          label: 'WhatsApp',  wa: true },
];

export default function Footer() {
  const ref = useReveal();

  return (
    <footer ref={ref as React.RefObject<HTMLElement>} style={{ background: '#0a0a0a' }}>
      {/* Shimmer top border */}
      <div className="shimmer-line" />

      <div className="container mx-auto px-6 py-12">
        <div className="reveal footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 32, alignItems: 'center', marginBottom: 32 }}>

          {/* Brand */}
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <CineHubLogo scale={0.9} />
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#444', fontSize: '0.78rem', margin: 0, lineHeight: 1.6 }}>
              © 2025 Cine Hub<br />All Rights Reserved
            </p>
            <a href="mailto:Cineohub7@gmail.com"
              style={{ fontFamily: "'Inter', sans-serif", color: '#555', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D0021B'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#555'; }}
            >
              Cineohub7@gmail.com
            </a>
          </div>

          {/* Nav links */}
          <div className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', justifyContent: 'center' }}>
            {footerLinks.map(({ href, label }) => (
              <a key={label} href={href}
                style={{ fontFamily: "'Inter', sans-serif", color: '#555', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.3px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#D0021B'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#555'; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="footer-socials" style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            {socials.map(({ href, label, icon, wa }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#666', transition: 'background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.background = 'rgba(208,2,27,0.12)';
                  a.style.borderColor = 'rgba(208,2,27,0.35)';
                  a.style.color = '#D0021B';
                  a.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  const a = e.currentTarget as HTMLAnchorElement;
                  a.style.background = 'rgba(255,255,255,0.04)';
                  a.style.borderColor = 'rgba(255,255,255,0.07)';
                  a.style.color = '#666';
                  a.style.transform = 'translateY(0)';
                }}
              >
                {wa ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
