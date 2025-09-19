import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MemeEditor } from "@/components/meme-editor"
import { StructuredData } from "@/components/structured-data"
import { Breadcrumb } from "@/components/breadcrumb"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meme Generator - Create Viral Brat Memes | BratMemes",
  description:
    "Use our powerful meme generator to create viral Brat memes. Upload images, add custom text, choose fonts and colors, then share instantly on social media.",
  keywords: "meme generator, brat memes, meme maker, viral memes, custom memes, meme editor",
  openGraph: {
    title: "Meme Generator - Create Viral Brat Memes | BratMemes",
    description:
      "Use our powerful meme generator to create viral Brat memes. Upload images, add custom text, choose fonts and colors, then share instantly on social media.",
    type: "website",
    images: [
      {
        url: "https://bratmemes.com/meme-generator-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Brat Meme Generator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meme Generator - Create Viral Brat Memes | BratMemes",
    description:
      "Use our powerful meme generator to create viral Brat memes. Upload images, add custom text, choose fonts and colors, then share instantly on social media.",
    images: ["https://bratmemes.com/meme-generator-preview.jpg"],
  },
}

export default function MemeGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData type="webapp" data={{}} />
      <Navigation />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: "Meme Generator", url: "/meme-generator" }]} />
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meme Generator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create viral Brat memes with our easy-to-use editor. Upload images, add text, and share instantly.
            </p>
          </div>
          <MemeEditor />
        </div>
      </main>
      <Footer />
    </div>
  )
}
