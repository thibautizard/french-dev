// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [tailwind(), mdx(), react()],
  server: {
    port: 5000,
  },
});
