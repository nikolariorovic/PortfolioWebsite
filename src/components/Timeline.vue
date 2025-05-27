<script setup lang="ts">
import { useExperienceStore } from '../stores/experience'
import { useI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import { computed } from 'vue'

const experienceStore = useExperienceStore()
const { locale } = useI18n()

interface Experience {
  period: string
  title: string
  company: string
  description: string
  detailedDescription: string[]
  technologies: string[]
  achievements: string[]
  responsibilities: string[]
}

const experiences = computed(() => [
  {
    period: 'March 2021 - Present',
    title: 'Software Developer',
    company: 'AppWorks',
    description: 'Developed and enhanced a CMS for hybrid mobile apps with custom plugins, including article lists, sliders, transaction pages, and more.',
    detailedDescription: [
      'Developed and enhanced CMS for hybrid apps with custom plugins: articles, sliders, transactions, and more.',
      'Built & optimized APIs for iOS, Android, Flutter, and web, ensuring fast delivery of imported & internal content.',
      'Optimized high-load asset platform (2M+ assets/year), boosting critical page speed by 40% with queries, caching & admin tweaks.',
      'Integrated online payments (WSPay, Intesa, Raiffeisen, CorvusPay) and fiscalization with Laravel Queue & Supervisor.',
      'Integrated third-party APIs (news, stats, social, live video) & added real-time features like chat & live text with web sockets.',
      'Developed a Python facial recognition & object detection app with Flask, integrated into a Laravel project.',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Python', 'Flask', 'JavaScript', 'jQuery', 'RabbitMQ', 'Livewire', 'WebSocket', 'Bootstrap/Tailwind', 'GitHub', 'Bitbucket', 'Docker', 'Linux'],
    achievements: [
      'Worked on the development and optimization of CMS systems and APIs for mobile and web applications.',
      'Optimized performance of high-traffic platforms and improved page loading speed.',
      'Developed Python applications for facial recognition and integrated them into existing systems.',
      'Integrated online payments, fiscalization, and third-party services.'
    ],
    responsibilities: [
      'Participation in project planning and architecture discussions.',
      'Collaboration with backend, frontend, and mobile teams.',
      'Platform performance optimization and database improvements.',
      'Definition and implementation of CMS and API features.'
    ]
  },
  {
    period: 'November 2019 - October 2020',
    title: 'Web developer',
    company: 'ITMentorstva',
    description: locale.value === 'en'
      ? 'Digital marketing application development'
      : 'Razvoj aplikacije za digitalni marketing',
    detailedDescription: [
      'Developed routes, controllers, and middleware with Laravel to optimize data flow.',
      'Implemented Eloquent ORM and built API integrations to enhance database communication.',
      'Implemented interactive features with JavaScript and jQuery.',
      'Created responsive layouts using HTML and CSS.'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap'],
    achievements: [
      'Optimized data flow with Laravel.',
      'Built interactive, responsive UI.'
    ],
    responsibilities:[
      'Backend development with Laravel.',
      'Frontend development with JavaScript, jQuery, HTML, CSS.'
    ]
  }
])

const education = computed(() => [
  {
    period: '2017 - 2022',
    title: 'Web programming',
    company: 'ICT College, Belgrade',
    description: 'Specialized in web development and problem-solving, with a strong foundation built through academic and self-driven learning.',
    detailedDescription: locale.value === 'en' ? [
      'Specialized in computer multimedia and web technologies',
      'Focus on modern development practices and design principles',
      'Practical projects in web development and multimedia'
    ] : [
      'Specijalizacija u računarskim multimedijima i web tehnologijama',
      'Fokus na modernim razvojnim praksama i principima dizajna',
      'Praktični projekti u web razvoju i multimediji'
    ],
    technologies: ['Web Development', 'Multimedia', 'Design', 'Programming'],
    achievements: locale.value === 'en' ? [
      'Successfully completed multimedia projects',
      'Developed practical web applications',
      'Gained expertise in modern technologies'
    ] : [
      'Uspešno završeni multimedijalni projekti',
      'Razvijene praktične web aplikacije',
      'Stečena ekspertiza u modernim tehnologijama'
    ],
    responsibilities: locale.value === 'en' ? [
      'Project development',
      'Multimedia content creation',
      'Web application development'
    ] : [
      'Razvoj projekata',
      'Kreiranje multimedijalnog sadržaja',
      'Razvoj web aplikacija'
    ]
  },
  {
    period: '2013 - 2017',
    title: 'Computer electrician',
    company: 'Mechanical and Electrical School "Goša", Smederevska Palanka',
    description: 'Computer electrical engineering studies',
    detailedDescription: locale.value === 'en' ? [
      'Studied economics and business principles',
      'Developed analytical and organizational skills',
      'Foundation in business and finance'
    ] : [
      'Izučavanje ekonomije i poslovnih principa',
      'Razvoj analitičkih i organizacionih veština',
      'Osnove poslovanja i finansija'
    ],
    technologies: ['Economics', 'Business', 'Finance', 'Analytics'],
    achievements: locale.value === 'en' ? [
      'Successfully completed economic education',
      'Developed business understanding',
      'Built foundation for future career'
    ] : [
      'Uspešno završeno ekonomsko obrazovanje',
      'Razvijeno poslovno razumevanje',
      'Izgrađeni temelji za buduću karijeru'
    ],
    responsibilities: locale.value === 'en' ? [
      'Economic analysis',
      'Business studies',
      'Financial planning'
    ] : [
      'Ekonomska analiza',
      'Poslovno izučavanje',
      'Finansijsko planiranje'
    ]
  }
])

const openExperienceDetails = (experience: Experience) => {
  experienceStore.openDrawer(experience)
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="space-y-32">
      <!-- Experience Timeline -->
      <div>
        <h3
          class="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {{ $t('about.experience.title') }}
        </h3>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          <!-- Timeline Items -->
          <div class="space-y-16">
            <div v-for="(exp, index) in experiences" :key="index" class="timeline-item relative pl-16">

              <!-- Timeline Dot -->
              <div
                class="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-2" />

              <!-- Content -->
              <div class="glass-card p-6 transform hover:scale-105 transition-all duration-300 
                          cursor-pointer group" @click="openExperienceDetails(exp)">
                <span class="text-sm text-primary font-medium">{{ exp.period }}</span>
                <span class="absolute right-4 top-2 text-xs text-primary whitespace-nowrap">{{ $t('about.experience.clickForDetails') }}</span>
                <h4 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                  {{ exp.title }}
                </h4>
                <p class="text-gray-400 mt-1">{{ exp.company }}</p>
                <!-- <p class="text-gray-300 mt-3">{{ exp.description }}</p> -->
                <div class="flex flex-wrap gap-2 mt-4">
                  <span v-for="tech in exp.technologies" :key="tech" class="bg-[#f5f5f5] px-3 py-1 text-sm  rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Timeline -->
      <div>
        <h3
          class="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {{ $t('about.experience.education') }}
        </h3>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          <!-- Timeline Items -->
          <div class="space-y-16">
            <div v-for="(edu, index) in education" :key="index" class="timeline-item relative pl-16">
              <!-- Timeline Dot -->
              <div
                class="absolute left-4 top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-2" />

              <!-- Content -->
              <div class="glass-card p-6">
                <p class="text-sm text-primary font-medium">{{ edu.period }}</p>
                <h4 class="text-xl font-bold mt-2">{{ edu.title }}</h4>
                <p class="text-gray-400 mt-1">{{ edu.company }}</p>
                <p class="[color:#504E4E] mt-3">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  @apply relative z-10;
}

.timeline-item::before {
  content: '';
  @apply absolute top-2 w-10 h-0.5 bg-gradient-to-r from-primary to-transparent;
  left: 24px;
}

@media (min-width: 768px) {
  .timeline-item {
    @apply pl-24;
  }

  .timeline-item::before {
    @apply w-16;
  }
}

.glass-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.13);
  border: 1.5px solid rgba(255,255,255,0.45);
  box-shadow:  0 6px 40px 0 rgba(0,0,0,0.18);
}
</style>