import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Sparkles, TrendingUp, Lightbulb, BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'AI工具应用与AIGC创作',
    desc: '熟练运用Kimi、Doubao、Sora等AI工具完成从prompt构建到成片的完整AIGC工作流，红包封面项目总曝光29万+，拆取红包6.5万+',
  },
  {
    icon: TrendingUp,
    title: '内容运营与产品思维',
    desc: '主导公众号从0到1搭建，制定内容与审核SOP，累计运营内容150+篇，实现1200+用户增长，具备将AI能力转化为运营产品的思维',
  },
  {
    icon: Lightbulb,
    title: '创意与视觉表达',
    desc: '对画面风格、色彩与构图敏感，独立完成商业广告全流程并获得甲方认可，能确保AI生成作品的审美一致性',
  },
  {
    icon: BarChart3,
    title: '数据驱动与自动化',
    desc: '数据科学背景，善用Python与SQLite构建自动化工具，将AI能力与编程思维结合，实现信息收集到状态管理的全流程自动化',
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
            AI是我的"哆啦A梦"
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--morandi-text-secondary)] max-w-2xl leading-relaxed">
            从光电信息科学到数据科学，我一直在探索技术如何放大创意。
            我深度使用 Kimi、Doubao、Sora 等 AI 工具，构建了从 AIGC 创作到自动化信息收集的完整工作流。
            数据背景让我理解 AI 的能力边界，内容创作经验让我知道什么能打动人。
            对我来说，<em className="italic">AI 不是替代思考的工具，而是把想法变成现实的加速器。</em>
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
            "习惯以问题识别 → AI 方案设计 → 迭代优化的方式推进创作，
            在技术与创意的交叉点找到最高效的表达路径，让 AI 真正成为思维的放大器。"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
