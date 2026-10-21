import type { ReactNode } from 'react'

const HexCard = ({
  color,
  label,
  text,
  icon,
}: {
  color: string
  label: string
  text: string
  icon: ReactNode
}) => (
  <div className="relative w-[210px] h-[235px] flex items-center justify-center filter drop-shadow-md hover:scale-105 transition-transform duration-300">
    <svg viewBox="0 0 220 250" className="absolute inset-0 w-full h-full">
      <polygon points="110,5 215,62 215,188 110,245 5,188 5,62" fill={color} />
    </svg>
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-4">
      {icon}
      <h4 className="text-[12px] font-extrabold tracking-[0.14em] text-white uppercase mb-2">
        {label}
      </h4>
      <p className="text-[11.5px] leading-relaxed text-white/90 max-w-[170px]">
        {text}
      </p>
    </div>
  </div>
)

const AboutSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left: Circular Dr. Kalam Emblem */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full shadow-[0_12px_44px_rgba(26,110,244,0.12)] border-4 border-white bg-white overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="/kalam-emblem.jpg"
                alt="Dr. Kalam Educational and Employment Consultancy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center: Text Content & Know More Button */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center pl-0 lg:pl-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#090D16] leading-snug tracking-tight mb-4">
              Guiding Students Towards A<br />
              Brighter Future
            </h2>
            <p className="text-[15px] sm:text-base text-[#5d6b82] leading-relaxed mb-8 max-w-[420px]">
              We believe counselling should be honest, personalised, and free from pressure — students deserve clarity before commitment.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-[#090D16] font-bold text-[15px] shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              Know More
            </a>
          </div>

          {/* Right: Hexagon Cards (Mission & Vision) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center gap-6 sm:gap-8">
            {/* Our Mission Hexagon */}
            <HexCard
              color="#6821a8"
              label="OUR MISSION"
              text="To help every student find a college and course that fits their ambition, ability, and future."
              icon={
                <svg className="w-8 h-8 text-white mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              }
            />

            {/* Our Vision Hexagon */}
            <HexCard
              color="#059669"
              label="OUR VISION"
              text="To be India's most trusted education consultancy for transparent counselling and admission support."
              icon={
                <svg className="w-8 h-8 text-white mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              }
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
