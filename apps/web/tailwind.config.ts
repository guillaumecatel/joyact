import config from '@joyact/tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
  ...config,
  content: [
    './node_modules/@joyact/ui/src/**',
    './src/**/*.{html,astro,js,jsx,md,mdx,ts,tsx}',
  ] }
