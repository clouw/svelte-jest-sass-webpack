<script>
	import Router, {link} from 'svelte-spa-router';
	import active from 'svelte-spa-router/active';

	import Home from './routes/Home.svelte';
	import About from './routes/About.svelte';

	const routes = {
		"/": Home,
		"/about": About,
	};
</script>

<div class="container">
	<ul class="menu">
			<li class="menu-item">
				<a href="/" class="menu-item-link" use:link	use:active>
					Home
				</a>
			</li>

			<li class="menu-item">
				<a href="/about" class="menu-item-link"	use:link use:active>
					About
				</a>
			</li>
		</ul>

	<Router {routes}/>
</div>


<style global type="text/scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

	body {
		@apply font-sans antialiased;
	}

	.container {
		@apply p-4 m-auto;
	}

	$h1-color: #FF3F01;

	.container {
		@apply p-4 m-auto;
	}

	h1, h2, h3 {
		@apply my-4;
	}

	h1 {
		@apply text-6xl;
		color: $h1-color;
	}

	h2 {
		@apply text-4xl;
		color: $h1-color;
	}

	h3 {
		@apply text-2xl;
		color: $h1-color;
	}

	a {
		@apply text-blue-700;
	}
	p {
		@apply p-4;
	}

	.menu {
		@apply flex;

		.menu-item {
			@apply mr-3;

			.menu-item-link {
				@apply inline-block border border-orange-600 rounded py-1 px-3 text-gray-900;

				&.active {
					@apply bg-orange-300;
				}
			}
		}
	}
</style>
