import { CreditCard, ShoppingCart, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const paymentTypes = [
  {
    icon: CreditCard,
    title: "In-Store Payments",
    description: "Card terminals & contactless",
  },
  {
    icon: ShoppingCart,
    title: "Online Payments",
    description: "E-commerce & digital checkout",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Multi-currency & international",
  },
]

export function PaymentTypes() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {paymentTypes.map((type, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
