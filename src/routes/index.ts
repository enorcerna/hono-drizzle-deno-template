import { Hono } from "hono";
import userRoute from "./users.rts.ts";
const app = new Hono();

app.route("/users", userRoute);

export default app;
