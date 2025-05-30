import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import env from '@/config/env.config'

// Create pool
export const pgPool = new Pool({
  connectionString: env.DATABASE_URL,
})

// Create db
export const db = drizzle(pgPool)

export default db
