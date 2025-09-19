import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-list"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meme Culture Blog - Latest Trends & Tips | BratMemes",
  description:
    "Stay updated with the latest meme trends, Brat culture insights, and viral content creation tips. Learn how to create memes that actually go viral.",
  keywords: "meme blog, brat culture, viral memes, meme trends, social media trends, meme creation tips",
  openGraph: {
    title: "Meme Culture Blog - Latest Trends & Tips | BratMemes",
    description:
      "Stay updated with the latest meme trends, Brat culture insights, and viral content creation tips. Learn how to create memes that actually go viral.",
    type: "website",
  },
}

const blogData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "BratMemes Blog",
  description: "Latest meme trends, Brat culture insights, and viral content creation tips",
  url: "https://bratmemes.com/blog",
  publisher: {
    "@type": "Organization",
    name: "BratMemes",
    logo: "https://bratmemes.com/logo.png",
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="website" data={blogData} />
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meme Culture Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead of the curve with the latest meme trends, cultural insights, and viral content creation tips
            </p>
          </div>
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
