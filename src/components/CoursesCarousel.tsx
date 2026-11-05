import React from 'react';
import FlexCarousel, { type FlexCarouselItem } from './FlexCarousel';

const courseItems: FlexCarouselItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=max',
    alt: 'Medical & Healthcare Admissions',
    title: 'Medical & Healthcare',
    subtitle: 'MBBS • BDS • B.Sc Nursing • B.Pharm • Allied Health'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80&auto=format&fit=max',
    alt: 'Engineering & Technology Programmes',
    title: 'Engineering & Technology',
    subtitle: 'AI & Data Science • Computer Science (CSE) • Cyber Security • ECE'
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=max',
    alt: 'Arts, Science & Commerce Degrees',
    title: 'Arts, Science & Commerce',
    subtitle: 'B.Com (General / CA / PA) • BCA • B.Sc Computer Science • BBA'
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&auto=format&fit=max',
    alt: 'Management & Postgraduate Degrees',
    title: 'Management & PG Degrees',
    subtitle: 'MBA (Finance, HR, Logistics) • MCA • M.E / M.Tech • Medical PG'
  },
  {
    src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&q=80&auto=format&fit=max',
    alt: 'Nursing & Paramedical Programmes',
    title: 'Nursing & Paramedical',
    subtitle: 'B.Sc Nursing (4 Yrs) • Dialysis Tech • Radiology • OT & Anaesthesia'
  },
  {
    src: 'https://images.unsplash.com/photo-1592417817098-8f3d69104a49?w=1200&q=80&auto=format&fit=max',
    alt: 'Agriculture & Life Sciences',
    title: 'Agriculture & Allied Sciences',
    subtitle: 'B.Sc Agriculture (Hons) • Horticulture • Food Technology'
  }
];

export const CoursesCarousel: React.FC = () => {
  const handleSelect = (_index: number, item: FlexCarouselItem) => {
    const formSection = document.getElementById('enquiry-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      // Map to degree dropdown
      const degreeSelect = document.getElementById('degree') as HTMLSelectElement | null;
      if (degreeSelect) {
        if (item.title?.includes('Medical')) degreeSelect.value = 'medical';
        else if (item.title?.includes('Engineering')) degreeSelect.value = 'engineering';
        else if (item.title?.includes('Arts')) degreeSelect.value = 'arts';
        else if (item.title?.includes('Management')) degreeSelect.value = 'management';
        else if (item.title?.includes('Nursing')) degreeSelect.value = 'paramedical';
        else if (item.title?.includes('Agriculture')) degreeSelect.value = 'science';
      }
    }
  };

  return (
    <div className="w-full">
      {/* 3D Liquid FlexCarousel Container (Full Width Edge-to-Edge) */}
      <div 
        className="w-full relative overflow-hidden" 
        style={{ width: '100vw', maxWidth: '100%', height: '580px', position: 'relative' }}
      >
        <FlexCarousel
          items={courseItems}
          preset="liquid"
          intro="rise"
          cardHeight={0.52}
          gap={14}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.86}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.42}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default CoursesCarousel;

