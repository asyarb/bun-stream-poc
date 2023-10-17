import harmonyPalette from "@evilmartians/harmony/tailwind"
import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{ts,tsx,html}"],
	theme: {
		colors: harmonyPalette,
	},
	plugins: [],
} satisfies Config
