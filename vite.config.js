import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

const BASE_PATH = '/sveltePortfolio1/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(),
    tailwindcss(),
  ], 
base: BASE_PATH,
})
