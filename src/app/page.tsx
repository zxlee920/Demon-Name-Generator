import { DemonGenerator } from "@/components/demon-generator"
import { FAQSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Demon Name Generator",
    "url": "https://demonnamegenerator.xyz",
    "description": "Generate powerful demon names with detailed backstories, gender distinctions, and supernatural attributes. Perfect for fantasy games, stories, and creative projects.",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Generate male and female demon names",
      "Detailed character backstories",
      "Supernatural attributes",
      "Fantasy character creation",
      "Free online tool"
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema)
        }}
      />
      
      {/* Hero Section with Generator */}
      <section className="container mx-auto px-4 py-12">
        <DemonGenerator />
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Blog Section */}
      <BlogSection />
    </div>
  )
}
