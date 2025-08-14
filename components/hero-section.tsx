"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, TrendingUp, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient-shift opacity-30" />

        {/* Dynamic color orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-orb-1" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-green-400/15 rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-float-orb-3" />

        {/* Farmland background with enhanced effects */}
        <div className="absolute inset-0 bg-[url('/green-farmland-soil.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />

        {/* Enhanced floating particles system */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float-enhanced ${
                i % 3 === 0
                  ? "w-3 h-3 bg-primary/40"
                  : i % 3 === 1
                    ? "w-2 h-2 bg-green-400/30"
                    : "w-1 h-1 bg-emerald-300/50"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive cursor effects */}
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-500 animate-pulse-slow"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-green-400/15 rounded-full blur-2xl pointer-events-none transition-all duration-700"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-geometric-pattern animate-pattern-drift" />
        </div>
      </div>

      {/* Enhanced glassmorphism overlay with depth */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-b from-white/10 via-transparent to-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-bounce-in opacity-100" : "opacity-0 scale-50"}`}
        >
          <div className="relative inline-block">
            <div className="relative group">
              <img
                src="/agricarbonx-logo-circular.png"
                alt="AgriCarbonX Logo"
                className="h-24 w-24 mx-auto mb-6 rounded-full object-cover drop-shadow-2xl hover:scale-110 transition-all duration-500 group-hover:rotate-12 shadow-2xl shadow-primary/30 border-4 border-white/20 backdrop-blur-sm logo-shadow-glow animate-logo-pulse"
              />

              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse group-hover:bg-primary/50 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full blur-xl animate-spin-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-green-400/10 to-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-300/5 via-primary/5 to-green-400/5 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>

              {/* Enhanced floating particles around logo */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float-around-enhanced"
                    style={{
                      left: `${50 + 50 * Math.cos((i * Math.PI * 2) / 12)}%`,
                      top: `${50 + 50 * Math.sin((i * Math.PI * 2) / 12)}%`,
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Enhanced ripple effects */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/30 group-hover:scale-150 transition-all duration-1000 ease-out animate-ripple-continuous"></div>
              <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-200 transition-all duration-1500 ease-out delay-200"></div>
              <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/10 group-hover:scale-250 transition-all duration-2000 ease-out delay-400"></div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="inline-block animate-gradient-text bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-shimmer-enhanced">
              Transform Your Farm Into a
            </span>
            <br />
            <span className="relative inline-block">
              <span className="text-primary animate-pulse-glow-enhanced">Carbon Credit</span>
              <Sparkles className="absolute -top-2 -right-8 h-8 w-8 text-primary animate-spin-slow animate-sparkle-glow" />
            </span>
            <br />
            <span className="animate-gradient-text bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-shimmer-enhanced">
              Powerhouse
            </span>
          </h1>

          <p className="font-sans text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            TerraVision's <span className="text-primary font-semibold animate-text-glow">revolutionary AI-powered</span>{" "}
            soil carbon monitoring and verification platform helps farmers maximize carbon sequestration while
            generating <span className="text-primary font-semibold animate-text-glow">sustainable revenue streams</span>
            .
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-4 font-semibold relative overflow-hidden group bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-button-glow"
          >
            <span className="relative z-10">Explore TerraVision</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-green-400/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 glass bg-transparent hover:bg-primary/10 border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 animate-glass-shimmer"
          >
            <span className="mr-2">🎥</span>
            Watch Demo
          </Button>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div
            className="glass rounded-xl p-8 hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-card-float"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Leaf className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300 animate-icon-glow" />
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-4xl font-bold text-foreground mb-2 animate-counter-enhanced">2.5M+</div>
            <div className="text-muted-foreground font-medium">Acres Monitored</div>
            <div className="mt-2 text-xs text-primary font-semibold animate-bounce-subtle">↗ +23% this quarter</div>
          </div>

          <div
            className="glass rounded-xl p-8 hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-card-float"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <TrendingUp className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300 animate-icon-glow" />
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-4xl font-bold text-foreground mb-2 animate-counter-enhanced">$127M</div>
            <div className="text-muted-foreground font-medium">Carbon Credits Generated</div>
            <div className="mt-2 text-xs text-primary font-semibold animate-bounce-subtle">↗ +156% YoY growth</div>
          </div>

          <div
            className="glass rounded-xl p-8 hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group animate-card-float"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-icon-glow">
                  <span className="text-primary-foreground font-bold text-lg">✓</span>
                </div>
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-4xl font-bold text-foreground mb-2 animate-counter-enhanced">98.7%</div>
            <div className="text-muted-foreground font-medium">Verification Accuracy</div>
            <div className="mt-2 text-xs text-primary font-semibold animate-bounce-subtle">
              Industry leading precision
            </div>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}
        >
          <p className="text-sm text-muted-foreground mb-4 animate-fade-in-delayed">Trusted by leading organizations</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-lg font-semibold animate-trust-badge hover:scale-110 transition-transform duration-300">
              🌾 USDA
            </div>
            <div
              className="text-lg font-semibold animate-trust-badge hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              🌍 EPA
            </div>
            <div
              className="text-lg font-semibold animate-trust-badge hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              📊 Verra
            </div>
            <div
              className="text-lg font-semibold animate-trust-badge hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: "0.6s" }}
            >
              🏛️ Gold Standard
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
