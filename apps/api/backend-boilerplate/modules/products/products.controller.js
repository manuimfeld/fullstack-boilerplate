import * as productsService from "./products.service.js";

export async function createProduct(req, reply) {
  const result = await productsService.createProduct(req.body, req.server);

  reply.code(201).send(result);
}

export async function getProductById(req, reply) {
  const { id } = req.params;

  const result = await productsService.getProductById(id);

  reply.send(result);
}

export async function getProducts(req, reply) {
  const result = await productsService.getProducts();

  reply.code(201).send(result);
}

export async function updateProduct(req, reply) {
  const { id } = req.params;
  const result = await productsService.updateProduct(id, req.body);

  reply.send(result);
}

export async function deleteProduct(req, reply) {
  const { id } = req.params;
  const result = await productsService.deleteProduct(id);

  reply.send(result);
}
