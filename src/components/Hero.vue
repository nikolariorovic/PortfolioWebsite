<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroBackground from './HeroBackground.vue'

gsap.registerPlugin(ScrollTrigger)

const heroContent = ref<HTMLElement | null>(null)

onMounted(() => {
  if (heroContent.value?.children) {
    const elements = Array.from(heroContent.value.children)
    gsap.from(elements, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1
    })
  }
})
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center">
    <HeroBackground />

    <div ref="heroContent" class="hero-content relative z-10 w-full max-w-[1400px] mx-auto px-4 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-24 px-2 sm:px-4 lg:ml-8 xl:ml-16">
        <!-- Text Content -->
        <div class="text-center lg:w-1/2">
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 whitespace-nowrap">
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {{ $t('hero.title') }}
            </span>
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8">
            {{ $t('hero.subtitle') }}
          </p>
          <div class="flex gap-4 justify-center">
            <a href="#projects" class="text-white btn-primary hover:scale-105 transform transition-all duration-300">
              {{ $t('hero.viewProjects') }}
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="hidden lg:block lg:w-1/2 -mt-24">
          <div class="relative">
            <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-black/70 blur-[48px] rounded-full z-0"></div>
            <img src="/hero-image.png" alt="Hero Image" class="w-full h-auto max-w-lg mx-auto relative z-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  user-select: none;
}
</style>