# 项目交接文档

## 项目概述

- **名称**：庞筱妍-点点互动AI实习生简历页
- **线上地址**：https://kira-pang.github.io/resume-pages/intern/century-game/ai-video/
- **技术栈**：React 19 + Vite 7 + TypeScript + Tailwind CSS + Framer Motion + React Router v7
- **部署方式**：GitHub Pages（GitHub Actions 自动构建）

## 新电脑首次配置

仓库是 **公开的**，`git clone` 无需认证，但 `git push` 需要配置身份验证。

### 方式一：SSH（推荐，长期免输密码）

```bash
# 1. 生成 SSH key（一路回车）
ssh-keygen -t ed25519 -C "你的邮箱@example.com"

# 2. 复制公钥内容
cat ~/.ssh/id_ed25519.pub
# 把输出的内容贴到 GitHub → Settings → SSH and GPG keys → New SSH key

# 3. 验证连接
ssh -T git@github.com
# 应显示：Hi Kira-Pang! You've successfully authenticated...

# 4. clone 仓库
git clone git@github.com:Kira-Pang/resume-pages.git
cd resume-pages/intern/century-game/ai-video
```

### 方式二：HTTPS（简单，但每次 push 需输 token）

```bash
# 1. 在 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
#    生成一个 token，勾选 repo 权限

# 2. clone 仓库
git clone https://github.com/Kira-Pang/resume-pages.git
cd resume-pages/intern/century-game/ai-video

# 3. 推送时用户名填你的 GitHub 用户名，密码填刚才生成的 token
```

### Git 基础配置（两种方式都需要）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

## 快速启动

```bash
cd /path/to/resume_pages/intern/century-game/ai-video
npm install
npm run dev      # 开发服务器 http://localhost:5173
npm run build    # 生产构建 → dist/ 目录
```

## 项目结构

```
ai-video/
├── index.html              # Vite 入口（引用 /src/main.tsx）
├── vite.config.ts          # base: './'，固定输出文件名
├── src/
│   ├── main.tsx            # React 入口，BrowserRouter basename
│   ├── App.tsx             # 单路由 → Home 页
│   ├── pages/Home.tsx      # 页面组合：Nav + Sections + Footer
│   ├── sections/
│   │   ├── Hero.tsx        # 首屏：头像、姓名、标签
│   │   ├── About.tsx       # 个人简介
│   │   ├── Skills.tsx      # 工具箱：4 分类星级评分（AI/视频/图像/编程）
│   │   ├── Projects.tsx    # 项目经历：7 个项目，两列折叠卡片（左4右3）
│   │   ├── Portfolio.tsx   # 精选作品：4 个作品 4 列网格，有图片/视频/lightbox
│   │   ├── Experience.tsx  # 工作经历时间线
│   │   ├── Contact.tsx     # 联系：邮箱+所在地，居中 2 卡片
│   │   └── Footer.tsx      # 页脚
│   ├── components/
│   │   ├── Navbar.tsx      # 固定导航：6 项（关于/技能/项目/作品/经历/联系）
│   │   ├── ScrollGuide.tsx # 滚动引导点
│   │   └── SectionDivider.tsx
│   └── hooks/useScrollReveal.ts
├── dist/                   # 构建产物（不要手动修改）
└── public/                 # 静态资源（空）
```

## 关键配置

### Vite（vite.config.ts）
- `base: './'` — 相对路径，适配 GitHub Pages 子目录
- `build.rollupOptions.output` — 固定文件名（index.js / index.css），便于缓存刷新
- **不要**在 build 后执行 `cp -r dist/* .`，这会覆盖 `index.html` 导致构建缓存问题

### React Router（src/main.tsx）
```tsx
<BrowserRouter basename="/resume-pages/intern/century-game/ai-video">
```

### GitHub Actions（.github/workflows/deploy.yml）
- 构建 `intern/century-game/ai-video`
- CI 自动把产物复制到 `dist/intern/century-game/ai-video/`
- 部署到 `https://kira-pang.github.io/resume-pages/`

## 资源共享策略

