import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { InteractiveMapDemo } from "@/components/interactive-map-demo"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InvestorInsights } from "@/components/investor-insights"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <InteractiveMapDemo />
      <TestimonialsSection />
      <InvestorInsights />
      <ContactSection />
      <Footer />
    </main>
  )
}
