import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TrendingTemplates } from "@/components/trending-templates"
import { HowItWorks } from "@/components/how-it-works"
import { BlogTeaser } from "@/components/blog-teaser"
import { FAQ } from "@/components/faq"
import { StructuredData } from "@/components/structured-data"

const faqData = {
  faqs: [
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
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="website" data={{}} />
      <StructuredData type="faq" data={faqData} />
      <StructuredData type="organization" data={{}} />
      <Navigation />
      <main>
        <HeroSection />
        <TrendingTemplates />
        <HowItWorks />
        <BlogTeaser />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
