import Elysia from "elysia"

export const healthcheck = new Elysia().get("/healthcheck", () => ({
	uptime: process.uptime(),
	message: "OK",
	timestamp: Date.now(),
}))
