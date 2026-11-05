import React from 'react';
import SpotlightCard from './SpotlightCard';

export const WhyKalamCards: React.FC = () => {
  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconBg: 'bg-blue-50 text-brand-blue',
      title: '100% Transparent Counselling',
      desc: 'Zero hidden fees and no donation surprises. We share genuine college fee structures and hostel details openly before admission.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Scholarship & Loan Support',
      desc: 'Guidance for First-Graduate concessions, merit scholarships, minority schemes, and bank educational loan documentation assistance.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconBg: 'bg-indigo-50 text-indigo-600',
      title: 'Direct Approved Admissions',
      desc: "Official partnerships with top UGC, AICTE, NMC and NAAC 'A' accredited universities across Trichy, Chennai, Coimbatore & Bangalore."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Local Office in Aranthangi',
      desc: 'Direct physical office in Raja Street, Vagaimaram. Parents and students can sit with us face-to-face for personal consultation.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {pillars.map((pillar, i) => (
        <SpotlightCard
          key={i}
          theme="light"
          spotlightColor="rgba(26, 110, 244, 0.28)"
          borderGlow={0.8}
          intensity={0.35}
          spotlightSize={260}
          softness={0.7}
          proximity={100}
          className="p-7 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-start group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
            {pillar.icon}
          </div>
          <h3 className="text-lg font-bold text-neutral-heading mb-2">
            {pillar.title}
          </h3>
          <p className="text-sm text-neutral-body leading-relaxed">
            {pillar.desc}
          </p>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default WhyKalamCards;

