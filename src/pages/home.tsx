import { Layout } from "../components/layout"

export const Home = () => (
	<Layout>
		<div class="flex flex-col">
			<a href="/about" preload>
				Go to About
			</a>

			<div class="h-10 w-10 bg-red-500 [view-transition-name:box]" />
		</div>
	</Layout>
)
