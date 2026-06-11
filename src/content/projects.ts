export type Project = {
  badge?: string;
  title: string;
  description: {
    ru: string;
    en: string;
  };
  href: string;
  liveUrl?: string;
  ctaLabel?: {
    ru: string;
    en: string;
  };
  tags?: string[];
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
    liveUrl: "https://straiko.github.io/fast_trans/",
    ctaLabel: {
      ru: "открыть на GitHub →",
      en: "view on GitHub →"
    },
    tags: ["PyQt6", "AI APIs", "Speech Recognition", "Python"]
  },
  {
    badge: "NEW",
    title: "SHK Bot",
    description: {
      ru: "Telegram-бот для сканирования и генерации штрих-кодов (Code128) и QR-кодов с OCR-fallback'ом.",
      en: "Telegram bot for scanning and generating barcodes (Code128) and QR codes with OCR fallback."
    },
    href: "https://github.com/Straiko/shk",
    ctaLabel: {
      ru: "открыть на GitHub →",
      en: "view on GitHub →"
    },
    tags: ["Telegram Bot", "OCR", "Python", "QR Codes"]
  },
  {
    badge: "NEW",
    title: "Ozonbratik Bot",
    description: {
      ru: "Telegram-бот для отслеживания цен и товаров на Ozon с уведомлениями о скидках.",
      en: "Telegram bot for tracking prices and products on Ozon with discount notifications."
    },
    href: "https://t.me/Ozonbratik_bot",
    ctaLabel: {
      ru: "открыть в Telegram →",
      en: "open in Telegram →"
    },
    tags: ["Telegram Bot", "Ozon API", "Python", "Price Tracking"]
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
    },
    tags: ["PHP", "OOP", "JSON", "Backend"]
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
    },
    tags: ["JavaScript", "DOM", "Fetch API", "Frontend"]
  }
];
