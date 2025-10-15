import { Phone, EyeOff, FileQuestion, TrendingUp } from "lucide-react"

const painPoints = [
  {
    icon: Phone,
    title: "Endless Phone Calls",
    description: "Chasing quotes and dealing with pushy sales tactics",
  },
  {
    icon: EyeOff,
    title: "Hidden Fees",
    description: "Surprise charges that appear on your statements",
  },
  {
    icon: FileQuestion,
    title: "Confusing Quotes",
    description: "Complex pricing that's impossible to compare",
  },
  {
    icon: TrendingUp,
    title: "Rate Increases",
    description: "Unexpected price hikes with little explanation",
  },
]

export function PainPoints() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