图片/视频放在 **repo 根目录** `assets/` 下，子项目通过相对路径引用：

```tsx
// 从 ai-video/dist/index.html 出发，../../ 指向 resume_pages/
'../../../assets/images/xxx.jpg'
'../../../assets/videos/xxx.mp4'
```

已使用的资源：
- `assets/images/AIGC红包封面.jpg` → Portfolio 红包封面
- `assets/images/万里当歌.jpg` → Portfolio 万里当歌 MV
- `assets/images/彝伦讲堂现场.jpg` → Portfolio 彝伦讲台直播
- `assets/videos/亿生帮广告视频.mp4` → Portfolio 亿生帮商业广告

## 当前功能状态

### 已完成 ✅
- Hero：头像 + 姓名 + AI实习生标签
- Skills：4 列星级评分工具箱
- Projects：7 个项目，两列折叠卡片，含核心行动/量化成果/体现能力
- Portfolio：4 个作品 4 列网格，图片/视频/lightbox 放大，标题可外链
- Experience：时间线式工作经历
- Contact：2 卡片居中（邮箱+所在地）
- Footer：© 2026
- Navbar：岗位招聘链接（点点互动-AI实习生）+ 6 项锚点导航
- 所有外链文字 accent 色区分

### 超链接清单
| 文字 | 链接 |
|------|------|
| 点点互动-AI实习生 | https://centurygame.zhiye.com/intern/detail?jobAdId=2821c194-7aa0-4863-b0b2-c3f6b55cc82d |
| 《万里当歌》MV | https://weibo.com/tv/show/1034:4976420208967759?from=old_pc_videoshow |
| 《彝伦讲台》直播 | https://mp.weixin.qq.com/s/33zXIX9UQ2DSl1cWWQJHlQ?click_id=12 |
| 邮箱 1483810819@qq.com | mailto:1483810819@qq.com |

## 部署流程

1. 修改源代码（**不要**动 `dist/` 和根目录混入的 `assets/index.js/css`）
2. `npm run build`（应显示 ~2120 modules transformed，如显示 4 个则 index.html 被污染，需恢复）
3. `cd ../../.. && git add -A && git commit -m "..." && git push origin main`
4. GitHub Actions **自动**完成以下操作（你不需要手动执行）：
   - 在 CI 中 `cd intern/century-game/ai-video && npm ci && npm run build`
   - 把构建产物 `intern/century-game/ai-video/dist/*` 复制到 `dist/intern/century-game/ai-video/`
   - 把根目录 `index.html` 和 `assets/` 复制到 `dist/`
   - 部署到 GitHub Pages
5. 等待约 1-2 分钟后验证：`https://kira-pang.github.io/resume-pages/intern/century-game/ai-video/`

## 常见问题

### Q: `npm run build` 只转换 4 个模块
**原因**：`index.html` 被构建产物覆盖（曾执行 `cp -r dist/* .`）。
**修复**：
```bash
# 恢复 Vite 入口 index.html
cat > index.html << 'EOF'
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>庞筱妍-点点互动AI实习生简历</title>
    <link rel="icon" type="image/jpeg" href="./assets/icon.jpeg">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF
rm -f assets/index.js assets/index.css
npm run build
```

### Q: GitHub Pages CDN 缓存不更新
**解决**：在 URL 后加 `?v=数字` 强制刷新，或等待 2-3 分钟。

### Q: 添加新图片到 Portfolio
1. 图片放入 `assets/images/`
2. Portfolio.tsx 中 `url` 写 `'../../../assets/images/xxx.jpg'`
3. `type: 'image'`
4. 如需外链加 `link: 'https://...'`

## 待办/可优化项

- [ ] 移动端适配测试（目前主要优化桌面端）
- [ ] 性能：大图片懒加载
- [ ] SEO：meta description、Open Graph 标签
- [ ] 多页面架构标准化（当前为单页，未来如添加 Tencent HR intern 等新页面需复制配置）

## 联系方式

- 邮箱：1483810819@qq.com
- 岗位：点点互动 AI实习生
