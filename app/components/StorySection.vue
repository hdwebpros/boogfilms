<template>
  <section>
    <!-- Section title -->
    <div class="relative py-32 flex items-center justify-center bg-film-black">
      <h2
        v-gsap.whenVisible.once.splitText.chars.from="{ opacity: 0, y: 60, rotateX: -90, stagger: 0.03, duration: 1 }"
        class="font-display text-4xl md:text-6xl text-film-gold tracking-[0.2em] uppercase text-center"
      >
        The Story
      </h2>
    </div>

    <!-- Story beat 1: From Nothing — Full screen -->
    <div class="relative h-screen flex items-center overflow-hidden">
      <NuxtImg
        v-gsap.parallax.slower-3
        src="images/tenements.jpg"
        alt="Green Irish countryside"
        class="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
      <div class="absolute inset-0 vignette" />

      <div class="relative z-10 max-w-2xl px-8 md:px-16 lg:px-24">
        <h3
          v-gsap.whenVisible.once.splitText.chars.from="{ opacity: 0, y: 60, stagger: 0.03, duration: 0.8 }"
          class="font-display text-4xl md:text-6xl lg:text-7xl text-film-gold mb-6 leading-tight"
        >
          From Nothing
        </h3>
        <div
          v-gsap.preset.line-expand
          class="h-px bg-film-gold w-24 mb-8"
        />
        <p
          v-gsap.whenVisible.once.from.delay-600="{ autoAlpha: 0, y: 40, duration: 1 }"
          class="text-film-cream/90 leading-relaxed text-lg md:text-xl"
        >
          Born into hardship in 19th-century Ireland, young William Boog knew nothing of the
          world beyond the stone walls of the orphanage. With no family to call his own,
          he learned early that survival meant resilience — and that hope was the only
          currency that never ran out.
        </p>
      </div>
    </div>

    <!-- Cinematic interlude quote -->
    <div class="relative h-[50vh] flex items-center justify-center overflow-hidden bg-film-black">
      <div class="absolute inset-0 bg-gradient-to-b from-black via-film-dark to-black" />
      <div class="relative z-10 text-center px-8 max-w-5xl">
        <div class="flex justify-center mb-8">
          <hr
            v-gsap.preset.line-expand
            class="border-0 h-px bg-film-gold/40 w-20"
          />
        </div>
        <blockquote
          v-gsap.whenVisible.once.animateText.slow
          class="font-display text-2xl md:text-4xl text-film-gold/70 italic leading-relaxed"
        >
          "Hope was the only currency that never ran out."
        </blockquote>
        <div class="flex justify-center mt-8">
          <hr
            v-gsap.preset.line-expand
            class="border-0 h-px bg-film-gold/40 w-20"
          />
        </div>
      </div>
    </div>

    <!-- Story beat 2: Building a Life — Full screen, text on right -->
    <div class="relative h-screen flex items-center overflow-hidden">
      <video
        autoplay
        loop
        muted
        playsinline
        src="/images/williamboots.mp4"
        class="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-l from-black/85 via-black/60 to-black/20" />
      <div class="absolute inset-0 vignette" />

      <div class="relative z-10 max-w-2xl ml-auto px-8 md:px-16 lg:px-24 text-right">
        <h3
          v-gsap.whenVisible.once.splitText.chars.from="{ opacity: 0, y: 60, stagger: 0.03, duration: 0.8 }"
          class="font-display text-4xl md:text-6xl lg:text-7xl text-film-gold mb-6 leading-tight"
        >
          Building a Life
        </h3>
        <div
          v-gsap.preset.line-expand
          class="h-px bg-film-gold w-24 mb-8 ml-auto"
        />
        <p
          v-gsap.whenVisible.once.from.delay-600="{ autoAlpha: 0, y: 40, duration: 1 }"
          class="text-film-cream/90 leading-relaxed text-lg md:text-xl"
        >
          With nothing but determination and a name he barely knew the origin of, William perservered through the worst famine in Irish history and decided to learn what others wouldn't — it all pointed toward something bigger. He wasn't
          just surviving anymore. He was building.
        </p>
      </div>
    </div>

    <!-- Cinematic interlude — dramatic landscape -->
    <div class="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <NuxtImg
        v-gsap.parallax.slower-2
        src="images/story.jpg"
        alt="Mountain peaks above the clouds"
        class="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div class="absolute inset-0 bg-black/60" />
      <div class="absolute inset-0 vignette" />
      <p
        v-gsap.whenVisible.once.from="{ autoAlpha: 0, scale: 0.9, duration: 1.5 }"
        class="relative z-10 font-display text-xl md:text-3xl text-film-cream/60 italic text-center tracking-wider px-8"
      >
        Every family has a story worth telling.
      </p>
    </div>

    <!-- Story beat 3: A New Shore — Full screen, centered -->
    <div class="relative h-screen flex items-center justify-center overflow-hidden">
      <NuxtImg
        v-gsap.parallax.slower-3
        src="images/stpaul.jpg"
        alt="New York City skyline at dusk"
        class="absolute inset-0 w-full h-[130%] object-cover"
      />
      <div class="absolute inset-0 bg-black/70" />
      <div class="absolute inset-0 vignette" />

      <div class="relative z-10 max-w-3xl text-center px-8">
        <h3
          v-gsap.whenVisible.once.splitText.chars.from="{ opacity: 0, y: 60, stagger: 0.03, duration: 0.8 }"
          class="font-display text-4xl md:text-6xl lg:text-7xl text-film-gold mb-6 leading-tight"
        >
          A New Shore
        </h3>
        <div class="flex justify-center">
          <hr
            v-gsap.preset.line-expand
            class="h-px bg-film-gold w-24 mb-8"
          />
        </div>
        <p
          v-gsap.whenVisible.once.from.delay-600="{ autoAlpha: 0, y: 40, duration: 1 }"
          class="text-film-cream/90 leading-relaxed text-lg md:text-xl"
        >
          America was more than a destination — it was a promise. Bringing
          only the unshakeable belief that his story was just beginning, William Boog mastered crafts, invented, suffered immense heartache, and took every advantage the American dream had to offer.
        </p>
      </div>
    </div>
  </section>
</template>
