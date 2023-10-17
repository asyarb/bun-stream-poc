import Elysia, { NotFoundError } from "elysia"

export const api = new Elysia({ prefix: "/api" })
	.get("/healthcheck", () => ({
		uptime: process.uptime(),
		message: "OK",
		timestamp: Date.now(),
	}))
	.get("/stream", async (ctx) => {
		const path = Bun.resolveSync("./public/audio/example.mp3", process.cwd())
		const file = Bun.file(path)

		const exists = await file.exists()
		if (!exists) {
			throw new NotFoundError()
		}

		if (ctx.request.headers.has("range")) {
			const [start = 0, end = file.size - 1] = ctx.request.headers
				.get("range")! // Range: bytes=0-100
				.split("=") // ["Range: bytes", "0-100"]
				.at(-1)! // "0-100"
				.split("-") // ["0", "100"]
				.map((val) => {
					const parsed = Number.parseInt(val, 10)
					if (isNaN(parsed)) return undefined

					return parsed
				}) // [0, 100]

			ctx.set.status = 206
			ctx.set.headers["content-range"] =
				"bytes " + start + "-" + end + "/" + file.size
			ctx.set.headers["content-type"] = file.type
			ctx.set.headers["accept-ranges"] = "bytes"

			return file.slice(start, end + 1)
		}

		ctx.set.headers["content-length"] = file.size.toString()
		ctx.set.headers["content-type"] = file.type

		return file
	})
