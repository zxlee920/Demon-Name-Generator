import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import { getBlogPostBySlug } from "@/lib/blog-data"
import { Calendar, BookOpen, ArrowLeft, User } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// 生成动态metadata
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Article Not Found - Demon Name Generator",
      description: "The requested article could not be found."
    }
  }

  return {
    title: `${post.title} - Demon Name Generator`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Demon Name Generator`,
      description: post.excerpt,
      type: "article",
      siteName: "Demon Name Generator",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Demon Name Generator`,
      description: post.excerpt,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// 简单的 Markdown 转 HTML 函数
function markdownToHtml(markdown: string): string {
  // 移除第一个 H1 标题（因为页面已经显示了标题）
  const contentWithoutFirstH1 = markdown.replace(/^# .*$/m, '')
  
  const html = contentWithoutFirstH1
    // 标题
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6">$1</h1>')
    // 粗体
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // 斜体
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
  
  // 处理列表
  const lines = html.split('\n')
  const processedLines = []
  let inList = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (line.match(/^- /)) {
      if (!inList) {
        processedLines.push('<ul class="list-disc pl-6 mb-4 space-y-1">')
        inList = true
      }
      processedLines.push(`<li class="ml-0">${line.replace(/^- /, '')}</li>`)
    } else {
      if (inList) {
        processedLines.push('</ul>')
        inList = false
      }
      processedLines.push(line)
    }
  }
  
  if (inList) {
    processedLines.push('</ul>')
  }
  
  return processedLines.join('\n')
    // 段落
    .replace(/\n\n/g, '</p><p class="mb-4">')
    // 包装段落
    .replace(/^(?!<[h|l|u])(.+)$/gm, '<p class="mb-4">$1</p>')
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = markdownToHtml(post.content)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://demonnamegenerator.xyz/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Demon Name Generator"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://demonnamegenerator.xyz/blog/${post.slug}`
    },
    "url": `https://demonnamegenerator.xyz/blog/${post.slug}`,
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readingTime}M`
  }

  return (
    <div className="min-h-screen">
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>
      <Script
      />
      <div className="container mx-auto px-4 py-12">
        {/* 返回链接 */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* 文章头部 */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                {post.readingTime} min read
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          {/* 主要内容 */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  )
}