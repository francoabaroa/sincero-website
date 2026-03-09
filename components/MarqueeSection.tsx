'use client'

const ITEMS = [
  'Design',
  'Engineering',
  'Product',
  'Strategy',
  'UX',
  'Workshops',
  'Design',
  'Engineering',
  'Product',
  'Strategy',
  'UX',
  'Workshops',
]

const Separator = () => (
  <span
    aria-hidden="true"
    style={{
      color: 'var(--sincero-gold)',
      margin: '0 1.5rem',
      fontFamily: 'var(--font-dm-mono)',
      fontWeight: 400,
      fontSize: '0.875rem',
    }}
  >
    —
  </span>
)

export function MarqueeSection() {
  return (
    <div
      className="marquee-wrapper"
      style={{
        borderTop: '1px solid var(--rule)',
        borderBottom: '1px solid var(--rule)',
        overflow: 'hidden',
        padding: '1.25rem 0',
        background: 'var(--bg)',
        userSelect: 'none',
      }}
      aria-label="Capabilities: Design, Engineering, Product, Strategy, UX, Workshops"
    >
      <div className="marquee-track" aria-hidden="true">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: 'clamp(0.9rem, 1.8vw, 1.125rem)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <Separator />
          </span>
        ))}
      </div>
    </div>
  )
}
