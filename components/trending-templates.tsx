import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TrendingUp, Clock } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Brat Summer",
    image: "/brat-summer-meme-template.jpg",
    category: "Popular",
    uses: "2.3k",
    trending: true,
  },
  {
    id: 2,
    name: "Charli XCX Vibes",
    image: "/charli-xcx-brat-meme-template.jpg",
    category: "New",
    uses: "1.8k",
    trending: false,
  },
  {
    id: 3,
    name: "Green Aesthetic",
    image: "/green-brat-aesthetic-meme-template.jpg",
    category: "Popular",
    uses: "3.1k",
    trending: true,
  },
  {
    id: 4,
    name: "Brat Energy",
    image: "/brat-energy-meme-template.jpg",
    category: "Trending",
    uses: "4.2k",
    trending: true,
  },
  {
    id: 5,
    name: "Club Classic",
    image: "/club-brat-meme-template.jpg",
    category: "Popular",
    uses: "1.9k",
    trending: false,
  },
  {
    id: 6,
    name: "Bratty Mood",
    image: "/bratty-mood-meme-template.jpg",
    category: "New",
    uses: "856",
    trending: false,
  },
]

export function TrendingTemplates() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trending Templates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our most popular Brat meme templates and join the viral conversation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 gradient-card">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {template.trending && (
                      <Badge className="bg-primary text-primary-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    {template.category === "New" && (
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.uses} uses</p>
                  <Button asChild className="w-full gradient-bg text-white border-0 hover:opacity-90">
                    <Link href={`/meme-generator?template=${template.id}`}>Use Template</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/templates">View All Templates</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
