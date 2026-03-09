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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
}

export function ContactSection() {
  const shouldReduce = useReducedMotion()

  const v = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : revealVariants

  const fv = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : fastReveal

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 3rem)',
        background: 'var(--bg)',
        borderTop: '1px solid var(--rule)',
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
          <span className="section-label" style={{ color: 'var(--sincero-gold)' }}>04</span>
          <div className="rule" style={{ maxWidth: '3rem' }} />
          <span className="section-label">Contact</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={v}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 9vw, 9rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          Say{' '}
          <span
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px var(--sincero-blue)',
            }}
          >
            Hello.
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
            maxWidth: '32rem',
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
          }}
        >
          For pricing, partnerships, or just to chat — we&apos;d love to hear from you.
        </motion.p>

        {/* Email as design element */}
        <motion.div
          variants={fv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <a
            href="mailto:contact@sincero.tech"
            className="underline-reveal underline-reveal-gold"
            data-cursor="hover"
            style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: 'clamp(1.1rem, 3.5vw, 2.75rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              textDecoration: 'none',
              display: 'inline-block',
              lineHeight: 1.2,
              transition: 'color 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--sincero-gold)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text)'
            }}
          >
            contact@sincero.tech
          </a>
        </motion.div>

        {/* Decorative "or" divider + small CTA */}
        <motion.div
          variants={fv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--rule)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem 3rem',
          }}
        >
          <span
            className="section-label"
            style={{ color: 'var(--text-muted)' }}
          >
            Based in Miami, FL
          </span>
          <span
            style={{
              width: '1px',
              height: '1rem',
              background: 'var(--rule)',
              display: 'inline-block',
            }}
            aria-hidden="true"
          />
          <span
            className="section-label"
            style={{ color: 'var(--text-muted)' }}
          >
            Available worldwide
          </span>
        </motion.div>
      </div>
    </section>
  )
}
