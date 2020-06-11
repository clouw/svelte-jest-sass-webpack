<script>
	import Tailwindcss from './components/Tailwindcss.svelte';
	export let name;

</script>

<Tailwindcss />

<div class="container">
	<h1>Hello {name}!</h1>

	<h2>Setting Environment Variables</h2>
	<p>
		add .env.development with:
	</p>

	<code>
	APP_ENV=development
	</code>

	<h3>current APP_ENV : {process.env.APP_ENV}</h3>

	<button class="btn btn-blue">
		Button Tailwindcss
	</button>
</div>

<style type="text/scss">
	$h1-color: purple;

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

	p {
		@apply p-4;
	}

  .btn {
    @apply font-bold py-2 px-4 rounded;
	}

  .btn-blue {
		@apply bg-blue-500 text-white;

		&:hover {
			@apply bg-blue-700;
		}
	}

	code {
		display: block;
		@apply bg-gray-300 p-4;
	}
</style>