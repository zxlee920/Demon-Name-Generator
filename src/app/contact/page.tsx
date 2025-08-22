import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Demon Name Generator",
  description: "Get in touch with the Demon Name Generator team. Send us your questions, suggestions, or feedback about our fantasy character creation tools.",
  openGraph: {
    title: "Contact Us - Demon Name Generator",
    description: "Get in touch with the Demon Name Generator team. Send us your questions, suggestions, or feedback about our fantasy character creation tools.",
    type: "website",
    siteName: "Demon Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Demon Name Generator",
    description: "Get in touch with the Demon Name Generator team. Send us your questions, suggestions, or feedback about our fantasy character creation tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Demon Name Generator",
    "description": "Get in touch with the Demon Name Generator team. Send us your questions, suggestions, or feedback about our fantasy character creation tools.",
    "url": "https://demonnamegenerator.xyz/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Demon Name Generator",
      "url": "https://demonnamegenerator.xyz",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have any questions, suggestions, or feedback? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="space-y-8">
          {/* Email Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Contact
              </CardTitle>
              <CardDescription>
                The most direct way to reach us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For technical issues, feature suggestions, or business inquiries, please send an email to:
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:kasonleegm@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  kasonleegm@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                This information might be helpful before contacting us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">🤔 How to generate better demon names?</h4>
                <p className="text-sm text-muted-foreground">
                  Try different gender options and generate multiple times until you find satisfactory results. Each generation produces unique combinations.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">💰 Is this tool free?</h4>
                <p className="text-sm text-muted-foreground">
                  Completely free! We don&apos;t charge any fees and no account registration is required.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">📱 Does it support mobile devices?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, our website is fully responsive and works perfectly on phones and tablets.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">🔒 Is privacy secure?</h4>
                <p className="text-sm text-muted-foreground">
                  We don&apos;t collect any personal information. All generation happens locally in your browser.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}