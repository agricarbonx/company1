import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Satellite, BarChart3, Shield, Zap, Globe, Users, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Satellite,
    title: "Precision Soil Monitoring",
    description:
      "Advanced satellite imagery and IoT sensors provide real-time soil carbon measurements with 98% accuracy.",
    benefits: ["Real-time monitoring", "Satellite integration", "IoT sensor network"],
    category: "Monitoring",
  },
  {
    icon: Shield,
    title: "Carbon Credit Verification",
    description:
      "Blockchain-secured verification system ensures transparent and tamper-proof carbon credit generation.",
    benefits: ["Blockchain security", "Automated verification", "Compliance ready"],
    category: "Verification",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "AI-powered insights help optimize farming practices for maximum carbon sequestration and profitability.",
    benefits: ["AI-driven insights", "Predictive modeling", "ROI optimization"],
    category: "Analytics",
  },
  {
    icon: Globe,
    title: "Global Marketplace",
    description: "Connect directly with carbon buyers worldwide through our integrated marketplace platform.",
    benefits: ["Direct buyer access", "Competitive pricing", "Global reach"],
    category: "Marketplace",
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description: "Generate compliance reports and documentation automatically for seamless carbon credit transactions.",
    benefits: ["Auto-generated reports", "Compliance tracking", "Export capabilities"],
    category: "Reporting",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Access to agronomists and carbon specialists to maximize your farm's carbon potential.",
    benefits: ["Expert consultation", "24/7 support", "Best practices"],
    category: "Support",
  },
]

export function ProductShowcase() {
  return (
    <section id="platform" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-orb-1" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl animate-float-orb-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-badge-glow">
            TerraVision Platform
          </Badge>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6 animate-gradient-text bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-shimmer-enhanced">
            Complete Soil Carbon Intelligence
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            From monitoring to monetization, TerraVision provides everything you need to transform your agricultural
            practices into profitable carbon solutions.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass hover:glass-strong transition-all duration-500 hover:scale-105 animate-slide-up border-0 group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 animate-icon-pulse">
                    <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300 animate-icon-glow" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs animate-badge-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {feature.category}
                  </Badge>
                </div>
                <CardTitle className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="font-sans text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefit}
                      className="flex items-center text-sm text-muted-foreground animate-benefit-appear"
                      style={{ animationDelay: `${index * 100 + benefitIndex * 50}ms` }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 animate-check-glow" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="absolute inset-0 rounded-lg border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Platform Overview */}
        <div className="glass-strong rounded-2xl p-8 lg:p-12 text-center animate-fade-in relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-green-400/5 opacity-50" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-3xl text-foreground mb-6 animate-gradient-text bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-shimmer-enhanced">
              Ready to Start Your Carbon Journey?
            </h3>
            <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up">
              Join thousands of farmers already generating revenue through sustainable practices. Our platform handles
              the complexity while you focus on what you do best - farming.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="text-lg px-8 py-4 font-semibold animate-button-glow hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 glass bg-transparent animate-glass-shimmer hover:scale-105 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "15,000+", label: "Active Farmers" },
                { value: "50+", label: "Countries" },
                { value: "$2.1B", label: "Credits Traded" },
                { value: "99.2%", label: "Uptime" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-stat-counter group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl font-bold text-primary mb-1 animate-counter-enhanced group-hover:animate-pulse-glow-enhanced">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
