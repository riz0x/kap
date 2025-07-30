"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, FlameIcon as Fire, Search, Filter, Star, Bookmark, Heart } from "lucide-react"

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const videos = [
    {
      id: 1,
      title: "Full Body HIIT Workout",
      description: "High-intensity interval training for maximum calorie burn",
      duration: "25 min",
      calories: "300 cal",
      difficulty: "Intermediate",
      category: "HIIT",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: true,
      rating: 4.8,
      views: "12.5k",
    },
    {
      id: 2,
      title: "Morning Yoga Flow",
      description: "Gentle yoga sequence to start your day with energy",
      duration: "20 min",
      calories: "120 cal",
      difficulty: "Beginner",
      category: "Yoga",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: false,
      rating: 4.9,
      views: "8.2k",
    },
    {
      id: 3,
      title: "Upper Body Strength",
      description: "Build lean muscle with this targeted upper body workout",
      duration: "30 min",
      calories: "250 cal",
      difficulty: "Advanced",
      category: "Strength",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: true,
      rating: 4.7,
      views: "15.3k",
    },
    {
      id: 4,
      title: "Cardio Dance Party",
      description: "Fun dance workout that doesn't feel like exercise",
      duration: "35 min",
      calories: "400 cal",
      difficulty: "Intermediate",
      category: "Dance",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: false,
      rating: 4.6,
      views: "22.1k",
    },
    {
      id: 5,
      title: "Core & Abs Blast",
      description: "Targeted core workout for a stronger midsection",
      duration: "15 min",
      calories: "150 cal",
      difficulty: "Intermediate",
      category: "Core",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: false,
      rating: 4.8,
      views: "18.7k",
    },
    {
      id: 6,
      title: "Low Impact Cardio",
      description: "Joint-friendly cardio workout for all fitness levels",
      duration: "40 min",
      calories: "280 cal",
      difficulty: "Beginner",
      category: "Cardio",
      thumbnail: "/placeholder.svg?height=200&width=300",
      isNew: true,
      rating: 4.5,
      views: "9.8k",
    },
  ]

  const categories = ["All", "HIIT", "Strength", "Yoga", "Dance", "Cardio", "Core"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Workout Videos</h1>
              <p className="text-gray-600">Access your daily workout videos and fitness content</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Video */}
        <Card className="mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Featured workout"
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Play className="w-6 h-6 mr-2" />
                  Play Now
                </Button>
              </div>
              <Badge className="absolute top-4 left-4 bg-red-600 text-white">🔥 Featured</Badge>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <Badge className="w-fit mb-2 bg-green-100 text-green-800">New Today</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Total Body Transformation</h2>
              <p className="text-gray-600 mb-4">
                Our most effective full-body workout designed to maximize calorie burn and build lean muscle. Perfect
                for all fitness levels with modifications included.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>45 min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Fire className="w-4 h-4" />
                  <span>500 cal</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 (2.1k reviews)</span>
                </div>
              </div>
              <Button className="w-fit bg-green-600 hover:bg-green-700">Start Workout</Button>
            </div>
          </div>
        </Card>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-7">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all flex items-center justify-center group">
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black hover:bg-gray-100"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Play
                  </Button>
                </div>
                {video.isNew && <Badge className="absolute top-2 left-2 bg-green-600 text-white">New</Badge>}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{video.title}</h3>
                  <Badge className={getDifficultyColor(video.difficulty)}>{video.difficulty}</Badge>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Fire className="w-4 h-4" />
                      <span>{video.calories}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{video.rating}</span>
                    </div>
                  </div>
                  <span>{video.views} views</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Start Workout</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter</p>
          </div>
        )}
      </div>
    </div>
  )
}
