import { Hero } from "@/components/hero"
import { PaymentTypes } from "@/components/payment-types"
import { About } from "@/components/about"
import { PainPoints } from "@/components/pain-points"
import { PCICompliance } from "@/components/pci-compliance"
import { Features } from "@/components/features"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PaymentTypes />
        <About />
        <PainPoints />
        <PCICompliance />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
