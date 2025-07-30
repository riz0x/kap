"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Loader2, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if user exists in localStorage (for demo purposes)
      const existingUser = localStorage.getItem("fitlife_user")

      if (existingUser) {
        const userData = JSON.parse(existingUser)
        if (userData.email === formData.email) {
          // Simulate successful login
          localStorage.setItem("fitlife_logged_in", "true")
          localStorage.setItem("fitlife_login_time", new Date().toISOString())

          toast({
            title: "Welcome Back!",
            description: "You have successfully signed in to FitLife Pro.",
          })

          // Redirect to dashboard
          router.push("/dashboard")
          return
        }
      }

      // Demo login - accept any email/password combination
      if (formData.email && formData.password.length >= 6) {
        // Create demo user data
        const demoUser = {
          firstName: "Demo",
          lastName: "User",
          email: formData.email,
          plan: "monthly",
          goals: ["Lose Weight"],
          currentWeight: "160",
          targetWeight: "140",
          signupDate: new Date().toISOString(),
        }

        localStorage.setItem("fitlife_user", JSON.stringify(demoUser))
        localStorage.setItem("fitlife_logged_in", "true")
        localStorage.setItem("fitlife_login_time", new Date().toISOString())

        toast({
          title: "Welcome to FitLife Pro!",
          description: "You have successfully signed in.",
        })

        router.push("/dashboard")
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Coming Soon",
      description: `${provider} login will be available soon!`,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Mobile-Optimized Header */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm md:text-base">Back to Home</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <CardTitle className="text-xl md:text-2xl">Welcome Back</CardTitle>
              <p className="text-gray-600 text-sm md:text-base">Sign in to continue your fitness journey</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="text-base h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="text-base h-11 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded w-4 h-4"
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 h-11 text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <Separator />

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-transparent h-11 text-base"
                  onClick={() => handleSocialLogin("Google")}
                >
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent h-11 text-base"
                  onClick={() => handleSocialLogin("Apple")}
                >
                  Continue with Apple
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {"Don't have an account? "}
                  <Link href="/signup" className="text-green-600 hover:underline font-semibold">
                    Start your free trial
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
