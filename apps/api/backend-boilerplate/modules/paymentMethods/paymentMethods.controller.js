import * as paymentMethodsService from "./paymentMethods.service.js";

export async function createPMethod(req, reply) {
  const result = await paymentMethodsService.createPMethod(
    req.body,
    req.server,
  );

  reply.code(201).send(result);
}

export async function getPMethodById(req, reply) {
  const { id } = req.params;

  const result = await paymentMethodsService.getPMethodById(id);

  reply.send(result);
}

export async function getPMethods(req, reply) {
  const result = await paymentMethodsService.getPMethods();

  reply.code(201).send(result);
}

export async function updatePMethod(req, reply) {
  const { id } = req.params;
  const result = await paymentMethodsService.updatePMethod(id, req.body);

  reply.send(result);
}

export async function deletePMethod(req, reply) {
  const { id } = req.params;
  const result = await paymentMethodsService.deletePMethod(id);

  reply.send(result);
}
