import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does the demon name generator work?",
    answer: "Our advanced algorithm combines authentic demon prefixes and suffixes from various mythological sources to create unique names. Each demon is assigned specific attributes including gender, rank, powers, and origin based on traditional demonology."
  },
  {
    question: "Can I generate names for specific genders?",
    answer: "Yes! You can choose to generate male demons, female demons, or a mix of both. Male demons typically have more aggressive, commanding names and powers, while female demons often have more seductive, mystical attributes."
  },
  {
    question: "What makes each demon unique?",
    answer: "Every generated demon has a unique combination of name, rank (from Lesser to Mythic), type (like Infernal Lord or Nightmare Queen), supernatural power, origin realm, and a detailed backstory description."
  },
  {
    question: "Can I use these names for commercial projects?",
    answer: "Yes, all generated demon names are free to use for any purpose including commercial projects, games, books, or other creative works. No attribution required, though it's always appreciated!"
  },
  {
    question: "How many demons can I generate at once?",
    answer: "You can generate between 1 and 10 demons in a single session. This allows you to quickly create multiple characters for your projects while maintaining quality and uniqueness."
  },
  {
    question: "Are the demon names based on real mythology?",
    answer: "Our names draw inspiration from various mythological traditions including Christian demonology, ancient Mesopotamian texts, and modern fantasy literature, but all generated combinations are original creations."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our demon name generator
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}