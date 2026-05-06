import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sparkles, Camera, Palette, Brain } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'AI 视觉生成',
    desc: '熟练运用 Kimi、Doubao、Sora 等 AI 工具完成从 prompt 构建到成片的完整 AIGC 工作流',
  },
  {
    icon: Camera,
    title: '视频剪辑与拍摄',
    desc: '熟练使用剪映进行剪辑、调色、包装，掌握多种镜头语言与拍摄技巧',
  },
  {
    icon: Palette,
    title: '审美与创意',
    desc: '对画面风格、色彩与构图敏感，能确保输出物审美一致性',
  },
  {
    icon: Brain,
    title: '学习力与适应力',
    desc: '持续关注前沿 AI 技术动态，快速上手新工具并迭代工作流',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--morandi-bg-card)]">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-body tracking-widest uppercase text-[var(--morandi-accent)] mb-4 block">
            关于我
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[var(--morandi-text)] leading-tight mb-6">
            用 AI 重新定义
            <br />
            视觉叙事的可能性
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--morandi-text-secondary)] max-w-2xl leading-relaxed">
            我是庞筱妍，一名兼具技术思维与审美敏感度的 AI 视频创作者。从光电信息科学到数据科学，
            我始终在探索技术与艺术的交汇点。我相信，好的 AI 生成作品不仅是技术的堆砌，
            更是创意与审美的精准表达。
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--morandi-bg)] border border-[var(--morandi-border)] flex items-center justify-center group-hover:border-[var(--morandi-accent)] group-hover:bg-[var(--morandi-accent-light)] transition-all duration-500">
                  <item.icon className="w-5 h-5 text-[var(--morandi-accent)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--morandi-text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--morandi-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 pt-12 border-t border-[var(--morandi-border)]"
        >
          <blockquote className="font-display text-xl md:text-2xl text-[var(--morandi-text)] italic leading-relaxed max-w-3xl">
            "习惯以问题识别 → 方案设计 → 迭代优化的方式推进项目，
            善于在限制条件下寻找替代方案，将创意转化为可交付的视觉作品。"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
