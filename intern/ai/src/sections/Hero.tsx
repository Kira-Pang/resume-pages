import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
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
          <span className="font-display text-sm md:text-base text-[var(--morandi-accent)] tracking-wider">
            AI重度使用者 · AIGC创作学员 · 视频剪辑手 · 荷兰猪饲养员
          </span>
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
