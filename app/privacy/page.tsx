import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - BratMemes",
  description: "Learn how BratMemes protects your privacy and handles your data when using our meme generator.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 17, 2024</p>
          </div>

          <Card className="gradient-card">
            <CardContent className="p-8 prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground">
              <h2>Information We Collect</h2>
              <p>
                When you use BratMemes, we may collect certain information to provide and improve our services. This
                includes:
              </p>
              <ul>
                <li>Images you upload to create memes (processed locally and not stored)</li>
                <li>Usage analytics to understand how our tools are used</li>
                <li>Technical information like browser type and device information</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our meme generation services</li>
                <li>Improve our platform and user experience</li>
                <li>Analyze usage patterns to enhance our features</li>
                <li>Communicate with you about updates and new features</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We take data security seriously. Images uploaded to our meme generator are processed in your browser and
                are not stored on our servers. We implement appropriate security measures to protect any data we do
                collect.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We use analytics services to understand how our platform is used. These services may collect information
                about your usage patterns in accordance with their own privacy policies.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@bratmemes.com.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
