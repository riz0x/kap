"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Play,
  TrendingUp,
  Target,
  Clock,
  FlameIcon as Fire,
  Award,
  ChevronRight,
  Bell,
  Settings,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [currentWeight] = useState(145)
  const [targetWeight] = useState(130)
  const [startWeight] = useState(160)
  const [user, setUser] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const weightLossProgress = ((startWeight - currentWeight) / (startWeight - targetWeight)) * 100

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("fitlife_logged_in")
    const userData = localStorage.getItem("fitlife_user")

    if (!isLoggedIn || !userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("fitlife_logged_in")
    localStorage.removeItem("fitlife_login_time")
    router.push("/")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-Optimized Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900">FitLife Pro</h1>
            </div>

            {/* Desktop Header Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Welcome, {user.firstName}!</span>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-xs">
                  {user.firstName?.[0]}
                  {user.lastName?.[0]}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-600 hover:text-red-700">
                Logout
              </Button>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Bell className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 px-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs">
                      {user.firstName?.[0]}
                      {user.lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <nav className="space-y-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center space-x-3 p-2 text-green-600 bg-green-50 rounded-lg text-sm"
                  >
                    <Play className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/dashboard/videos"
                    className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    <Play className="w-4 h-4" />
                    <span>Workout Videos</span>
                  </Link>
                  <Link
                    href="/dashboard/tracking"
                    className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Progress Tracking</span>
                  </Link>
                  <Link
                    href="/dashboard/meals"
                    className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    <Target className="w-4 h-4" />
                    <span>Meal Plans</span>
                  </Link>
                </nav>
                <div className="pt-3 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 w-full justify-start"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Mobile-Optimized Welcome Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Welcome back, {user.firstName}! 👋</h2>
          <p className="text-gray-600 text-sm md:text-base">
            {"You're doing great! Let's continue your fitness journey today."}
          </p>
        </div>

        {/* Mobile-Optimized Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-blue-600" />
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Current Weight</p>
                <p className="text-lg md:text-2xl font-bold text-gray-900">{currentWeight} lbs</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <Target className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Weight Lost</p>
                <p className="text-lg md:text-2xl font-bold text-green-600">{startWeight - currentWeight} lbs</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <Fire className="w-4 h-4 md:w-6 md:h-6 text-orange-600" />
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Streak</p>
                <p className="text-lg md:text-2xl font-bold text-orange-600">12 days</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <Award className="w-4 h-4 md:w-6 md:h-6 text-purple-600" />
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">This Week</p>
                <p className="text-lg md:text-2xl font-bold text-purple-600">5 workouts</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-Optimized Progress Card */}
        <Card className="mb-6 md:mb-8">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Weight Loss Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-xs md:text-sm">
                <span>Start: {startWeight} lbs</span>
                <span>Current: {currentWeight} lbs</span>
                <span>Goal: {targetWeight} lbs</span>
              </div>
              <Progress value={weightLossProgress} className="h-2 md:h-3" />
              <div className="text-center">
                <p className="text-base md:text-lg font-semibold text-green-600">
                  {Math.round(weightLossProgress)}% Complete
                </p>
                <p className="text-xs md:text-sm text-gray-600">{targetWeight - currentWeight} lbs to go!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {/* Today's Workout */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg md:text-xl">{"Today's Workout"}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 text-xs">New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base md:text-lg">Full Body HIIT Workout</h3>
                    <p className="text-gray-600 text-sm md:text-base">High-intensity interval training</p>
                    <div className="flex items-center space-x-3 md:space-x-4 mt-2 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>25 min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Fire className="w-3 h-3 md:w-4 md:h-4" />
                        <span>300 cal</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/dashboard/videos" className="w-full sm:w-auto">
                    <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto text-sm md:text-base">
                      Start Workout
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <Link
                    href="/dashboard/tracking"
                    className="flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm md:text-base">Log Today's Meals</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/dashboard/tracking"
                    className="flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm md:text-base">Track Exercise</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/dashboard/tracking"
                    className="flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm md:text-base">Update Weight</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                  <Link
                    href="/dashboard/meals"
                    className="flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm md:text-base">View Meal Plan</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile-Optimized Sidebar */}
          <div className="space-y-4 md:space-y-6">
            {/* Desktop Navigation - Hidden on Mobile */}
            <Card className="hidden lg:block">
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-3 p-2 text-green-600 bg-green-50 rounded-lg text-sm"
                >
                  <Play className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/dashboard/videos"
                  className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                >
                  <Play className="w-4 h-4" />
                  <span>Workout Videos</span>
                </Link>
                <Link
                  href="/dashboard/tracking"
                  className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Progress Tracking</span>
                </Link>
                <Link
                  href="/dashboard/meals"
                  className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                >
                  <Target className="w-4 h-4" />
                  <span>Meal Plans</span>
                </Link>
              </CardContent>
            </Card>

            {/* This Week's Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">This Week's Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <span>Workouts</span>
                    <span>5/6</span>
                  </div>
                  <Progress value={83} className="h-1.5 md:h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <span>Meal Logging</span>
                    <span>6/7</span>
                  </div>
                  <Progress value={86} className="h-1.5 md:h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs md:text-sm mb-2">
                    <span>Water Intake</span>
                    <span>4/7</span>
                  </div>
                  <Progress value={57} className="h-1.5 md:h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Upcoming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium">Weekly Check-in</p>
                    <p className="text-xs text-gray-600">Tomorrow at 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium">New Meal Plan</p>
                    <p className="text-xs text-gray-600">Monday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium">Progress Photos</p>
                    <p className="text-xs text-gray-600">Next Friday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
