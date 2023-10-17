type Props = {
	head?: JSX.Element
	children?: JSX.Element | JSX.Element[]
}

export const Layout = (props: Props) => {
	return (
		<html lang="en">
			<head>
				<title>OSS Streaming</title>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<script
					src="https://unpkg.com/htmx.org@1.9.6"
					integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
					crossorigin="anonymous"
				/>
				<script src="https://unpkg.com/htmx.org/dist/ext/preload.js" />
				<script>htmx.config.globalViewTransitions = true;</script>

				<link href="/public/index.css" rel="stylesheet" />

				{props.head}
			</head>

			<body class="bg-zinc-950 text-zinc-50" hx-boost="true" hx-ext="preload">
				{props.children}
			</body>
		</html>
	)
}
