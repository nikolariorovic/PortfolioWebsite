import type { Project } from '../types'
import { useI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import { computed } from 'vue'

interface ProjectCategory {
  title: string
  projects: Project[]
}

export function useProjects() {
  const { locale } = useI18n()

  const projectCategories = computed<ProjectCategory[]>(() => [
    {
      title: 'Personal Projects',
      projects: [
        {
          title: 'Moj rođendan',
          description: "A mobile birthday event reservation app for iOS and Android, designed for booking playrooms, entertainers, and related services. The platform is intended for both end-users making reservations and administrators managing services and schedules.",
          image: '/mojrodjendan.png',
          tags: ['Laravel', 'MySql', 'REST API', 'External services integrations', 'Queues'],
          features: [
            'Service Booking',
            'Online Payments',
            'Browsing Service via App',
            'Reservation & Schedule Management',
          ],
          playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mojrodjendan.app&pli=1',
          appStoreUrl: 'https://apps.apple.com/rs/app/moj-rodjendan/id6741870230'
        },
        {
          title: 'VerbumScript',
          description: 'Professional video and audio transcription platform with integrated recording capabilities. Features include YouTube video processing, subtitle creation and editing studio and team collaboration tools. Built for enterprise-level usage with organization management and content sharing.',
          image: '/verbumscript.png',
          tags: ['Laravel', 'PHP', 'Python', 'Flask', 'MySql', 'Whisper', 'OpenAi', 'REST API', 'WebSocket'],
          features: [
            'Screen and audio recording',
            'Video/audio to text transcription',
            'YouTube video processing',
            'Subtitle creation and editing studio',
            'SRT/VTT export formats',
            'Organization and user management',
            'Team collaboration tools'
          ],
          liveUrl: 'https://verbumscript.app',
        }
      ]
    },
    {
      title: 'Professional Projects',
      projects: [
        {
          title: 'MPA - Media Partner Agencija',
          description:'A digital asset management system designed for storing, organizing, and searching large volumes of multimedia content, including individual files and grouped collections. The platform supports detailed metadata tagging, categorization, and labeling of authors as well as people in images, with a strong focus on fast and efficient search, as well as scalability when handling large datasets.',
          image: '/media24.png',
          tags: ['Laravel', 'PHP', 'MySql', 'REST API', 'Livewire', 'Tailwind'],
          features: [
            'Upload of large volumes of images and video content',
            'Fast and accurate search',
            'Efficient handling of high-volume media',
            'Categorization, tagging, author attribution...'
          ],
          liveUrl: 'https://mpa.media/'
        },
        {
          title: 'Face recognition system',
          description: 'A face recognition system built to identify individuals by comparing input images against a predefined database of labeled facial data. The system enables accurate matching by first creating a structured dataset of faces linked to personal identities, and then processing new images to detect and recognize known individuals.',
          image: '/facerecognition.png',
          tags: ['Python', 'Flask', 'DeepFace', 'OpenAi', 'SerpApi'],
          features: [
            'Face detection and recognition from uploaded images',
            'Creation of a labeled facial image database',
            'Association of faces with full names'
          ],
          liveUrl: ''
        },{
          title: 'FK Partizan',
          description: 'Development of the complete backend logic for the official FK Partizan website, with a strong focus on API support for dynamic display of matches, live statistics, teams, players, and news. The backend was built as the foundation for the Vue frontend application, with emphasis on performance, flexibility, and easy content management through a custom CMS.',
          image: '/fkpartizan.jpg',
          tags: ['Laravel', 'PHP', 'MySql', 'REST API', 'Laravel Swagger', 'External services integrations', 'WebSocket', 'Cache'],
          features: [
            'Live Match Center with statistics and play-by-play',
            'CMS platform integration for content management',
            'Team roster with detailed player profiles',
            'Simple and efficient news management',
            'Performance optimization and caching'
          ],
          liveUrl: 'https://partizan.rs',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.fkpartizan&hl=sr',
          appStoreUrl: 'https://apps.apple.com/us/app/fk-partizan/id1644552139'
        },
        {
          title: 'SatHUB',
          description: 'Comprehensive automotive news platform and mobile app featuring premium content, user-generated content, interactive features, and live video broadcasting. Built with modern web technologies and a focus on user engagement.',
          image: '/sathub.png',
          tags: ['Laravel', 'PHP', 'MySql', 'JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap', 'RabbitMQ'],
          features: [
            'Premium article access and management',
            'Live video broadcasting',
            'Payment for subscriptions',
            'Earning points through activities within the app'
          ],
          liveUrl: 'https://satplus.rs',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.satmedia',
          appStoreUrl: 'https://apps.apple.com/rs/app/sat-hub/id6449495888'
        },
        {
          title: 'Pao FC',
          description: 'The official mobile application of the Panathinaikos FC was developed as a hybrid solution, offering users a comprehensive overview of matches, player statistics, and standings in real-time.',
          image: '/pao-fc.png',
          tags: ['Laravel', 'JavaScript', 'MySQL', 'Websocket', 'REST API'],
          features: [
            'Live match center with real-time updates',
            'Player profiles with detailed statistics',
            'League standings and match schedule',
            'Team news and updates',
          ],
          liveUrl: '',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=com.paofc',
          appStoreUrl: 'https://apps.apple.com/us/app/panathinaikos-fc-official-app/id1528359225'
        },
        {
          title: 'Esake',
          description: 'The official mobile application of the ESAKE Greek Basketball League was developed as a hybrid solution, offering users a comprehensive overview of matches, player statistics, and standings in real-time.',
          image: '/esake.png',
          tags: ['Laravel', 'JavaScript', 'MySQL', 'Websocket', 'REST API', 'Genius Sports API'],
          features: [
            'Live match center with real-time updates',
            'Player profiles with detailed statistics',
            'League standings and match schedule',
            'Team news and updates',
            'Comprehensive match history'
          ],
          playStoreUrl: 'https://play.google.com/store/apps/details?id=com.esake.app',
          appStoreUrl: 'https://apps.apple.com/us/app/stoiximan-gbl/id1588418425'
        },
        {
          title: 'HKS',
          description: locale.value === 'en'
            ? 'Official Croatian Basketball Federation mobile app developed as a hybrid solution. Features an extensive statistical system with detailed player and team analytics. Built with modern web technologies focusing on comprehensive data presentation and real-time updates.'
            : 'Zvanična mobilna aplikacija Hrvatskog Košarkaškog Saveza razvijena kao hibridno rešenje. Sadrži opsežan statistički sistem sa detaljnom analitikom igrača i timova. Izrađena korišćenjem modernih web tehnologija sa fokusom na sveobuhvatnu prezentaciju podataka i ažuriranje u realnom vremenu.',
          image: '/hks.jpg',
          tags: ['Laravel', 'JavaScript', 'MySQL', 'Websocket', 'REST API', 'Genius Sports API'],
          features: [
            'Detailed player and team statistics',
            'Advanced performance analytics',
            'Live match tracking with real-time updates',
            'Historical data and trends analysis',
            'League standings and schedules'
          ],
          liveUrl: '',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.hks&hl=sr',
          appStoreUrl: 'https://apps.apple.com/hr/app/hrvatski-ko%C5%A1arka%C5%A1ki-savez/id1625175046'
        },
        {
          title: 'Hanzamedia',
          description: 'All publications from Croatia’s leading media company, Hanza Media, are available in one place – through the website and mobile applications, with easy browsing, reading, and purchasing.',
          image: '/hanzamedia1.png',
          tags: ['Laravel', 'Pyment integration', 'JavaScript', 'MySQL', 'jQuery', 'HTML/CSS', 'Bootstrap'],
          features: [
            'Cross-platform reading experience',
            'Fast and secure payments',
            'Digital viewer for newspaper editions'
          ],
          liveUrl: 'https://online.jutarnji.hr/',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.hanzaMedia&hl=en&gl=US',
          appStoreUrl: 'https://apps.apple.com/hr/app/hanzamedia-e-kiosk/id1211745980'
        },
        {
          title: 'Politika',
          description: 'Digital platform for Politika, Serbia\'s oldest and most respected media company, featuring e-paper editions and digital content. Built with modern web technologies focusing on optimal reading experience and content accessibility across all devices.',
          image: '/politika.png',
          tags: ['Laravel', 'Pyment integration', 'JavaScript', 'MySQL', 'jQuery', 'HTML/CSS', 'Bootstrap'],
          features: [
            'Digital newspaper editions viewer',
            'Archive of past editions',
            'Cross-platform reading experience',
            'User subscription management',
          ],
          liveUrl: 'https://webshop.politika.rs/rs',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.politikaProdavnica&hl=sr',
          appStoreUrl: 'https://apps.apple.com/us/app/%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B2%D0%BD%D0%B8%D1%86%D0%B0/id1124420231'
        },
        {
          title: 'Geopoetika',
          description: 'E-commerce platform for Geopoetika publishing house, featuring both physical and digital book sales. Integrated with a custom CMS for dynamic pricing, discount management, and the display of both digital and print editions, along with all related information.',
          image: '/geopoetika.png',
          tags: ['Laravel', 'Pyment integration', 'JavaScript', 'MySQL', 'Websocket', 'jQuery', 'HTML/CSS', 'Bootstrap'],
          features: [
            'Physical and digital book sales',
            'CMS for content management',
            'Digital book reader',
            'User authentication and profiles',
            'Shopping cart and checkout'
          ],
          liveUrl: 'https://www.geopoetika.com/',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.geopoetika&hl=sr',
          appStoreUrl: 'https://apps.apple.com/us/app/geopoetika-e-knji%C5%BEara/id1051637732'
        },
        {
          title: 'Telesport',
          description: 'Telepost is an app dedicated to all sports fans. With a clean and modern design, it offers quick and easy access to the latest sports news, results, and chat with other fans.',
          image: '/telesport.png',
          tags: ['Laravel', 'JavaScript', 'MySQL', 'Websocket', 'jQuery'],
          features: [
            'Real-time chat',
            'Automated content moderation',
            'Short sports videos',
            'Up-to-date news feed'
          ],
          playStoreUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.telesport',
          appStoreUrl: 'https://apps.apple.com/rs/app/telesport-sportske-novosti/id6473834517'
        }
      ]
    }
  ])

  return {
    projectCategories
  }
}