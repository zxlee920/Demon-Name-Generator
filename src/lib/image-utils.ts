import path from 'path'
import fs from 'fs'

/**
 * 根据文章标题自动生成图片名称
 * 将标题转换为小写，并用连字符分隔
 * 
 * @param title 文章标题
 * @param extension 图片扩展名，默认为webp
 * @returns 生成的图片名称
 */
export function generateImageNameFromTitle(title: string, extension: string = 'webp'): string {
  // 将标题转换为小写
  const lowerCaseTitle = title.toLowerCase()
  
  // 先将连字符替换为临时标记
  const preserveHyphens = lowerCaseTitle.replace(/-/g, '__HYPHEN__')
  
  // 移除特殊字符，只保留字母、数字和空格
  const cleanTitle = preserveHyphens.replace(/[^\w\s]/g, '')
  
  // 恢复连字符
  const restoredHyphens = cleanTitle.replace(/__HYPHEN__/g, '-')
  
  // 将空格替换为连字符
  const kebabCaseTitle = restoredHyphens.replace(/\s+/g, '-')
  
  // 返回带扩展名的图片名称
  return `${kebabCaseTitle}.${extension}`
}

/**
 * 处理博客文章中的图片路径
 * 将Markdown中的相对路径转换为正确的公共URL路径
 * 
 * @param content Markdown内容
 * @param slug 文章的slug
 * @returns 处理后的Markdown内容
 */
export function processImagePaths(content: string, slug: string): string {
  // 匹配Markdown图片语法: ![alt text](image-path)
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g
  
  return content.replace(imageRegex, (match, alt, imagePath) => {
    // 如果已经是绝对路径或外部URL，则不处理
    if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
      return match
    }
    
    // 构建图片的公共URL路径
    const publicImagePath = `/blog-images/${imagePath}`
    
    // 返回更新后的图片标记
    return `![${alt}](${publicImagePath})`
  })
}

/**
 * 获取博客文章的封面图片URL
 * 
 * @param coverImage 封面图片路径
 * @param slug 文章的slug
 * @returns 处理后的封面图片URL
 */
export function getCoverImageUrl(coverImage: string | null, slug: string): string | null {
  if (!coverImage) {
    return null
  }
  
  // 如果已经是绝对路径或外部URL，则不处理
  if (coverImage.startsWith('http') || coverImage.startsWith('/')) {
    return coverImage
  }
  
  // 构建封面图片的公共URL路径
  return `/blog-images/${coverImage}`
}

/**
 * 自动复制图片到输出目录
 * 
 * @param imageName 图片文件名
 * @returns 复制后的图片路径，如果失败则返回空字符串
 */
export function copyImageToPublic(imageName: string): string {
  try {
    // 源图片路径
    const sourceImagePath = path.join(process.cwd(), 'src/data/image', imageName);
    
    // 目标目录
    const targetDir = path.join(process.cwd(), 'public/blog-images');
    
    // 目标图片路径
    const targetImagePath = path.join(targetDir, imageName);
    
    // 确保目标目录存在
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // 如果源图片存在，则复制到目标目录
    if (fs.existsSync(sourceImagePath)) {
      fs.copyFileSync(sourceImagePath, targetImagePath);
      console.log(`图片已复制到输出目录: ${targetImagePath}`);
      return `/blog-images/${imageName}`;
    } else {
      console.warn(`源图片不存在: ${sourceImagePath}`);
      return '';
    }
  } catch (error) {
    console.error(`复制图片时出错:`, error);
    return '';
  }
}

/**
 * 检查图片是否存在，如果不存在则自动生成占位图片
 * 
 * @param imagePath 图片路径
 * @param title 文章标题，用于生成占位图片
 * @returns 存在的图片路径
 */
export function ensureImageExists(imagePath: string, title: string): string {
  // 这里可以添加检查图片是否存在的逻辑
  // 如果不存在，可以生成一个占位图片
  // 这里只是一个示例，实际实现可能需要更复杂的逻辑
  
  return imagePath;
}
