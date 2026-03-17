import { useState, useRef, useEffect } from 'react';
import type { ReactElement } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface FAQItem { question: string; answer: string | ReactElement; }

const faqs: FAQItem[] = [
  { question: 'What exactly is Cine Hub?', answer: 'Cine Hub is a real-time content creation platform where you can book trained cinematographers who shoot, edit, and deliver reels within 10 minutes — perfect for creators, brands, weddings, and events.' },
  { question: 'How is it different from hiring a regular videographer?', answer: 'Unlike traditional services, Cine Hub is fast, affordable, and reliable. We deliver professional-grade reels instantly, by certified cinematographers who go through a 6-step training and evaluation process.' },
  { question: 'What packages do you offer?', answer: '• Basic Plan — ₹1,999 + GST: 1 hour shoot, 1 edited reel\n• Gold Plan — ₹4,999 + GST: up to 3 hours, 3 edited reels\n• Platinum Plan — ₹9,999 + GST: full day shoot, 8 edited reels with dedicated coordinator' },
  { question: 'How fast is the delivery really?', answer: 'On average, your reel is delivered within 10–15 minutes post shoot. No waiting for days or weeks.' },
  { question: 'Can I book a specific creator or a female cinematographer?', answer: 'Yes. You can request a preferred creator or a female cinematographer while booking. Subject to availability.' },
  { question: 'What if I cancel my booking?', answer: 'A ₹699 cancellation fee applies if cancelled less than 3 hours before the shoot.' },
  { question: 'Is travel included in the pricing?', answer: 'Travel is included within 15 km. Beyond that, clients must reimburse travel (via petrol or Rapido bill).' },
  { question: 'Can I directly contact the creator after booking?', answer: 'No. For coordination or changes, always reach out to the Cine Hub team. Please do not contact creators directly.' },
  { question: 'Do you operate outside India?', answer: 'Yes, Cine Hub is currently active in India, UAE, and USA, with city-specific availability.' },
  {
    question: 'What kind of shoots does Cine Hub handle?',
    answer: (
      <ul style={{ listStyle: 'disc', paddingLeft: 20, fontFamily: "'Inter', sans-serif", color: '#888', fontSize: '0.9rem', lineHeight: 1.8, margin: 0 }}>
        <li>Weddings</li><li>Brand campaigns</li><li>Restaurant or product reels</li>
        <li>Influencer content</li><li>College & cultural fests</li><li>Personal moments (birthdays, surprises, etc.)</li>
      </ul>
    ),
  },
];

function FAQItem({ faq, index, open, onToggle }: { faq: FAQItem; index: number; open: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className="reveal"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onToggle}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        <div style={{
          background: open ? '#1a0808' : '#161616',
          border: `1px solid ${open ? 'rgba(208,2,27,0.4)' : 'rgba(255,255,255,0.06)'}`,
          borderRadius: 12,
          transition: 'background 0.3s, border-color 0.3s',
          overflow: 'hidden',
        }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 22px' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              color: open ? '#F2F2F2' : '#ccc',
              fontWeight: 600, fontSize: '0.95rem',
              transition: 'color 0.2s',
            }}>
              {faq.question}
            </span>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: open ? 'rgba(208,2,27,0.15)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${open ? 'rgba(208,2,27,0.4)' : 'rgba(255,255,255,0.1)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.3s, border-color 0.3s',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={open ? '#D0021B' : '#888'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)', display: 'block' }}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          {/* Animated body */}
          <div style={{ height, overflow: 'hidden', transition: 'height 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div ref={bodyRef} style={{ padding: '0 22px 18px' }}>
              {typeof faq.answer === 'string'
                ? <p style={{ fontFamily: "'Inter', sans-serif", color: '#888', fontSize: '0.9rem', lineHeight: 1.75, whiteSpace: 'pre-line', margin: 0 }}>{faq.answer}</p>
                : faq.answer}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal();

  return (
    <section id="faq" ref={ref as React.RefObject<HTMLElement>} className="section-pad section-bg-page">
      <div className="container mx-auto px-4">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow-pill">FAQ</span>
            <h2 className="section-title">Got <span>Questions?</span></h2>
            <p className="section-sub">Everything you need to know about Cine Hub</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
