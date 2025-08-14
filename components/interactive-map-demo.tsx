"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, TrendingDown, Minus, Eye, BarChart3 } from "lucide-react"

const mapData = [
  {
    id: 1,
    name: "Iowa Corn Belt",
    coordinates: { x: 45, y: 35 },
    carbonLevel: 4.2,
    trend: "up",
    acres: 12500,
    credits: 8750,
    farmer: "Johnson Farms",
    soilType: "Prairie Mollisol",
  },
  {
    id: 2,
    name: "Nebraska Plains",
    coordinates: { x: 35, y: 40 },
    carbonLevel: 3.8,
    trend: "up",
    acres: 8900,
    credits: 6230,
    farmer: "Prairie View Ranch",
    soilType: "Grassland Mollisol",
  },
  {
    id: 3,
    name: "Kansas Wheat Fields",
    coordinates: { x: 40, y: 50 },
    carbonLevel: 3.1,
    trend: "stable",
    acres: 15600,
    credits: 4680,
    farmer: "Heartland Agriculture",
    soilType: "Great Plains Alfisol",
  },
  {
    id: 4,
    name: "Illinois Soybean",
    coordinates: { x: 55, y: 38 },
    carbonLevel: 4.7,
    trend: "up",
    acres: 9800,
    credits: 11270,
    farmer: "Green Valley Co-op",
    soilType: "Prairie Mollisol",
  },
  {
    id: 5,
    name: "Minnesota Organic",
    coordinates: { x: 48, y: 25 },
    carbonLevel: 5.1,
    trend: "up",
    acres: 6700,
    credits: 9180,
    farmer: "Sustainable Acres LLC",
    soilType: "Forest Alfisol",
  },
  {
    id: 6,
    name: "Wisconsin Dairy",
    coordinates: { x: 58, y: 28 },
    carbonLevel: 2.9,
    trend: "down",
    acres: 4200,
    credits: 2940,
    farmer: "Lakeside Dairy Farm",
    soilType: "Glacial Till",
  },
]

