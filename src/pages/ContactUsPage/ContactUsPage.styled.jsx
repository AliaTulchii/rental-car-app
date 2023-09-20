import styled from 'styled-components';
import { theme } from '../../styles/theme';


export const ContactUsContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
// align-content:baseline;
margin-left: auto;
margin-right: auto;
margin-top: 180px;
width: 1200px;
`


export const ContactLeftSide = styled.div`
width: 600px;
`

export const ContactTitle = styled.h1`
    font-size: ${theme.fontSizes[48]};
    font-weight: 700;
    margin-bottom: 50px;
    color: ${theme.colors.blue};
`
export const ContactText = styled.h4`
width: 500px;
font-size: ${theme.fontSizes[24]};
    font-weight: 700;
    margin-bottom: 20px;
    color: ${theme.colors.blueDark};
`
export const Address = styled.address`
color: rgba(18, 20, 23, 0.50);
font-size: 18px;
font-style: normal;
font-weight: ${theme.fontWeight.regular};
line-height: 18px;
margin-bottom: 10px;
`

export const Strong = styled.strong`
color: ${theme.colors.black};
margin-right: 8px;
`

export const Comment = styled.p`
width: 500px;
color: rgba(18, 20, 23, 0.50);
font-size: 20px;
font-style: normal;
font-weight: ${theme.fontWeight.regular};
margin-top: 50px;
`

export const ContactFormBox = styled.div`
width: 600px;
`

export const ContactForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
export const InputBox = styled.div`
width: 600px;
display: flex;
justify-content: space-around;

margin-bottom: 20px;
`

export const Input = styled.input`
border: 1px solid ${theme.colors.blue};
border-radius: 14px;
height: 100%;
 background-color: #3471ff4a;
 width:270px;
 padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow:
      0 0 7px #3471ff4a,
      0 0 10px #3471ff4a,
      0 0 21px #3471ff4a;
  
`

export const Textarea = styled.textarea`
border: 1px solid ${theme.colors.blue};
border-radius: 14px;
height: 200px;
 margin-bottom: 20px;
 width:550px;
 padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow:
      0 0 7px #3471ff4a,
      0 0 10px #3471ff4a,
      0 0 21px #3471ff4a;
`

export const ContactButton = styled.button`
width: 200px;
padding: 12px 0;
color: #fff;
font-size: ${theme.fontSizes[16]};
font-weight: ${theme.fontWeight.medium};
line-height: 24px;
border-radius: 12px;
background: ${theme.colors.blue};
border: none;
cursor: pointer;
margin-top: 28px;
transition: ${theme.transition.duration};

&:hover {
  background: ${theme.colors.blueDark};
}
`