import { defineConfig } from "drizzle-kit";
import { getResolvedDatabaseUrl } from "./src/lib/db/url";

const url =
  getResolvedDatabaseUrl() || "postgresql://localhost:5432/bookcover";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./src/lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: { url },
});
