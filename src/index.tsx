import { html } from "@elysiajs/html"
import { staticPlugin } from "@elysiajs/static"
import { Elysia } from "elysia"
import { api } from "./api"
import { pages } from "./pages"

const DEFAULT_PORT = 3000

const app = new Elysia()
	.use(html())
	.use(staticPlugin())
	.onError((ctx) => {
		switch (ctx.code) {
			case "NOT_FOUND": {
				ctx.set.status = 404

				return "Not Found."
			}

			default: {
				return new Response(ctx.error.toString())
			}
		}
	})
	.use(api)
	.use(pages)
	.listen(process.env.PORT ?? DEFAULT_PORT)

export type App = typeof app

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
