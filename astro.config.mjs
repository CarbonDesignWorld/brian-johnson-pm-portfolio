import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://brianjohnson.work',
  integrations: [react()],
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
