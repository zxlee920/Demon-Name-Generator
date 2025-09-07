import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, BookOpen } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-data"

export function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3) // 只显示前3篇文章

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and guides for creating better demon characters and names
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow overflow-hidden">
              {post.coverImage && (
                <div className="relative w-[calc(100%+3rem)] h-48 overflow-hidden -mt-6 -ml-6">
                  <Link href={`/blog/${post.slug}`}>
                    <Image 
                      src={post.coverImage} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl hover:text-primary transition-colors mb-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}