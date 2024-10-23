import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import node from '@astrojs/node'
import lenis from 'astro-lenis'

export default defineConfig({
  site: 'https://joyact.fr',
  server: {
    open: true,
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    lenis(),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
})
