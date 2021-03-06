import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import EmployeeEmail from './EmployeeEmail'

test('it accepts a username and displays to the screen', () => {
  render(<EmployeeEmail />)
  const input = screen.getByRole('textbox', { name: /enter your name/i })

  user.type(input, 'mike pool')

  expect(screen.getByText(/mike.pool@software-plus.com/i)).toBeInTheDocument()
})
