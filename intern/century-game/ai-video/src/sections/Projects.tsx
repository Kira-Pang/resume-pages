import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, Sparkles, Code, Clapperboard, Video, Bot } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  actions: string[];
  result: string;
  abilities: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: '基于多 AI 工具的红包封面生成',
    tags: ['AIGC', 'Prompt 工程', '图像生成', '多工具整合', '创意策划', '微信运营'],
    icon: Sparkles,
    role: '创意策划 / AI 工作流搭建者',
    actions: [
      '主题策划：Kimi 辅助进行红包封面主题及风格构建，生成各宠物元素独立 prompt 及整合 prompt',
      '元素生成：Doubao 输出清新风格各元素 Alpha 通道图片素材',
      '封面合成：Sora 和 Nano Banana 生成完整的手绘风格红包封面',
      'Prompt调优：为解决 AIGC 常识性问题（爪子结构异常、牙齿拟人化等），通过精确位置描述与具体限制词等方式迭代优化，确保宠物形象可爱且高辨识度',
    ],
    result: '上线微信后，综合曝光 29 万+次',
    abilities: ['AI 工具运用', 'Prompt 工程', 'AIGC 工作流搭建', '视觉审美', '创意策划', '问题优化'],
  },
  {
    id: '5',
    title: '「亿生帮」商业视频广告制作',
    tags: ['商业广告', '视频拍摄', '创意策划', '镜头设计', '甲方对接', '广告交付'],
    icon: Clapperboard,
    role: '导演 / 摄像 / 创意策划',
    actions: [
      '基于产品受众确定视频风格以古典写意为主，设计镜头序列: 开篇卷轴+文字介绍 → 摇移镜头展示包装 → 推镜头展示产品细节，满足了甲方对视频形式新颖、避免机械学术化表达产品功效的要求',
      '解决产品实际冲泡较为浑浊影响画面观感的问题，通过对比多种饮料颜色，选择以力量帝橙味进行相似替代',
      '通过动静结合，旋转杯中水展示生命的活力，最后接年轻女性剪影一饮而尽，含有回归年轻之意',
    ],
    result: '广告交付甲方并得到满意肯定',
    abilities: ['广告创意策划', '视频拍摄', '镜头语言', '替代方案设计', '甲方对接', '审美判断'],
  },
  {
    id: '3',
    title: '基于 Kimi Agent + Skills 的一对一简历生成工具',
    tags: ['Kimi Agent', 'Skills 库', '自动化', 'Web 开发', 'PDF 生成', '精准匹配'],
    icon: Bot,
    role: '独立开发者',
    actions: [
      '基于 Kimi Agent 构建个人数字分身，形成个人 Skills 库',
      '接入 KimiClaw 实习信息搜集工具',
      '根据选取的意向岗位，自动提取岗位 JD',
      '精确匹配个人 Skill，形成该岗位的专属 Web 简历与 PDF 简历',
      '后续计划加入个人审美 Taste，确保简历生成在审美风格上保持一致性',
    ],
    result: '实现岗位 JD 到专属简历的自动化生成',
    abilities: ['AI Agent 构建', '信息整合', '自动化', 'Web 开发', '审美控制'],
  },
  {
    id: '2',
    title: '基于 KimiClaw 的实习信息收集工具',
    tags: ['Python', 'SQLite', '信息收集', '自动化', '去重', '数据库设计', '流程优化'],
    icon: Code,
    role: '独立开发者',
    actions: [
      '利用 KimiClaw 总结搜集简历的相关动作（搜集平台、筛选条件、具体岗位）并形成 Skills',
      '增加 SQLite 进行简历信息编码与入库，保证每次收集到的都是全新信息',
      '新增投递状态列，实现投递状态追踪',
      '后续计划改成 Web UI 形式，实现从信息收集→筛选→投递→追踪的闭环',
    ],
    result: '大幅减少搜集实习信息的时间；实现信息自动去重与状态管理',
    abilities: ['Python 开发', '数据库设计', '自动化思维', '流程优化', '闭环设计'],
  },
  {
    id: '4',
    title: '基于 Kimi CLI 的 Vibe Coding',
    tags: ['Kimi CLI', 'PyTorch', 'CUDA', 'MPS', '模型训练', '论文复现', '数据清洗', 'Lasso'],
    icon: Code,
    role: '独立开发者 / 研究者',
    actions: [
      '课设1-针对原项目的 CUDA 向 MPS 进行转换，完成 PyTorch 模型在 MacBook 上的训练适配',
      '课设2-总结 Gu 的工作并对训练数据进行清洗，人工 review 无误后构建 Lasso 模型并进行训练',
    ],
    result: 'CUDA 转 MPS 后结果与原项目差异 < 1%；Lasso 模型结果与论文保持一致',
    abilities: ['AI 辅助编程', '深度学习框架', '数据分析与建模', '论文复现', '数据清洗'],
  },
  {
    id: '7',
    title: '学校「主播说交大」视频号风格与制作流程设计',
    tags: ['视频号', '栏目策划', '风格设计', '制作流程', '视频制作', '内容策划'],
    icon: Video,
    role: '策划人 / 制作人',
    actions: [
      '设计视频号整体风格定位',
      '制定制作流程规范',
      '组织策划栏目内容',
    ],
    result: '',
    abilities: ['栏目策划', '风格设计', '流程制定', '内容策划', '视频制作'],
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--morandi-bg)]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-xs font-body tracking-widest uppercase text-[var(--morandi-accent)] mb-4 block">
            项目经历
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[var(--morandi-text)] leading-tight">
            我的项目
          </h2>
          <p className="font-body text-base text-[var(--morandi-text-secondary)] mt-4 max-w-xl mx-auto">
            从 AI 工作流搭建到商业视频制作，从自动化工具开发到学术研究
          </p>
        </motion.div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.08 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div
                className={`bg-[var(--morandi-bg-card)]/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-[var(--morandi-border)]/80 overflow-hidden transition-all duration-500 hover:border-[var(--morandi-accent)]/30 hover:shadow-[0_12px_40px_rgba(184,115,51,0.15)] ${
                  expandedId === project.id ? 'shadow-[0_8px_32px_rgba(184,115,51,0.1)] border-[var(--morandi-accent)]/25' : ''
                }`}
              >
              {/* Header — always visible */}
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full flex items-start gap-4 md:gap-5 p-4 md:p-6 text-left"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--morandi-bg)] border border-[var(--morandi-border)] flex items-center justify-center group-hover:border-[var(--morandi-accent)] group-hover:bg-[var(--morandi-accent-light)] transition-all duration-500">
                  <project.icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--morandi-accent)]" />
                </div>

                {/* Title + Tags */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="font-display text-base md:text-lg font-semibold text-[var(--morandi-text)]">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] md:text-xs font-body px-2 py-0.5 bg-[var(--morandi-bg-secondary)] text-[var(--morandi-text-secondary)] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] md:text-xs font-body px-2 py-0.5 text-[var(--morandi-text-muted)]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="font-body text-xs md:text-sm text-[var(--morandi-text-secondary)] mt-1">
                    {project.role}
                  </p>
                </div>

                {/* Expand Chevron */}
                <div className="flex-shrink-0 pt-1">
                  <motion.div
                    animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[var(--morandi-text-muted)]" />
                  </motion.div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-5 md:pb-6 pt-0">
                      <div className="pl-14 md:pl-17 border-l border-[var(--morandi-border)]/60 ml-5 md:ml-6">
                        {/* Actions */}
                        <div className="mb-4">
                          <h4 className="text-xs font-body uppercase tracking-wider text-[var(--morandi-text-muted)] mb-2">
                            核心行动
                          </h4>
                          <ul className="space-y-1.5">
                            {project.actions.map((action, i) => {
                              const colonIndex = action.indexOf('：');
                              const hasColon = colonIndex !== -1;
                              return (
                                <li
                                  key={i}
                                  className="font-body text-sm text-[var(--morandi-text-secondary)] leading-relaxed flex items-start gap-2"
                                >
                                  <span className="flex-shrink-0 w-4 text-xs font-medium text-[var(--morandi-accent)] mt-0.5">
                                    {i + 1}.
                                  </span>
                                  <span className="flex-1">
                                    {hasColon ? (
                                      <>
                                        <span className="font-semibold text-[var(--morandi-text)]">{action.slice(0, colonIndex + 1)}</span>
                                        {action.slice(colonIndex + 1)}
                                      </>
                                    ) : (
                                      action
                                    )}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* Result */}
                        {project.result && (
                          <div className="mb-4">
                            <h4 className="text-xs font-body uppercase tracking-wider text-[var(--morandi-text-muted)] mb-1.5">
                              量化成果
                            </h4>
                            <p className="font-body text-sm text-[var(--morandi-text)] font-medium">
                              {project.result}
                            </p>
                          </div>
                        )}

                        {/* Abilities */}
                        <div>
                          <h4 className="text-xs font-body uppercase tracking-wider text-[var(--morandi-text-muted)] mb-2">
                            体现能力
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.abilities.map((ability) => (
                              <span
                                key={ability}
                                className="text-xs font-body px-3 py-1 bg-[var(--morandi-accent-light)] text-[var(--morandi-accent)] rounded-full"
                              >
                                {ability}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
