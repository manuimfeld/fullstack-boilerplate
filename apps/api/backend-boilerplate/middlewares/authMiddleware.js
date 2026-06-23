export async function authMiddleware(request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({
      error: "Unauthorized",
    });
  }
}

export function authorize(allowedRoles = []) {
  return async function (request, reply) {
    try {
      // 1. Verifica que el JWT sea válido (inyecta los datos en request.user)
      await request.jwtVerify();

      // Si no se especificaron roles, cualquier usuario autenticado puede pasar
      if (allowedRoles.length === 0) return;

      // 2. Extrae el rol del token decodificado
      const userRole = request.user.role;

      // 3. Comprueba si el rol del usuario está autorizado
      if (!allowedRoles.includes(userRole)) {
        return reply.code(403).send({
          error: "Forbidden",
          message: "No tienes permisos para acceder a este recurso.",
        });
      }
    } catch (err) {
      return reply.code(401).send({
        error: "Unauthorized",
        message: "Token inválido o expirado.",
      });
    }
  };
}
