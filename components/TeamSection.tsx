'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const members = [
  {
    name: 'Franco Abaroa',
    role: 'Full-stack Engineer\nSoftware Consultant',
    image: '/franco.JPG',
    link: 'https://francoabaroa.com',
    linkLabel: 'francoabaroa.com',
    rotation: '-2deg',
    initials: 'FA',
  },
  {
    name: 'Alejandra Lacayo',
    role: 'Product & Service Designer\nCX Strategist',
    image: '/ale.jpeg',
    link: 'https://alelacayo.com',
    linkLabel: 'alelacayo.com',
    rotation: '1.5deg',
    initials: 'AL',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, skewY: 2 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
}

const labelVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
}

export function TeamSection() {
  const shouldReduce = useReducedMotion()

  const cv = shouldReduce ? { hidden: {}, visible: {} } : containerVariants
  const mv = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : cardVariants
  const lv = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : labelVariants

  return (
    <section
      id="team"
      style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 3rem)',
        background: 'var(--bg)',
        borderTop: '1px solid var(--rule)',
      }}
    >
      <div style={{ maxWidth: '90rem', margin: '0 auto' }}>

        {/* Section label */}
        <motion.div
          variants={lv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <span className="section-label" style={{ color: 'var(--sincero-gold)' }}>03</span>
          <div className="rule" style={{ maxWidth: '3rem' }} />
          <span className="section-label">Team</span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          variants={lv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            maxWidth: '24rem',
          }}
        >
          The people behind the work.
        </motion.h2>

        {/* Team cards */}
        <motion.div
          variants={cv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {members.map((member) => (
            <motion.div key={member.name} variants={mv}>
              {/* Photo */}
              <div
                style={{
                  marginBottom: '1.75rem',
                  transform: `rotate(${member.rotation})`,
                  transformOrigin: 'center bottom',
                  willChange: 'transform',
                }}
                data-cursor="hover"
              >
                <div
                  className="team-photo"
                  style={{
                    aspectRatio: '3 / 4',
                    position: 'relative',
                    maxWidth: '22rem',
                    background: 'var(--bg-elevated)',
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 22rem"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {member.role}
                </p>
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-reveal underline-reveal-gold"
                  data-cursor="hover"
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--sincero-gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  {member.linkLabel} ↗
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
