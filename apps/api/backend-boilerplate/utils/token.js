import { env } from "../config/env.js";

export function generateAccessToken(fastify, user) {
  return fastify.jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    { expiresIn: env.JWT_EXPIRES_IN },
  );
}

export function generateRefreshToken(fastify, user) {
  // Pasamos el objeto de configuración correcto para sobreescribir el secreto
  return fastify.jwt.sign(
    { id: user.id },
    {
      sign: { expiresIn: env.JWT_REFRESH_EXPIRES_IN },
      secret: env.JWT_REFRESH_SECRET, // Requiere que tu plugin acepte secretos dinámicos o use JWT complejo
    },
  );
}
