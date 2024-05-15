import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://asper-01.github.io', // URL de base de votre site
  base: '', // Chemin de base du site, par défaut à la racine
  
  pages: {
    '/': './src/pages/index.astro', // Chemin vers votre page d'accueil
  },
})
