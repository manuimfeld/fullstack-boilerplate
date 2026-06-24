import * as expenseCategoryController from "./expenseCategory.controller.js";
import { authMiddleware, authorize } from "../../middlewares/authMiddleware.js";

export async function eCategoryRoutes(fastify) {
  fastify.post(
    "/",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    expenseCategoryController.createECategory,
  );

  fastify.get(
    "/:id",
    { preHandler: [authMiddleware] },
    expenseCategoryController.getECategoryById,
  );
  fastify.get(
    "/",
    { preHandler: [authMiddleware] },
    expenseCategoryController.getECategories,
  );

  fastify.patch(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    expenseCategoryController.updateECategory,
  );

  fastify.delete(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    expenseCategoryController.deleteECategory,
  );
}
