import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';


export const ModalBackground = styled.div`
top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
background-color: rgba(18, 20, 23, 0.50);;
position: fixed;
display:flex;
justify-content: center;
align-items: center;
z-index:50;
`

export const ModalContainer = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background: ${theme.colors.white};
`;


export const ModalImg = styled.img`
width: 461px;
height: 248px;
border-radius: 14px;
background: #F3F3F2;
`


export const ModalCloseBtn = styled.button`
  position: absolute;
    right: 16px;
    top: 16px;
    border:none;
    background: transparent;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const ModalTitle = styled.h4`
color: ${theme.colors.black};
font-size: ${theme.fontSizes[18]};
font-style: normal;
font-weight: ${theme.fontWeight.medium};
line-height: ${theme.fontSizes[24]};
margin-bottom: 8px;
`
export const ModalTitleBlue = styled.span`
color: ${theme.colors.blue};
`


export const ModalFlexWrapper = styled.div`
display: flex;
flex-direction: column;
  gap: 14px;
`;

export const ModalContentContainer = styled.div``
export const ModalText = styled.div`
`
export const Text = styled.p`
color: rgba(18, 20, 23, 0.50);
font-size: ${theme.fontSizes[12]};
font-style: normal;
font-weight: ${theme.fontWeight.regular};
line-height: ${theme.fontSizes[18]};
`
export const ModalMainText = styled.p`
color: ${theme.colors.black};
font-size: ${theme.fontSizes[14]};
font-style: normal;
font-weight: ${theme.fontWeight.regular};
line-height: ${theme.fontSizes[20]}; 
`
export const ConditionTextWrapper = styled.div`
display: flex;
padding: 7px 0;

align-items: center;
gap: 8px;
`
export const ModalConditionText = styled.p`
color: #363535;
font-family: Montserrat;
font-size: ${theme.fontSizes[12]};
font-style: normal;
font-weight: ${theme.fontWeight.regular};
line-height: ${theme.fontSizes[18]}; 
letter-spacing: -0.24px;
padding: 7px 14px;
// justify-content: center;
// align-items: center;
border-radius: 35px;
background: #F9F9F9;
`
export const BlueNumber = styled.span`
color: ${theme.colors.blue};
`






export const ModalButtn = styled.button`
display: inline-flex;
padding: 12px 50px;
justify-content: center;
align-items: center;
margin-top: 14px;
border-radius: 12px;
background: ${theme.colors.blue};
border: none;
color: ${theme.colors.white};
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px;


&:hover {
  background: ${theme.colors.blueDark}
`

export const LinkBtn = styled(Link)`
color: #fff;
text-decoration: none;
    font-weight: 600;
`
