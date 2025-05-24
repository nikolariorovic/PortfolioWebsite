<script setup lang="ts">
import Timeline from './Timeline.vue'
import { useSkills } from '../data/skills'

const skills = useSkills()
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-16 xl:mt-32">
    <!-- About Section -->
    <!-- <div>
      <h2 class="section-title text-center mb-8">{{ $t('about.title') }}</h2>
      <div class="glass-card p-6">
        <p class="text-lg text-gray-300 leading-relaxed">
          {{ $t('about.description') }}
        </p>
      </div>
    </div> -->

    <!-- Skills Section -->
    <div>
      <h2 class="section-title text-center mb-8">{{ $t('about.skills.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div v-for="(category, key) in skills" :key="key"
          class="glass-card-title p-4 hover:bg-white/10 transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xl">{{ category.icon }}</span>
            <h3 class="text-lg font-bold bg-primary bg-clip-text text-transparent">
              {{ category.title }}
            </h3>
          </div>

          <div class="grid gap-2" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
            <div v-for="tech in category.technologies" :key="tech.name" class="bg-[#f5f5f5] group relative p-2 rounded-lg hover:bg-white/10 
                        transition-all duration-300 flex items-center gap-2">
              <div v-html="tech.icon" class="w-5 h-5 text-primary flex-shrink-0"></div>
              <div class="min-w-0 flex-1">
                <h4 class="text-sm font-medium">{{ tech.name }}</h4>
              </div>

              <div class="absolute inset-0 border border-primary/0 rounded-lg 
                          group-hover:border-primary/50 transition-all duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Timeline -->
    <Timeline />
  </div>
</template>

<style scoped>
.grid {
  view-timeline-name: --skill-cards;
  view-timeline-axis: block;
}

.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.13);
  border: 1.5px solid rgba(255,255,255,0.45);
  box-shadow:  0 6px 40px 0 rgba(0,0,0,0.18);
  animation: fade-in linear both;
  animation-timeline: --skill-cards;
  animation-range: entry 20% cover 30%;
}

.glass-card-title {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.13);
  border: 1.5px solid rgba(255,255,255,0.45);
  box-shadow:  0 6px 40px 0 rgba(0,0,0,0.18);
  animation: fade-in linear both;
  animation-timeline: --skill-cards;
  animation-range: entry 20% cover 30%;
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

/* Dodatni responzivni stilovi */
@media (max-width: 640px) {
  .grid {
    gap: 0.75rem;
  }

  .glass-card {
    padding: 0.75rem;
  }
}
</style>