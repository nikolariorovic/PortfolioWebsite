<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useDrawerStore } from '../../stores/drawer'
import { useExperienceStore } from '../../stores/experience'

const props = defineProps<{
  isOpen: boolean
  onClose: () => void
}>()

const drawerStore = useDrawerStore()
const experienceStore = useExperienceStore()

const preventScroll = () => {
  document.body.style.overflow = 'hidden'
}

const enableScroll = () => {
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  if (props.isOpen) preventScroll()
})

onUnmounted(() => {
  enableScroll()
})

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    preventScroll()
  } else {
    enableScroll()
  }
})
</script>

<template>
  <Transition name="drawer">
    <div v-if="isOpen" class="fixed inset-0 z-50">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/40 shadow-overlay" @click="onClose">
      </div>

      <!-- Drawer -->
      <div class="absolute top-0 right-0 h-full w-full max-w-2xl">
        <div class="h-full w-full bg-dark border-l border-white/10 transition-transform duration-500"
          :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
          <div class="relative h-full">
            <!-- Close button -->
            <button @click="onClose"
              class="bg-[#f5f5f5] absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <XMarkIcon class="[color:#504E4E] w-6 h-6 text-white" />
            </button>

            <!-- Content -->
            <div class="h-full overflow-y-auto p-8 pt-16 pb-20 custom-scrollbar">
              <!-- Project Details -->
              <div v-if="drawerStore.selectedProject" class="space-y-8 mb-10 md:mb-0">
                <img :src="drawerStore.selectedProject.image" :alt="drawerStore.selectedProject.title"
                  class="w-full object-cover rounded-xl">

                <div>
                  <h2 class="text-3xl font-bold mb-4">{{ drawerStore.selectedProject.title }}</h2>
                  <p class="[color:#504E4E] text-gray-300 text-lg leading-relaxed mb-6">
                    {{ drawerStore.selectedProject.description }}
                  </p>

                  <div class="space-y-6">
                    <div>
                      <h3 class="text-xl font-semibold mb-3">{{ $t('drawer.technologies') }}</h3>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tag in drawerStore.selectedProject.tags" :key="tag"
                          class="bg-[#f5f5f5] px-4 py-2 text-sm rounded-full">
                          {{ tag }}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 class="text-xl font-semibold mb-3">{{ $t('drawer.features') }}</h3>
                      <ul class="list-disc list-inside space-y-2 text-gray-300">
                        <li v-for="feature in drawerStore.selectedProject.features" :key="feature" class="[color:#504E4E]">
                          {{ feature }}
                        </li>
                      </ul>
                    </div>

                    <div class="flex flex-row flex-wrap gap-3 md:flex-row md:gap-4">
                      <a v-if="drawerStore.selectedProject.liveUrl" :href="drawerStore.selectedProject.liveUrl"
                        target="_blank" class="[color:#ffffff] btn-primary">
                        View Live
                      </a>
                      <template v-if="drawerStore.selectedProject.githubUrl">
                        <a :href="drawerStore.selectedProject.githubUrl" target="_blank"
                          class="btn-primary bg-white/10 hover:bg-white/20">
                          View Code
                        </a>
                      </template>
                      <template v-else-if="drawerStore.selectedProject.playStoreUrl">
                        <a :href="drawerStore.selectedProject.playStoreUrl" target="_blank"
                          class="btn-primary bg-[#f5f5f5] hover:bg-primary hover:text-white duration-300">
                          Play Store
                        </a>
                        <a :href="drawerStore.selectedProject.appStoreUrl" target="_blank"
                          class="btn-primary bg-[#f5f5f5] hover:bg-primary hover:text-white duration-300">
                          App Store
                        </a>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Experience Details -->
              <div v-if="experienceStore.selectedExperience" class="space-y-8">
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
                    <h3 class="text-xl font-semibold mb-3">{{ $t('drawer.overview') }}</h3>
                    <div class="space-y-2 text-gray-300">
                      <p v-for="desc in experienceStore.selectedExperience.detailedDescription" :key="desc" class="[color:#504E4E]">
                        {{ desc }}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 class="text-xl font-semibold mb-3">{{ $t('drawer.achievements') }}</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                      <li v-for="achievement in experienceStore.selectedExperience.achievements" :key="achievement" class="[color:#504E4E]">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 class="text-xl font-semibold mb-3">{{ $t('drawer.responsibilities') }}</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-300">
                      <li v-for="responsibility in experienceStore.selectedExperience.responsibilities"
                        :key="responsibility" class="[color:#504E4E]">
                        {{ responsibility }}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 class="text-xl font-semibold mb-3">{{ $t('drawer.technologies') }}</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in experienceStore.selectedExperience.technologies" :key="tech"
                        class="bg-[#f5f5f5] px-4 py-2 text-sm rounded-full">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}

.shadow-overlay {
  box-shadow: inset -10px 0 30px rgba(0, 0, 0, 0.3);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .translate-x-0,
.drawer-leave-to .translate-x-0 {
  transform: translateX(100%);
}
</style>