import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">Trending Now</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Create Viral{" "}
              <span className="relative">
                Brat Memes
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-white/30 rounded-full"></div>
              </span>{" "}
              Instantly
            </h1>

            <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl">
              Turn your ideas into viral sensations with our easy-to-use meme generator. Choose from trending templates,
              add your text, and share with the world in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Link href="/meme-generator">
                  Make a Meme <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                <Link href="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="gradient-card p-6 shadow-2xl">
              <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/brat-meme-template-preview.jpg"
                  alt="Meme Editor Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button size="sm" className="gradient-bg text-white border-0">
                    Upload Image
                  </Button>
                  <Button size="sm" variant="outline">
                    Add Text
                  </Button>
                </div>
                <div className="bg-muted rounded p-3">
                  <p className="text-sm font-medium">Top Text: "When you're a brat"</p>
                  <p className="text-sm font-medium">Bottom Text: "But make it viral"</p>
                </div>
                <Button className="w-full gradient-bg text-white border-0">Download Meme</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
