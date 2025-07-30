import { type NextRequest, NextResponse } from "next/server"
import { signUp } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { user, error } = await signUp(body)

    if (error) {
      return NextResponse.json({ error: "Failed to create account" }, { status: 400 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
