import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { rest } from 'msw'
import DrinkSearch from './DrinkSearch'
import { mockServer } from './mocks/server'

beforeAll(
  () => mockServer.listen()
  // Set up to listen to HTTP requests before running any of our tests
)
afterEach(
  () => mockServer.resetHandlers()
  // Reset, so no tests are affected by previous tests
)
afterAll(
  () => mockServer.close()
  // Clean up after all tests are done,
  // preventing this interception layer from affecting irrelevant tests
)

test('renders no drink results', async () => {
  mockServer.use(
    rest.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            drinks: null
          })
        )
      }
    )
  )
  render(<DrinkSearch />)
  const searchInput = screen.getByRole('searchbox')

  await user.type(searchInput, 'vodka{enter}')

  expect(
    // findByRole - asynchronous
    await screen.findByRole('heading', { name: /no drinks found/i })
  ).toBeInTheDocument()
})

test('renders service unavailable', async () => {
  mockServer.use(
    rest.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      (req, res, ctx) => {
        return res(ctx.status(503))
      }
    )
  )
  render(<DrinkSearch />)
  const searchInput = screen.getByRole('searchbox')

  await user.type(searchInput, 'vodka{enter}')

  expect(
    await screen.findByRole('heading', { name: /service unavailable/i })
  ).toBeInTheDocument()
})

test('prevents GET request when search input empty', async () => {
  render(<DrinkSearch />)
  const searchInput = screen.getByRole('searchbox')

  await user.type(searchInput, '{enter}')

  expect(screen.queryByRole('heading')).not.toBeInTheDocument()
})
