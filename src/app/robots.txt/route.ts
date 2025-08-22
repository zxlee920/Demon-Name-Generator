import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://demonnamegenerator.xyz/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
# Disallow: /admin/
# Disallow: /api/

# Allow all content
Allow: /
Allow: /about
Allow: /blog
Allow: /contact
Allow: /privacy
Allow: /terms`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}