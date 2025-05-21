import { ref } from 'vue'

export function useNavigation() {
  const activeSection = ref('home')

  const updateActiveSection = (section: string) => {
    activeSection.value = section
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    updateActiveSection(id)
  }

  return {
    activeSection,
    updateActiveSection,
    scrollToSection
  }
}