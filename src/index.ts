import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello again from Cloud Run").listen(process.env.PORT ?? 8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
