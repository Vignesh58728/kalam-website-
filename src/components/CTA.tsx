const CTA = () => {
  return (
    <section id="get-started" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative bg-gradient-to-br from-[#1a6ef4] to-[#1357c9] rounded-3xl px-8 sm:px-14 py-16 overflow-hidden text-center">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🎓 Limited Spots Available
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Ready to Begin Your<br className="hidden sm:block" /> Global Education Story?
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-[520px] mx-auto mb-10">
            Join thousands of students who turned their study-abroad dreams into reality with Kalam's expert support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#book-a-call"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#1a6ef4] text-[15px] font-bold hover:bg-blue-50 active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              Book a Free Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border border-white/50 text-white text-[15px] font-semibold hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
