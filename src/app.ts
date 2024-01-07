import fastify, { FastifyReply, FastifyRequest } from "fastify";

export const app = fastify();

app.get("/", (req: FastifyRequest, reply: FastifyReply) => {
  return reply.send("Hello Wolrd");
});
