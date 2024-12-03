import {createElement, useState} from 'react'
import './App.css'

function LikeButton(props : any) {
  const [liked, setLiked] = useState(false);

  if(liked) return 'you liked comment number' + props.commentID;

  return createElement('button', { onClick: () => { setLiked(true) } }, 'Like')
}

export default LikeButton
