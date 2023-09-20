import React, { Fragment, Suspense } from 'react'
import Routers from '../../routers/Routers'
import { LayoutContainer } from './SharedLayout.styled';
import Header from '../Header/Header';



const SharedLayout = () => {
  return (
    <Fragment>     
      <LayoutContainer>        
        <Header/>
        <Suspense fallback={null}>
          <Routers/>
        </Suspense>
      </LayoutContainer>
    </Fragment>
  );
}

export default SharedLayout
