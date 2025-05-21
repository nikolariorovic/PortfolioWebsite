import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimation() {
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  })
}