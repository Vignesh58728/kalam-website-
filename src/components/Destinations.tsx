const destinations = [
  { country: 'United Kingdom', flag: '🇬🇧', universities: '150+ Universities', color: 'from-blue-600 to-blue-800' },
  { country: 'United States', flag: '🇺🇸', universities: '400+ Universities', color: 'from-red-500 to-red-700' },
  { country: 'Canada', flag: '🇨🇦', universities: '100+ Universities', color: 'from-red-600 to-rose-800' },
  { country: 'Australia', flag: '🇦🇺', universities: '120+ Universities', color: 'from-amber-500 to-orange-700' },
  { country: 'Germany', flag: '🇩🇪', universities: '80+ Universities', color: 'from-gray-700 to-gray-900' },
  { country: 'New Zealand', flag: '🇳🇿', universities: '40+ Universities', color: 'from-teal-600 to-teal-800' },
]

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-blue-50 text-[#1a6ef4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Top Destinations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight">
              Study in the World's Best Countries
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[#1a6ef4] font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap">
            View all destinations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest) => (
            <a
              key={dest.country}
              href="#"
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`bg-gradient-to-b ${dest.color} p-5 h-[180px] flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.02]`}>
                <span className="text-4xl">{dest.flag}</span>
                <div>
                  <p className="text-white font-bold text-sm leading-snug">{dest.country}</p>
                  <p className="text-white/70 text-xs mt-0.5">{dest.universities}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
