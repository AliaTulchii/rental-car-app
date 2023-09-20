import styled from 'styled-components';
import { theme } from '../../../styles/theme';


export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 800px;
  height: 44px;
  margin-top: 60px;
  overflow: hidden;
  margin-bottom: 60px;
  border-radius: 24px;
  box-shadow: ${theme.boxShadows.main};

  &:focus,
  &:hover {
    box-shadow: ${theme.boxShadows.secondary};
  }

`;

export const Input = styled.input`
  width: 800px;
  padding-left: 20px;
  border: none;
  outline: none;
  border: 1px solid ${theme.colors.blue};
border-radius: 24px;
height: 100%;

  font-size: ${theme.fontSizes[16]};
  line-height: 1.2;

  color: ${theme.colors.grey};
  background: ${theme.colors.white};

 
`;

export const SearchBtn = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'search',
})`
  position: absolute;
  top: 10px;
  right: 70px;
  color: ${theme.colors.blue};
  font-size: ${theme.fontSizes[20]};
  font-weight: ${theme.fontWeight.medium};
  line-height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: all ${theme.transition.main};

  svg:hover,
  svg:focus {
    fill: ${theme.colors.blue};
  }
`;

export const ClearBtn = styled.button`
position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height:34px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Cross = styled.img`
width: 20px;
  height:20px;
`



