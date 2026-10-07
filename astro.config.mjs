import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://studio-os-design.github.io',
  base: '/studio-os-portfolio/',
  output : "static",

  vite:{
    plugins: [
      tailwindcss()
    ]
  }
});