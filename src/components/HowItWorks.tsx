const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Book a free session with our expert counselors to discuss your profile, goals, and ideal destinations.',
  },
  {
    number: '02',
    title: 'University Selection',
    description: 'We shortlist the best-fit universities based on your academic background, budget, and career goals.',
  },
  {
    number: '03',
    title: 'Application & Docs',
    description: 'We help craft a compelling SOP, review your LORs, and submit a polished application package.',
  },
  {
    number: '04',
    title: 'Visa & Departure',
    description: 'Our visa experts prepare your file and guide you through the interview, so you can fly with confidence.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-[#1a6ef4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight mb-4">
            Your Journey in 4 Simple Steps
          </h2>
          <p className="text-[#5d6b82] text-base sm:text-lg max-w-[500px] mx-auto">
            A clear, structured process designed to take you from dream to degree.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#dbeafe] via-[#1a6ef4] to-[#dbeafe] z-0"></div>

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              {/* Number Circle */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-extrabold mb-6 shadow-md transition-transform hover:scale-110 duration-300 ${
                i === 0 ? 'bg-[#1a6ef4] text-white' : 'bg-white text-[#1a6ef4] border-2 border-[#dbeafe]'
              }`}>
                {step.number}
              </div>
              <h3 className="text-base font-bold text-[#101828] mb-2">{step.title}</h3>
              <p className="text-sm text-[#5d6b82] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
