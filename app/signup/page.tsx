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
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SignUpPage() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    currentWeight: "",
    targetWeight: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) => (prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Store user data in localStorage for demo purposes
      const userData = {
        ...formData,
        plan: selectedPlan,
        goals: selectedGoals,
        signupDate: new Date().toISOString(),
      }
      localStorage.setItem("fitlife_user", JSON.stringify(userData))

      toast({
        title: "Account Created Successfully!",
        description: "Welcome to FitLife Pro. Your 7-day free trial has started.",
      })

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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

      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Start Your Fitness Journey</h1>
            <p className="text-gray-600 text-sm md:text-base">Choose your plan and create your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Mobile-Optimized Plan Selection */}
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <h2 className="text-lg md:text-xl font-semibold">Choose Your Plan</h2>

                <div className="space-y-3 md:space-y-4">
                  <Card
                    className={`cursor-pointer transition-all ${selectedPlan === "annual" ? "border-green-600 ring-2 ring-green-100" : "border-gray-200"}`}
                    onClick={() => setSelectedPlan("annual")}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base md:text-lg">Annual Plan</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xl md:text-2xl font-bold text-green-600">$19/month</span>
                            <Badge className="bg-green-100 text-green-800 text-xs">Save $120</Badge>
                          </div>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">Billed annually ($228/year)</p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${selectedPlan === "annual" ? "bg-green-600 border-green-600" : "border-gray-300"}`}
                        >
                          {selectedPlan === "annual" && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-xs md:text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span>All monthly features</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span>Priority support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span>1-on-1 coaching sessions</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all ${selectedPlan === "monthly" ? "border-green-600 ring-2 ring-green-100" : "border-gray-200"}`}
                    onClick={() => setSelectedPlan("monthly")}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base md:text-lg">Monthly Plan</CardTitle>
                          <div className="text-xl md:text-2xl font-bold text-green-600 mt-1">$29/month</div>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">Billed monthly</p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${selectedPlan === "monthly" ? "bg-green-600 border-green-600" : "border-gray-300"}`}
                        >
                          {selectedPlan === "monthly" && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 text-xs md:text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span>Daily workout videos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span>Meal plans & tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                          <span>Progress monitoring</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 p-3 md:p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="font-semibold text-sm md:text-base">7-Day Free Trial</span>
                  </div>
                  <p className="text-xs md:text-sm text-green-700 mt-1">
                    Try everything risk-free. Cancel anytime during your trial.
                  </p>
                </div>
              </div>

              {/* Mobile-Optimized Sign Up Form */}
              <Card className="order-1 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm">
                      Password *
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      className="text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm">
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="text-base"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-sm md:text-base">Fitness Goals</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Lose Weight", "Build Muscle", "Get Fit", "Stay Healthy"].map((goal) => (
                        <Button
                          key={goal}
                          type="button"
                          variant={selectedGoals.includes(goal) ? "default" : "outline"}
                          size="sm"
                          className={`justify-start text-xs md:text-sm h-8 md:h-9 ${selectedGoals.includes(goal) ? "bg-green-600 hover:bg-green-700" : "bg-transparent"}`}
                          onClick={() => toggleGoal(goal)}
                        >
                          {goal}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentWeight" className="text-sm">
                        Current Weight (lbs)
                      </Label>
                      <Input
                        id="currentWeight"
                        name="currentWeight"
                        type="number"
                        value={formData.currentWeight}
                        onChange={handleInputChange}
                        placeholder="150"
                        className="text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="targetWeight" className="text-sm">
                        Target Weight (lbs)
                      </Label>
                      <Input
                        id="targetWeight"
                        name="targetWeight"
                        type="number"
                        value={formData.targetWeight}
                        onChange={handleInputChange}
                        placeholder="130"
                        className="text-base"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-sm md:text-base py-3 md:py-4"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Start My 7-Day Free Trial"
                    )}
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link href="/login" className="text-green-600 hover:underline font-semibold">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
