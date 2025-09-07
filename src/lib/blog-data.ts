import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { processImagePaths, getCoverImageUrl, generateImageNameFromTitle, copyImageToPublic } from './image-utils'

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
  readingTime: number
  coverImage: string | null
}

// 计算阅读时间（基于平均阅读速度 200 字/分钟）
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// 获取所有博客文章
export function getAllBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(process.cwd(), 'src/data/blog')
  
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(blogDirectory)
  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const filePath = path.join(blogDirectory, name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const slug = name.replace(/\.md$/, '')
      
      // 处理文章内容中的图片路径
      const processedContent = processImagePaths(content, slug)
      
      // 如果没有指定封面图片，则自动生成图片名称
      let coverImageName = data.coverImage;
      
      // 如果没有指定封面图片，则根据标题自动生成
      if (!coverImageName && data.title) {
        coverImageName = generateImageNameFromTitle(data.title);
      }
      
      // 自动复制图片到输出目录
      if (coverImageName) {
        copyImageToPublic(coverImageName);
      }
      
      // 处理封面图片路径
      const coverImage = coverImageName ? getCoverImageUrl(coverImageName, slug) : null
      
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content: processedContent,
        readingTime: calculateReadingTime(content),
        coverImage: coverImage
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

// 根据 slug 获取单篇博客文章
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), 'src/data/blog', `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // 处理文章内容中的图片路径
    const processedContent = processImagePaths(content, slug)
    
    // 如果没有指定封面图片，则自动生成图片名称
    let coverImageName = data.coverImage;
    
    // 如果没有指定封面图片，则根据标题自动生成
    if (!coverImageName && data.title) {
      coverImageName = generateImageNameFromTitle(data.title);
    }
    
    // 自动复制图片到输出目录
    if (coverImageName) {
      copyImageToPublic(coverImageName);
    }
    
    // 处理封面图片路径
    const coverImage = coverImageName ? getCoverImageUrl(coverImageName, slug) : null
    
    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      content: processedContent,
      readingTime: calculateReadingTime(content),
      coverImage: coverImage
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

// 获取相关文章
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
}