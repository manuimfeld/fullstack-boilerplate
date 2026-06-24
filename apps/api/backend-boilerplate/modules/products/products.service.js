import { prisma } from "../../config/prisma.js";

export async function createProduct(data) {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      sku: data.sku,
      imageUrl: data.imageUrl,
    },
  });

  return product;
}

export async function getProductById(id) {
  const product = await prisma.product.findUnique({ where: { id } });

  return product;
}

export async function getProducts() {
  const products = await prisma.product.findMany();

  return products;
}

export async function updateProduct(id, data) {
  const product = await prisma.product.update({
    where: { id },
    data: {
      ...(data.name !== undefined && { name: data.name }),
      ...(data.description !== undefined && { description: data.description }),
      ...(data.price !== undefined && { price: data.price }),
      ...(data.sku !== undefined && { sku: data.sku }),
      ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
    },
  });

  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({ where: { id } });

  return product;
}
