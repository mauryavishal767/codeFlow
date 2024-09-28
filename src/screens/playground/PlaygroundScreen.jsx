import React from 'react'
import { useParams } from 'react-router-dom'

function PlaygroundScreen() {
  const param = useParams()
  console.log(param);
  
  return (
    <div>PlaygroundScreen</div>
  )
}

export default PlaygroundScreen