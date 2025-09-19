import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Brat Summer: How Charli XCX Changed Meme Culture",
    excerpt:
      "Exploring the cultural phenomenon that took social media by storm and redefined what it means to be a 'brat'.",
    image: "/brat-summer-culture-blog-post.jpg",
    date: "Dec 15, 2024",
    category: "Culture",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "10 Viral Brat Meme Templates That Broke the Internet",
    excerpt: "A deep dive into the most popular Brat meme formats and why they resonated with millions.",
    image: "/viral-brat-memes-blog-post.jpg",
    date: "Dec 12, 2024",
    category: "Trends",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "How to Create Memes That Actually Go Viral",
    excerpt: "Expert tips and strategies for creating memes that capture attention and spread like wildfire.",
    image: "/viral-meme-creation-tips-blog-post.jpg",
    date: "Dec 10, 2024",
    category: "Tips",
    readTime: "6 min read",
  },
]

export function BlogTeaser() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest meme trends, tips, and cultural insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 gradient-card">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{post.category}</Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    <Link href={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
