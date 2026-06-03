import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionDividerProps {
  type?: 'wave' | 'curve';
  flip?: boolean;
}

export default function SectionDivider({ type = 'wave', flip = false }: SectionDividerProps) {
  const { ref, isVisible } = useScrollReveal(0.3);

  if (type === 'curve') {
    return (
      <div ref={ref} className="relative w-full overflow-hidden" style={{ height: '60px', marginTop: '-1px', marginBottom: '-1px' }}>
        <motion.svg
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewBox="0 0 1440 60"
          fill="none"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          style={{ transform: flip ? 'scaleX(-1)' : undefined }}
        >
          <path
            d="M0 60L0 30C240 55 480 0 720 30C960 60 1200 5 1440 30L1440 60Z"
            fill="var(--morandi-bg)"
            fillOpacity="0.5"
          />
          <path
            d="M0 60L0 40C240 60 480 10 720 35C960 60 1200 15 1440 35L1440 60Z"
            fill="var(--morandi-bg)"
            fillOpacity="0.3"
          />
          {/* Guideline stroke — 50% thicker */}
          <motion.path
            d="M0 35C240 60 480 10 720 35C960 60 1200 15 1440 35"
            stroke="var(--morandi-accent)"
            strokeWidth="0.75"
            strokeOpacity="0.22"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>
    );
  }

  // Wave type
  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ height: '40px', marginTop: '-1px', marginBottom: '-1px' }}>
      <motion.svg
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewBox="0 0 1440 40"
        fill="none"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      >
        <path
          d="M0 40L0 20C120 35 360 5 600 20C840 35 1080 5 1320 20C1380 25 1420 22 1440 20L1440 40Z"
          fill="var(--morandi-bg)"
          fillOpacity="0.4"
        />
        {/* Guideline stroke — 50% thicker */}
        <motion.path
          d="M0 20C120 35 360 5 600 20C840 35 1080 5 1320 20C1380 25 1420 22 1440 20"
          stroke="var(--morandi-accent)"
          strokeWidth="0.75"
          strokeOpacity="0.18"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
}
