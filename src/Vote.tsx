import React, { useState } from 'react'
import VoteBtn from './VoteBtn'

export default function Vote() {
  const [totalLikes, setTotalLikes] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)

  const handleLikeVote = () => {
    setHasVoted(true)
    setTotalLikes(totalLikes + 1)
  }

  const handleDislikeVote = () => {
    setHasVoted(true)
    setTotalLikes(totalLikes - 1)
  }

  return (
    <>
      <div>Total Likes : {totalLikes}</div>
      <VoteBtn handleVote={handleLikeVote} hasVoted={hasVoted} btnText="Like" />
      <VoteBtn
        handleVote={handleDislikeVote}
        hasVoted={hasVoted}
        btnText="Dislike"
      />
    </>
  )
}
