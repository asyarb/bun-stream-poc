import Elysia from "elysia"
import { About } from "./about"
import { Home } from "./home"

export const pages = new Elysia()
	.get("/", () => <Home />)
	.get("/about", () => <About />)
