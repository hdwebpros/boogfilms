<template>
  <section class="relative py-32 md:py-40 bg-film-black overflow-hidden">
    <!-- Subtle background accent -->
    <div class="absolute inset-0 bg-gradient-to-b from-film-dark/50 via-film-black to-film-black" />

    <div class="relative z-10 max-w-5xl mx-auto px-6">
      <!-- Heading -->
      <h2
        v-gsap.whenVisible.once.chars.from="{ opacity: 0, y: 60, rotateX: -90, stagger: 0.03, duration: 1 }"
        class="font-display text-4xl md:text-6xl text-film-gold tracking-[0.2em] uppercase text-center mb-6"
      >
        About the Film
      </h2>

      <div class="flex justify-center mb-16">
        <hr
          v-gsap.preset.line-expand
          class="border-0 h-px bg-film-gold/40 w-20"
        />
      </div>

      <!-- Description -->
      <p
        v-gsap.preset.dramatic-up
        class="text-film-cream/80 leading-relaxed text-lg md:text-xl text-center mb-24 max-w-3xl mx-auto"
      >
        <span class="italic text-film-gold/80">Chasing the Sun</span> is an AI-crafted film grounded in real historical
        records and genealogical research. It traces the extraordinary journey of William Boog — from
        an Irish orphanage to the shores of America — piecing together fragments of a life that time
        nearly forgot.
      </p>

      <!-- Metadata row — big, bold -->
      <div
        v-gsap.whenVisible.once.stagger.from="{ autoAlpha: 0, y: 60, scale: 0.9, stagger: 0.2, duration: 1 }"
        class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24"
      >
        <div class="flex flex-col items-center gap-4 p-8">
          <Icon name="ph:film-strip" class="text-film-gold text-5xl" />
          <span class="text-film-muted text-xs uppercase tracking-[0.3em]">Genre</span>
          <span class="text-film-cream font-display text-2xl">Historical Drama</span>
        </div>
        <div class="flex flex-col items-center gap-4 p-8 border-y md:border-y-0 md:border-x border-film-gold/10">
          <Icon name="ph:monitor-play" class="text-film-gold text-5xl" />
          <span class="text-film-muted text-xs uppercase tracking-[0.3em]">Format</span>
          <span class="text-film-cream font-display text-2xl">AI-Generated Film</span>
        </div>
        <div class="flex flex-col items-center gap-4 p-8">
          <Icon name="ph:clock-countdown" class="text-film-gold text-5xl" />
          <span class="text-film-muted text-xs uppercase tracking-[0.3em]">Status</span>
          <span class="text-film-cream font-display text-2xl">In Development</span>
        </div>
      </div>

      <!-- Pull quote — bigger -->
      <div class="flex justify-center mb-8">
        <hr
          v-gsap.preset.line-expand
          class="border-0 h-px bg-film-gold/20 w-16"
        />
      </div>
      <blockquote
        v-gsap.whenVisible.once.splitText.words.from="{ opacity: 0, y: 20, stagger: 0.04, duration: 0.8 }"
        class="font-display text-2xl md:text-4xl text-film-gold/70 italic text-center max-w-3xl mx-auto leading-relaxed"
      >
        "Every family has a story worth telling."
      </blockquote>
      <div class="flex justify-center mt-8">
        <hr
          v-gsap.preset.line-expand
          class="border-0 h-px bg-film-gold/20 w-16"
        />
      </div>
    </div>
  </section>
</template>
