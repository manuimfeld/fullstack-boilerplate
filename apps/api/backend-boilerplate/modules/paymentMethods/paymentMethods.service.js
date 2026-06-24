import { prisma } from "../../config/prisma.js";

export async function createPMethod(data) {
  const paymentMethod = await prisma.paymentMethods.create({
    data: {
      name: data.name,
    },
  });

  return paymentMethod;
}

export async function getPMethodById(id) {
  const paymentMethod = await prisma.paymentMethods.findUnique({
    where: { id },
  });

  return paymentMethod;
}

export async function getPMethods() {
  const paymentMethods = await prisma.paymentMethods.findMany();

  return paymentMethods;
}

export async function updatePMethod(id, data) {
  const paymentMethod = await prisma.paymentMethods.update({
    where: { id },
    data: {
      ...(data.name !== undefined && { name: data.name }),
    },
  });

  return paymentMethod;
}

export async function deletePMethod(id) {
  const paymentMethod = await prisma.paymentMethods.delete({ where: { id } });

  return paymentMethod;
}
