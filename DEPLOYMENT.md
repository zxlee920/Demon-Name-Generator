# 🚀 部署指南

本文档详细说明如何将 Demon Name Generator 部署到各种平台。

## 📋 部署前准备

### 环境要求
- Node.js 18.0+
- npm 或 yarn
- Git

### 构建检查
```bash
# 确保项目能正常构建
npm run build

# 检查构建输出
npm run start
```

## 🔥 Cloudflare Pages 部署（推荐）

Cloudflare Pages 提供全球CDN加速、免费SSL证书和优秀的性能表现。

### 自动部署
1. 将代码推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 "Pages" 选项卡
4. 点击 "Create a project"
5. 选择 "Connect to Git"
6. 连接你的 GitHub 仓库
7. 配置构建设置：
   - Project name: `demon-name-generator`
   - Production branch: `main`
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`
8. 点击 "Save and Deploy"

### 环境变量（如需要）
```bash
# 在 Cloudflare Pages 控制台设置
NEXT_PUBLIC_SITE_URL=https://your-domain.pages.dev
NODE_VERSION=18
```

### 自定义域名
1. 在 Cloudflare Pages 项目设置中添加自定义域名
2. 如果域名在 Cloudflare 管理，DNS 会自动配置
3. 自动获得 SSL 证书和 CDN 加速

### Cloudflare Pages 优势
- 🌍 全球 CDN 网络
- 🚀 边缘计算支持
- 🔒 免费 SSL 证书
- 📊 内置分析功能
- 💰 慷慨的免费额度
- ⚡ 超快的构建速度

## ⚡ Vercel 部署

### 自动部署
1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. 配置项目设置：
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. 点击 "Deploy"

## 🌐 Netlify 部署

### 通过 Git 部署
1. 登录 [netlify.com](https://netlify.com)
2. 点击 "New site from Git"
3. 选择你的 GitHub 仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `out`
5. 点击 "Deploy site"

### 配置 next.config.ts
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## 🚂 Railway 部署

### 部署步骤
1. 访问 [railway.app](https://railway.app)
2. 连接 GitHub 账户
3. 选择仓库
4. Railway 自动检测 Next.js 项目
5. 自动部署

### 环境配置
```bash
# Railway 自动设置
PORT=3000
NODE_ENV=production
```

## 🐳 Docker 部署

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## ☁️ 其他云平台

### AWS Amplify
1. 连接 GitHub 仓库
2. 选择分支
3. 配置构建设置
4. 部署

### Google Cloud Platform
```bash
# 使用 Cloud Run
gcloud run deploy demon-name-generator \
  --source . \
  --platform managed \
  --region us-central1
```

### Azure Static Web Apps
1. 在 Azure 门户创建静态 Web 应用
2. 连接 GitHub 仓库
3. 配置构建预设为 Next.js
4. 部署

## 🔧 Cloudflare Pages 优化配置

### Next.js 配置优化
```typescript
// next.config.ts
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  // Cloudflare Pages 优化
  experimental: {
    runtime: 'edge',
  },
}
```

### Cloudflare Pages 函数
```typescript
// functions/_middleware.ts
export async function onRequest(context) {
  // 添加安全头部
  const response = await context.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  return response
}
```

### 缓存策略
```typescript
// _headers 文件（在 public 目录）
/*
  Cache-Control: public, max-age=31536000, immutable
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### Cloudflare 特定优化
- 🚀 启用 Brotli 压缩
- 📊 使用 Cloudflare Analytics
- 🔒 启用 Always Use HTTPS
- ⚡ 开启 Auto Minify (HTML, CSS, JS)
- 🌍 配置 Page Rules 优化缓存

## 📊 监控和分析

### Cloudflare Web Analytics
```typescript
// app/layout.tsx - 添加 Cloudflare Analytics
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        {/* Cloudflare Web Analytics */}
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "your-beacon-token"}'
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

### Cloudflare Analytics 优势
- 🔒 隐私友好，不使用 cookies
- 📊 实时访问统计
- 🌍 全球性能指标
- 🚀 页面加载速度分析
- 📱 设备和浏览器统计
- 🆓 完全免费

### Google Analytics（可选）
```typescript
// 如果需要更详细的分析
const GA_TRACKING_ID = 'G-XXXXXXXXXX'
```

## 🔒 安全配置

### 安全头部
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

## 🚨 故障排除

### 常见问题

**构建失败**
```bash
# 清理缓存
npm run clean
rm -rf .next
npm install
npm run build
```

**静态导出问题**
```typescript
// 确保所有页面都是静态的
export const dynamic = 'force-static'
```

**图片优化问题**
```typescript
// 禁用图片优化（静态导出）
images: {
  unoptimized: true
}
```

## 📞 支持

如果在部署过程中遇到问题：
- 查看平台官方文档
- 检查构建日志
- 联系: kasonleegm@gmail.com

---

选择最适合你需求的部署平台，开始部署你的 Demon Name Generator！🚀