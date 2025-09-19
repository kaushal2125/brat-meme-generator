import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from "lucide-react"

interface BlogPostProps {
  post: {
    id: string
    title: string
    content: string
    image: string
    date: string
    category: string
    readTime: string
    author: string
    tags: string[]
  }
  relatedPosts: Array<{
    id: string
    title: string
    excerpt: string
    image: string
    date: string
    category: string
    readTime: string
  }>
}

export function BlogPost({ post, relatedPosts }: BlogPostProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-3">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
            />

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-6 border-b border-border">
              <span className="text-sm font-medium text-foreground">Share:</span>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-li:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-foreground">Tags:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Related Posts */}
            <Card className="gradient-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Related Articles
                </h3>

                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group">
                      <Link href={`/blog/${relatedPost.id}`} className="block">
                        <div className="flex gap-3">
                          <img
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{relatedPost.date}</span>
                              <span>•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="gradient-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest meme trends and culture insights delivered to your inbox.
                </p>
                <Button className="w-full gradient-bg text-white border-0 hover:opacity-90">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  )
}
