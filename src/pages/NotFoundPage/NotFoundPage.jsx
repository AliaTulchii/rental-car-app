import React from 'react'
import { Img, NotFoundContainer } from './NotFoundPage.styled'
import notfound from '../../images/istockphoto-1412928542-612x612-removebg-preview.png'

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Img src={notfound} />
    </NotFoundContainer>
  )
}

export default NotFoundPage
