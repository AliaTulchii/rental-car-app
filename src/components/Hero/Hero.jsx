import React from 'react'
import {
    LinkBtn,
    MainContainer,
    ReservedBtn,
    SliderContainer,
    SliderContent,
    SliderItemOne,
    SliderItemThree,
    SliderItemTwo,
    SliderText,
    SliderTitle
} from './Hero.styled'
import { CarTitleBlue } from '../Cars/CarsItem/CarsItem.styled';

const Hero = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    }


    return (
      <>
        <MainContainer>
          <SliderContent>
            <SliderTitle>
            Unlock the road to adventure with our <CarTitleBlue>Car Rental Service</CarTitleBlue>!
            </SliderTitle>

            <SliderText>
            Rent your best car and enjoy your awesome trip.
            </SliderText>

            <ReservedBtn >
              <LinkBtn to="/catalog">Reserve Now</LinkBtn>
            </ReservedBtn>
          </SliderContent>

          <SliderContainer {...settings}>
            <SliderItemOne />

            <SliderItemTwo />

            <SliderItemThree />
          </SliderContainer>
        </MainContainer>
      </>
    );
    
    
}

export default Hero
