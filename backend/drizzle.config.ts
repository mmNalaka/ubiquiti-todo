import { defineConfig } from 'drizzle-kit'

import env from '@/config/env.config'

export default defineConfig({
  schema: './src/db/schemas/*',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
