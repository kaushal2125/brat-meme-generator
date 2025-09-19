import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TemplatesGallery } from "@/components/templates-gallery"
import { Breadcrumb } from "@/components/breadcrumb"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meme Templates Gallery - Trending Brat Meme Templates | BratMemes",
  description:
    "Browse our collection of viral Brat meme templates. Filter by trending, funny, Brat, and Bollywood categories. Find the perfect template for your next viral meme.",
  keywords: "brat meme templates, viral meme templates, trending memes, funny meme templates, meme gallery",
  openGraph: {
    title: "Meme Templates Gallery - Trending Brat Meme Templates | BratMemes",
    description:
      "Browse our collection of viral Brat meme templates. Filter by trending, funny, Brat, and Bollywood categories. Find the perfect template for your next viral meme.",
    type: "website",
  },
}

const templatesData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Brat Meme Templates Gallery",
  description: "Collection of viral Brat meme templates for creating trending memes",
  url: "https://bratmemes.com/templates",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 12,
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: "Brat Summer Template",
        description: "Trending Brat summer meme template",
        url: "https://bratmemes.com/templates/brat-summer",
      },
    ],
  },
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="website" data={templatesData} />
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Templates", url: "/templates" }]} />
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meme Templates Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover trending Brat meme templates and create your next viral sensation
            </p>
          </div>
          <TemplatesGallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}
