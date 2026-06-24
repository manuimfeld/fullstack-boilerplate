import { prisma } from "../../config/prisma.js";

export async function createECategory(data) {
  const category = await prisma.expenseCategory.create({
    data: {
      amount: data.amount,
      paymentMethodId: data.paymentMethodId,
    },
  });

  return category;
}

export async function getECategoryById(id) {
  const category = await prisma.expenseCategory.findUnique({ where: { id } });

  return category;
}

export async function getECategories() {
  const categories = await prisma.expenseCategory.findMany();

  return categories;
}

export async function updateECategory(id, data) {
  const category = await prisma.expenseCategory.update({
    where: { id },
  });

  return category;
}

export async function deleteECategory(id) {
  const category = await prisma.expenseCategory.delete({ where: { id } });

  return category;
}
