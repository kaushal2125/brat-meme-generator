import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About BratMemes - The Story Behind the Viral Meme Generator",
  description:
    "Learn about BratMemes, the team behind the viral Brat meme generator, and our mission to make meme creation accessible to everyone.",
  keywords: "about bratmemes, meme generator team, brat meme culture, viral content creation",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About BratMemes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to democratize meme creation and help everyone join the viral conversation
            </p>
          </div>

          <div className="space-y-8">
            <Card className="gradient-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  BratMemes was born during the summer of 2024, when Brat culture exploded across social media. We
                  noticed that while everyone wanted to participate in the trend, not everyone had the design skills or
                  tools to create their own viral content.
                </p>
                <p className="text-muted-foreground">
                  That's when we decided to build the most user-friendly meme generator on the internet, specifically
                  designed for the Brat aesthetic and beyond. Our goal is simple: make viral content creation accessible
                  to everyone, regardless of their design experience.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  We believe that everyone has something funny, creative, or meaningful to share with the world. Memes
                  have become the universal language of the internet, and we want to give everyone the tools to speak it
                  fluently.
                </p>
                <p className="text-muted-foreground">
                  Through our easy-to-use generator, trending templates, and educational content, we're building a
                  community where creativity thrives and viral moments are born.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Brat Culture Matters</h2>
                <p className="text-muted-foreground mb-4">
                  Brat culture represents more than just an aesthetic - it's about authenticity, confidence, and
                  embracing your true self. In a world of perfectly curated social media, being a "brat" means being
                  real, messy, and unapologetically you.
                </p>
                <p className="text-muted-foreground">
                  Our platform celebrates this spirit by making it easy for anyone to create content that feels genuine
                  and connects with others on a human level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
