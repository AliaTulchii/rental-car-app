import styled from 'styled-components';
import { theme } from '../../styles/theme';


export const FavContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left: auto;
margin-right: auto;
width: 1200px;
`

export const FavTitle = styled.h4`
    // width: 1000px;
    margin-left: auto;
    margin-right: auto;
    font-size: 52px;
    font-weight: 700;
    margin-top: 120px;
    margin-bottom: 50px;
    color: ${theme.colors.blue};

    
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #f09,
      0 0 82px #f09,
      0 0 92px #f09,
      0 0 102px #f09,
      0 0 151px #f09;

      animation: pulsate 0.11s ease-in-out infinite alternate;    

      @keyframes pulsate {
    
        100% {
      
            text-shadow:
            0 0 4px #fff,
            0 0 11px #fff,
            0 0 19px #fff,
            0 0 40px #0062ff,
            0 0 80px #0062ff,
            0 0 90px #0062ff,
            0 0 100px #0062ff,
            0 0 150px #0062ff;
        
        }
        
        0% {
      
          text-shadow:
          0 0 4px #fff,
          0 0 10px #fff,
          0 0 18px #fff,
          0 0 38px #0062ff,
          0 0 73px #0062ff,
          0 0 80px #0062ff,
          0 0 94px #0062ff,
          0 0 140px #0062ff;
      
      }

`

export const FavImg = styled.div`
// width: 100%;
margin-left: auto;
margin-right: auto;

`
    