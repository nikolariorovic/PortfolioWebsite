import { defineStore } from 'pinia'

interface ExperienceDetails {
  period: string
  title: string
  company: string
  description: string
  detailedDescription: string[]
  technologies: string[]
  achievements: string[]
  responsibilities: string[]
}

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    isOpen: false,
    selectedExperience: null as ExperienceDetails | null
  }),
  
  actions: {
    openDrawer(experience: ExperienceDetails) {
      this.selectedExperience = experience
      this.isOpen = true
    },
    
    closeDrawer() {
      this.isOpen = false
      this.selectedExperience = null
    }
  }
}) 