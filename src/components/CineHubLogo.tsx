interface CineHubLogoProps {
  /** Scale the whole logo. 1 = navbar size, 1.6 = footer/overlay size */
  scale?: number;
}

export default function CineHubLogo({ scale = 1 }: CineHubLogoProps) {
  const base = 22 * scale;          // font-size of CINE HUB text (px)
  const reelSize = base * 1.18;     // diameter of the reel circle

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, userSelect: 'none', gap: 1 }}>
      {/* "We Are" — Dancing Script, red */}
      <span style={{
        fontFamily: "'Dancing Script', cursive",
        color: '#D0021B',
        fontSize: base * 0.62,
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '0.02em',
      }}>
        We Are
      </span>

      {/* "CINE [reel] HUB" — Playfair Display, white */}
      <span style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        color: '#F0F0F0',
        fontSize: base,
        fontWeight: 700,
        letterSpacing: '0.18em',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: base * 0.12,
      }}>
        CINE
        {/* Film reel replacing the O */}
        <svg
          viewBox="0 0 100 100"
          width={reelSize}
          height={reelSize}
          style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
          aria-hidden="true"
        >
          {/* Outer ring */}
          <circle cx="50" cy="50" r="47" fill="none" stroke="#F0F0F0" strokeWidth="4" />

          {/* Sprocket holes — 12 evenly spaced around the ring */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const cx = 50 + 38 * Math.sin(angle);
            const cy = 50 - 38 * Math.cos(angle);
            return <circle key={i} cx={cx} cy={cy} r="5" fill="#F0F0F0" />;
          })}

          {/* Inner hub ring */}
          <circle cx="50" cy="50" r="22" fill="none" stroke="#F0F0F0" strokeWidth="3" />

          {/* Centre hole */}
          <circle cx="50" cy="50" r="9" fill="#F0F0F0" />

          {/* 6 spokes from hub to inner ring */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x1 = 50 + 10 * Math.sin(angle);
            const y1 = 50 - 10 * Math.cos(angle);
            const x2 = 50 + 21 * Math.sin(angle);
            const y2 = 50 - 21 * Math.cos(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F0F0F0" strokeWidth="3" strokeLinecap="round" />;
          })}
        </svg>
        HUB
      </span>
    </div>
  );
}
