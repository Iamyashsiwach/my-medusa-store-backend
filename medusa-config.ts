import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseDriverOptions:
      process.env.NODE_ENV === "production"
        ? { connection: { ssl: { rejectUnauthorized: false } } }
        : {},
    databaseUrl: process.env.DATABASE_URL,
    http: {
      authCors: process.env.AUTH_CORS,
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  admin: {
    disable: true,
  },
})
