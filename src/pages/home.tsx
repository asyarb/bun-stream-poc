import { Layout } from "../components/layout"

export const Home = () => (
	<Layout>
		<div class="grid min-h-[100svh] place-items-center">
			<figure>
				<figcaption>Listen to song</figcaption>
				<audio controls="" src="/api/stream">
					<a href="/public/audio/example.mp3">Download my ass</a>
				</audio>
			</figure>
		</div>
	</Layout>
)
