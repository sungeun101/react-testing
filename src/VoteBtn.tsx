import React from 'react'

export default function VoteBtn(props: {
  handleVote: React.MouseEventHandler<HTMLButtonElement> | undefined
  hasVoted: boolean | undefined
  btnText: any
}) {
  return (
    // Write the minimum amount of code
    // <button disabled={props.hasVoted}>

    // Write the minimum amount of code to make the test pass
    <button onClick={props.handleVote} disabled={props.hasVoted}>
      {props.btnText}
    </button>
  )
}
