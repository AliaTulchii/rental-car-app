import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';
import { IoCarSport } from 'react-icons/io5'

export const HeaderContainer = styled.div`
width: 100%;
  height: 78px;
  margin-top: 0;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 2px 0;
  background-color: ${theme.colors.blue};

`

export const HeaderWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  height: 100%;
  align-items: center;
  display: flex;  
  justify-content: start;

`;

export const LogoLink = styled(Link)`
display: flex;
  align-items: center;
  margin-right: 170px;
  text-decoration: none;
  color: #fff;
  background-color: #ffffff8a;
  border-radius: 60px;


  &:hover,
  :focus {
    color: ${theme.colors.blue};
    text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
}
  }
`
export const IconWrapper = styled.div`
background-color: #fff;
padding: 12px;
border-radius: 60px;
margin-right: 5px;
`

export const CarIcon = styled(IoCarSport)`
width: 30px;
height: 30px;
color:#3470FF;
`

export const LogoTitle = styled.h4`
margin-right: 15px;
`

export const NavMenu = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  // align-items: center;
`;
export const NavMenuItemBox = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-shadow: 0 0 120px #fff;
`;

export const NavMenuItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-shadow: 0 0 120px #fff;
`;

export const NavMenuItemContact = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-shadow: 0 0 120px #fff;
  margin-left: 350px;
`;

export const NavMenuItemLink = styled(Link)`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes[20]};
  text-decoration: none;
  margin-right: 40px;
  transition: all ${theme.transition.main};
  

  &:hover,
  :focus {
    color: ${theme.colors.light};    
    text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
}
  }
`;




