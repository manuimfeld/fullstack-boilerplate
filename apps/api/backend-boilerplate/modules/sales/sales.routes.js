import * as salesController from "./sales.controller.js";
import { authMiddleware, authorize } from "../../middlewares/authMiddleware.js";

export async function salesRoutes(fastify) {
  fastify.post(
    "/",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    salesController.createSale,
  );

  fastify.get(
    "/:id",
    { preHandler: [authMiddleware] },
    salesController.getSaleById,
  );
  fastify.get("/", { preHandler: [authMiddleware] }, salesController.getSales);

  fastify.patch(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    salesController.updateSale,
  );

  fastify.delete(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    salesController.deleteSale,
  );
}
