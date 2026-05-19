import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: '运营与内容',
    skills: [
      { name: '公众号运营', level: 95 },
      { name: '内容策划', level: 90 },
      { name: '用户增长', level: 85 },
      { name: '活动策划', level: 85 },
      { name: '数据分析', level: 80 },
    ],
  },
  {
    title: 'AI 与工具',
    skills: [
      { name: 'Kimi / Kimi CLI', level: 90 },
      { name: 'Doubao / Sora', level: 80 },
      { name: 'Nano Banana', level: 80 },
      { name: 'KimiClaw / Agent', level: 75 },
    ],
  },
  {
    title: '视频与设计',
    skills: [
      { name: '剪映', level: 95 },
      { name: 'Premiere Pro', level: 60 },
      { name: 'Photoshop', level: 70 },
      { name: '秀米排版', level: 90 },
      { name: '创客贴', level: 85 },
    ],
  },
  {
    title: '编程与数据',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'PyTorch', level: 70 },
      { name: 'SQLite', level: 75 },
      { name: 'Excel', level: 85 },
    ],
  },
];

const STAR_COLOR = '#D4A574';
const STAR_BG = '#DDD5C8';
const STAR_SHADOW = '0 0.5px 0 rgba(255,255,255,0.95), 0 -0.5px 0 rgba(255,255,255,0.95), 0.5px 0 0 rgba(255,255,255,0.95), -0.5px 0 0 rgba(255,255,255,0.95), 0.35px 0.35px 0 rgba(255,255,255,0.9), -0.35px -0.35px 0 rgba(255,255,255,0.9), 0.35px -0.35px 0 rgba(255,255,255,0.9), -0.35px 0.35px 0 rgba(255,255,255,0.9)';

function StarRating({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const stars = level / 20;

  return (
    <div ref={ref} className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="font-body text-xs text-[var(--morandi-text)] font-semibold truncate">{name}</span>
        <motion.div
          className="flex gap-[2px]"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay }}
        >
          {[1, 2, 3, 4, 5].map((i) => {
            const filled = stars >= i;
            const half = !filled && stars >= i - 0.5;
            return (
              <span key={i} className="relative text-sm leading-none" style={{ textShadow: STAR_SHADOW }}>
                <span style={{ color: STAR_BG }}>★</span>
                <motion.span
                  className="absolute inset-0 overflow-hidden"
                  style={{ color: STAR_COLOR, textShadow: STAR_SHADOW }}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: filled ? '100%' : half ? '50%' : '0%' } : {}}
                  transition={{ duration: 0.8, delay: delay + 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  ★
                </motion.span>
              </span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--morandi-bg)]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-xs font-body tracking-widest uppercase text-[var(--morandi-accent)] mb-4 block">
            技能
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[var(--morandi-text)] leading-tight">
            工具箱
          </h2>
          <p className="font-body text-base text-[var(--morandi-text-secondary)] mt-4 max-w-xl mx-auto">
            从内容运营到数据分析，从 AI 工具到视频制作
          </p>
        </motion.div>

        {/* Skills Grid — 2×2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 * catIndex,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[var(--morandi-bg-card)]/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-[var(--morandi-border)]/80 p-4 md:p-5 overflow-hidden transition-all duration-500 hover:border-[var(--morandi-accent)]/40 hover:shadow-[0_12px_40px_rgba(184,115,51,0.22)]"
            >
              {/* Glass shine effect */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <h3 className="relative font-display text-sm md:text-base font-semibold text-[var(--morandi-text)] mb-3 pb-2 border-b border-[var(--morandi-border)]/60">
                {category.title}
              </h3>
              <div className="relative">
                {category.skills.map((skill, skillIndex) => (
                  <StarRating
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.1 * catIndex + 0.04 * skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
