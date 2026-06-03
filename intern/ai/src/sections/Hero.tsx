import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useMemo } from 'react';

interface Star {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  startOpacity: number;
  floatHeight: number;
  drift: number;
}

export default function Hero() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 45 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 5 + Math.random() * 9,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 20,
      startOpacity: 0.55 + Math.random() * 0.4,
      floatHeight: -(35 + Math.random() * 65),
      drift: (Math.random() - 0.5) * 50,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--morandi-bg)]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3A3530 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements — Morandi Tone */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[var(--morandi-accent)]/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[var(--morandi-accent)]/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rising Star Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.left}%`,
              bottom: '-8px',
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--start-opacity': star.startOpacity,
              '--float-height': `${star.floatHeight}vh`,
              '--drift': `${star.drift}px`,
              animation: `star-float-up ${star.duration}s linear ${star.delay}s infinite`,
              willChange: 'transform, opacity, filter',
            } as React.CSSProperties}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
                filter: `drop-shadow(0 0 ${star.size * 0.8}px rgba(184, 115, 51, 0.8)) drop-shadow(0 0 ${star.size * 2}px rgba(184, 115, 51, 0.45))`,
              }}
            >
              {/* Four slender sparkle rays — closer to ✨ */}
              <path d="M12 0 L12.6 9 L12 10.5 L11.4 9 Z" fill="var(--v1-accent)"/>
              <path d="M12 24 L11.4 15 L12 13.5 L12.6 15 Z" fill="var(--v1-accent)"/>
              <path d="M0 12 L9 11.4 L10.5 12 L9 12.6 Z" fill="var(--v1-accent)"/>
              <path d="M24 12 L15 12.6 L13.5 12 L15 11.4 Z" fill="var(--v1-accent)"/>
              {/* Tiny center diamond */}
              <path d="M12 10.2 L12.8 12 L12 13.8 L11.2 12 Z" fill="var(--v1-accent)"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Abstract Wave Lines — Minimalist Art */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-[350px] opacity-[0.35] pointer-events-none"
        viewBox="0 0 1440 350"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,180 C360,120 720,240 1080,180 C1260,150 1350,210 1440,180"
          stroke="var(--morandi-accent)"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.path
          d="M0,240 C480,280 960,200 1440,240"
          stroke="var(--morandi-text-secondary)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, ease: 'easeInOut', delay: 2 }}
        />
        <motion.path
          d="M0,280 C360,320 720,260 1080,290 C1260,305 1350,270 1440,280"
          stroke="var(--morandi-accent)"
          strokeWidth="0.4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 6, ease: 'easeInOut', delay: 2.5 }}
        />
      </svg>

      {/* Floating Geometric Lines */}
      <motion.div
        className="absolute bottom-[25%] right-[12%] w-28 h-28 opacity-[0.2]"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="20" width="60" height="60" stroke="var(--morandi-text-secondary)" strokeWidth="0.6" fill="none" transform="rotate(45 50 50)" />
          <rect x="35" y="35" width="30" height="30" stroke="var(--morandi-accent)" strokeWidth="0.5" fill="none" transform="rotate(45 50 50)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-body tracking-widest uppercase text-[var(--morandi-text-secondary)] border border-[var(--morandi-border)] rounded-full">
            AI实习生
          </span>
        </motion.div>

        {/* Name + Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6"
        >
          <img
            src="../../assets/images/pxy3.jpg"
            alt="庞筱妍"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[var(--morandi-border)] shadow-lg"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-[var(--morandi-text)] tracking-tight leading-[1.1]">
            庞筱妍
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg md:text-xl text-[var(--morandi-text-secondary)] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          澳门大学数据科学硕士 · 北京交通大学本科
          <br />
          <span className="text-[var(--morandi-accent)]">AI工具应用 · AIGC创作 · 内容运营</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-[var(--morandi-text)] text-[var(--morandi-bg)] font-body text-sm tracking-wide rounded-full hover:bg-[#4A4540] transition-colors duration-300"
          >
            浏览作品
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border border-[var(--morandi-text)] text-[var(--morandi-text)] font-body text-sm tracking-wide rounded-full hover:bg-[var(--morandi-text)] hover:text-[var(--morandi-bg)] transition-all duration-300"
          >
            联系我
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[var(--morandi-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
