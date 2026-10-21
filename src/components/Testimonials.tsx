const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'MSc Computer Science, University of Edinburgh',
    country: '🇬🇧 UK',
    avatar: 'PS',
    avatarColor: 'bg-purple-500',
    text: 'Kalam\'s team made the entire process stress-free. From choosing the right course to getting my visa approved in just 3 weeks — they were incredible throughout.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    course: 'MBA, University of Toronto',
    country: '🇨🇦 Canada',
    avatar: 'AM',
    avatarColor: 'bg-blue-500',
    text: 'I was confused about which university to choose. After a single session with their counselor, I had a clear roadmap. Got my first choice university!',
    rating: 5,
  },
  {
    name: 'Aisha Khan',
    course: 'BEng Mechanical Engineering, TU Munich',
    country: '🇩🇪 Germany',
    avatar: 'AK',
    avatarColor: 'bg-rose-500',
    text: 'Getting into a German university felt impossible. Kalam helped with my SOP, language requirements, and visa. Now I\'m studying tuition-free!',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#f8faff] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-[#1a6ef4] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Student Stories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight leading-tight mb-3">
            Hear from Our Students
          </h2>
          <p className="text-[#5d6b82] text-base sm:text-lg max-w-[500px] mx-auto">
            Real stories from students who achieved their dreams with Kalam.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#5d6b82] text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#101828]">{t.name}</p>
                  <p className="text-xs text-[#5d6b82]">{t.course}</p>
                </div>
                <span className="ml-auto text-base">{t.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
