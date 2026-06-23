import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { env } from "../config/env.js";

async function jwtPlugin(fastify, opts) {
  // Configuración para soportar el secreto dinámico del Refresh Token
  await fastify.register(fastifyJwt, {
    secret: env.JWT_SECRET,
  });
}

// ESTO ES LO MÁS IMPORTANTE: Rompe el encapsulamiento
export default fp(jwtPlugin);
