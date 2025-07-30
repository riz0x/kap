import { type NextRequest, NextResponse } from "next/server"
import { createCheckoutSession, PRICE_IDS } from "@/lib/stripe"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { planType } = await request.json()

    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const priceId = PRICE_IDS[planType as keyof typeof PRICE_IDS]
    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan type" }, { status: 400 })
    }

    const session = await createCheckoutSession(
      user.id,
      priceId,
      `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      `${process.env.NEXT_PUBLIC_APP_URL}/signup?canceled=true`,
    )

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
