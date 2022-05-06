import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavbarElements";


export default class Navbar extends React.Component {
  render(){
    return (
      <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/home'>advis</NavLogo>
          <MobileIcon onClick={this.props.toggle}>
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
}
