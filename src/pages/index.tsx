import Elysia from "elysia"
import { Home } from "./home"

export const pages = new Elysia().get("/", () => <Home />)
