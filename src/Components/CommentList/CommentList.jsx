import React from 'react'
import './CommentList.css'

const CommentList = (props)=>{
  const { comments } = props;
  const commentList = comments.map((comment, index) => {
    return(
      <li key={index} className="CommentListItem">{comment}</li>
    )
  })

  return(
    <ul>{commentList}</ul>
  )
}

export default CommentList;