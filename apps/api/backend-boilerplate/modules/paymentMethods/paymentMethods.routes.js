import * as paymentMethodsController from "./paymentMethods.controller.js";
import { authMiddleware, authorize } from "../../middlewares/authMiddleware.js";

export async function paymentMethodsRoutes(fastify) {
  fastify.post(
    "/",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    paymentMethodsController.createPMethod,
  );

  fastify.get(
    "/:id",
    { preHandler: [authMiddleware] },
    paymentMethodsController.getPMethodById,
  );
  fastify.get(
    "/",
    { preHandler: [authMiddleware] },
    paymentMethodsController.getPMethods,
  );

  fastify.patch(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    paymentMethodsController.updatePMethod,
  );

  fastify.delete(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    paymentMethodsController.deletePMethod,
  );
}
