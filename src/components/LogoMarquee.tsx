const logos = [
  { src: '/logos/dsec.png',    alt: 'Dhanalakshmi Srinivasan Engineering College' },
  { src: '/logos/igce.png',    alt: 'Indra Ganesan College of Engineering' },
  { src: '/logos/mam.png',     alt: 'M.A.M. College of Engineering' },
  { src: '/logos/care.png',    alt: 'CARE Group of Institutions' },
  { src: '/logos/shivani.png', alt: 'Shivani Engineering College' },
  { src: '/logos/pmi.png',     alt: 'Periyar Maniammai University' },
  { src: '/logos/krct.png',    alt: 'K. Ramakrishnan College of Technology' },
  { src: '/logos/oxford.png',  alt: 'Oxford Engineering College' },
]

// Triple for seamless infinite loop
const track = [...logos, ...logos, ...logos]

const LogoMarquee = () => {
  return (
    <section style={{
      width: '100%',
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      padding: '24px 0',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      {/* Fade left edge */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 10,
        pointerEvents: 'none',
      }} />
      {/* Fade right edge */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 10,
        pointerEvents: 'none',
      }} />

      {/* Scrolling track */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        animation: 'marquee-scroll 36s linear infinite',
      }}>
        {track.map((logo, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 56,
            flexShrink: 0,
          }}>
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.alt}
              style={{
                height: 72,
                width: 'auto',
                maxWidth: 170,
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}

export default LogoMarquee
