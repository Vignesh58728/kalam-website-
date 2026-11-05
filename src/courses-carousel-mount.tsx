import { createRoot } from 'react-dom/client';
import CoursesCarousel from './components/CoursesCarousel';
import WhyKalamCards from './components/WhyKalamCards';

const coursesContainer = document.getElementById('courses-carousel-root');
if (coursesContainer) {
  const root = createRoot(coursesContainer);
  root.render(<CoursesCarousel />);
}

const whyKalamContainer = document.getElementById('why-kalam-cards-root');
if (whyKalamContainer) {
  const root = createRoot(whyKalamContainer);
  root.render(<WhyKalamCards />);
}
