// astro.config.mjs

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://asper-01.github.io',
  base: '',
  pages: [
    {
      path: '/work', // Chemin de la section de travail
      component: './src/pages/work/index.astro', // Chemin vers le fichier index.astro de la section de travail
    },
    // Ajoutez d'autres entrées de page au besoin
  ],
});
