import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技能' },
  { id: 'portfolio', label: '作品' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系' },
];

export default function ScrollGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = 0;
      sections.forEach((sec, i) => {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollY) {
          current = i;
        }
      });
      setActiveIndex(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Vertical line */}
      <div className="relative w-[1.5px] h-56 bg-[var(--morandi-border)]/40">
        <motion.div
          className="absolute top-0 left-0 w-full bg-[var(--morandi-accent)]/30 origin-top"
          style={{ scaleY: smoothProgress, height: '100%' }}
        />
      </div>

      {/* Section icons */}
      <div className="absolute inset-0 flex flex-col justify-between items-center py-0">
        {sections.map((sec, i) => (
          <button
            key={sec.id}
            onClick={() => handleClick(sec.id)}
            className="group relative flex items-center justify-center"
          >
            {/* Guinea Pig PNG */}
            <img
              src={
                i === activeIndex
                  ? '../../assets/images/guinea-pig-copper.png'
                  : '../../assets/images/guinea-pig-gray.png'
              }
              alt=""
              className={`transition-all duration-500 object-contain ${
                i === activeIndex
                  ? 'w-8 h-8 opacity-100'
                  : 'w-7 h-7 opacity-70 group-hover:opacity-100'
              }`}
            />
            {/* Label on hover */}
            <span className="absolute right-8 text-xs font-body text-[var(--morandi-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {sec.label}
            </span>
            {/* Active glow ring */}
            {i === activeIndex && (
              <motion.span
                layoutId="activeGlow"
                className="absolute w-9 h-9 rounded-full border border-[var(--morandi-accent)]/20"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
