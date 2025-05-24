<script setup lang="ts">
import { useDrawerStore } from '../stores/drawer'
import { useProjects } from '../data/projects'
import type { Project } from '../types'
import { ref, computed } from 'vue'

const drawerStore = useDrawerStore()
const { projectCategories } = useProjects()
const activeCategory = ref('All')

const openProjectDetails = (project: Project) => {
  drawerStore.openDrawer(project)
}

const setActiveCategory = (category: string) => {
  activeCategory.value = category
}

// Računamo sve projekte za "All" tab
const allProjects = computed(() => {
  return projectCategories.value.reduce((acc, category) => {
    return [...acc, ...category.projects]
  }, [] as Project[])
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="section-title text-center mb-16">{{ $t('projects.title') }}</h2>

    <!-- Category Tabs -->
    <div class="overflow-x-auto pb-4 mb-12 -mx-4 px-4">
      <div class="flex gap-4 min-w-max mx-auto">
        <button @click="setActiveCategory('All')"
          class="px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap" :class="[
            activeCategory === 'All'
              ? 'bg-primary text-white'
              : 'bg-[#f5f5f5] duration-300'
          ]">
          All Projects
        </button>
        <button v-for="category in projectCategories" :key="category.title" @click="setActiveCategory(category.title)"
          class="px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap" :class="[
            activeCategory === category.title
              ? 'bg-primary text-white'
              : 'bg-[#f5f5f5] duration-300'
          ]">
          {{ category.title }}
        </button>
      </div>
    </div>

    <!-- All Projects Grid -->
    <div v-if="activeCategory === 'All'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in allProjects" :key="project.title" @click="openProjectDetails(project)"
        class="glass-card overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
        <div class="relative overflow-hidden aspect-video">
          <img :src="project.image" :alt="project.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
        </div>

        <div class="p-6">
          <h4 class="text-xl font-semibold mb-2">{{ project.title }}</h4>
          <p class="text-gray-400 mb-4 line-clamp-3">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="bg-[#f5f5f5] px-3 py-1 text-sm rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Projects Grid -->
    <div v-else v-for="category in projectCategories" :key="category.title" v-show="activeCategory === category.title"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in category.projects" :key="project.title" @click="openProjectDetails(project)"
        class="glass-card overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
        <div class="relative overflow-hidden aspect-video">
          <img :src="project.image" :alt="project.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
        </div>

        <div class="p-6">
          <h4 class="text-xl font-semibold mb-2">{{ project.title }}</h4>
          <p class="text-gray-400 mb-4 line-clamp-3">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="bg-[#f5f5f5] px-3 py-1 text-sm rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.13);
  border: 1.5px solid rgba(255,255,255,0.45);
  box-shadow:  0 6px 40px 0 rgba(0,0,0,0.18);
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stilizacija scrollbara za tabove */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
</style>