import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Demon Name Generator",
  description: "Read our terms of service to understand the rules and guidelines for using the Demon Name Generator tool and website.",
  openGraph: {
    title: "Terms of Service - Demon Name Generator",
    description: "Read our terms of service to understand the rules and guidelines for using the Demon Name Generator tool and website.",
    type: "website",
    siteName: "Demon Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Demon Name Generator",
    description: "Read our terms of service to understand the rules and guidelines for using the Demon Name Generator tool and website.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Demon Name Generator",
    "description": "Read our terms of service to understand the rules and guidelines for using the Demon Name Generator tool and website.",
    "url": "https://demonnamegenerator.xyz/terms"
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema)
        }}
      />
      <Link 
        href="/"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our service
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing and using the Demon Name Generator website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily download one copy of the materials on Demon Name Generator's website for personal, non-commercial transitory viewing only.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>This is the grant of a license, not a transfer of title</li>
            <li>Under this license you may not modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground mb-4">
            The materials on Demon Name Generator's website are provided on an 'as is' basis. Demon Name Generator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall Demon Name Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Demon Name Generator's website, even if Demon Name Generator or a Demon Name Generator authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
          <p className="text-muted-foreground mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-muted-foreground mb-4">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Email: <Link href="mailto:kasonleegm@gmail.com" className="text-primary hover:underline">kasonleegm@gmail.com</Link>
          </p>
        </section>

        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}