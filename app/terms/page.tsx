import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - BratMemes",
  description: "Read the terms of service for using BratMemes meme generator and related services.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 17, 2024</p>
          </div>

          <Card className="gradient-card">
            <CardContent className="p-8 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using BratMemes, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>

              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily use BratMemes for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2>Content Guidelines</h2>
              <p>When using our meme generator, you agree not to create content that:</p>
              <ul>
                <li>Is illegal, harmful, or violates any laws</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains hate speech or discriminatory content</li>
                <li>Is spam or misleading</li>
              </ul>

              <h2>Disclaimer</h2>
              <p>
                The materials on BratMemes are provided on an 'as is' basis. BratMemes makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>

              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at legal@bratmemes.com.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
