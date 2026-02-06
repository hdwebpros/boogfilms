import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const stripe = new Stripe(config.stripeSecretKey)

  const { tier } = await readBody<{ tier: number }>(event)

  const priceMap: Record<number, string> = {
    5: config.stripePrice5,
    20: config.stripePrice20,
    100: config.stripePrice100,
    1000: config.stripePrice1000,
  }

  const priceId = priceMap[tier]
  if (!priceId) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid donation tier' })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${config.siteUrl}/?donation=success#donation`,
    cancel_url: `${config.siteUrl}/?donation=cancelled#donation`,
  })

  return { url: session.url }
})
