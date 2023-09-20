import React, {  lazy } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom';


const Home = lazy(() => import('../pages/HomePage/HomePage'));
const CarsPage = lazy(() => import('../pages/CarsPage/CarsPage'));
const FavouritesPage = lazy(() => import('../pages/FavouritesPage/FavouritesPage'));
const ContactUsPage = lazy(() => import('../pages/ContactUsPage/ContactUsPage'));


const Routers = () => {

  
    return <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<CarsPage  />} />
      <Route path='/favourites' element={<FavouritesPage />} />    
      <Route path='/contact' element={<ContactUsPage />} />   

        <Route path='*' element={<Navigate to="/" replace/>} />
  </Routes>
}

export default Routers;