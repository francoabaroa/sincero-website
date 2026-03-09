'use client'

import { motion, useReducedMotion } from 'framer-motion'

const LETTERS = 'SINCERO'.split('')

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
}

const letterVariants = {
  hidden: {
    y: '105%',
    skewY: 8,
    opacity: 0,
  },
  visible: {
    y: '0%',
    skewY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.75 },
  },
}

const bodyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 1.0 },
  },
}

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.4 },
  },
}

export function HeroSection() {
  const shouldReduce = useReducedMotion()

  const resolvedContainerVariants = shouldReduce
    ? { hidden: {}, visible: {} }
    : containerVariants

  const resolvedLetterVariants = shouldReduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      }
    : letterVariants

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Decorative vertical grid lines */}
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="hero-grid-line" />
        ))}
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8">
        <span className="section-label">
          Since 2017
        </span>
        <nav className="flex items-center gap-8" aria-label="Main navigation">
          {[
            { href: '#about', label: 'About' },
            { href: '#team', label: 'Team' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="section-label underline-reveal"
              style={{ color: 'var(--text-muted)' }}
              data-cursor="hover"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label" style={{ color: 'var(--sincero-gold)' }}>
            01
          </span>
          <div className="rule" style={{ maxWidth: '3rem' }} />
          <span className="section-label">Studio</span>
        </div>

        {/* Headline – letter by letter */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            variants={resolvedContainerVariants}
            initial="hidden"
            animate="visible"
            aria-label="SINCERO"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 800,
              fontSize: 'clamp(4.5rem, 14vw, 13rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
            }}
          >
            {LETTERS.map((letter, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <motion.span
                  variants={resolvedLetterVariants}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Subtitle row */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            variants={shouldReduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : subtitleVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Design + Engineering Studio
          </motion.p>

          <motion.p
            variants={shouldReduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : bodyVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: '28rem',
            }}
          >
            A one-stop tech shop for all your design and
            software development needs.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={shouldReduce ? {} : scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center gap-4 px-6 md:px-12 pb-10"
      >
        <div
          style={{
            width: '1px',
            height: '3.5rem',
            background: 'var(--text-muted)',
            opacity: 0.4,
          }}
        />
        <span
          className="section-label"
          style={{ color: 'var(--text-muted)', opacity: 0.5 }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Blue accent line — bottom edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--rule)',
        }}
      />
    </section>
  )
}
