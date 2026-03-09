export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--rule)',
        padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 5vw, 3rem)',
        background: 'var(--bg)',
      }}
    >
      <div
        style={{
          maxWidth: '90rem',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-mono, monospace)',
            fontSize: '0.6875rem',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
          }}
        >
          &copy; 2018&ndash;{year} Sincero. All rights reserved.
        </p>

        <nav
          aria-label="Footer navigation"
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        >
          {(['About', 'Team', 'Contact'] as const).map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="footer-link underline-reveal"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
