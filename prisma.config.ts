import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "postgres://bd71da181d752440bde63094ad494fa871b65ca3430824c38a1607dc6e57bccd:sk_ape7bpY1OfBKGsq0FWBak@db.prisma.io:5432/postgres?sslmode=require"
  },
});
