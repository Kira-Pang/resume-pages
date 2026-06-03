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

/** 荷兰猪简笔画图标 — 粗线条版 */
function GuineaPigIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 圆脸 */}
      <circle cx="12" cy="13" r="7" />
      {/* 左耳 */}
      <path d="M6.5 8 Q5 4.5 8 6.5" />
      {/* 右耳 */}
      <path d="M17.5 8 Q19 4.5 16 6.5" />
      {/* 左眼 */}
      <circle cx="9.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      {/* 右眼 */}
      <circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      {/* 鼻子 */}
      <ellipse cx="12" cy="15.5" rx="1.3" ry="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
            {/* Guinea Pig Icon */}
            <GuineaPigIcon
              className={`transition-all duration-500 ${
                i === activeIndex
                  ? 'w-6 h-6 text-[var(--morandi-accent)]'
                  : 'w-5 h-5 text-[var(--morandi-border)] group-hover:text-[var(--morandi-text-secondary)]'
              }`}
            />
            {/* Label on hover */}
            <span className="absolute right-7 text-xs font-body text-[var(--morandi-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {sec.label}
            </span>
            {/* Active glow ring */}
            {i === activeIndex && (
              <motion.span
                layoutId="activeGlow"
                className="absolute w-8 h-8 rounded-full border border-[var(--morandi-accent)]/25"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
