import { type NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { supabase } from "@/lib/supabase"
import type Stripe from "stripe"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session)
        break

      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentSucceeded(invoice)
        break

      case "customer.subscription.deleted":
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 })
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId
  if (!userId) return

  const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

  await supabase.from("subscriptions").insert({
    user_id: userId,
    stripe_subscription_id: subscription.id,
    stripe_customer_id: subscription.customer as string,
    plan_type: subscription.items.data[0].price.recurring?.interval === "year" ? "annual" : "monthly",
    status: subscription.status,
    current_period_start: new Date(subscription.current_period_start * 1000),
    current_period_end: new Date(subscription.current_period_end * 1000),
  })

  await supabase.from("users").update({ subscription_status: "active" }).eq("id", userId)
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  // Handle successful recurring payments
  const subscriptionId = invoice.subscription as string

  await supabase.from("subscriptions").update({ status: "active" }).eq("stripe_subscription_id", subscriptionId)
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await supabase.from("subscriptions").update({ status: "canceled" }).eq("stripe_subscription_id", subscription.id)

  // Update user subscription status
  const { data: subData } = await supabase
    .from("subscriptions")
    .select("user_id")
    .eq("stripe_subscription_id", subscription.id)
    .single()

  if (subData) {
    await supabase.from("users").update({ subscription_status: "canceled" }).eq("id", subData.user_id)
  }
}
