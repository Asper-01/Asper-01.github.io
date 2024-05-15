// astro.config.mjs

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://asper-01.github.io',
  base: '',
  pages: [
    {
      path: '/src/pages/index.astro', // Chemin de la section de travail
      component: '/src/pages/index.astro', // Chemin vers le fichier index.astro de la section de travail
    },
    // Ajoutez d'autres entrées de page au besoin
  ],
});


