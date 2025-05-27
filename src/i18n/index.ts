import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'

type MessageSchema = {
    nav: {
        home: string
        about: string
        projects: string
        contact: string
    }
    hero: {
        title: string
        subtitle: string
        viewProjects: string
        contactMe: string
    }
    about: {
        title: string
        description: string
        skills: {
            title: string
            frontend: string
            backend: string
            tools: string
        }
        experience: {
            title: string
            education: string
            overview: string
            achievements: string
            responsibilities: string
            technologies: string
            clickForDetails: string
        }
    }
    projects: {
        title: string
        viewLive: string
        viewCode: string
        clickForDetails: string
        technologies: string
        features: string
        categories: {
            personal: string
            professional: string
            opensource: string
        }
    }
    contact: {
        title: string
        name: string
        email: string
        message: string
        send: string
        socialLinks: {
            email: string
            linkedin: string
            github: string
        }
    }
    drawer: {
        technologies: string
        features: string
        overview: string
        achievements: string
        responsibilities: string
    }
}

const messages = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            downloadCV: 'Download CV'
        },
        hero: {
            title: "Nikola Riorović",
            subtitle: "Experienced and passionate software developer dedicated to building reliable, high-performance solutions. Constantly striving to grow through new challenges.🔥",
            viewProjects: 'Projects',
            contactMe: 'Contact Me'
        },
        about: {
            title: 'About Me',
            description: "I'm a passionate Frontend Developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern frameworks and best practices, I transform ideas into beautiful, functional websites.",
            skills: {
                title: 'Technical Skills',
                frontend: 'Frontend Development',
                backend: 'Backend Development',
                tools: 'Tools & Others'
            },
            experience: {
                title: 'Professional Journey',
                education: 'Education',
                overview: 'Overview',
                achievements: 'Key Achievements',
                responsibilities: 'Core Responsibilities',
                technologies: 'Technologies Used',
                clickForDetails: 'Click for details →'
            }
        },
        projects: {
            title: 'Featured Projects',
            viewLive: 'View Live',
            viewCode: 'View Code',
            clickForDetails: 'Click for details →',
            technologies: 'Technologies Used',
            features: 'Key Features',
            categories: {
                personal: 'Personal Projects',
                professional: 'Professional Projects',
                opensource: 'Open Source Contributions'
            }
        },
        contact: {
            title: 'Get in Touch',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            socialLinks: {
                email: 'Email:',
                linkedin: 'LinkedIn:',
                github: 'GitHub:'
            }
        },
        drawer: {
            technologies: 'Technologies Used',
            features: 'Key Features',
            overview: 'Overview',
            achievements: 'Key Achievements',
            responsibilities: 'Core Responsibilities'
        }
    }
} as const

export const i18n = createI18n<[MessageSchema], 'en' | 'sr'>({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

declare module 'vue-i18n' {
    export interface DefineLocaleMessage extends MessageSchema { }
} 