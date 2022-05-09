import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavbarElements";


export default class NavbarUser extends React.Component {
  render(){
    return (
      <>
      <Nav>
        <NavbarContainer>
          <NavLogo>advis</NavLogo>
          <MobileIcon onClick={this.props.toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                  <NavLinks to='/mainPage'>Home</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='/projects'>Proiecte</NavLinks>
              </NavItem>
              {/* <NavItem>
                  <NavLinks to='/createDiagram'>Crează</NavLinks>
              </NavItem> */}
              <NavItem>
                  <NavLinks to=''>Documentatie</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to=''>Profil</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/home'>Logout</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
    )
  }
}
