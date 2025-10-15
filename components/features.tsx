import { Card } from "@/components/ui/card"
import { CheckCircle, Layers, Zap } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "Independent",
    description: "No ties to specific providers means we always find the best solution for you.",
  },
  {
    icon: Layers,
    title: "Transparent",
    description: "Clear explanations of every fee and charge — no confusing jargon or hidden costs.",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Quick reviews and rapid implementation — get your savings sooner.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
