const Hero = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center max-w-[620px] z-10">


          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.55rem] font-extrabold text-[#101828] tracking-tight leading-[1.12] mb-6">
            Start Your Global Education Journey with{' '}
            <span className="text-[#1a6ef4] relative">
              Kalam
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 220 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60 4 140 2 218 8" stroke="#dbeafe" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#5d6b82] font-normal leading-relaxed mb-9 max-w-[560px]">
            Empowering students to access world-class education through expert counselling, personalized academic planning, and trusted global partnerships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1a6ef4] text-white text-[15px] font-semibold hover:bg-[#1357c9] active:scale-[0.98] transition-all duration-200 shadow-md shadow-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#book-a-call"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#1e293b] bg-transparent text-[#101828] text-[15px] font-semibold hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <svg className="w-4 h-4 text-[#1a6ef4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Book a Call
            </a>
          </div>


        </div>

        {/* Right: Hero Visual */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[470px] lg:h-[470px] flex items-center justify-center">
            {/* Circle backdrop */}
            <div className="absolute inset-0 bg-[#dbeafe] rounded-full shadow-inner"></div>



            {/* Student Image */}
            <div className="student-crop-wrapper absolute inset-0 rounded-full overflow-hidden z-10">
              <img
                src="/hero-student.jpg"
                alt="Smiling student with books"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Hero
