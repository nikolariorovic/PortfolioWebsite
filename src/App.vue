<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDrawerStore } from './stores/drawer'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Drawer from './components/ui/Drawer.vue'
import Footer from './components/Footer.vue'
import AnimatedShapes from './components/AnimatedShapes.vue'
import { useExperienceStore } from './stores/experience'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const drawerStore = useDrawerStore()
const experienceStore = useExperienceStore()

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const sections = document.querySelectorAll('section:not(#contact)')
  sections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})

const activeSection = ref('home')

const updateActiveSection = (section: string) => {
  activeSection.value = section
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
  updateActiveSection(id)
}

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const showBackToTop = ref(false)

const checkScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const downloadCV = () => {
  const cvUrl = '/nikola_riorovic_cv.pdf'
  const link = document.createElement('a')
  link.href = cvUrl
  link.download = 'nikola_riorovic_cv.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div class="bg-dark text-white min-h-screen">
    <AnimatedShapes />

    <!-- Language Switcher -->
    <!-- <button @click="toggleLanguage"
      class="fixed top-4 right-16 md:right-4 z-50 px-4 py-2 glass-card rounded-full hover:bg-white/10 transition-all duration-300">
      {{ locale === 'en' ? 'SR' : 'EN' }}
    </button> -->

    <!-- Mobile Menu Button -->
    <button @click="toggleMobileMenu"
      class="[color:#504E4E] fixed top-4 right-4 z-50 p-2 md:hidden glass-card rounded-full hover:bg-white/10 transition-all duration-300">
      <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
      <XMarkIcon v-else class="w-6 h-6" />
    </button>

    <!-- Desktop Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-40 hidden md:block glass-card mx-4 mt-4 lg:mx-auto lg:max-w-2xl">
      <div class="flex justify-center p-4 gap-8">
        <button v-for="section in ['home', 'about', 'projects', 'contact']" :key="section"
          @click="scrollToSection(section)" :class="[
            'text-sm uppercase tracking-wider transition-all duration-300',
            activeSection === section ? 'text-primary scale-110' : '[color:#504E4E] hover:text-primary'
          ]">
          {{ $t(`nav.${section}`) }}
        </button>
      </div>
    </nav>

    <!-- Mobile Navigation Menu -->
    <div class="md:hidden">
      <Transition name="mobile-menu">
        <nav v-if="isMobileMenuOpen"
          class="fixed inset-0 z-30 bg-dark/95 backdrop-blur-lg flex items-center justify-center">
          <!-- Close button -->
          <button @click="closeMobileMenu"
            class="bg-[#f5f5f5] absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-all duration-300">
            <XMarkIcon class="[color:#504E4E] w-6 h-6 text-white" />
          </button>
          <div class="flex flex-col items-center gap-8">
            <button v-for="section in ['home', 'about', 'projects', 'contact']" :key="section"
              @click="() => { scrollToSection(section); closeMobileMenu(); }" :class="[
                'text-2xl font-medium tracking-wider transition-all duration-300',
                activeSection === section ? 'text-primary scale-110' : '[color:#504E4E] hover:text-primary'
              ]">
              {{ $t(`nav.${section}`) }}
            </button>
          </div>
        </nav>
      </Transition>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto px-4 pb-28 space-y-32">
      <section id="home" class="min-h-screen justify-center flex items-center">
        <Hero />
      </section>

      <section id="about" class="min-h-screen" style='margin-top: -90px;'>
        <About />
      </section>

      <section id="projects" class="">
        <Projects />
      </section>

      <section id="contact" class="opacity-100 !transform-none">
        <Contact />
      </section>
    </main>

    <!-- Project Details Drawer -->
    <Drawer :is-open="drawerStore.isOpen" :on-close="drawerStore.closeDrawer">
      <div v-if="drawerStore.selectedProject" class="space-y-8">
        <img :src="drawerStore.selectedProject.image" :alt="drawerStore.selectedProject.title"
          class="w-full h-64 object-cover rounded-xl">

        <div>
          <h2 class="text-3xl font-bold mb-4">{{ drawerStore.selectedProject.title }}</h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            {{ drawerStore.selectedProject.description }}
          </p>

          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in drawerStore.selectedProject.tags" :key="tag"
                  class="bg-[#f5f5f5] px-4 py-2 text-sm bg-white/10 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-3">Key Features</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-300">
                <li v-for="feature in drawerStore.selectedProject.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
            </div>

            <div class="flex gap-4">
              <a :href="drawerStore.selectedProject.liveUrl" target="_blank" class="btn-primary">
                View Live
              </a>
              <a :href="drawerStore.selectedProject.githubUrl" target="_blank"
                class="btn-primary bg-white/10 hover:bg-white/20">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Drawer>

    <!-- Experience Details Drawer -->
    <Drawer :is-open="experienceStore.isOpen" :on-close="experienceStore.closeDrawer">
      <div v-if="experienceStore.selectedExperience" class="space-y-8">
        <!-- Experience Drawer Content -->
        <div>
          <span class="text-primary font-medium">
            {{ experienceStore.selectedExperience.period }}
          </span>
          <h2 class="text-3xl font-bold mt-2">
            {{ experienceStore.selectedExperience.title }}
          </h2>
          <p class="text-xl text-gray-400 mt-1">
            {{ experienceStore.selectedExperience.company }}
          </p>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-3">Overview</h3>
            <div class="space-y-2 text-gray-300">
              <p v-for="desc in experienceStore.selectedExperience.detailedDescription" :key="desc">
                {{ desc }}
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Key Achievements</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
              <li v-for="achievement in experienceStore.selectedExperience.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Core Responsibilities</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
              <li v-for="responsibility in experienceStore.selectedExperience.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-3">Technologies Used</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in experienceStore.selectedExperience.technologies" :key="tech"
                class="px-4 py-2 text-sm bg-white/10 rounded-full">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Drawer>

    <!-- Footer -->
    <Footer />

    <!-- CV Download Button - Desktop -->
    <div class="fixed left-4 bottom-14 z-40 hidden md:block">
      <button @click="downloadCV"
        class="glass-card w-12 h-12 flex flex-col items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300 group">
        <span class="text-sm tracking-wider font-medium -mt-1">CV</span>
        <svg xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </div>

    <!-- CV Download Button - Mobile -->
    <div class="fixed left-4 bottom-14 z-40 md:hidden">
      <button @click="downloadCV"
        class="glass-card p-3 rounded-full hover:bg-white/10 transition-all duration-300 group">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transform group-hover:translate-y-1 transition-transform duration-300" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </div>

    <!-- Back to Top Button -->
    <button @click="scrollToTop" v-show="showBackToTop"
      class="[color:#504E4E] fixed bottom-14 right-4 z-40 p-3 glass-card rounded-full hover:bg-white/10 transition-all duration-300 group">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease-out;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.13);
  border: 1.5px solid rgba(255,255,255,0.45);
  box-shadow: 0 6px 40px 0 rgba(0,0,0,0.18);
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-transform: uppercase;
}

/* Osigurajmo da dugmad budu iznad drugih elemenata ali ispod drawera */
.fixed {
  z-index: 40;
}
</style>