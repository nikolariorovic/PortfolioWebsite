import { gsap } from 'gsap'

export const fadeInUp = (element: Element, delay = 0) => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  })
}

export const staggerChildren = (parent: Element, stagger = 0.1) => {
  gsap.from(parent.children, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: 'power2.out'
  })
}