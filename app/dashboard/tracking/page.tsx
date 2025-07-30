"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Plus, Clock, Utensils, Scale, CalendarIcon, Save, TrendingUp, Target } from "lucide-react"
import { format } from "date-fns"

export default function TrackingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [exercises, setExercises] = useState([
    { name: "Morning Walk", duration: 30, calories: 120, time: "7:00 AM" },
    { name: "HIIT Workout", duration: 25, calories: 300, time: "6:00 PM" },
  ])
  const [meals, setMeals] = useState([
    { name: "Oatmeal with Berries", type: "Breakfast", calories: 250, time: "8:00 AM" },
    { name: "Grilled Chicken Salad", type: "Lunch", calories: 350, time: "12:30 PM" },
    { name: "Greek Yogurt", type: "Snack", calories: 100, time: "3:00 PM" },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
              <p className="text-gray-600">Log your daily activities and monitor your progress</p>
            </div>
            <div className="flex items-center space-x-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[240px] justify-start text-left font-normal bg-transparent">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tracking Area */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="exercise" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="exercise">Exercise</TabsTrigger>
                <TabsTrigger value="meals">Meals</TabsTrigger>
                <TabsTrigger value="weight">Weight</TabsTrigger>
              </TabsList>

              {/* Exercise Tracking */}
              <TabsContent value="exercise" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Log Exercise</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="exercise-name">Exercise Name</Label>
                        <Input id="exercise-name" placeholder="e.g., Running, Yoga, Weight Training" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (minutes)</Label>
                        <Input id="duration" type="number" placeholder="30" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="exercise-time">Time</Label>
                        <Input id="exercise-time" type="time" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="intensity">Intensity</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select intensity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exercise-notes">Notes (Optional)</Label>
                      <Textarea id="exercise-notes" placeholder="How did you feel? Any observations..." />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Exercise
                    </Button>
                  </CardContent>
                </Card>

                {/* Today's Exercises */}
                <Card>
                  <CardHeader>
                    <CardTitle>{"Today's Exercises"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {exercises.map((exercise, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <Clock className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{exercise.name}</h3>
                              <p className="text-sm text-gray-600">
                                {exercise.duration} min • {exercise.calories} cal • {exercise.time}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary">Completed</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Meal Tracking */}
              <TabsContent value="meals" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Utensils className="w-5 h-5" />
                      <span>Log Meal</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="meal-name">Meal/Food Item</Label>
                        <Input id="meal-name" placeholder="e.g., Grilled Chicken Breast" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="meal-type">Meal Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select meal type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="breakfast">Breakfast</SelectItem>
                            <SelectItem value="lunch">Lunch</SelectItem>
                            <SelectItem value="dinner">Dinner</SelectItem>
                            <SelectItem value="snack">Snack</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="meal-time">Time</Label>
                        <Input id="meal-time" type="time" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="calories">Estimated Calories</Label>
                        <Input id="calories" type="number" placeholder="250" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meal-notes">Notes</Label>
                      <Textarea id="meal-notes" placeholder="Portion size, preparation method, how you felt..." />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Meal
                    </Button>
                  </CardContent>
                </Card>

                {/* Today's Meals */}
                <Card>
                  <CardHeader>
                    <CardTitle>{"Today's Meals"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {meals.map((meal, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Utensils className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{meal.name}</h3>
                              <p className="text-sm text-gray-600">
                                {meal.type} • {meal.calories} cal • {meal.time}
                              </p>
                            </div>
                          </div>
                          <Badge variant="outline">{meal.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Weight Tracking */}
              <TabsContent value="weight" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Scale className="w-5 h-5" />
                      <span>Log Weight</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-weight">Current Weight (lbs)</Label>
                        <Input id="current-weight" type="number" step="0.1" placeholder="145.5" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weigh-time">Time of Day</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="When did you weigh?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (before breakfast)</SelectItem>
                            <SelectItem value="afternoon">Afternoon</SelectItem>
                            <SelectItem value="evening">Evening</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight-notes">Notes</Label>
                      <Textarea
                        id="weight-notes"
                        placeholder="How are you feeling? Any observations about your progress..."
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Save Weight Entry
                    </Button>
                  </CardContent>
                </Card>

                {/* Weight Progress Chart Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Weight Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                        <p>Weight progress chart will appear here</p>
                        <p className="text-sm">Add more weight entries to see your trend</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Daily Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Exercises</span>
                  <Badge variant="secondary">{exercises.length} logged</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Meals</span>
                  <Badge variant="secondary">{meals.length} logged</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Exercise Time</span>
                  <span className="font-semibold">{exercises.reduce((total, ex) => total + ex.duration, 0)} min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Calories Burned</span>
                  <span className="font-semibold text-green-600">
                    {exercises.reduce((total, ex) => total + ex.calories, 0)} cal
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Calories Consumed</span>
                  <span className="font-semibold text-blue-600">
                    {meals.reduce((total, meal) => total + meal.calories, 0)} cal
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Exercise Days</span>
                    <span>5/6</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "83%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Meal Logging</span>
                    <span>6/7</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weight Check-ins</span>
                    <span>2/2</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle>💡 Today's Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Log your meals immediately after eating to maintain accuracy and build a consistent habit. This helps
                  you stay mindful of your food choices throughout the day.
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">7-Day Streak</p>
                    <p className="text-xs text-gray-600">Consistent logging</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">5 lbs Lost</p>
                    <p className="text-xs text-gray-600">This month</p>
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
