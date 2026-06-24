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
    const userRole = request.user.role;

    if (!allowedRoles.includes(userRole)) {
      return reply.code(403).send({
        error: "Forbidden",
      });
    }
  };
}
