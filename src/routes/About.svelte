<script>
  let svelteUrl = 'https://svelte.dev/'
  let webpackUrl = 'https://webpack.js.org/'
  let jestUrl = 'https://github.com/rspieker/jest-transform-svelte'
  let tailwindcssUrl = 'https://tailwindcss.com/'
  let routerUrl = 'https://github.com/ItalyPaleAle/svelte-spa-router'
</script>

<div class="my-10">
  <h2>Svelte</h2>
  <a href={svelteUrl}> {svelteUrl}</a>

  <h2>Webpack</h2>
  <a href={webpackUrl}> {webpackUrl}</a>

  <h2>jest-transform-svelte</h2>
  <a href={jestUrl}> {jestUrl}</a>

  <h2>Tailwindcss</h2>
  <a href={tailwindcssUrl}> {tailwindcssUrl}</a>

  <h2>svelte-spa-router</h2>
  <a href={routerUrl}> {routerUrl}</a>
</div>