/**
 * 计算文章阅读时间
 * @param content 文章内容
 * @param wordsPerMinute 每分钟阅读单词数，默认200
 * @returns 格式化的阅读时间字符串，如 "5 min read"
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): string {
  // 移除 Markdown 标记和 HTML 标签
  const cleanContent = content
    .replace(/#{1,6}\s/g, '') // 移除标题标记
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体标记
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体标记
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // 移除链接，保留文本
    .replace(/<[^>]*>/g, '') // 移除 HTML 标签
    .replace(/\n+/g, ' ') // 将换行符替换为空格
    .trim()

  // 计算单词数（英文按空格分割，中文按字符计算）
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0)
  const wordCount = words.length

  // 计算阅读时间（分钟）
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute)

  // 返回格式化的字符串
  return `${readingTimeMinutes} min read`
}
