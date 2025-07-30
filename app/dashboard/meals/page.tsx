"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, Clock, Users, ChefHat, Download, Heart, Star, CheckCircle } from "lucide-react"

export default function MealsPage() {
  const [selectedWeek, setSelectedWeek] = useState("current")

  const mealPlan = {
    monday: {
      breakfast: {
        name: "Overnight Oats with Berries",
        calories: 320,
        protein: "12g",
        carbs: "45g",
        fat: "8g",
        prepTime: "5 min",
        ingredients: [
          "1/2 cup rolled oats",
          "1/2 cup almond milk",
          "1 tbsp chia seeds",
          "1/2 cup mixed berries",
          "1 tsp honey",
        ],
      },
      lunch: {
        name: "Grilled Chicken Salad",
        calories: 380,
        protein: "35g",
        carbs: "15g",
        fat: "18g",
        prepTime: "15 min",
        ingredients: [
          "4oz grilled chicken breast",
          "2 cups mixed greens",
          "1/4 avocado",
          "Cherry tomatoes",
          "Olive oil dressing",
        ],
      },
      dinner: {
        name: "Baked Salmon with Quinoa",
        calories: 450,
        protein: "32g",
        carbs: "35g",
        fat: "20g",
        prepTime: "25 min",
        ingredients: ["5oz salmon fillet", "1/2 cup quinoa", "Steamed broccoli", "Lemon", "Herbs"],
      },
      snack: {
        name: "Greek Yogurt with Almonds",
        calories: 180,
        protein: "15g",
        carbs: "12g",
        fat: "8g",
        prepTime: "2 min",
        ingredients: ["1 cup Greek yogurt", "1 oz almonds", "1 tsp honey"],
      },
    },
    tuesday: {
      breakfast: {
        name: "Veggie Scramble",
        calories: 290,
        protein: "18g",
        carbs: "12g",
        fat: "16g",
        prepTime: "10 min",
        ingredients: ["2 eggs", "Spinach", "Bell peppers", "Mushrooms", "1 tbsp olive oil"],
      },
      lunch: {
        name: "Turkey & Avocado Wrap",
        calories: 420,
        protein: "28g",
        carbs: "32g",
        fat: "18g",
        prepTime: "8 min",
        ingredients: ["Whole wheat tortilla", "4oz turkey breast", "1/2 avocado", "Lettuce", "Tomato"],
      },
      dinner: {
        name: "Lean Beef Stir-fry",
        calories: 480,
        protein: "30g",
        carbs: "40g",
        fat: "20g",
        prepTime: "20 min",
        ingredients: ["4oz lean beef", "Mixed vegetables", "Brown rice", "Soy sauce", "Ginger"],
      },
      snack: {
        name: "Apple with Peanut Butter",
        calories: 190,
        protein: "8g",
        carbs: "20g",
        fat: "10g",
        prepTime: "2 min",
        ingredients: ["1 medium apple", "2 tbsp natural peanut butter"],
      },
    },
  }

  const tips = [
    {
      title: "Meal Prep Sunday",
      description: "Prepare your proteins and chop vegetables in advance to save time during the week.",
      icon: <ChefHat className="w-5 h-5" />,
    },
    {
      title: "Stay Hydrated",
      description: "Drink water before meals to help with portion control and digestion.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      title: "Mindful Eating",
      description: "Eat slowly and pay attention to hunger cues to avoid overeating.",
      icon: <Clock className="w-5 h-5" />,
    },
  ]

  const getDayMeals = (day: keyof typeof mealPlan) => {
    return mealPlan[day] || mealPlan.monday
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Meal Plans</h1>
              <p className="text-gray-600">Your personalized nutrition guide for weight loss success</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Users className="w-4 h-4 mr-2" />
                Share Plan
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Utensils className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Daily Calories</h3>
              <p className="text-2xl font-bold text-green-600">1,330</p>
              <p className="text-sm text-gray-600">Target for weight loss</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ChefHat className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Protein</h3>
              <p className="text-2xl font-bold text-blue-600">103g</p>
              <p className="text-sm text-gray-600">31% of calories</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Carbs</h3>
              <p className="text-2xl font-bold text-orange-600">124g</p>
              <p className="text-sm text-gray-600">37% of calories</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fat</h3>
              <p className="text-2xl font-bold text-purple-600">47g</p>
              <p className="text-sm text-gray-600">32% of calories</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Meal Plan */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>This Week's Meal Plan</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Week 1</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="monday" className="w-full">
                  <TabsList className="grid w-full grid-cols-7">
                    <TabsTrigger value="monday">Mon</TabsTrigger>
                    <TabsTrigger value="tuesday">Tue</TabsTrigger>
                    <TabsTrigger value="wednesday">Wed</TabsTrigger>
                    <TabsTrigger value="thursday">Thu</TabsTrigger>
                    <TabsTrigger value="friday">Fri</TabsTrigger>
                    <TabsTrigger value="saturday">Sat</TabsTrigger>
                    <TabsTrigger value="sunday">Sun</TabsTrigger>
                  </TabsList>

                  {Object.keys(mealPlan).map((day) => (
                    <TabsContent key={day} value={day} className="space-y-4 mt-6">
                      {Object.entries(getDayMeals(day as keyof typeof mealPlan)).map(([mealType, meal]) => (
                        <Card key={mealType} className="border-l-4 border-l-green-500">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  <Badge variant="outline" className="capitalize">
                                    {mealType}
                                  </Badge>
                                  <span className="text-sm text-gray-500">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {meal.prepTime}
                                  </span>
                                </div>
                                <h3 className="font-semibold text-lg">{meal.name}</h3>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-green-600">{meal.calories} cal</p>
                                <p className="text-xs text-gray-500">
                                  P: {meal.protein} | C: {meal.carbs} | F: {meal.fat}
                                </p>
                              </div>
                            </div>

                            <div className="mb-3">
                              <h4 className="font-medium text-sm text-gray-700 mb-2">Ingredients:</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {meal.ingredients.map((ingredient, index) => (
                                  <li key={index} className="flex items-center space-x-2">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    <span>{ingredient}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                View Recipe
                              </Button>
                              <Button size="sm" variant="outline">
                                <Heart className="w-3 h-3 mr-1" />
                                Save
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Shopping List */}
            <Card>
              <CardHeader>
                <CardTitle>Shopping List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Chicken breast (2 lbs)</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Salmon fillets (1 lb)</span>
                    <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mixed greens</span>
                    <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Greek yogurt</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Quinoa</span>
                    <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full List
                </Button>
              </CardContent>
            </Card>

            {/* Nutrition Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{tip.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>This Week's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Meals Logged</span>
                    <span>18/21</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Calorie Target</span>
                    <span>6/7 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Water Intake</span>
                    <span>5/7 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "71%" }}></div>
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
