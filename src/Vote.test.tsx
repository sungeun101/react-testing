import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Vote from './Vote'

test('given "like" vote, total likes increases by one', async () => {
  render(<Vote />)
  const likeBtn = screen.getByRole('button', { name: 'Like' })

  await user.click(likeBtn)

  expect(screen.getByText(/1/i)).toBeInTheDocument()
})

test('given "dislike" vote, total likes decreases by one', async () => {
  render(<Vote />)
  const dislikeBtn = screen.getByRole('button', { name: 'Dislike' })

  await user.click(dislikeBtn)

  expect(screen.getByText(/-1/i)).toBeInTheDocument()
})

test('after vote, buttons should be disabled', async () => {
  render(<Vote />)
  const likeBtn = screen.getByRole('button', { name: 'Like' })
  const dislikeBtn = screen.getByRole('button', { name: 'Dislike' })

  await user.click(dislikeBtn)
  await user.click(likeBtn)

  expect(dislikeBtn).toBeDisabled()
  expect(screen.getByText(/-1/i)).toBeInTheDocument()
})
