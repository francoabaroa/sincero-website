export function NoiseOverlay() {
  return (
    <div className="noise-overlay" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0 }}
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  )
}
