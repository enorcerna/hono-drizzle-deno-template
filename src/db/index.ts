import { drizzle } from "drizzle-orm/libsql";
import * as models from "@/models/index.ts";
export const db = drizzle({
  connection: {
    url: Deno.env.get("TURSO_DATABASE_URL")!,
    authToken: Deno.env.get("TURSO_AUTH_TOKEN"),
  },
  schema: { ...models },
});
