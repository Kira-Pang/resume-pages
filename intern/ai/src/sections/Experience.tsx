import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    type: 'edu',
    icon: GraduationCap,
    period: '2021.9 - 2025.6',
    title: '北京交通大学',
    subtitle: '本科 | 光电信息科学与工程',
    description: '211 院校，系统学习光学与信息科学基础，培养严谨的技术思维。',
  },
  {
    type: 'edu',
    icon: GraduationCap,
    period: '2025.9 - 2027.6',
    title: '澳门大学',
    subtitle: '硕士 | 数据科学 - 金融科技',
    description: 'QS 285，深入学习数据科学与金融科技领域的前沿知识。',
  },
  {
    type: 'work',
    icon: Briefcase,
    period: '2022.9 - 2024.6',
    title: '北京交通大学物理工程学院团委',
    subtitle: '宣传部副部长 / 公众号运营负责人',
    description: '主导学院公众号"悟理功成"的创立与运营，制定视觉风格规范与内容审核SOP，累计审核内容130篇。负责活动选题策划、图文排版及用户互动，累计发布150+篇，阅读量4w+。策划组织20场学院活动，创立学院特色活动，参与人数600+，公众号单篇最高阅读量达1700+。',
  },
  {
    type: 'work',
    icon: Briefcase,
    period: '2023.9 - 2025.6',
    title: '北京交通大学党委宣传部',
    subtitle: '学生电视台台长',
    description: '担任"一带一路"十周年主题 MV《万里当歌》摄像与现场协调总负责人。建立标准化视频制作流程，组织策划校内特别栏目《主播说交大》，累计200+条原创内容，全平台2000万+播放量。',
  },
  {
    type: 'work',
    icon: Briefcase,
    period: '2024.7 - 2025.12',
    title: '孔子研究院《彝伦讲台》',
    subtitle: '直播总导演',
    description: '负责直播设备管理、现场摄像/导播/后勤人员调度，制定直播应急预案，保障直播活动顺利进行。',
  },
];

const honors = [
  '一等学生工作奖学金',
  '学习进步奖学金',
  '校级优秀共青团员',
  '社会实践优秀奖学金',
  '市级大学生创新创业项目',
  '北京市高校示范学生基层组织',
];

export default function Experience() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--morandi-bg)]">
      <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-xs font-body tracking-widest uppercase text-[var(--morandi-accent)] mb-4 block">
            经历
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[var(--morandi-text)] leading-tight">
            教育与工作
          </h2>
        </motion.div>

        {/* Timeline with curved line */}
        <div className="relative">
          {/* Curved SVG timeline line */}
          <svg
            className="absolute left-6 md:left-8 top-0 h-full w-8 md:w-10 overflow-visible pointer-events-none"
            preserveAspectRatio="none"
          >
            {/* Main curved guideline — 50% thicker */}
            <motion.path
              d="M12 0 C12 60 28 60 28 120 C28 180 12 180 12 240 C12 300 28 300 28 360 C28 420 12 420 12 480 C12 540 28 540 28 600 C28 660 12 660 12 720 C12 780 28 780 28 840"
              stroke="var(--morandi-accent)"
              strokeWidth="1.5"
              strokeOpacity="0.18"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </svg>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex gap-6 md:gap-8 mb-12 last:mb-0"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--morandi-bg-card)]/60 backdrop-blur-xl border border-[var(--morandi-border)] flex items-center justify-center z-10">
                <exp.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--morandi-accent)]" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 md:pt-2">
                <span className="text-xs font-body text-[var(--morandi-accent)] tracking-wide">
                  {exp.period}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--morandi-text)] mt-1 mb-1">
                  {exp.title}
                </h3>
                <p className="font-body text-sm text-[var(--morandi-text-secondary)] mb-2">
                  {exp.subtitle}
                </p>
                <p className="font-body text-sm text-[var(--morandi-text-secondary)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 pt-12 border-t border-[var(--morandi-border)]"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-[var(--morandi-accent)]" />
            <h3 className="font-display text-xl font-semibold text-[var(--morandi-text)]">
              荣誉奖项
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {honors.map((honor) => (
              <div
                key={honor}
                className="flex items-center gap-3 px-4 py-3 bg-[var(--morandi-bg-card)]/60 backdrop-blur-xl rounded-lg border border-[var(--morandi-border)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--morandi-accent)] flex-shrink-0" />
                <span className="font-body text-sm text-[var(--morandi-text)]">{honor}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
