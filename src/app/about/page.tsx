import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, Zap, Users, BookOpen, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Demon Name Generator",
  description: "Learn about Demon Name Generator - the ultimate tool for creating unique fantasy characters with detailed backstories, supernatural attributes, and cultural depth.",
  openGraph: {
    title: "About - Demon Name Generator",
    description: "Learn about Demon Name Generator - the ultimate tool for creating unique fantasy characters with detailed backstories, supernatural attributes, and cultural depth.",
    type: "website",
    siteName: "Demon Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Demon Name Generator",
    description: "Learn about Demon Name Generator - the ultimate tool for creating unique fantasy characters with detailed backstories, supernatural attributes, and cultural depth.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Demon Name Generator",
    "description": "Learn about Demon Name Generator - the ultimate tool for creating unique fantasy characters with detailed backstories, supernatural attributes, and cultural depth.",
    "url": "https://demonnamegenerator.xyz/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Demon Name Generator",
      "description": "Providing creators with powerful and unique demon character names to inspire unlimited creativity",
      "url": "https://demonnamegenerator.xyz"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema)
        }}
        suppressHydrationWarning={true}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Demon Name Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Providing creators with powerful and unique demon character names to inspire unlimited creativity
          </p>
        </div>

        {/* Project Introduction */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Demon Name Generator was born from a love of fantasy creation. We understand the importance of a good character name for stories, games, or any creative project.
                Each demon name is not just a random combination of letters, but is carefully designed, incorporating the essence of mythology, linguistics, and creative writing.
              </p>
              <p className="text-muted-foreground">
                Our goal is to provide creators worldwide with a powerful, easy-to-use, and completely free tool to help them create memorable demon characters.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Smart Generation Algorithm
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based on deep research into mythological and linguistic patterns, our algorithm generates demon names that are both traditional and innovative.
                  Each name is carefully tuned to ensure beautiful pronunciation and deep meaning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Gender-Specific Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provides specialized generation options for male and female demon names, each gender having unique naming patterns and cultural backgrounds,
                  making your characters more three-dimensional and authentic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Rich Backstories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  More than just names, we provide detailed background descriptions, ability characteristics, and personality traits for each generated demon,
                  giving you a complete character framework for your creations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Multi-Scenario Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Whether for novel writing, game development, tabletop design, or role-playing, our generator provides
                  suitable demon character names and settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2">📚 Novel Writing</h3>
              <p className="text-sm text-muted-foreground">
                Create unique demon characters for your fantasy novels
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2">🎮 Game Development</h3>
              <p className="text-sm text-muted-foreground">
                Generate rich NPC demon characters for RPG games
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2">🎲 Tabletop Design</h3>
              <p className="text-sm text-muted-foreground">
                Create demon enemies for tabletop role-playing games
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2">🎭 Role Playing</h3>
              <p className="text-sm text-muted-foreground">
                Create demon characters for LARP or online RP
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2">🎨 Art Creation</h3>
              <p className="text-sm text-muted-foreground">
                Provide character inspiration for illustrations and concept art
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <h3 className="font-semibold mb-2">📖 World Building</h3>
              <p className="text-sm text-muted-foreground">
                Build demon races and cultures for fantasy worlds
              </p>
            </div>
          </div>
        </section>


        {/* Contact Information */}
        <section className="text-center">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Have any suggestions or questions? We&apos;d love to hear your feedback!
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center px-4 py-2 border border-input rounded-md hover:bg-accent transition-colors"
                >
                  Read Blog
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
