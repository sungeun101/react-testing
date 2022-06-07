// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
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
