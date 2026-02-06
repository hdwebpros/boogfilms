// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    stripePrice5: process.env.STRIPE_PRICE_5 || '',
    stripePrice20: process.env.STRIPE_PRICE_20 || '',
    stripePrice100: process.env.STRIPE_PRICE_100 || '',
    stripePrice1000: process.env.STRIPE_PRICE_1000 || '',
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'v-gsap-nuxt',
  ],
  css: ['~/assets/css/main.css'],
  image: {
    domains: ['images.unsplash.com'],
  },
  app: {
    head: {
      title: 'Chasing the Sun — A Film by the Boog Family',
      meta: [
        { name: 'description', content: 'An Irish orphan. An American dream. A story that spans generations. Chasing the Sun tells the true story of William Boog.' },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
    },
  },
  vgsap: {
    presets: [
      {
        name: 'fade-up',
        modifiers: 'whenVisible.once.from',
        value: { autoAlpha: 0, y: 40, duration: 0.8, ease: 'power2.out' },
      },
      {
        name: 'fade-up-slow',
        modifiers: 'whenVisible.once.from',
        value: { autoAlpha: 0, y: 80, duration: 1.4, ease: 'power3.out' },
      },
      {
        name: 'dramatic-up',
        modifiers: 'whenVisible.once.from',
        value: { autoAlpha: 0, y: 120, duration: 1.2, ease: 'power3.out' },
      },
      {
        name: 'scale-reveal',
        modifiers: 'whenVisible.once.from',
        value: { autoAlpha: 0, scale: 0.85, duration: 1.4, ease: 'power3.out' },
      },
      {
        name: 'slide-left',
        modifiers: 'whenVisible.once.from',
        value: { autoAlpha: 0, x: -80, duration: 1, ease: 'power3.out' },
      },
      {
        name: 'slide-right',
        modifiers: 'whenVisible.once.from',
        value: { autoAlpha: 0, x: 80, duration: 1, ease: 'power3.out' },
      },
      {
        name: 'line-expand',
        modifiers: 'whenVisible.once.from',
        value: { width: 0, duration: 1.2, ease: 'power2.inOut' },
      },
    ],
  },
})