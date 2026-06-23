import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import { BCRYPT_SALT_ROUNDS } from "../config/env.js";

export async function seedUsers() {
  const passwordHash = await bcrypt.hash("user123", BCRYPT_SALT_ROUNDS);

  const adminExists = await prisma.user.findUnique({
    where: {
      username: "usertest",
    },
  });

  if (!adminExists) {
    await prisma.user.create({
      data: {
        username: "usertest",
        password: passwordHash,
        role: "USER",
      },
    });

    console.log("User creado");
  } else {
    console.log("User ya existe");
  }
}
