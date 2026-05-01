// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://straiko.github.io',
  base: process.env.GITHUB_ACTIONS ? '/straiko-me' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});