import { ref } from 'vue'

export function useTheme() {
  const isDark = ref(true)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
  }

  return {
    isDark,
    toggleTheme
  }
}