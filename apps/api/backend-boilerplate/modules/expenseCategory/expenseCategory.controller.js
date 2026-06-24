import * as expenseCategory from "./expenseCategory.service.js";

export async function createECategory(req, reply) {
  const result = await expenseCategory.createECategory(req.body, req.server);

  reply.code(201).send(result);
}

export async function getECategoryById(req, reply) {
  const { id } = req.params;

  const result = await expenseCategory.getECategoryById(id);

  reply.send(result);
}

export async function getECategories(req, reply) {
  const result = await expenseCategory.getECategory();

  reply.code(201).send(result);
}

export async function updateECategory(req, reply) {
  const { id } = req.params;
  const result = await expenseCategory.updateECategory(id, req.body);

  reply.send(result);
}

export async function deleteECategory(req, reply) {
  const { id } = req.params;
  const result = await expenseCategory.deleteECategory(id);

  reply.send(result);
}
