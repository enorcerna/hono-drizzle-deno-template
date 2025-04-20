````markdown
# 🦕 Deno + Drizzle ORM + Hono Starter

A minimal and modern starter project using **Deno**, **Drizzle ORM**, and **HonoJS** — perfect for building fast APIs with a clean developer experience.

## 🧱 Tech Stack

- **[Deno](https://deno.land/)** – A secure runtime for JavaScript and TypeScript.
- **[Hono](https://hono.dev/)** – Ultra-light and fast web framework, similar to Express.
- **[Drizzle ORM](https://orm.drizzle.team/)** – A type-safe, SQL-first ORM with great DX and no hidden magic.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/enorcerna/hono-drizzle-deno-template.git
cd hono-drizzle-deno-template
```
````

### 2. Install dependencies

Deno uses URL-based imports, so there's no `package.json` required. Just make sure Deno is installed:

```bash
deno --version
```

### 3. Set up environment variables

Create a `.env` file:

```env
ATABASE_URL="libsql://database-name.turso.io"
DATABASE_AUTH_TOKEN="you token"
```

Load the variables using [deno-dotenv](https://deno.land/x/dotenv):

```ts
import "https://deno.land/std@0.224.0/dotenv/load.ts";
```

---

## 📦 Useful Scripts

### Start the development server

```bash
deno task start
```

Assuming you have this in `deno.json`:

```json
{
  "tasks": {
    "start": "deno run --allow-env --allow-net --allow-read src/main.ts"
  }
}
```

### Run Drizzle migrations

```bash
deno run -A npm:drizzle-kit push
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── main.ts          # Server entry point
│   ├── routes/
│   │   └── index.ts        # index routes  Hono
│   │   └── users.rts.ts        # Sample route using Hono
│   ├── models          # Define models o schemas Drizzle orm
│   ├── db/
│   │   └── index.ts      # DB client setup
├── drizzle.config.ts      # Drizzle config
├── deno.json              # Deno tasks and permissions
└── .env                   # Environment variables
```

---

## ⚡ Quick Example

### `/src/routes/users.rts.ts`

```ts
import {Hono} from "https://deno.land/x/hono/mod.ts";
import {db} from "../db/client.ts";
import {users} from "../db/schema.ts";

const userRoute = new Hono();

userRoute.get("/", async (c) => {
  const result = await db.select().from(users);
  return c.json(result);
});

export default userRoute;
```

### `/src/main.ts`

```ts
import {Hono} from "https://deno.land/x/hono/mod.ts";
import userRoute from "./routes/users.rts.ts";

const app = new Hono();

app.route("/users", userRoute);

Deno.serve(app.fetch);
```

---

## 📝 License

MIT © 2025 - [@enorcerna]

```

---

```
