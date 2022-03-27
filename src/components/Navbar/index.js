import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavbarElements";


const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>advis</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to='about'>Despre</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='services'>Servicii</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='signup'>Înregistrare</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Login</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </>
  )
}

export default Navbar
