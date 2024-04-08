import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import react from '@astrojs/react'

import vercelServerless from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'hybrid',
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
})
