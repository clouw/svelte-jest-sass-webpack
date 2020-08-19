<script>
	export let name = 'Svelte';
</script>


<h1>Hello {name}!</h1>

<img src="logo.svg" class="max-w-xs" alt="logo" />

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

<style type="text/scss">
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