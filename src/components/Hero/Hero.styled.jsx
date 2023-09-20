import styled from 'styled-components';
import Slider from 'react-slick'
import highlander from '../../images/highlanderw.png'
import volk from '../../images/volk.png'
import car from '../../images/car.png'

import pattern from '../../images/pattern.svg';
import { Link } from 'react-router-dom'
import { theme } from '../../styles/theme';


export const MainContainer = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 70px;
display: flex;
justify-content: space-between;
// align-items: baseline;
`



export const SliderItemOne = styled.div`
    width: 500px;
    height: 500px;
    background: url(${highlander});
    background-position: center;
    background-repeat: no-repeat;
    block-size: contain;
`;

export const SliderItemTwo = styled.div`
width: 500px;
height: 500px;
background:  
    url(${car});
    background-position: center;
    background-repeat: no-repeat;
    block-size: contain;
`

export const SliderItemThree = styled.div`
width: 800px;
height: 500px;
background: 
    url(${volk});
    background-position: center;
    background-repeat: no-repeat;
    block-size: contain;
`



export const SliderContainer = styled(Slider)`
overflow: hidden;
width: 800px;
height: 650px;
background: 
    url(${pattern});
    background-position: center;
    background-repeat: no-repeat;
    block-size: contain;
}
`;

export const SliderContent = styled.div`
    margin-top: 60px;
    margin-left: 130px;
`

export const SliderTitle = styled.h1`
    width: 600px;
    font-size: 68px;
    font-weight: 700;
    margin-bottom: 50px;
    color: ${theme.colors.black};
`

export const SliderText = styled.p`
color: rgba(18, 20, 23, 0.50);
font-size: 32px;
font-style: normal;
font-weight: ${theme.fontWeight.regular};
// line-height: 18px;
margin-bottom: 50px;
`

export const ReservedBtn = styled.button`
    background-color: #3470FF;
    padding: 12px 50px;
    border: none;
    outline: none;
    border-radius: 12px;

    &:hover{
        background-color: #0B44CD;
    }
`
export const LinkBtn = styled(Link)`
color: #fff;
text-decoration: none;
    font-weight: 600;
`
