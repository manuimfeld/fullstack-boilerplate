import { prisma } from "../../config/prisma.js";

export async function createExpense(data) {
  const expense = await prisma.expense.create({
    data: {
      amount: data.amount,
      paymentMethodId: data.paymentMethodId,
    },
  });

  return expense;
}

export async function getExpenseById(id) {
  const expense = await prisma.expense.findUnique({ where: { id } });

  return expense;
}

export async function getExpenses() {
  const expense = await prisma.expense.findMany({});

  return expense;
}

export async function updateExpense(id, data) {
  const expense = await prisma.expense.update({
    where: { id },
    data: {
      ...(data.amount !== undefined && { name: data.amount }),
      ...(data.paymentMethodId !== undefined && {
        paymentMethodId: data.paymentMethodId,
      }),
    },
  });

  return expense;
}

export async function deleteExpense(id) {
  const expense = await prisma.expense.delete({ where: { id } });

  return expense;
}
