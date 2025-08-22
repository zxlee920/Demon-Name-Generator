import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, BookOpen } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Demon Name Generator Blog - Fantasy Character Creation Tips & Guides",
  description: "Explore our comprehensive guides on demon mythology, character creation, naming conventions, and fantasy world-building. Learn the art of creating compelling demon characters for your stories and games.",
  openGraph: {
    title: "Demon Name Generator Blog - Fantasy Character Creation Tips & Guides",
    description: "Explore our comprehensive guides on demon mythology, character creation, naming conventions, and fantasy world-building.",
    type: "website",
    siteName: "Demon Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demon Name Generator Blog - Fantasy Character Creation Tips & Guides",
    description: "Explore our comprehensive guides on demon mythology, character creation, and fantasy world-building.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Demon Name Generator Blog",
    "description": "Explore our comprehensive guides on demon mythology, character creation, naming conventions, and fantasy world-building.",
    "url": "https://demonnamegenerator.xyz/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Demon Name Generator"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://demonnamegenerator.xyz/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      }
    }))
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema)
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">All Articles</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and guides for creating better demon characters and names
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
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

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found</p>
          </div>
        )}
      </div>
    </div>
  )
}