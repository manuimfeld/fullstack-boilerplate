import * as expenseController from "./expense.controller.js";
import { authMiddleware, authorize } from "../../middlewares/authMiddleware.js";

export async function expenseRoutes(fastify) {
  fastify.post(
    "/",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    expenseController.createExpense,
  );

  fastify.get(
    "/:id",
    { preHandler: [authMiddleware] },
    expenseController.getExpenseById,
  );
  fastify.get(
    "/",
    { preHandler: [authMiddleware] },
    expenseController.getExpenses,
  );

  fastify.patch(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    expenseController.updateExpense,
  );

  fastify.delete(
    "/:id",
    { preHandler: [authMiddleware, authorize(["ADMIN"])] },
    expenseController.deleteExpense,
  );
}
