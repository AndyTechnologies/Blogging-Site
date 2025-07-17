// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://www.github.com/',

  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
      fallback: {
          en: "es"
      },
      routing: {
          prefixDefaultLocale: false,
          fallbackType: "rewrite"
      }
  },

  integrations: [mdx()]
});