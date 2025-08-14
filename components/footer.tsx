import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight, Leaf, Shield, Award } from "lucide-react"

const footerLinks = {
  platform: [
    { name: "TerraVision Dashboard", href: "#" },
    { name: "Carbon Monitoring", href: "#" },
    { name: "Verification System", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "API Documentation", href: "#" },
  ],
  solutions: [
    { name: "For Farmers", href: "#" },
    { name: "For Carbon Buyers", href: "#" },
    { name: "For Investors", href: "#" },
    { name: "Enterprise Solutions", href: "#" },
    { name: "Consulting Services", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "White Papers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Webinars", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Investor Relations", href: "#" },
  ],
}

const certifications = [
  { name: "ISO 14064", icon: Shield },
  { name: "Verra VCS", icon: Award },
  { name: "Gold Standard", icon: Leaf },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AGRICARBON%20LOGO-ALG36shwMDZg53GZMELwLSp28MxYTW.png"
                  alt="AgriCarbonX"
                  className="h-10 mb-4"
                />
                <p className="font-sans text-muted-foreground leading-relaxed max-w-md">
                  Transforming agriculture through intelligent soil carbon monitoring and verification. Join thousands
                  of farmers generating sustainable revenue while fighting climate change.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@agricarbonx.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="glass bg-transparent">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="glass bg-transparent">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="glass bg-transparent">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-serif font-bold text-foreground mb-4">Platform</h3>
                <ul className="space-y-3">
                  {footerLinks.platform.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-foreground mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 glass rounded-2xl p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Stay Updated</h3>
              <p className="font-sans text-muted-foreground mb-6">
                Get the latest insights on soil carbon, market trends, and platform updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="font-semibold">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 text-center">
            <h4 className="font-serif font-bold text-lg text-foreground mb-6">Certified & Verified</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert) => (
                <Badge key={cert.name} variant="outline" className="flex items-center gap-2 px-4 py-2">
                  <cert.icon className="h-4 w-4 text-primary" />
                  {cert.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© 2024 AgriCarbonX. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
