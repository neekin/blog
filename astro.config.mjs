import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://neekin.github.io',
  base: '/blog',
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: vercel()
});