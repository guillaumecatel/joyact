import config from '@joyact/tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
  ...config,
  content: [
    './.storybook/**/*.{html,js,jsx,md,mdx,ts,tsx}',
    './src/**/*.{html,js,jsx,md,mdx,ts,tsx}',
  ] }
