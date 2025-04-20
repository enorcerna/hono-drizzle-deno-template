import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/models/",
  dialect: "turso",
  dbCredentials: {
    url: Deno.env.get("TURSO_DATABASE_URL")!,
    authToken: Deno.env.get("TURSO_AUTH_TOKEN"),
  },
});
