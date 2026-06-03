import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, Image as ImageIcon, Film } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  type: 'image' | 'video';
  url: string;
  link?: string;
  file?: File;
}

const defaultItems: PortfolioItem[] = [
  {
    id: '1',
    title: '红包封面生成项目',
    category: 'AIGC',
    description: '融合家养宠物与新年元素，使用 Kimi、Doubao、Sora 等工具完成。上线微信后综合曝光 29 万+次。',
    type: 'image',
    url: '../../../assets/images/aigc2.jpg',
  },
  {
    id: '2',
    title: '亿生帮商业广告',
    category: '视频广告',
    description: '独立完成从创意到交付的全流程，古典写意风格，获得甲方满意肯定。',
    type: 'video',
    url: '../../../assets/videos/亿生帮广告视频.mp4',
  },

  {
    id: '4',
    title: '《万里当歌》MV',
    category: '摄像',
    description: '"一带一路"十周年主题 MV，担任摄像与现场协调总负责人。',
    type: 'image',
    url: '../../../assets/images/万里当歌.jpg',
    link: 'https://weibo.com/tv/show/1034:4976420208967759?from=old_pc_videoshow',
  },
  {
    id: '5',
    title: '《彝伦讲台》直播',
    category: '直播导演',
    description: '孔子研究院直播总导演，负责设备管理、人员调度与应急预案制定。',
    type: 'image',
    url: '../../../assets/images/彝伦讲堂现场.jpg',
    link: 'https://mp.weixin.qq.com/s/33zXIX9UQ2DSl1cWWQJHlQ?click_id=12',
  },

];

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [items, setItems] = useState<PortfolioItem[]>(defaultItems);
  const [filter, setFilter] = useState('全部');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingForId, setUploadingForId] = useState<string | null>(null);

  const categories = ['全部', 'AIGC', '视频广告', '摄像', '直播导演'];

  const filteredItems = filter === '全部' ? items : items.filter((item) => item.category === filter);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file || !uploadingForId) return;

      const url = URL.createObjectURL(file);
      setItems((prev) =>
        prev.map((item) =>
          item.id === uploadingForId ? { ...item, url, file } : item
        )
      );
      setUploadingForId(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    },
    [uploadingForId]
  );

  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);



  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[var(--morandi-bg-card)]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-xs font-body tracking-widest uppercase text-[var(--morandi-accent)] mb-4 block">
            作品集
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[var(--morandi-text)] leading-tight">
            精选作品
          </h2>

        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-body rounded-full transition-all duration-300 ${
                filter === cat
                  ? 'bg-[var(--morandi-text)] text-[var(--morandi-bg)]'
                  : 'bg-[var(--morandi-bg)] text-[var(--morandi-text-secondary)] hover:bg-[var(--morandi-bg-secondary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[var(--morandi-bg)] rounded-2xl overflow-hidden border border-[var(--morandi-border)] hover:border-[var(--morandi-accent)]/30 transition-all duration-500"
            >
              {/* Media Area */}
              <div className="relative aspect-[4/3] bg-[var(--morandi-bg-secondary)] overflow-hidden">
                {item.url ? (
                  <>
                    {item.type === 'video' ? (
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        controls
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-contain bg-[var(--morandi-bg-secondary)] cursor-zoom-in"
                        onClick={() => setLightbox({ url: item.url, title: item.title })}
                      />
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[var(--morandi-text-secondary)]">
                    <div className="w-14 h-14 rounded-full bg-[var(--morandi-bg)] border border-[var(--morandi-border)] flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Film className="w-6 h-6" />
                      ) : (
                        <ImageIcon className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-sm font-body">暂无预览</span>
                  </div>
                )}
              </div>

              {/* Info Area */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-body px-2 py-0.5 bg-[var(--morandi-bg-secondary)] text-[var(--morandi-text-secondary)] rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--morandi-text)] mb-2">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--morandi-accent)] hover:underline transition-colors duration-300"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="font-body text-sm text-[var(--morandi-text-secondary)] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox.url}
              alt={lightbox.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
