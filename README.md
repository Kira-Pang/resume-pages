# resume-pages

多页面简历站点仓库，部署在 GitHub Pages。

## 线上地址

| 页面 | 链接 |
|------|------|
| 点点互动 AI 实习生 | https://kira-pang.github.io/resume-pages/intern/century-game/ai-video/ |

## 技术栈

- React 19 + Vite 7 + TypeScript
- Tailwind CSS + Framer Motion
- React Router v7
- GitHub Actions 自动部署

## 仓库结构

```
resume_pages/
├── README.md                  # 本文件
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions 部署配置
├── assets/                    # 共享资源（图片、视频）
│   ├── images/
│   └── videos/
└── intern/                    # 子页面目录
    └── century-game/
        └── ai-video/          # 点点互动 AI 实习生简历页
            ├── index.html              # Vite 入口
            ├── vite.config.ts          # Vite 配置（base: './'）
            ├── package.json            # 依赖配置
            ├── package-lock.json
            ├── tsconfig.json           # TypeScript 配置
            ├── tsconfig.app.json
            ├── tsconfig.node.json
            ├── tailwind.config.js      # Tailwind 配置
            ├── postcss.config.js
            ├── eslint.config.js
            ├── components.json         # shadcn/ui 配置
            ├── info.md                 # 项目信息
            ├── README.md               # 子项目说明
            ├── .gitignore
            ├── public/                 # 静态资源目录（空）
            ├── assets/                 # 构建产物目录（icon.jpeg 等）
            ├── dist/                   # 构建输出（不要手动修改）
            ├── node_modules/           # 依赖目录
            └── src/                    # 源码目录
                ├── main.tsx            # React 入口
                ├── App.tsx             # 根组件
                ├── index.css           # 全局样式（CSS 变量）
                ├── App.css
                ├── pages/
                │   └── Home.tsx        # 页面组合
                ├── sections/           # 页面各个区块
                │   ├── Hero.tsx
                │   ├── About.tsx
                │   ├── Skills.tsx
                │   ├── Projects.tsx
                │   ├── Portfolio.tsx
                │   ├── Experience.tsx
                │   ├── Contact.tsx
                │   └── Footer.tsx
                ├── components/         # 公共组件
                │   ├── Navbar.tsx
                │   ├── ScrollGuide.tsx
                │   └── SectionDivider.tsx
                ├── hooks/
                │   └── useScrollReveal.ts
                └── lib/
                    └── utils.ts
```

## 添加新页面

1. 复制现有子项目作为模板：
   ```bash
   cp -r intern/century-game/ai-video intern/<公司>/<岗位>/<页面名>
   ```

2. 修改以下文件中的路径：
   - `src/main.tsx` — `BrowserRouter basename` 改为新页面的部署路径
   - `vite.config.ts` — 检查 `base: './'` 是否正确
   - `package.json` — 如有需要更新名称

3. 修改 `.github/workflows/deploy.yml`，添加新页面的构建和复制步骤

4. 图片/视频放入 `assets/` 根目录，通过 `../../../assets/...` 相对路径引用

5. `git add -A && git commit -m "feat: add xxx page" && git push origin main`

## 修改现有页面

1. 进入子项目目录修改源码
2. `git add -A && git commit -m "..." && git push origin main`
3. GitHub Actions 自动构建部署（约 1-2 分钟）
4. 线上验证

## 资源共享

- 图片：`assets/images/xxx.jpg`
- 视频：`assets/videos/xxx.mp4`
- 子项目中引用：`../../../assets/images/xxx.jpg`

## 线上验证

### 环境准备

1. **确认 conda 环境**：
   ```bash
   conda env list
   # 选择已有环境（如 qwen）或创建新环境
   conda activate <你的环境名>
   ```

2. **安装 Playwright**：
   ```bash
   pip install playwright
   playwright install chromium
   ```

### 截图验证

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('https://kira-pang.github.io/resume-pages/intern/century-game/ai-video/?nocache=1')
    page.wait_for_timeout(5000)
    page.screenshot(path='verify.png')   # 固定文件名，每次覆盖
    browser.close()
```

如需检查特定 section：
```python
page.evaluate("document.getElementById('xxx').scrollIntoView()")
page.wait_for_timeout(800)
page.screenshot(path='verify.png')
```

## 常见问题

**Q: GitHub Pages CDN 缓存不更新**
- URL 后加 `?nocache=1` 或 `?v=数字` 强制刷新，或等待 2-3 分钟

**Q: `npm run build` 只转换 4 个模块**
- `index.html` 被构建产物覆盖，恢复为 Vite 入口文件（引用 `/src/main.tsx`）
- 删除根目录混入的 `assets/index.js` 和 `assets/index.css`

## 联系方式

- 邮箱：1483810819@qq.com
