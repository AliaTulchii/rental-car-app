import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const CarItemContainer = styled.li`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.boxShadows.main};
  border-radius: 14px;
  margin-left: auto;
  margin-right: auto;

  transition: all ${theme.transition.main};

  &:hover,
  &:focus {
    transition: all ${theme.transition.main};
  } 

`;




export const ImageWrapper = styled.div`
position: relative;
width: 274px;
height: 268px;
  margin-bottom: 14px;
  position: relative;
`;
// export const HeartBtn = styled.button`
// position: absolute;
// width: 24px;
// height: 24px;
// top: 14px;
// right:14px;
// border:none;
// background: transparent;
// color: white;

// &:hover {
//   cursor: pointer;
// }
// `
export const Heart = styled.img`
position: absolute;
width: 24px;
height: 24px;
top: 14px;
right:14px;
border:none;
background: transparent;
color: white;

&:hover {
  cursor: pointer;
}
`
export const Img = styled.img`
width: 274px;
height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 28px;
  height: 310px;
  width: 274px;

`;

export const CarTitleWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const CarTitle = styled.h4`
font-size: ${theme.fontSizes[16]};
font-style: normal;
font-weight: ${theme.fontWeight.medium};
line-height: ${theme.fontSizes[24]};
  color: ${theme.colors.black};
`;

export const CarTitleBlue = styled.span`
color: ${theme.colors.blue}
`


export const CarBodyText = styled.div`
  width: 240px;

`;

export const CarText = styled.p`
// display: flex;
color: rgba(18, 20, 23, 0.50);
font-size: ${theme.fontSizes[12]};
font-style: normal;
font-weight: ${theme.fontWeight.regular};
line-height: 18px;
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`





export const CarButton = styled.button`
width: 274px;
height: 44px;
padding: 12px 99px;
border-radius: 12px;
background: ${theme.colors.blue};
border: none;
color: ${theme.colors.white};
cursor: pointer;

&:hover {
  background: ${theme.colors.blueDark}
`
