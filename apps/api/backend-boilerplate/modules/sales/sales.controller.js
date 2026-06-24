import * as salesService from "./sales.service.js";

export async function createSale(req, reply) {
  const result = await salesService.createSale(req.body, req.server);

  reply.code(201).send(result);
}

export async function getSaleById(req, reply) {
  const { id } = req.params;

  const result = await salesService.getSaleById(id);

  reply.send(result);
}

export async function getSales(req, reply) {
  const result = await salesService.getSales();

  reply.code(201).send(result);
}

export async function updateSale(req, reply) {
  const { id } = req.params;
  const result = await salesService.updateSale(id, req.body);

  reply.send(result);
}

export async function deleteSale(req, reply) {
  const { id } = req.params;
  const result = await salesService.deleteSale(id);

  reply.send(result);
}
