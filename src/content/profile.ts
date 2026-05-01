export const profile = {
  fullName: "Daniil Starikov",
  tagline: {
    ru: "Разработчик",
    en: "Developer"
  },
  subtitle: {
    ru: "Студент IT-специальности",
    en: "IT Student"
  },
  location: {
    ru: "📍 Москва, Россия",
    en: "📍 Moscow, Russia"
  },
  avatar: "/avatar.jpg",
  links: [
    { label: "GitHub", href: "https://github.com/Straiko" },
    { label: "Email", href: "mailto:Daniilstarikov2017@gmail.com" }
  ],
  about: [
    {
      title: "Образование",
      titleEn: "Education",
      items: [
        {
          name: "МКАГ",
          role: {
            ru: "Студент IT-специальности",
            en: "IT Student"
          },
          logo: "🎓"
        }
      ]
    },
    {
      title: "Навыки",
      titleEn: "Skills",
      items: [
        {
          name: "Языки программирования",
          role: {
            ru: "Python, JavaScript, C++, C, PHP, Node.js",
            en: "Python, JavaScript, C++, C, PHP, Node.js"
          },
          logo: "💻"
        },
        {
          name: "Веб-технологии",
          role: {
            ru: "HTML, CSS, SQL, React.js, PHP (backend)",
            en: "HTML, CSS, SQL, React.js, PHP (backend)"
          },
          logo: "🌐"
        },
        {
          name: "Базы данных",
          role: {
            ru: "SQL, моделирование данных, проектирование БД",
            en: "SQL, data modeling, database design"
          },
          logo: "🗄️"
        },
        {
          name: "Сети и инфраструктура",
          role: {
            ru: "Компьютерные сети, VLAN, сетевое оборудование, монтаж кабельных сред, файловые системы (FAT, NTFS), операционные системы",
            en: "Computer networks, VLAN, network equipment, cable installation, file systems (FAT, NTFS), operating systems"
          },
          logo: "🌐"
        },
        {
          name: "Архитектура и проектирование",
          role: {
            ru: "UML, диаграммы прецедентов, проектирование информационных систем",
            en: "UML, use case diagrams, information systems design"
          },
          logo: "🏗️"
        },
        {
          name: "Инструменты",
          role: {
            ru: "Git, администрирование ИС",
            en: "Git, information systems administration"
          },
          logo: "🔧"
        }
      ]
    }
  ]
} as const;

