<script setup lang="ts">
const skills = [
  { name: 'Vue.js', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 80 }
]
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Frontend Developer</h1>
          <p class="text-xl md:text-2xl mb-8">Creating beautiful and responsive web experiences</p>
          <router-link to="/contact"
            class="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">My Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div v-for="skill in skills" :key="skill.name" class="card">
            <div class="flex justify-between mb-2">
              <span class="font-semibold">{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-primary h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>