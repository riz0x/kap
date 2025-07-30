import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Calendar, TrendingUp, Star, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Mobile-Optimized Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">FitLife Pro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">
                Success Stories
              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700" size="sm">
                  Start Free Trial
                </Button>
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex md:hidden items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-xs px-2">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700 text-xs px-3" size="sm">
                  Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile-Optimized Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-xs md:text-sm">
          🎉 Join 10,000+ members losing weight daily
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Transform Your Body with
          <span className="text-green-600 block mt-2">Daily Fitness Videos</span>
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
          Get personalized workout videos, meal plans, and track your progress with our comprehensive fitness platform.
          Start your weight loss journey today!
        </p>

        {/* Mobile-Optimized CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4">
          <Link href="/signup" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-transparent w-full sm:w-auto"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Mobile-Optimized Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">10,000+</div>
            <div className="text-sm md:text-base text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm md:text-base text-gray-600">Workout Videos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-sm md:text-base text-gray-600">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Features Section */}
      <section id="features" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Our comprehensive platform replaces multiple apps with one powerful solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center md:text-left">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-lg md:text-xl">Daily Workout Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Access new workout videos every day, tailored to your fitness level and weight loss goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center md:text-left">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-lg md:text-xl">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Log your daily exercises, meals, and track your weight loss journey with detailed analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center md:text-left">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-lg md:text-xl">Personalized Meal Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Get proven meal plans designed specifically for weight loss, with shopping lists and prep guides.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center md:text-left">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-lg md:text-xl">Real-time Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Get feedback on your progress and adjustments to your plan based on your daily logs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center md:text-left">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-lg md:text-xl">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Connect with other members, share your progress, and get motivated by success stories.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center md:text-left">
                <Star className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto md:mx-0" />
                <CardTitle className="text-lg md:text-xl">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                  Get direct access to fitness experts and personalized advice for your weight loss journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Pricing Section */}
      <section id="pricing" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Choose the plan that works best for your fitness journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl">Monthly Plan</CardTitle>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mt-4">
                  $29<span className="text-base md:text-lg text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Daily workout videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Personalized meal plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Progress tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Community access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">7-day free trial</span>
                </div>
                <Link href="/signup" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 mt-6 py-3">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl">Annual Plan</CardTitle>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mt-4">
                  $19<span className="text-base md:text-lg text-gray-600">/month</span>
                </div>
                <div className="text-sm text-gray-600">Billed annually ($228/year)</div>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Everything in Monthly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Exclusive content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">1-on-1 coaching sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Save $120/year</span>
                </div>
                <Link href="/signup" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 mt-6 py-3">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Testimonials */}
      <section id="testimonials" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600">See how our members transformed their lives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "Lost 25 pounds in 3 months! The daily videos kept me motivated and the meal plans were so easy to
                  follow."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold text-sm md:text-base">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">Sarah Johnson</div>
                    <div className="text-xs md:text-sm text-gray-600">Lost 25 lbs</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "The progress tracking feature helped me stay accountable. I've never been more consistent with my
                  fitness routine!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold text-sm md:text-base">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">Mike Chen</div>
                    <div className="text-xs md:text-sm text-gray-600">Lost 18 lbs</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  "Amazing community support! The combination of workouts and meal planning made all the difference."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold text-sm md:text-base">E</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">Emily Rodriguez</div>
                    <div className="text-xs md:text-sm text-gray-600">Lost 30 lbs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized CTA Section */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
            Join thousands of members who are already seeing results
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              variant="secondary"
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
            >
              Start Your 7-Day Free Trial
            </Button>
          </Link>
          <p className="text-xs md:text-sm mt-4 opacity-75">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Mobile-Optimized Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-lg md:text-xl font-bold">FitLife Pro</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Transform your body with our comprehensive fitness platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-xs md:text-sm">&copy; 2024 FitLife Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
