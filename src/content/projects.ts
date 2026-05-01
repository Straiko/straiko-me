export type Project = {
  badge?: string;
  title: string;
  description: {
    ru: string;
    en: string;
  };
  href: string;
  ctaLabel?: {
    ru: string;
    en: string;
  };
};

// Curated from https://github.com/Straiko (sorted by "ship value" for a portfolio)
export const projects: Project[] = [
  {
    badge: "NEW · FT-001",
    title: "Olympus (fast_trans)",
    description: {
      ru: "Desktop приложение для мгновенного перевода текста и голосового ввода с AI-улучшением. PyQt6 + Speech Recognition + AI APIs.",
      en: "Desktop app for instant text translation and voice input with AI enhancement. PyQt6 + Speech Recognition + AI APIs."
    },
    href: "https://github.com/Straiko/fast_trans",
    ctaLabel: {
      ru: "открыть на GitHub →",
      en: "view on GitHub →"
    }
  },
  {
    title: "easy-php",
    description: {
      ru: "Коллекция PHP утилит и экспериментов для изучения языка.",
      en: "Collection of PHP utilities and experiments for learning."
    },
    href: "https://github.com/Straiko/easy-php",
    ctaLabel: {
      ru: "открыть на GitHub →",
      en: "view on GitHub →"
    }
  },
  {
    title: "2-work-52",
    description: {
      ru: "Практические задачи и проекты на JavaScript для обучения.",
      en: "JavaScript practice tasks and projects for learning."
    },
    href: "https://github.com/Straiko/2-work-52",
    ctaLabel: {
      ru: "открыть на GitHub →",
      en: "view on GitHub →"
    }
  }
];
