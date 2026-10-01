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
    { label: "Telegram", href: "https://t.me/Gram_vvallet" },
    { label: "GitHub", href: "https://github.com/Straiko" },
    { label: "Email", href: "mailto:Daniilstarikov2017@gmail.com" },
    { label: "Resume (PDF)", href: "/Daniil_Starikov_Resume.pdf" },
    { label: "Projects", href: "https://github.com/Straiko?tab=repositories" }
  ],
  about: [
    {
      title: "Образование",
      titleEn: "Education",
      items: [
        {
          name: "ГБПОУ МКАГ",
          role: {
            ru: "09.02.07 «Информационные системы и программирование» (Программист)",
            en: "09.02.07 Information Systems & Programming (Software Developer)"
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
            ru: "Python 3.10+, C# (.NET), SQL, JavaScript / TypeScript, Bash, PHP, базовый Rust",
            en: "Python 3.10+, C# (.NET), SQL, JavaScript / TypeScript, Bash, PHP, basic Rust"
          },
          logo: "💻"
        },
        {
          name: "Десктоп & Системная разработка",
          role: {
            ru: "PyQt6, низкоуровневые хуки ОС, захват звука / STT, Win32 / Linux input",
            en: "PyQt6, OS low-level hooks, audio capture / STT, Win32 / Linux input"
          },
          logo: "🖥️"
        },
        {
          name: "Качество кода & DevOps",
          role: {
            ru: "Pytest (105+ тестов), MyPy, Ruff, GitHub Actions CI/CD, PyInstaller, Inno Setup",
            en: "Pytest (105+ tests), MyPy, Ruff, GitHub Actions CI/CD, PyInstaller, Inno Setup"
          },
          logo: "🧪"
        },
        {
          name: "Реверс-инжиниринг & Движки",
          role: {
            ru: ".NET Reflection, анализ сборок Unity (IL/C#), XUI, XPath/XML моддинг",
            en: ".NET Reflection, Unity assembly analysis (IL/C#), XUI, XPath/XML modding"
          },
          logo: "⚙️"
        },
        {
          name: "AI & Чат-боты",
          role: {
            ru: "OpenAI, Anthropic, Groq, Ollama, Telegram Bot API, Telegram Web Apps (TWA)",
            en: "OpenAI, Anthropic, Groq, Ollama, Telegram Bot API, Telegram Web Apps (TWA)"
          },
          logo: "🤖"
        },
        {
          name: "Базы данных & Архитектура",
          role: {
            ru: "SQL, проектирование реляционных БД, 1С:Предприятие 8, UML-диаграммы",
            en: "SQL, relational database design, 1C:Enterprise 8, UML diagrams"
          },
          logo: "🗄️"
        }
      ]
    }
  ]
} as const;

