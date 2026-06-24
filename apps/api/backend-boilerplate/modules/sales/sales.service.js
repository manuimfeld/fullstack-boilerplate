import { prisma } from "../../config/prisma.js";

export async function createSale(data) {
  const sale = await prisma.sales.create({
    data: {
      amount: data.amount,
      paymentMethodId: data.paymentMethodId,
    },
  });

  return sale;
}

export async function getSaleById(id) {
  const sale = await prisma.sales.findUnique({ where: { id } });

  return sale;
}

export async function getSales() {
  const sales = await prisma.sales.findMany({
    select: {
      id: true,
      amount: true,
      createdAt: true,
      updatedAt: true,
      // paymentMethodId: true, // Si no lo necesitas en el JSON, puedes comentarlo o borrarlo
      paymentMethod: {
        select: {
          name: true, // <- Trae SOLO el string del nombre
        },
      },
    },
  });

  return sales;
}

export async function updateSale(id, data) {
  const sale = await prisma.sale.update({
    where: { id },
    data: {
      ...(data.amount !== undefined && { name: data.amount }),
      ...(data.paymentMethodId !== undefined && {
        paymentMethodId: data.paymentMethodId,
      }),
    },
  });

  return sale;
}

export async function deleteSale(id) {
  const sale = await prisma.sales.delete({ where: { id } });

  return sale;
}
