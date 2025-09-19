import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "The Rise of Brat Summer: How Charli XCX Changed Meme Culture",
    excerpt:
      "Exploring the cultural phenomenon that took social media by storm and redefined what it means to be a 'brat'.",
    image: "/brat-summer-culture-blog-post.jpg",
    date: "Dec 15, 2024",
    category: "Culture",
    readTime: "5 min read",
    author: "Alex Chen",
    featured: true,
  },
  {
    id: "2",
    title: "10 Viral Brat Meme Templates That Broke the Internet",
    excerpt: "A deep dive into the most popular Brat meme formats and why they resonated with millions.",
    image: "/viral-brat-memes-blog-post.jpg",
    date: "Dec 12, 2024",
    category: "Trends",
    readTime: "7 min read",
    author: "Sam Rodriguez",
    featured: false,
  },
  {
    id: "3",
    title: "How to Create Memes That Actually Go Viral",
    excerpt: "Expert tips and strategies for creating memes that capture attention and spread like wildfire.",
    image: "/viral-meme-creation-tips-blog-post.jpg",
    date: "Dec 10, 2024",
    category: "Tips",
    readTime: "6 min read",
    author: "Jordan Kim",
    featured: false,
  },
  {
    id: "4",
    title: "The Psychology Behind Viral Memes",
    excerpt: "Understanding the cognitive triggers that make certain memes irresistible to share.",
    image: "/psychology-viral-memes-blog.jpg",
    date: "Dec 8, 2024",
    category: "Culture",
    readTime: "8 min read",
    author: "Dr. Maya Patel",
    featured: false,
  },
  {
    id: "5",
    title: "Meme Marketing: How Brands Can Join the Conversation",
    excerpt: "A guide for brands looking to authentically participate in meme culture without being cringe.",
    image: "/meme-marketing-guide-blog.jpg",
    date: "Dec 5, 2024",
    category: "Tips",
    readTime: "6 min read",
    author: "Chris Thompson",
    featured: false,
  },
  {
    id: "6",
    title: "The Evolution of Internet Humor: From Rage Comics to Brat Memes",
    excerpt: "Tracing the journey of online humor and how meme formats have evolved over the decades.",
    image: "/evolution-internet-humor-blog.jpg",
    date: "Dec 3, 2024",
    category: "Culture",
    readTime: "9 min read",
    author: "Riley Johnson",
    featured: false,
  },
]

export function BlogList() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      {featuredPost && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Badge className="gradient-bg text-white border-0">Featured</Badge>
            <h2 className="text-2xl font-bold text-foreground">Latest Article</h2>
          </div>

          <Card className="gradient-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover rounded-l-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h3>

                  <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>

                  <Button asChild className="gradient-bg text-white border-0 hover:opacity-90 w-fit">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-8">All Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
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

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>

                    <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      <Link href={`/blog/${post.id}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
