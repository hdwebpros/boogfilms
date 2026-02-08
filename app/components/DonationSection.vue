<script setup>
const cards = ref(null)
const donating = ref(false)
const donationStatus = ref('')

const route = useRoute()

onMounted(async () => {
  if (route.query.donation === 'success' || route.query.donation === 'cancelled') {
    donationStatus.value = route.query.donation
  }

  const gsap = useGSAP()

  gsap.set(cards.value.children, { autoAlpha: 0, y: 60, scale: 0.9 })

  gsap.to(cards.value.children, {
    scrollTrigger: {
      trigger: cards.value,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    autoAlpha: 1,
    y: 0,
    scale: 1,
    stagger: 0.2,
    duration: 1,
  })
})

async function handleDonate(tier) {
  if (donating.value) return
  donating.value = true
  try {
    const { url } = await $fetch('/api/checkout', {
      method: 'POST',
      body: { tier },
    })
    if (url) {
      await navigateTo(url, { external: true })
    }
  } catch {
    donating.value = false
  }
}
</script>

<template>
  <section id="donation" class="relative py-32 md:py-40 bg-film-dark overflow-hidden">
    <!-- Background accent -->
    <div class="absolute inset-0 bg-gradient-to-b from-film-black via-film-dark to-film-dark" />

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <!-- Success / Cancelled banner -->
      <div
        v-if="donationStatus === 'success'"
        class="mb-12 border border-film-gold/30 bg-film-gold/10 px-6 py-4 flex items-center justify-between"
      >
        <p class="text-film-gold font-display text-lg tracking-wide">
          Thank you for your generous donation!
        </p>
        <button
          class="text-film-gold/60 hover:text-film-gold text-2xl leading-none"
          @click="donationStatus = ''"
        >
          &times;
        </button>
      </div>

      <div
        v-if="donationStatus === 'cancelled'"
        class="mb-12 border border-film-muted/30 bg-film-charcoal/50 px-6 py-4 flex items-center justify-between"
      >
        <p class="text-film-cream/60 text-lg">
          Donation cancelled. You can try again anytime.
        </p>
        <button
          class="text-film-cream/40 hover:text-film-cream text-2xl leading-none"
          @click="donationStatus = ''"
        >
          &times;
        </button>
      </div>

      <!-- Heading -->
      <h2
        v-gsap.whenVisible.once.chars.from="{ autoAlpha: 0, y: 60, rotateX: -90, stagger: 0.03, duration: 1 }"
        class="font-display text-4xl md:text-6xl text-film-gold tracking-[0.2em] uppercase text-center mb-6"
      >
        Support the Film
      </h2>

      <div class="flex justify-center mb-8">
        <hr
          v-gsap.preset.line-expand
          class="border-0 h-px bg-film-gold/40 w-20"
        />
      </div>

      <p
        v-gsap.preset.fade-up
        class="text-film-cream/60 text-center text-lg md:text-xl mb-20 max-w-xl mx-auto"
      >
        Every contribution helps bring William's story to life.
      </p>

      <!-- Donation tiers -->
      <div
        ref="cards"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <!-- $5 Tier (Featured) -->
        <div class="group bg-film-charcoal/50 backdrop-blur-sm border border-film-gold/40 p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-film-gold/10 ring-1 ring-film-gold/10 hover:ring-film-gold/30">
          <Icon name="ph:coffee" class="text-film-gold text-4xl mb-6 transition-transform duration-500 group-hover:scale-110" />
          <span class="font-display text-4xl text-film-gold mb-2">$5</span>
          <h3 class="font-display text-xl text-film-cream mb-3">A Cup of Tea</h3>
          <p class="text-film-muted text-sm mb-8 flex-1">A cup of tea at the coffee shop</p>
          <button
            :disabled="donating"
            class="w-full bg-film-gold text-film-black py-3 px-6 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-film-gold-light hover:tracking-[0.3em] disabled:opacity-50 disabled:pointer-events-none"
            @click="handleDonate(5)"
          >
            {{ donating ? 'Redirecting...' : 'Donate' }}
          </button>
        </div>

        <!-- $20 Tier -->
        <div class="group bg-film-charcoal/50 backdrop-blur-sm border border-film-charcoal hover:border-film-gold/30 p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-film-gold/5">
          <Icon name="ph:star" class="text-film-gold text-4xl mb-6 transition-transform duration-500 group-hover:scale-110" />
          <span class="font-display text-4xl text-film-gold mb-2">$20</span>
          <h3 class="font-display text-xl text-film-cream mb-3">In the Credits</h3>
          <p class="text-film-muted text-sm mb-8 flex-1">Used for AI credits and gets your name in the credits</p>
          <button
            :disabled="donating"
            class="w-full border border-film-gold/30 text-film-gold py-3 px-6 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-film-gold hover:text-film-black hover:tracking-[0.3em] disabled:opacity-50 disabled:pointer-events-none"
            @click="handleDonate(20)"
          >
            {{ donating ? 'Redirecting...' : 'Donate' }}
          </button>
        </div>

        <!-- $100 Tier -->
        <div class="group bg-film-charcoal/50 backdrop-blur-sm border border-film-charcoal hover:border-film-gold/30 p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-film-gold/5">
          <Icon name="ph:magnifying-glass" class="text-film-gold text-4xl mb-6 transition-transform duration-500 group-hover:scale-110" />
          <span class="font-display text-4xl text-film-gold mb-2">$100</span>
          <h3 class="font-display text-xl text-film-cream mb-3">AI Gen & Deep Research</h3>
          <p class="text-film-muted text-sm mb-8 flex-1">AI Credits for us and deep genealogical research tools</p>
          <button
            :disabled="donating"
            class="w-full border border-film-gold/30 text-film-gold py-3 px-6 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-film-gold hover:text-film-black hover:tracking-[0.3em] disabled:opacity-50 disabled:pointer-events-none"
            @click="handleDonate(100)"
          >
            {{ donating ? 'Redirecting...' : 'Donate' }}
          </button>
        </div>

        <!-- $1,000 Tier -->
        <div class="group bg-film-charcoal/50 backdrop-blur-sm border border-film-charcoal hover:border-film-gold/30 p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-film-gold/5">
          <Icon name="ph:video-camera" class="text-film-gold text-4xl mb-6 transition-transform duration-500 group-hover:scale-110" />
          <span class="font-display text-4xl text-film-gold mb-2">$1,000</span>
          <h3 class="font-display text-xl text-film-cream mb-3">The Real Deal</h3>
          <p class="text-film-muted text-sm mb-8 flex-1">An actual film crew to fine tune it</p>
          <button
            :disabled="donating"
            class="w-full border border-film-gold/30 text-film-gold py-3 px-6 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-film-gold hover:text-film-black hover:tracking-[0.3em] disabled:opacity-50 disabled:pointer-events-none"
            @click="handleDonate(1000)"
          >
            {{ donating ? 'Redirecting...' : 'Donate' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
