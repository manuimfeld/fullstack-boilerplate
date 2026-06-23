import { prisma } from "../../config/prisma.js";
import { hashPassword, comparePassword } from "../../utils/hash.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/token.js";

export async function register(data, fastify) {
  const userExists = await prisma.user.findUnique({
    where: {
      username: data.username,
    },
  });

  if (userExists) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: hashedPassword,
    },
  });

  return {
    accessToken: generateAccessToken(fastify, user),
    refreshToken: generateRefreshToken(fastify, user),
  };
}

export async function login(data, fastify) {
  const user = await prisma.user.findUnique({
    where: {
      username: data.username,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const validPassword = await comparePassword(data.password, user.password);

  if (!validPassword) {
    throw new Error("Invalid credentials");
  }

  return {
    accessToken: generateAccessToken(fastify, user),
    refreshToken: generateRefreshToken(fastify, user),
    user: { username: user.username, role: user.role },
  };
}
