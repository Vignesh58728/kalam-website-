import { useState } from 'react'

const courseItems = ['MBBS', 'MD/MS', 'Management', 'Engineering', 'Arts']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1.5 text-2xl font-extrabold text-[#1a6ef4] tracking-tight hover:opacity-95 transition-opacity">
          <span className="relative inline-flex items-center text-[#1a6ef4] font-black">
            {/* Graduation Cap SVG Accent */}
            <svg className="w-5 h-5 absolute -top-2.5 -left-1 text-[#1a6ef4] transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.45L4.47 9 12 4.9 19.53 9 12 11.45zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
            Dr.&nbsp;Kalam
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 font-medium text-[15px]">
          {['Home', 'About Us', 'Services', 'Colleges', 'Contact Us'].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`relative py-1 transition-colors duration-150 ${
                i === 0
                  ? 'text-[#101828] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-amber-400 after:rounded-full'
                  : 'text-[#101828]/80 hover:text-[#1a6ef4]'
              }`}
            >
              {item}
            </a>
          ))}

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[#101828]/80 hover:text-[#1a6ef4] transition-colors duration-150 py-1 font-medium"
              onClick={() => setCoursesOpen(!coursesOpen)}
            >
              Courses
              <svg
                className={`w-3.5 h-3.5 text-[#101828]/70 transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {coursesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                {courseItems.map((course, idx) => (
                  <a
                    key={course}
                    href="#"
                    className={`block px-5 py-3 text-sm font-medium transition-colors duration-150 hover:bg-blue-50 hover:text-[#1a6ef4] ${
                      idx === 0 ? 'bg-amber-50 text-[#101828] font-semibold' : 'text-[#101828]/80'
                    }`}
                  >
                    {course}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Side: Social + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm p-1.5">
            <svg className="w-full h-full fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-2 p-2 rounded-lg text-[#101828] hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {['Home', 'About Us', 'Services', 'Colleges', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="py-2 text-[#101828]/80 font-medium hover:text-[#1a6ef4] transition-colors border-b border-gray-50 last:border-0">
              {item}
            </a>
          ))}
          {/* Courses in mobile */}
          <div className="py-1 border-b border-gray-50">
            <p className="text-[#101828]/80 font-medium mb-2">Courses</p>
            <div className="flex flex-col gap-1 pl-3">
              {courseItems.map((course) => (
                <a key={course} href="#" className="py-1.5 text-sm text-[#101828]/70 hover:text-[#1a6ef4] transition-colors">
                  {course}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