export function InteractiveMapDemo() {
  const [selectedPoint, setSelectedPoint] = useState<(typeof mapData)[0] | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500 animate-bounce-subtle" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500 animate-bounce-subtle" />
      default:
        return <Minus className="h-4 w-4 text-yellow-500" />
    }
  }

  const getCarbonColor = (level: number) => {
    if (level >= 4.5) return "bg-green-500 shadow-green-500/50"
    if (level >= 3.5) return "bg-yellow-500 shadow-yellow-500/50"
    return "bg-orange-500 shadow-orange-500/50"
  }

  return (
    <section id="solutions" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-orb-1" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float-orb-2" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-300/5 rounded-full blur-3xl animate-float-orb-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-badge-glow">
            Live Data Visualization
          </Badge>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6 animate-gradient-text bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-shimmer-enhanced">
            Real-Time Soil Carbon Monitoring
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Explore live soil carbon data from farms across the Midwest. Click on any location to see detailed metrics
            and carbon credit potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="glass-strong border-0 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary animate-icon-glow" />
                  Midwest Carbon Monitoring Network
                </CardTitle>
                <CardDescription>
                  Interactive visualization of soil carbon levels across participating farms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-lg h-96 overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('/midwest-usa-map.png')] bg-cover bg-center opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />

                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-geometric-pattern animate-pattern-drift" />
                  </div>

                  {/* Data points */}
                  {mapData.map((point, index) => (
                    <div
                      key={point.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 animate-map-point-appear"
                      style={{
                        left: `${point.coordinates.x}%`,
                        top: `${point.coordinates.y}%`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                      onMouseEnter={() => setHoveredPoint(point.id)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      onClick={() => setSelectedPoint(point)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${getCarbonColor(
                          point.carbonLevel,
                        )} border-2 border-white shadow-lg ${
                          hoveredPoint === point.id ? "scale-150 animate-pulse-glow-enhanced" : "scale-100"
                        } ${selectedPoint?.id === point.id ? "animate-selected-pulse" : ""} transition-all duration-300 animate-data-point-pulse`}
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                      {hoveredPoint === point.id && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 glass-ultra rounded-lg p-3 shadow-2xl min-w-48 z-10 animate-tooltip-appear border border-primary/20">
                          <div className="font-semibold text-sm text-foreground animate-text-glow">{point.name}</div>
                          <div className="text-xs text-muted-foreground">{point.farmer}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs text-muted-foreground">Carbon:</span>
                            <span className="text-xs font-medium text-foreground animate-counter-enhanced">
                              {point.carbonLevel}%
                            </span>
                            {getTrendIcon(point.trend)}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 glass-ultra rounded-lg p-3 animate-legend-appear">
                    <div className="text-xs font-semibold text-foreground mb-2 animate-text-glow">Carbon Levels</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 animate-legend-item" style={{ animationDelay: "0.1s" }}>
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-slow" />
                        <span className="text-xs text-muted-foreground">High (4.5%+)</span>
                      </div>
                      <div className="flex items-center gap-2 animate-legend-item" style={{ animationDelay: "0.2s" }}>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse-slow" />
                        <span className="text-xs text-muted-foreground">Medium (3.5-4.5%)</span>
                      </div>
                      <div className="flex items-center gap-2 animate-legend-item" style={{ animationDelay: "0.3s" }}>
                        <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse-slow" />
                        <span className="text-xs text-muted-foreground">Low (2.5-3.5%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Panel */}
          <div className="space-y-6">
            {selectedPoint ? (
              <Card className="glass-strong border-0 animate-panel-slide-in hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary animate-icon-glow" />
                    <span className="animate-text-glow">{selectedPoint.name}</span>
                  </CardTitle>
                  <CardDescription>{selectedPoint.farmer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-secondary/50 rounded-lg animate-metric-card hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold text-primary animate-counter-enhanced">
                        {selectedPoint.carbonLevel}%
                      </div>
                      <div className="text-xs text-muted-foreground">Carbon Level</div>
                    </div>
                    <div
                      className="text-center p-3 bg-secondary/50 rounded-lg animate-metric-card hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <div className="text-2xl font-bold text-foreground animate-counter-enhanced">
                        {selectedPoint.acres.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Acres</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Credits Generated", value: selectedPoint.credits.toLocaleString() },
                      { label: "Soil Type", value: selectedPoint.soilType },
                      { label: "Trend", value: selectedPoint.trend, icon: getTrendIcon(selectedPoint.trend) },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-center animate-detail-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <div className="flex items-center gap-1">
                          {item.icon}
                          <span className="font-semibold text-foreground text-sm capitalize">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-4 animate-button-glow hover:scale-105 transition-all duration-300"
                    size="sm"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Full Report
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass border-0 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-icon-pulse" />
                  <p className="text-muted-foreground">Click on any data point to view detailed soil carbon metrics</p>
                </CardContent>
              </Card>
            )}

            {/* Summary Stats */}
            <Card className="glass border-0 animate-fade-in hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <CardHeader>
                <CardTitle className="font-serif text-lg animate-text-glow">Network Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: "Total Farms", value: mapData.length },
                  {
                    label: "Total Acres",
                    value: mapData.reduce((sum, point) => sum + point.acres, 0).toLocaleString(),
                  },
                  {
                    label: "Credits Generated",
                    value: mapData.reduce((sum, point) => sum + point.credits, 0).toLocaleString(),
                    highlight: true,
                  },
                  {
                    label: "Avg Carbon Level",
                    value: `${(mapData.reduce((sum, point) => sum + point.carbonLevel, 0) / mapData.length).toFixed(1)}%`,
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center animate-stat-item hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span
                      className={`font-semibold ${stat.highlight ? "text-primary animate-pulse-glow-enhanced" : "text-foreground"}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
