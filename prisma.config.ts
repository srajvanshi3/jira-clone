import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19hcGU3YnBZMU9mQktHc3EwRldCYWsiLCJhcGlfa2V5IjoiMDFLOE4zWFZOWTJQQjYyVkJXNDZRRENNVkciLCJ0ZW5hbnRfaWQiOiJiZDcxZGExODFkNzUyNDQwYmRlNjMwOTRhZDQ5NGZhODcxYjY1Y2EzNDMwODI0YzM4YTE2MDdkYzZlNTdiY2NkIiwiaW50ZXJuYWxfc2VjcmV0IjoiNmUxNjM4ZjktYzRiYy00ZWIwLWFmY2MtNGI4MmZmMTFlOWYwIn0.8NIGhp2I2vembsd7jmduIM1FyxtCIidRkIlSNa99bO8" ,
  },
});
