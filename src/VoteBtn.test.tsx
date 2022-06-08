import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import VoteBtn from './VoteBtn'

test('given vote status, renders button to screen', () => {
  // stub ? because we are only using them as dependency placeholders in the test
  const stubHandleVote = jest.fn()
  const btnText = 'vote like'

  render(
    <VoteBtn handleVote={stubHandleVote} hasVoted={false} btnText={btnText} />
  )
  const button = screen.getByRole('button', { name: btnText })

  expect(button).toBeInTheDocument()
  expect(button).toBeEnabled() // Can users click it?
})

test('invokes handleVote on button click', async () => {
  // mock ? - because we will assert against the variable later in the test
  const mockHandleVote = jest.fn()
  render(
    <VoteBtn handleVote={mockHandleVote} hasVoted={false} btnText="vote like" />
  )

  await user.click(screen.getByRole('button', { name: /vote like/i }))

  expect(mockHandleVote).toHaveBeenCalled()
  expect(mockHandleVote).toHaveBeenCalledTimes(1)
})
