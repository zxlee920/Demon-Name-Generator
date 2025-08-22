import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Demon Name Generator",
  description: "Read our privacy policy to understand how we protect your data and privacy when using the Demon Name Generator tool.",
  openGraph: {
    title: "Privacy Policy - Demon Name Generator",
    description: "Read our privacy policy to understand how we protect your data and privacy when using the Demon Name Generator tool.",
    type: "website",
    siteName: "Demon Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Demon Name Generator",
    description: "Read our privacy policy to understand how we protect your data and privacy when using the Demon Name Generator tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Demon Name Generator",
    "description": "Read our privacy policy to understand how we protect your data and privacy when using the Demon Name Generator tool.",
    "url": "https://demonnamegenerator.xyz/privacy"
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema)
        }}
      />
      <Link 
        href="/"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Generator
      </Link>

      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-muted-foreground">Last updated: January 15, 2024</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            The Demon Name Generator is designed with privacy in mind. We collect minimal information to provide our service:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>No personal information is required to use the generator</li>
            <li>We do not store generated demon names or user preferences</li>
            <li>Basic analytics data (page views, session duration) may be collected anonymously</li>
            <li>No cookies are used for tracking purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
          <p className="text-muted-foreground mb-4">
            Any information we collect is used solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Improve the functionality and performance of our generator</li>
            <li>Understand usage patterns to enhance user experience</li>
            <li>Maintain and troubleshoot technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
          <p className="text-muted-foreground mb-4">
            We prioritize the security of any data we handle:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Generated names are processed locally in your browser</li>
            <li>No generated content is transmitted to our servers</li>
            <li>Any analytics data is anonymized and aggregated</li>
            <li>We use industry-standard security measures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground mb-4">
            We may use third-party services for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Website hosting and content delivery</li>
            <li>Anonymous analytics and performance monitoring</li>
            <li>These services have their own privacy policies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use our service without providing personal information</li>
            <li>Clear your browser data at any time</li>
            <li>Contact us with privacy-related questions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us through our website.
          </p>
        </section>
      </div>
    </div>
  )
}