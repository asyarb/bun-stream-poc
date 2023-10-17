import { Layout } from "../components/layout"

export const About = () => (
	<Layout>
		<div class="flex flex-col">
			<a href="/" preload>
				Go to home
			</a>

			<div class="h-10 w-10 self-end bg-green-500 [view-transition-name:box]" />
		</div>
	</Layout>
)
