'use client'

import { motion, useReducedMotion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
}

const fastReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
}

export function PhilosophySection() {
  const shouldReduce = useReducedMotion()

  const v = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : revealVariants

  const fv = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : fastReveal

  return (
    <section
      id="about"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 3rem)',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '90rem', margin: '0 auto' }}>

        {/* Section label */}
        <motion.div
          variants={fv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="section-label" style={{ color: 'var(--sincero-gold)' }}>02</span>
          <div className="rule" style={{ maxWidth: '3rem' }} />
          <span className="section-label">About</span>
        </motion.div>

        {/* Asymmetric two-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left column — main content (7 cols) */}
          <div style={{ gridColumn: '1 / 8' }}>
            <motion.h2
              variants={v}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                marginBottom: '2.5rem',
              }}
            >
              We make things
              {' '}
              <span style={{ color: 'var(--sincero-blue)' }}>people</span>
              {' '}love.
            </motion.h2>

            <motion.div
              variants={fv}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                maxWidth: '36rem',
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                A team of husband and wife teaming up since 2017 to bring{' '}
                <strong style={{ color: 'var(--text)', fontWeight: 500 }}>products</strong>{' '}
                and{' '}
                <strong style={{ color: 'var(--text)', fontWeight: 500 }}>services</strong>{' '}
                to life.
              </p>
              <p>
                By combining seasoned industry insight with cutting-edge technology
                and user-driven development, Sincero is uniquely positioned to guide
                businesses through the ever-evolving tech landscape — helping them
                navigate challenges and seize opportunities for success.
              </p>
            </motion.div>
          </div>

          {/* Right column — Since 2017 display (5 cols) */}
          <div
            style={{
              gridColumn: '8 / 13',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              paddingTop: '0.5rem',
            }}
          >
            <motion.div
              variants={fv}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
                lineHeight: 0.85,
                letterSpacing: '-0.04em',
                color: 'transparent',
                WebkitTextStroke: '1px var(--rule)',
                textAlign: 'right',
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              2017
            </motion.div>
            <motion.p
              variants={fv}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="section-label"
              style={{
                color: 'var(--text-muted)',
                marginTop: '1rem',
                textAlign: 'right',
              }}
            >
              Est. in Miami, FL
            </motion.p>
          </div>
        </div>

        {/* Capabilities row */}
        <motion.div
          variants={fv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--rule)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
            gap: '2rem 3rem',
          }}
        >
          {[
            { label: 'Strategy', desc: 'Product + business' },
            { label: 'Design', desc: 'CX, service, product' },
            { label: 'Engineering', desc: 'Full-stack, scalable' },
            { label: 'Workshops', desc: 'Facilitation + coaching' },
          ].map(({ label, desc }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--text)',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {label}
              </p>
              <p
                className="section-label"
                style={{ color: 'var(--text-muted)' }}
              >
                {desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
