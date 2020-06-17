import App from '../src/App.svelte'
import { render, fireEvent, waitFor } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(App)
  const homeBtn = getByText("Home")
  const aboutBtn = getByText("About")

  expect(getByText("Hello Svelte!")).toBeTruthy()

  expect(homeBtn).toBeTruthy()
  expect(aboutBtn).toBeTruthy()

  await fireEvent.click(aboutBtn)

  await waitFor(() => expect(getByText("svelte-spa-router")).toBeTruthy())
})