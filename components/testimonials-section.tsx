"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Owner, Johnson Family Farms",
    location: "Iowa, USA",
    image: "/female-farmer-portrait-professional.png",
    quote:
      "TerraVision transformed our 2,500-acre operation. We've generated over $180,000 in carbon credits while improving our soil health. The platform makes complex carbon science accessible to farmers like us.",
    rating: 5,
    category: "Farmer",
    metrics: {
      acres: "2,500",
      credits: "$180K",
      improvement: "23%",
    },
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Sustainability Director",
    location: "Microsoft Carbon Program",
    image: "/asian-male-executive-professional-suit.png",
    quote:
      "AgriCarbonX provides the verification transparency we need for our net-zero commitments. Their blockchain-secured credits give us confidence in our carbon offset investments.",
    rating: 5,
    category: "Carbon Buyer",
    metrics: {
      purchased: "50K tons",
      verified: "99.8%",
      savings: "$2.3M",
    },
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Managing Partner",
    location: "GreenTech Ventures",
    image: "/latina-investor.png",
    quote:
      "The scalability and precision of TerraVision's platform represents the future of agricultural carbon markets. We're proud to support their mission to democratize carbon farming.",
    rating: 5,
    category: "Investor",
    metrics: {
      investment: "$15M",
      portfolio: "12 farms",
      returns: "34% IRR",
    },
  },
  {
    id: 4,
    name: "Robert Thompson",
    title: "Ranch Manager",
    location: "Thompson Cattle Ranch, Texas",
    image: "/male-rancher-professional.png",
    quote:
      "Switching to regenerative practices with TerraVision's guidance increased our soil carbon by 40% in just two years. The additional revenue stream helps us invest in sustainable equipment.",
    rating: 5,
    category: "Farmer",
    metrics: {
      acres: "8,200",
      increase: "40%",
      revenue: "$320K",
    },
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    title: "Chief Procurement Officer",
    location: "Unilever Sustainable Living",
    image: "/female-executive-business-suit.png",
    quote:
      "AgriCarbonX delivers measurable impact for our supply chain sustainability goals. Their farmer network provides high-quality, verified carbon credits at competitive prices.",
    rating: 5,
    category: "Carbon Buyer",
    metrics: {
      contracts: "200+",
      reduction: "1.2M tons",
      suppliers: "85",
    },
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Success Stories
          </Badge>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From family farms to Fortune 500 companies, see how TerraVision is transforming agriculture and carbon
            markets worldwide.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <Card className="glass-strong border-0 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Quote Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="font-sans text-xl lg:text-2xl text-foreground leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full border-3 border-primary object-cover"
                    />
                    <div>
                      <div className="font-serif font-bold text-lg text-foreground">{currentTestimonial.name}</div>
                      <div className="font-sans text-muted-foreground">{currentTestimonial.title}</div>
                      <div className="font-sans text-sm text-muted-foreground">{currentTestimonial.location}</div>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {currentTestimonial.category}
                    </Badge>
                  </div>
                </div>

                {/* Metrics Section */}
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-lg text-foreground mb-4">Key Metrics</h4>
                  <div className="space-y-3">
                    {Object.entries(currentTestimonial.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                        <span className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="font-bold text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="glass bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="glass bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`glass hover:glass-strong transition-all duration-300 cursor-pointer border-0 ${
                index === currentIndex ? "ring-2 ring-primary/50" : ""
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-serif font-bold text-sm text-foreground">{testimonial.name}</div>
                    <div className="font-sans text-xs text-muted-foreground">{testimonial.category}</div>
                  </div>
                  <Badge variant="outline" size="sm">
                    {testimonial.rating}★
                  </Badge>
                </div>
                <p className="font-sans text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
