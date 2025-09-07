import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">页面未找到</h2>
      <p className="mb-8 text-muted-foreground">
        抱歉，您访问的页面不存在或已被移除。
      </p>
      <Link 
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        返回首页
      </Link>
    </div>
  )
}
