import * as expenseService from "./expense.service.js";

export async function createExpense(req, reply) {
  const result = await expenseService.createExpense(req.body, req.server);

  reply.code(201).send(result);
}

export async function getExpenseById(req, reply) {
  const { id } = req.params;

  const result = await expenseService.getExpenseById(id);

  reply.send(result);
}

export async function getExpenses(req, reply) {
  const result = await expenseService.getExpenses();

  reply.code(201).send(result);
}

export async function updateExpense(req, reply) {
  const { id } = req.params;
  const result = await expenseService.updateExpense(id, req.body);

  reply.send(result);
}

export async function deleteExpense(req, reply) {
  const { id } = req.params;
  const result = await expenseService.deleteExpense(id);

  reply.send(result);
}
