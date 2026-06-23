import * as authService from "./auth.service.js";

export async function register(req, reply) {
  const result = await authService.register(req.body, req.server);

  reply.code(201).send(result);
}

export async function login(req, reply) {
  const result = await authService.login(req.body, req.server);

  reply.send(result);
}
