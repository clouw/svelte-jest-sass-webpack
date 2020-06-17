import About from '../../src/routes/About.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(About)

  expect(getByText("Svelte")).toBeTruthy()
  expect(getByText("Webpack")).toBeTruthy()
  expect(getByText("jest-transform-svelte")).toBeTruthy()
  expect(getByText("Tailwindcss")).toBeTruthy()
  expect(getByText("svelte-spa-router")).toBeTruthy()
})