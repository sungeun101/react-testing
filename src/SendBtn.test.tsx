import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import SendBtn from './SendBtn'

it('invokes handleSubmit', () => {
  const mockHandleSubmit = jest.fn()
  // Test Double ; an object that replaces a real object for testing purposes
  // 1) Mock - use to make assertions against
  // 2) Stub - use as placeholders for dependencies such as an API or database
  render(<SendBtn handleSubmit={mockHandleSubmit} email="" />)

  user.click(screen.getByRole('button', { name: /send/i }))

  //   expect(mockHandleSubmit).toHaveBeenCalled()
  expect(mockHandleSubmit).toHaveBeenCalledTimes(0)
})
