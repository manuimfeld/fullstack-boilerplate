import Fastify from "fastify";
import "dotenv/config";

import jwtPlugin from "./plugins/jwt.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { productsRoutes } from "./modules/products/products.routes.js";
import { paymentMethodsRoutes } from "./modules/paymentMethods/paymentMethods.routes.js";
import { salesRoutes } from "./modules/sales/sales.routes.js";
import { eCategoryRoutes } from "./modules/expenseCategory/expenseCategory.routes.js";
import { expenseRoutes } from "./modules/expense/expense.routes.js";

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
await fastify.register(paymentMethodsRoutes, {
  prefix: "/payment-methods",
});
await fastify.register(salesRoutes, {
  prefix: "/sales",
});
await fastify.register(eCategoryRoutes, {
  prefix: "/expense-category",
});
await fastify.register(expenseRoutes, {
  prefix: "/expenses",
});

await fastify.listen({ port: 3000 });
