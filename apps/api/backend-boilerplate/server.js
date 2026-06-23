import Fastify from "fastify";
import "dotenv/config";

import jwtPlugin from "./plugins/jwt.js";
import { authRoutes } from "./modules/auth/auth.routes.js";

const fastify = Fastify({
  logger: true,
});

// 1. plugins primero
await fastify.register(jwtPlugin);

// 2. routes después
await fastify.register(authRoutes, {
  prefix: "/auth",
});

await fastify.listen({ port: 3000 });
