import { supabase } from "./supabase"
import bcrypt from "bcryptjs"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  currentWeight?: number
  targetWeight?: number
  goals: string[]
  planType: "monthly" | "annual"
  subscriptionStatus: string
}

export async function signUp(userData: {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
  currentWeight?: number
  targetWeight?: number
  goals: string[]
  planType: "monthly" | "annual"
}) {
  try {
    // Hash password
    const passwordHash = await bcrypt.hash(userData.password, 12)

    // Create user in Supabase
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    })

    if (error) throw error

    // Insert additional user data
    const { error: insertError } = await supabase.from("users").insert({
      id: data.user?.id,
      email: userData.email,
      password_hash: passwordHash,
      first_name: userData.firstName,
      last_name: userData.lastName,
      phone: userData.phone,
      current_weight: userData.currentWeight,
      target_weight: userData.targetWeight,
      goals: userData.goals,
      plan_type: userData.planType,
      subscription_status: "trial",
      trial_ends_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    })

    if (insertError) throw insertError

    return { user: data.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    return { user: data.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: userData } = await supabase.from("users").select("*").eq("id", user.id).single()

  return userData
}
