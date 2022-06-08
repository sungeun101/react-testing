import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Register from './Register'

describe('validate form', () => {
  it('password should be at least 4 digits', async () => {
    const mockHandleRegister = jest.fn()
    render(<Register handleRegister={mockHandleRegister} />)
    const email = screen.getByLabelText(/email/i)
    const password = screen.getByLabelText(/password/i)
    const submitBtn = screen.getByRole('button', { name: /submit/i })

    await user.type(email, 'email@email.com')
    await user.type(password, 'abcd')
    await user.click(submitBtn)

    expect(mockHandleRegister).toHaveBeenCalled()
    expect(mockHandleRegister).toHaveBeenCalledTimes(1)
  })
})
