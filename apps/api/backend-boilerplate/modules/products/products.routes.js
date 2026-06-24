import * as productsController from "./products.controller.js";
import { authMiddleware, authorize } from "../../middlewares/authMiddleware.js";

export async function productsRoutes(fastify) {
  fastify.post(
    "/",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    productsController.createProduct,
  );

  fastify.get(
    "/:id",
    { preHandler: [authMiddleware] },
    productsController.getProductById,
  );
  fastify.get(
    "/",
    { preHandler: [authMiddleware] },
    productsController.getProducts,
  );

  fastify.patch(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    productsController.updateProduct,
  );

  fastify.delete(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    productsController.deleteProduct,
  );
}
