import React from 'react'

function Score(props) {
  const { post, changeScore } = props

  return (
    <>
      {'     —   '}
      {post.score}
      {'   '}
      <button type="button" onClick={() => changeScore(post.index, 1)}>
        upvote
      </button>
      <button type="button" onClick={() => changeScore(post.index, -1)}>
        downvote
      </button>
    </>
  )
}
export default Score
