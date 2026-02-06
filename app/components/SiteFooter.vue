<template>
  <footer class="relative border-t border-film-gold/10 bg-film-black py-20">
    <div
      v-gsap.whenVisible.once.from="{ autoAlpha: 0, y: 40, duration: 1 }"
      class="max-w-3xl mx-auto px-6 text-center"
    >
      <p class="font-display text-film-gold tracking-[0.3em] uppercase text-lg mb-6">
        Chasing the Sun
      </p>

      <div class="flex justify-center mb-6">
        <hr class="border-0 h-px bg-film-gold/20 w-16" />
      </div>

      <p class="text-film-cream/50 text-sm leading-relaxed mb-8">
        Every contribution brings this story closer to life.
      </p>

      <p class="text-film-muted text-xs tracking-wider">
        &copy; {{ new Date().getFullYear() }} Chasing the Sun. Made with AI. Based on real events.
      </p>
    </div>
  </footer>
</template>
