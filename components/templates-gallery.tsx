"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, TrendingUp, Clock, Heart, Sparkles } from "lucide-react"

interface Template {
  id: number
  name: string
  image: string
  category: string
  uses: string
  trending: boolean
  tags: string[]
  description: string
}

const templates: Template[] = [
  {
    id: 1,
    name: "Brat Summer",
    image: "/brat-summer-meme-template.jpg",
    category: "Trending",
    uses: "2.3k",
    trending: true,
    tags: ["brat", "summer", "charli"],
    description: "The iconic Brat Summer aesthetic that defined 2024",
  },
  {
    id: 2,
    name: "Charli XCX Vibes",
    image: "/charli-xcx-brat-meme-template.jpg",
    category: "Brat",
    uses: "1.8k",
    trending: false,
    tags: ["charli", "brat", "music"],
    description: "Channel your inner Charli XCX with this template",
  },
  {
    id: 3,
    name: "Green Aesthetic",
    image: "/green-brat-aesthetic-meme-template.jpg",
    category: "Trending",
    uses: "3.1k",
    trending: true,
    tags: ["green", "aesthetic", "brat"],
    description: "The signature Brat green that everyone loves",
  },
  {
    id: 4,
    name: "Brat Energy",
    image: "/brat-energy-meme-template.jpg",
    category: "Funny",
    uses: "4.2k",
    trending: true,
    tags: ["energy", "mood", "brat"],
    description: "Perfect for expressing that bratty energy",
  },
  {
    id: 5,
    name: "Club Classic",
    image: "/club-brat-meme-template.jpg",
    category: "Brat",
    uses: "1.9k",
    trending: false,
    tags: ["club", "party", "night"],
    description: "For those late-night club moments",
  },
  {
    id: 6,
    name: "Bratty Mood",
    image: "/bratty-mood-meme-template.jpg",
    category: "Funny",
    uses: "856",
    trending: false,
    tags: ["mood", "attitude", "sassy"],
    description: "When you're feeling extra bratty",
  },
  {
    id: 7,
    name: "Neon Dreams",
    image: "/neon-brat-dreams-template.jpg",
    category: "Trending",
    uses: "2.7k",
    trending: true,
    tags: ["neon", "dreams", "aesthetic"],
    description: "Bright neon vibes for your memes",
  },
  {
    id: 8,
    name: "Party Brat",
    image: "/party-brat-template.jpg",
    category: "Funny",
    uses: "1.5k",
    trending: false,
    tags: ["party", "fun", "celebration"],
    description: "Perfect for party-themed memes",
  },
  {
    id: 9,
    name: "Bollywood Brat",
    image: "/bollywood-brat-template.jpg",
    category: "Bollywood",
    uses: "987",
    trending: false,
    tags: ["bollywood", "drama", "indian"],
    description: "Bollywood meets Brat culture",
  },
  {
    id: 10,
    name: "Sassy Queen",
    image: "/sassy-queen-brat-template.jpg",
    category: "Funny",
    uses: "2.1k",
    trending: true,
    tags: ["sassy", "queen", "attitude"],
    description: "For when you're feeling like royalty",
  },
  {
    id: 11,
    name: "Retro Brat",
    image: "/retro-brat-template.jpg",
    category: "Brat",
    uses: "1.3k",
    trending: false,
    tags: ["retro", "vintage", "throwback"],
    description: "Vintage vibes with modern attitude",
  },
  {
    id: 12,
    name: "Cyber Brat",
    image: "/cyber-brat-template.jpg",
    category: "Trending",
    uses: "3.4k",
    trending: true,
    tags: ["cyber", "futuristic", "tech"],
    description: "Futuristic Brat aesthetic",
  },
]

const categories = ["All", "Trending", "Funny", "Brat", "Bollywood"]

export function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Trending":
        return <TrendingUp className="h-4 w-4" />
      case "Funny":
        return <Heart className="h-4 w-4" />
      case "Brat":
        return <Sparkles className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "gradient-bg text-white border-0 hover:opacity-90"
                  : "hover:bg-accent hover:text-accent-foreground"
              }
            >
              {getCategoryIcon(category)}
              <span className="ml-1">{category}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredTemplates.length} template{filteredTemplates.length !== 1 ? "s" : ""}
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 gradient-card">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full aspect-square object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {template.trending && (
                    <Badge className="bg-primary text-primary-foreground">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <Badge variant="secondary" className="capitalize">
                    {template.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{template.uses} uses</span>
                  <div className="flex gap-1">
                    {template.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-muted px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full gradient-bg text-white border-0 hover:opacity-90">
                  <Link href={`/meme-generator?template=${template.id}`}>Use Template</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No templates found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("All")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Load More (Placeholder for future pagination) */}
      {filteredTemplates.length > 0 && filteredTemplates.length >= 12 && (
        <div className="text-center pt-8">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      )}
    </div>
  )
}
