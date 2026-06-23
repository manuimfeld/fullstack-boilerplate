import * as authController from "./auth.controller.js";
import { authMiddleware, authorize } from "../../middlewares/authMiddleware.js";

export async function authRoutes(fastify) {
  fastify.post(
    "/register",
    { preHandler: [authorize(["ADMIN"])] },
    authController.register,
  );

  fastify.post("/login", authController.login);
}
