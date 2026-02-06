<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background image with slow scale reveal -->
    <NuxtImg
      v-gsap.from="{ scale: 1.15, opacity: 0, duration: 2.5, ease: 'power2.out' }"
      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"
      alt="Misty green Irish hills"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />

    <!-- Multi-layer cinematic overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
    <!-- Vignette -->
    <div class="absolute inset-0 vignette" />

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Pre-title -->
      <p
        v-gsap.from="{ autoAlpha: 0, y: -20, duration: 0.8, delay: 0.3 }"
        class="font-body text-xs md:text-sm text-film-gold/70 uppercase tracking-[0.4em] mb-8"
      >
        A Boog Family Film
      </p>

      <h1
        v-gsap.chars.from="{ opacity: 0, y: 100, rotateX: -90, stagger: 0.04, duration: 1.2, ease: 'power4.out' }"
        class="font-display text-6xl md:text-8xl lg:text-9xl text-film-gold tracking-[0.15em] uppercase leading-none"
      >
        Chasing the Sun
      </h1>

      <!-- Gold divider -->
      <div class="flex justify-center my-10">
        <hr
          v-gsap.from.delay-2000="{ width: 0, duration: 1.5, ease: 'power2.inOut' }"
          class="border-0 h-px bg-film-gold w-40 md:w-64"
        />
      </div>

      <!-- Tagline -->
      <p
        v-gsap.from.delay-2500="{ autoAlpha: 0, y: 40, duration: 1 }"
        class="font-body text-lg md:text-2xl text-film-cream/80 tracking-wide max-w-2xl mx-auto leading-relaxed"
      >
        An Irish orphan. An American dream. A story that spans generations.
      </p>
    </div>

    <!-- Scroll indicator -->
    <div
      v-gsap.infinitely.fromTo="[
        { y: 0 },
        { y: -10, stagger: 0.1, yoyo: true, repeat: 1 }
      ]"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <span class="text-film-cream/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <Icon name="ph:caret-down" class="text-film-gold/50 text-2xl" />
    </div>
  </section>
</template>
