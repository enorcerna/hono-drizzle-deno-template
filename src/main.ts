import { Hono } from "hono";
import { logger } from "hono/logger";
import routes from "./routes/index.ts";
const app = new Hono();
const PORT = 2040;
// middlewares

app.use(logger());
// routes
app.route("/", routes);
//server
Deno.serve({
  port: PORT,
}, app.fetch);
