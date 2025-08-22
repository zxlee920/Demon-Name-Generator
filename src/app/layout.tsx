import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Advanced Demon Name Generator - Create Unique Fantasy Characters",
  description: "Generate powerful demon names with detailed backstories, gender distinctions, and supernatural attributes. Perfect for fantasy games, stories, and creative projects. Free online tool with male and female demon options.",
  openGraph: {
    title: "Advanced Demon Name Generator - Create Unique Fantasy Characters",
    description: "Generate powerful demon names with detailed backstories, gender distinctions, and supernatural attributes. Perfect for fantasy games, stories, and creative projects.",
    url: "https://demonnamegenerator.xyz/",
    siteName: "Demon Name Generator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Demon Name Generator - Create Unique Fantasy Characters",
    description: "Generate powerful demon names with detailed backstories, gender distinctions, and supernatural attributes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Demon Name Generator",
    "url": "https://demonnamegenerator.xyz",
    "description": "Generate powerful demon names with detailed backstories, gender distinctions, and supernatural attributes. Perfect for fantasy games, stories, and creative projects.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://demonnamegenerator.xyz/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
