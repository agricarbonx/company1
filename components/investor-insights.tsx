"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, DollarSign, Globe, Users, ArrowUpRight, Target, Zap } from "lucide-react"
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const marketGrowthData = [
  { year: "2020", value: 1.2, projected: false },
  { year: "2021", value: 2.1, projected: false },
  { year: "2022", value: 3.8, projected: false },
  { year: "2023", value: 6.2, projected: false },
  { year: "2024", value: 11.5, projected: false },
  { year: "2025", value: 18.7, projected: true },
  { year: "2026", value: 28.4, projected: true },
  { year: "2027", value: 42.1, projected: true },
]

const revenueData = [
  { quarter: "Q1 '23", revenue: 2.3, growth: 145 },
  { quarter: "Q2 '23", revenue: 4.1, growth: 178 },
  { quarter: "Q3 '23", revenue: 6.8, growth: 166 },
  { quarter: "Q4 '23", revenue: 9.2, growth: 135 },
  { quarter: "Q1 '24", revenue: 12.7, growth: 152 },
  { quarter: "Q2 '24", revenue: 18.4, growth: 149 },
]

const adoptionData = [
  { month: "Jan", farmers: 1200, buyers: 45 },
  { month: "Feb", farmers: 1850, buyers: 62 },
  { month: "Mar", farmers: 2400, buyers: 78 },
  { month: "Apr", farmers: 3100, buyers: 94 },
  { month: "May", farmers: 4200, buyers: 118 },
  { month: "Jun", farmers: 5800, buyers: 142 },
]

export function InvestorInsights() {
  const [animatedValues, setAnimatedValues] = useState({
    marketSize: 0,
    growth: 0,
    farmers: 0,
    revenue: 0,
  })

  useEffect(() => {
    const targets = {
      marketSize: 847,
      growth: 156,
      farmers: 15800,
      revenue: 127,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        marketSize: Math.floor(targets.marketSize * progress),
        growth: Math.floor(targets.growth * progress),
        farmers: Math.floor(targets.farmers * progress),
        revenue: Math.floor(targets.revenue * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedValues(targets)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Investment Opportunity
          </Badge>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
            The Carbon Credit Revolution
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the fastest-growing sector in climate technology. AgriCarbonX is positioned at the intersection of
            agriculture, technology, and environmental impact.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="glass-strong border-0 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">${animatedValues.marketSize}B</div>
              <div className="text-sm text-muted-foreground">Global Carbon Market</div>
              <div className="text-xs text-primary mt-1">2024 Valuation</div>
            </CardContent>
          </Card>

          <Card className="glass-strong border-0 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{animatedValues.growth}%</div>
              <div className="text-sm text-muted-foreground">YoY Growth Rate</div>
              <div className="text-xs text-primary mt-1">Industry Leading</div>
            </CardContent>
          </Card>

          <Card className="glass-strong border-0 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{animatedValues.farmers.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Active Farmers</div>
              <div className="text-xs text-primary mt-1">Growing Network</div>
            </CardContent>
          </Card>

          <Card className="glass-strong border-0 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">${animatedValues.revenue}M</div>
              <div className="text-sm text-muted-foreground">Annual Revenue</div>
              <div className="text-xs text-primary mt-1">2024 Target</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Market Growth Chart */}
          <Card className="glass-strong border-0">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Carbon Market Growth
              </CardTitle>
              <CardDescription>Projected market size through 2027 (Billions USD)</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Market Size",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-64"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketGrowthData}>
                    <defs>
                      <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" axisLine={false} tickLine={false} className="text-xs" />
                    <YAxis axisLine={false} tickLine={false} className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      fill="url(#marketGradient)"
                      strokeDasharray={(entry: any) => (entry?.projected ? "5 5" : "0")}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Revenue Growth Chart */}
          <Card className="glass-strong border-0">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Revenue Growth
              </CardTitle>
              <CardDescription>Quarterly revenue and growth rate</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: {
                    label: "Revenue (M)",
                    color: "hsl(var(--primary))",
                  },
                  growth: {
                    label: "Growth %",
                    color: "hsl(var(--accent))",
                  },
                }}
                className="h-64"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <XAxis dataKey="quarter" axisLine={false} tickLine={false} className="text-xs" />
                    <YAxis axisLine={false} tickLine={false} className="text-xs" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Platform Adoption Chart */}
        <Card className="glass-strong border-0 mb-16">
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Platform Adoption Growth
            </CardTitle>
            <CardDescription>Monthly growth in farmers and carbon buyers on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                farmers: {
                  label: "Farmers",
                  color: "hsl(var(--primary))",
                },
                buyers: {
                  label: "Carbon Buyers",
                  color: "hsl(var(--accent))",
                },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adoptionData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="farmers"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="buyers"
                    stroke="hsl(var(--accent))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Investment Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="glass border-0">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">Market Leadership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                First-mover advantage in agricultural carbon intelligence with proprietary verification technology
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">Scalable Technology</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI-powered platform designed to scale globally with minimal marginal costs per new user
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardContent className="p-6 text-center">
              <ArrowUpRight className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">Strong Unit Economics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proven revenue model with 85% gross margins and clear path to profitability
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="glass-strong rounded-2xl p-8 lg:p-12 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif font-bold text-3xl text-foreground mb-6">Ready to Join the Carbon Revolution?</h3>
            <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
              Partner with AgriCarbonX to capitalize on the trillion-dollar opportunity in agricultural carbon markets.
              Our proven platform, growing network, and experienced team make us the ideal investment for
              forward-thinking investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-4 font-semibold">
                Request Investor Deck
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 glass bg-transparent">
                Schedule Meeting
              </Button>
            </div>

            {/* Investment Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Series B</div>
                <div className="text-sm text-muted-foreground">Current Round</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">$45M</div>
                <div className="text-sm text-muted-foreground">Raised to Date</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">3.2x</div>
                <div className="text-sm text-muted-foreground">Revenue Multiple</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">18 months</div>
                <div className="text-sm text-muted-foreground">Runway</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
