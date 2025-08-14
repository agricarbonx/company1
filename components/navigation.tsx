"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

const navItems = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong backdrop-blur-xl shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="relative group">
              <img
                src="/agricarbonx-logo-circular.png"
                alt="AgriCarbonX"
                className="h-12 w-12 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <span className="ml-3 font-display text-xl font-bold text-foreground tracking-tight">AgriCarbonX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 font-display text-base font-semibold text-foreground/90 hover:text-primary transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-0.5"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={(e) => {
                    e.preventDefault()
                    const targetId = item.href.substring(1)
                    const element = document.getElementById(targetId)
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                >
                  <span className="relative z-10 tracking-wide">{item.name}</span>

                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full"></span>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm -z-10"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-lg"></div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 -translate-x-1/2 -translate-y-2"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              size="sm"
              className="font-semibold relative overflow-hidden group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:bg-primary/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong rounded-xl mt-2 p-6 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block font-display text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 hover:translate-x-3 transform hover:scale-105 py-2 px-3 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <Button size="sm" className="w-full mt-6 font-semibold bg-primary hover:bg-primary/90 shadow-lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
