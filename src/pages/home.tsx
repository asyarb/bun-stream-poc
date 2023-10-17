import { Layout } from "../components/layout"

export const Home = () => (
	<Layout>
		<div class="grid min-h-[100svh] place-items-center">
			<audio controls="" src="/api/stream/example.mp3">
				<a href="/public/audio/example.mp3">Download</a>
			</audio>
		</div>
	</Layout>
)
