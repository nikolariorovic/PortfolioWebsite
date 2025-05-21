export interface Skill {
  name: string
  level: number
  color: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}