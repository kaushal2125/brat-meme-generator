import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is the Brat Meme Generator free to use?",
    answer:
      "Yes! Our basic meme generator is completely free. You can create, edit, and download memes without any cost. We also offer premium templates and features for users who want more options.",
  },
  {
    question: "Can I upload my own images?",
    answer:
      "You can upload your own images to create custom memes. We support JPG, PNG, and GIF formats. Just make sure your images are appropriate and follow our community guidelines.",
  },
  {
    question: "What makes a meme go viral?",
    answer:
      "Viral memes typically have relatable content, perfect timing, and tap into current trends or emotions. Our trending templates are designed based on what's currently popular, giving your memes the best chance of success.",
  },
  {
    question: "Can I share memes directly to social media?",
    answer:
      "Yes! Our generator includes one-click sharing buttons for popular platforms like Instagram, Twitter/X, TikTok, and WhatsApp. You can also download your memes to share manually.",
  },
  {
    question: "Do you have mobile apps?",
    answer:
      "Our web app is fully responsive and works great on mobile devices. We're currently developing native iOS and Android apps that will be available soon with additional features.",
  },
  {
    question: "Can I edit text fonts and colors?",
    answer:
      "Definitely! Our editor includes multiple font options, color pickers, text sizing, and positioning tools. You can customize every aspect of your text to match your vision.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about creating viral Brat memes</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
