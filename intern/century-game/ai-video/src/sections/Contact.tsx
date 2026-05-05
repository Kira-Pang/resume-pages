import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: '邮箱',
    value: '1483810819@qq.com',
    href: 'mailto:1483810819@qq.com',
  },
  {
    icon: MapPin,
    label: '所在地',
    value: '澳门 / 北京',
    href: null,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--morandi-dark)] text-[var(--morandi-dark-text)]">
      <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-body tracking-widest uppercase text-[var(--morandi-accent)] mb-4 block">
            联系
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-6">
            让我们开始对话
          </h2>
          <p className="font-body text-base text-[var(--morandi-dark-text-secondary)] max-w-xl mx-auto leading-relaxed">
            无论您是有项目合作意向，还是想了解更多关于 AI 视频创作的内容，
            都欢迎随时与我联系。
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  className="block p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[var(--morandi-accent)]/30 transition-all duration-500 group"
                >
                  <info.icon className="w-6 h-6 text-[var(--morandi-accent)] mx-auto mb-4" />
                  <p className="text-xs font-body text-[var(--morandi-dark-text-secondary)] mb-1">{info.label}</p>
                  <p className="font-body text-sm text-[var(--morandi-dark-text)] group-hover:text-[var(--morandi-accent)] transition-colors duration-300 flex items-center justify-center gap-1">
                    {info.value}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </a>
              ) : (
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <info.icon className="w-6 h-6 text-[var(--morandi-accent)] mx-auto mb-4" />
                  <p className="text-xs font-body text-[var(--morandi-dark-text-secondary)] mb-1">{info.label}</p>
                  <p className="font-body text-sm text-[var(--morandi-dark-text)]">{info.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--morandi-accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--morandi-accent)]" />
          </span>
          <span className="font-body text-sm text-[var(--morandi-dark-text-secondary)]">
            随时可到岗 · 可长期实习
          </span>
        </motion.div>
      </div>
    </section>
  );
}
