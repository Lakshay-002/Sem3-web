import React, { useState } from 'react'
import LikeCount from './LikeCount'
import LikeButton from './LikeButton'

const Q5 = () => {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  return (
    <>
      <LikeCount likes={likes} />

      <LikeButton handleLike={handleLike} />
    </>
  )
}

export default Q5