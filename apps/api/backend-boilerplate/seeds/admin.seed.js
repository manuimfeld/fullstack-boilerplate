import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import { BCRYPT_SALT_ROUNDS } from "../config/env.js";

export async function seedAdmin() {
  const passwordHash = await bcrypt.hash("admin123", BCRYPT_SALT_ROUNDS);

  const adminExists = await prisma.user.findUnique({
    where: {
      username: "admintest",
    },
  });

  if (!adminExists) {
    await prisma.user.create({
      data: {
        username: "admintest",
        password: passwordHash,
        role: "ADMIN",
      },
    });

    console.log("Admin creado");
  } else {
    console.log("Admin ya existe");
  }
}
