import { Card, CardContent } from "@/components/ui/card"
import { Upload, Type, Download, Share } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Choose from our templates or upload your own image to get started",
    step: "01",
  },
  {
    icon: Type,
    title: "Edit",
    description: "Add your text, choose fonts, colors, and position everything perfectly",
    step: "02",
  },
  {
    icon: Download,
    title: "Download",
    description: "Export your meme in high quality, ready for any platform",
    step: "03",
  },
  {
    icon: Share,
    title: "Share",
    description: "Share directly to social media or save for later use",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create viral memes in just 4 simple steps. No design experience needed!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative gradient-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
