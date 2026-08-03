import React from 'react'

const LikeButton = (props) => {
  return (
    <>
      <button onClick={props.handleLike}>
        Like 
      </button>
    </>
  )
}

export default LikeButton