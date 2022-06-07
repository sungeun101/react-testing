import { render, screen } from '@testing-library/react'
import VoteBtn from './VoteBtn'

test('given vote status, renders button to screen', () => {
  // stub ? because we are only using them as dependency placeholders in the test
  const stubHandleVote = jest.fn()
  const stubText = 'vote like'

  render(
    <VoteBtn handleVote={stubHandleVote} hasVoted={false} stubText={stubText} />
  )
  const button = screen.getByRole('button', { name: stubText })

  expect(button).toBeInTheDocument()
  expect(button).toBeEnabled() // Can users click it?
})
