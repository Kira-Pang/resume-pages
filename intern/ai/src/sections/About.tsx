import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, Users, Lightbulb, BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: '内容运营',
    desc: '主导公众号制定内容与审核SOP，累计运营内容150+篇，实现1200+用户增长',
  },
  {
    icon: Users,
    title: '用户增长与活动策划',
    desc: '策划组织20余场品牌活动，挖掘热点打造爆款内容，单篇最高阅读量1700+，活动累计参与600+人次',
  },
  {
    icon: Lightbulb,
    title: '创意与审美',
    desc: '对画面风格、色彩与构图敏感，能确保输出物审美一致性，独立完成商业广告全流程并获得甲方认可',
  },
  {
    icon: BarChart3,
    title: '数据驱动与工具思维',
    desc: '善用数据分析优化运营策略，利用AI工具与编程思维提效，实现从信息收集到状态管理的全流程自动化',
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
            用内容与数据
            <br />
            驱动产品增长
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--morandi-text-secondary)] max-w-2xl leading-relaxed">
            我是庞筱妍，从光电信息科学到数据科学，
            我始终在探索技术与内容的交汇点。我相信，好的运营不仅是内容的搬运，
            更是基于数据的精准表达与用户的深度连接。
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
            "习惯以数据洞察 → 内容策划 → 效果迭代的方式推进项目，
            善于在限制条件下寻找替代方案，将创意转化为可量化的运营成果。"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
