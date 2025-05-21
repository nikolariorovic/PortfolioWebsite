<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold text-primary">Portfolio</router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700">
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link @click="isMenuOpen = false" to="/" class="block nav-link">Home</router-link>
        <router-link @click="isMenuOpen = false" to="/projects" class="block nav-link">Projects</router-link>
        <router-link @click="isMenuOpen = false" to="/about" class="block nav-link">About</router-link>
        <router-link @click="isMenuOpen = false" to="/contact" class="block nav-link">Contact</router-link>
      </div>
    </div>
  </nav>
</template>