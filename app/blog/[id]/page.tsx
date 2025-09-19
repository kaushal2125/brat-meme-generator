import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog-post"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: "1",
    title: "The Rise of Brat Summer: How Charli XCX Changed Meme Culture",
    excerpt:
      "Exploring the cultural phenomenon that took social media by storm and redefined what it means to be a 'brat'.",
    content: `
      <p>The summer of 2024 will forever be remembered as "Brat Summer" - a cultural phenomenon that transcended music and became a defining moment in internet culture. Charli XCX's album "Brat" didn't just top the charts; it created an entirely new aesthetic and attitude that dominated social media platforms worldwide.</p>
      
      <h2>What Makes Something "Brat"?</h2>
      <p>The concept of being a "brat" in this context isn't about being spoiled or difficult. Instead, it represents a specific type of confidence - one that's unapologetic, authentic, and slightly chaotic. It's about embracing your flaws and turning them into strengths.</p>
      
      <p>The visual aesthetic of Brat culture is instantly recognizable: lime green backgrounds, bold typography, and a deliberately lo-fi approach that feels both nostalgic and futuristic. This aesthetic became the foundation for thousands of memes that spread across TikTok, Instagram, and Twitter.</p>
      
      <h2>The Meme Evolution</h2>
      <p>What started as album promotion quickly evolved into a broader cultural movement. Users began creating their own "Brat" versions of everything - from movie posters to corporate logos. The simplicity of the aesthetic made it incredibly accessible for meme creators.</p>
      
      <p>The most successful Brat memes shared common elements: they were easy to replicate, highly shareable, and tapped into current cultural moments. This combination created the perfect storm for viral content.</p>
      
      <h2>Impact on Digital Culture</h2>
      <p>Brat Summer demonstrated the power of music to influence visual culture in the digital age. It showed how a cohesive aesthetic could become a language that millions of people could speak fluently, creating content that felt both personal and part of a larger movement.</p>
      
      <p>The phenomenon also highlighted the importance of authenticity in viral content. The slightly imperfect, DIY aesthetic of Brat memes resonated because it felt genuine in an era of over-polished social media content.</p>
    `,
    image: "/brat-summer-culture-blog-post.jpg",
    date: "Dec 15, 2024",
    category: "Culture",
    readTime: "5 min read",
    author: "Alex Chen",
    tags: ["brat summer", "charli xcx", "meme culture", "viral trends"],
  },
  {
    id: "2",
    title: "10 Viral Brat Meme Templates That Broke the Internet",
    excerpt: "A deep dive into the most popular Brat meme formats and why they resonated with millions.",
    content: `
      <p>Since the explosion of Brat culture, certain meme templates have emerged as the most shareable and adaptable formats. Let's explore the templates that defined a generation of internet culture.</p>
      
      <h2>1. The Classic Brat Text Template</h2>
      <p>The foundation of all Brat memes - simple lime green background with bold, lowercase text. Its power lies in its simplicity and instant recognizability.</p>
      
      <h2>2. Brat Album Cover Parodies</h2>
      <p>Users began recreating the iconic album cover format with their own text, creating everything from personal statements to brand parodies.</p>
      
      <h2>3. "When You're Brat But..." Format</h2>
      <p>This template became popular for expressing contradictions and relatable situations, always starting with the premise of being "brat" but then subverting expectations.</p>
      
      <h2>Why These Templates Work</h2>
      <p>The most successful Brat meme templates share several key characteristics:</p>
      <ul>
        <li>Simple, recognizable format</li>
        <li>Easy to customize with personal content</li>
        <li>Flexible enough for various contexts</li>
        <li>Instantly identifiable as part of the Brat aesthetic</li>
      </ul>
      
      <p>These templates succeeded because they provided a framework that was both structured enough to be recognizable and flexible enough to allow for creative expression.</p>
    `,
    image: "/viral-brat-memes-blog-post.jpg",
    date: "Dec 12, 2024",
    category: "Trends",
    readTime: "7 min read",
    author: "Sam Rodriguez",
    tags: ["viral memes", "meme templates", "brat memes", "internet culture"],
  },
  {
    id: "3",
    title: "How to Create Memes That Actually Go Viral",
    excerpt: "Expert tips and strategies for creating memes that capture attention and spread like wildfire.",
    content: `
      <p>Creating a viral meme isn't just about luck - there's a science to what makes content shareable. After analyzing thousands of viral memes, we've identified the key patterns that separate viral hits from forgotten posts.</p>
      
      <h2>Timing Is Everything</h2>
      <p>The most viral memes tap into current events, trending topics, or cultural moments. They capture a feeling or experience that many people are having simultaneously.</p>
      
      <h2>Keep It Simple</h2>
      <p>Viral memes are easy to understand at a glance. If someone needs to think too hard about your meme, they're less likely to share it. The best memes communicate their message instantly.</p>
      
      <h2>Make It Relatable</h2>
      <p>The most shareable content makes people think "this is so me" or "I need to send this to my friend." Personal connection drives sharing behavior.</p>
      
      <h2>Use Familiar Formats</h2>
      <p>Building on established meme templates gives your content instant context. People understand how to "read" your meme because they're familiar with the format.</p>
      
      <h2>Quality Matters (But Not How You Think)</h2>
      <p>While your meme doesn't need to be professionally designed, it should be clear and readable. Poor image quality or hard-to-read text can kill a potentially viral meme.</p>
      
      <h2>Platform-Specific Optimization</h2>
      <p>Different platforms favor different types of content. What works on TikTok might not work on Twitter. Understand your platform's culture and optimize accordingly.</p>
      
      <h2>The X-Factor: Authenticity</h2>
      <p>The most viral memes feel genuine. They capture real emotions or experiences in a way that feels authentic rather than forced or corporate.</p>
    `,
    image: "/viral-meme-creation-tips-blog-post.jpg",
    date: "Dec 10, 2024",
    category: "Tips",
    readTime: "6 min read",
    author: "Jordan Kim",
    tags: ["viral content", "meme creation", "social media tips", "content strategy"],
  },
]

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: "Post Not Found | BratMemes Blog",
    }
  }

  return {
    title: `${post.title} | BratMemes Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <BlogPost post={post} relatedPosts={blogPosts.filter((p) => p.id !== params.id).slice(0, 3)} />
      </main>
      <Footer />
    </div>
  )
}
