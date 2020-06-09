<script>
	export let name;

</script>

<h1>Hello {name}!</h1>

<h2>Setting Environment Variables</h2>
<p>
	add .env.development with:
</p>

<code>
APP_ENV=development
</code>

<h3>current APP_ENV : {process.env.APP_ENV}</h3>

<style type="text/scss">
	$h1-color: purple;

	h1 {
		color: $h1-color;
	}
</style>