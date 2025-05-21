import { defineStore } from 'pinia'
import type { Project } from '../types'

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    isOpen: false,
    selectedProject: null as Project | null
  }),
  actions: {
    openDrawer(project: Project) {
      this.selectedProject = project
      this.isOpen = true
    },
    closeDrawer() {
      this.isOpen = false
      this.selectedProject = null
    }
  }
}) 