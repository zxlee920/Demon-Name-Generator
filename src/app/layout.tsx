import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Google AdSense Account */}
        <meta name="google-adsense-account" content="ca-pub-1852570664224960" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G7TNDTM8G9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G7TNDTM8G9');
          `}
        </Script>
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1852570664224960"
          crossOrigin="anonymous"
        />
        
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "t2k5tdnqjo");
            `
          }}
          suppressHydrationWarning={true}
        />
        
        {/* Structured Data - moved to head to avoid hydration issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
          suppressHydrationWarning={true}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
