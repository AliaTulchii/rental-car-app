import React from 'react'
import { Loadmore } from './LoadmoreBtn.styled'

const LoadmoreBtn = ({onClick}) => {
  return (
    <Loadmore
    type="button"
    onClick={onClick}
  >
    Load more cars
  </Loadmore>
  )
}

export default LoadmoreBtn
