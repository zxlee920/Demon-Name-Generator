# 🔥 Demon Name Generator

一个强大的恶魔名字生成器，为幻想创作者提供独特的恶魔角色名字和详细背景故事。

## ✨ 功能特色

- 🎭 **智能生成算法** - 基于神话学和语言学模式的深度研究
- 👥 **性别特定设计** - 提供男性和女性恶魔名字的专门生成选项
- 📚 **丰富背景故事** - 不仅仅是名字，还提供详细的背景描述、能力特征和性格特点
- 🎯 **多场景应用** - 适用于小说写作、游戏开发、桌游设计、角色扮演等
- 🚀 **闪电般快速** - 客户端算法，无服务器等待时间，即时生成结果
- 🔒 **隐私保护** - 所有生成都在本地进行，不收集任何个人信息
- 📱 **响应式设计** - 完美兼容手机、平板和桌面设备
- 🌐 **完全免费** - 无需注册，无广告，专注于创作

## 🛠️ 技术栈

- **框架**: Next.js 15.5.0
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: Radix UI
- **图标**: Lucide React
- **内容管理**: Markdown + Gray Matter
- **部署**: cloudflare pages

## 📦 安装和运行

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

### 本地开发

```bash
# 克隆项目
git clone https://github.com/zxlee920/Demon-Name-Generator.git
cd demon-name-generator

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📁 项目结构

```
demon-name-generator/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 全局布局
│   │   ├── page.tsx           # 首页
│   │   ├── about/             # 关于页面
│   │   ├── blog/              # 博客系统
│   │   ├── contact/           # 联系页面
│   │   ├── privacy/           # 隐私政策
│   │   ├── terms/             # 服务条款
│   │   ├── robots.txt/        # SEO robots文件
│   │   └── sitemap.xml/       # SEO站点地图
│   ├── components/            # React组件
│   │   ├── demon-generator.tsx # 核心生成器组件
│   │   ├── blog-section.tsx   # 博客展示组件
│   │   ├── faq-section.tsx    # FAQ组件
│   │   ├── layout/            # 布局组件
│   │   └── ui/                # UI基础组件
│   ├── data/
│   │   └── blog/              # Markdown博客文章
│   └── lib/
│       ├── blog-data.ts       # 博客数据管理
│       └── utils.ts           # 工具函数
├── public/                    # 静态资源
└── package.json
```

## 🎯 使用场景

### 📚 小说写作
为你的奇幻小说创造独特的恶魔角色

### 🎮 游戏开发
为RPG游戏生成丰富的NPC恶魔角色

### 🎲 桌游设计
为桌面角色扮演游戏创造恶魔敌人

### 🎭 角色扮演
为LARP或在线RP创造恶魔角色

### 🎨 艺术创作
为插画和概念艺术提供角色灵感

### 📖 世界构建
为奇幻世界构建恶魔种族和文化

## 🔧 核心功能

### 恶魔名字生成器
- 基于真实的Ars Goetia和西方恶魔学传统
- 包含著名恶魔和堕落天使名字
- 融合各种文化中的恶魔和黑暗存在
- 原创恶魔名字基于拉丁语、希腊语和古代语言元素

### 博客系统
- Markdown文件管理
- 自动生成阅读时间
- SEO优化的文章页面
- 响应式文章布局

### SEO优化
- 完整的TKD（Title、Keywords、Description）设置
- 结构化数据（JSON-LD）
- OpenGraph和Twitter卡片
- 动态生成的sitemap.xml
- 搜索引擎友好的robots.txt

## 📝 博客文章

项目包含以下高质量的博客文章：

1. **恶魔名字在神话中的历史** - 探索不同文化和神话传统中恶魔名字的迷人起源
2. **为奇幻故事创造引人注目的恶魔角色** - 学习如何开发超越刻板印象的丰富复杂恶魔角色
3. **男性与女性恶魔：理解差异** - 发现各种神话中男性和女性恶魔的传统区别
4. **恶魔等级制度：从小恶魔到大恶魔** - 理解恶魔领域的复杂等级结构

## 🚀 部署

### Cloudflare Pages部署（推荐）

1. 将代码推送到GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 Pages 选项卡
4. 点击 "Create a project"
5. 连接你的GitHub仓库
6. 配置构建设置：
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
7. 点击 "Save and Deploy"

### 其他平台

项目支持部署到任何支持Next.js的平台：
- Vercel
- Netlify
- Railway
- Heroku
- 自托管服务器

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 邮箱: kasonleegm@gmail.com
- 项目链接: [https://github.com/zxlee920/Demon-Name-Generator](https://github.com/zxlee920/Demon-Name-Generator)
- 在线演示: [https://demonnamegenerator.xyz](https://demonnamegenerator.xyz)

## 🙏 致谢

- 感谢所有为恶魔学和神话学研究做出贡献的学者
- 感谢开源社区提供的优秀工具和库
- 感谢所有使用和反馈的用户

---

⭐ 如果这个项目对你有帮助，请给它一个星标！