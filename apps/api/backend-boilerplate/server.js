import Fastify from "fastify";
import "dotenv/config";

import jwtPlugin from "./plugins/jwt.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { productsRoutes } from "./modules/products/products.routes.js";

const fastify = Fastify({
  logger: true,
});

// 1. plugins primero
await fastify.register(jwtPlugin);

// 2. routes después
await fastify.register(authRoutes, {
  prefix: "/auth",
});
await fastify.register(productsRoutes, {
  prefix: "/products",
});

await fastify.listen({ port: 3000 });
