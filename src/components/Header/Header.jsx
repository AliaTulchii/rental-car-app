import React from 'react'
import { CarIcon, HeaderContainer, HeaderWrapper, IconWrapper, LogoLink, LogoTitle, NavMenu, NavMenuItem, NavMenuItemBox, NavMenuItemContact, NavMenuItemLink } from './Header.styled'




const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <HeaderWrapper>
          
            
            <LogoLink to="/">
              <IconWrapper>
              <CarIcon />
              </IconWrapper>
                
                <LogoTitle>
                  Best Car <br /> Renting
                </LogoTitle>
              </LogoLink>
          

          <NavMenu >
            <NavMenuItemBox>
            <NavMenuItem >
              <NavMenuItemLink to="/">Home</NavMenuItemLink>
            </NavMenuItem>

            <NavMenuItem >
              <NavMenuItemLink to="/catalog">Cars catalog</NavMenuItemLink>
            </NavMenuItem>

            <NavMenuItem >
              <NavMenuItemLink to="/favourites">Favourites</NavMenuItemLink>
            </NavMenuItem>
            </NavMenuItemBox>
           

            <NavMenuItemContact >
              <NavMenuItemLink to="/contact">Contact Us</NavMenuItemLink>
            </NavMenuItemContact>

            
          </NavMenu>

         
         

        </HeaderWrapper>
      </HeaderContainer>
    </header>
  );
}

export default Header
