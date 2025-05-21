import { ref, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const isIntersecting = ref(false)
  let observer: IntersectionObserver | null = null
  let element: Element | null = null

  const observe = (el: Element) => {
    element = el
    if (!observer) {
      observer = new IntersectionObserver(([entry]) => {
        isIntersecting.value = entry.isIntersecting
      }, options)
    }
    observer.observe(element)
  }

  onUnmounted(() => {
    if (observer && element) {
      observer.unobserve(element)
      observer.disconnect()
    }
  })

  return {
    isIntersecting,
    observe
  }
}