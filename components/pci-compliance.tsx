import { Shield, Activity, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Shield,
    title: "Setup",
  },
  {
    icon: Activity,
    title: "Monitor",
  },
  {
    icon: RefreshCw,
    title: "Renew",
  },
]

export function PCICompliance() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">PCI Compliance Made Simple</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We even handle your PCI setup and renewals so you stay compliant — no hassle, no stress, no missed
            deadlines.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                </div>
                <p className="font-semibold text-lg">{step.title}</p>
              </div>
              {index < steps.length - 1 && <div className="hidden sm:block w-12 h-0.5 bg-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
