import cors from "@elysiajs/cors"
import { html } from "@elysiajs/html"
import { staticPlugin } from "@elysiajs/static"
import { Elysia } from "elysia"
import { healthcheck } from "./healthcheck"
import { pages } from "./pages"

const DEFAULT_PORT = 3000

const app = new Elysia()
	.use(html())
	.use(staticPlugin())
	.use(cors())
	.use(healthcheck)
	.use(pages)
	.listen(process.env.PORT ?? DEFAULT_PORT)

export type App = typeof app

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
