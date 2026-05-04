# 庞筱妍 - 简历网页项目

> 按「公司 → 岗位 → 简历」层级管理，每个岗位一份专属简历网页。

---

## 📁 目录结构

```
resume_pages/
├── index.html                          # 主页：投递追踪表
├── README.md                           # 本文件
├── century-game/                       # 点点互动
│   └── ai-video-intern/                # AI 视频生成/剪辑实习生
│       └── index.html                  # 专属简历
├── [future-company]/                   # 未来公司
│   └── [future-position]/
│       └── index.html
└── ...
```

---

## 🚀 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录 GitHub，新建一个仓库，命名为 `resume-pages`（或任意名字）
2. 不要勾选 "Add a README"，保持空仓库

### 第二步：推送代码

```bash
# 进入项目目录
cd /path/to/resume_pages

# 初始化 git
git init
git add .
git commit -m "init: resume pages with century-game ai-video-intern"

# 关联远程仓库（替换为你的用户名）
git remote add origin https://github.com/你的用户名/resume-pages.git

# 推送
git branch -M main
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 打开仓库页面 → Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 `main`，文件夹选择 `/ (root)`
4. 点击 Save
5. 等待 1-2 分钟，访问 `https://你的用户名.github.io/resume-pages/`

---

## ➕ 新增一份简历的流程

假设要给 **腾讯 - 内容运营实习生** 做一份简历：

### 1. 生成专属简历 HTML

根据岗位 JD，从 `personal_abilities.md` 和 `personal_projects.md` 中匹配最相关的能力和项目，生成一份针对性的 `index.html`。

### 2. 创建目录并放入文件

```bash
cd resume_pages
mkdir -p tencent/content-operation-intern

# 把生成的简历放入
cp /path/to/生成的简历.html tencent/content-operation-intern/index.html
```

### 3. 更新主页投递追踪表

编辑 `resume_pages/index.html`，在 `<div class="stats">` 下方新增一个 company-section：

```html
<div class="company-section">
    <div class="company-header">
        <span class="company-name">🏢 腾讯 (Tencent)</span>
        <span class="company-badge">1 个岗位</span>
    </div>
    <div class="job-list">
        <div class="job-item">
            <div class="job-info">
                <div class="job-title">内容运营实习生</div>
                <div class="job-meta">投递时间：2026-05-XX | 领域：内容运营 / 公众号</div>
            </div>
            <span class="job-status status-sent">已投递</span>
            <a class="job-link" href="./tencent/content-operation-intern/" target="_blank">查看简历 →</a>
        </div>
    </div>
</div>
```

同时更新统计数字（`stat-total`、`stat-interview`、`stat-offer`）。

### 4. 更新岗位数量徽章

如果同一家公司投了多个岗位，记得更新该公司 header 里的 badge 数字：

```html
<span class="company-badge">2 个岗位</span>
```

### 5. git push 部署

```bash
git add .
git commit -m "add: tencent content-operation-intern resume"
git push origin main
```

约 1-2 分钟后，新简历即可通过 `https://你的用户名.github.io/resume-pages/tencent/content-operation-intern/` 访问。

---

## 📝 状态标签说明

| 样式 | 含义 | 使用场景 |
|------|------|---------|
| `status-sent` 蓝色 | 已投递 | 刚投完简历 |
| `status-interview` 橙色 | 面试中 | 收到面试邀请 |
| `status-offer` 绿色 | 已 offer | 拿到 offer |
| `status-rejected` 红色 | 已拒绝 | 被拒或自己放弃 |

更新状态时，只需要改 class 名即可：

```html
<!-- 面试中 -->
<span class="job-status status-interview">面试中</span>

<!-- 拿到 offer -->
<span class="job-status status-offer">已offer</span>
```

---

## 🔗 已有简历

| 公司 | 岗位 | 链接 |
|------|------|------|
| 点点互动 | AI 视频生成/剪辑实习生 | `./century-game/ai-video-intern/` |
