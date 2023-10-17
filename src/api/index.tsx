import Elysia, { NotFoundError } from "elysia"

const parseIntSafe = (val: string) => {
	const parsed = Number.parseInt(val, 10)
	if (isNaN(parsed)) return undefined

	return parsed
}

export const api = new Elysia({ prefix: "/api" })
	.get("/healthcheck", () => ({
		uptime: process.uptime(),
		message: "OK",
		timestamp: Date.now(),
	}))
	.get("/stream/:path", async ({ set, request, params }) => {
		const file = Bun.file(`./public/audio/${params.path}`)

		const exists = await file.exists()
		if (!exists) {
			throw new NotFoundError()
		}

		if (request.headers.has("range")) {
			const [start = 0, end = file.size - 1] = request.headers
				.get("range")! // Range: bytes=0-100
				.split("=") // ["Range: bytes", "0-100"]
				.at(-1)! // "0-100"
				.split("-") // ["0", "100"]
				.map(parseIntSafe) // [0, 100]

			set.status = 206
			set.headers["content-range"] = `bytes ${start}-${end}/${file.size}`
			set.headers["content-type"] = file.type
			set.headers["accept-ranges"] = "bytes"

			return file.slice(start, end + 1)
		}

		set.headers["content-length"] = file.size.toString()
		set.headers["content-type"] = file.type

		return file
	})
