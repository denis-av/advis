import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavbarElements";
import { signOut } from "firebase/auth";
import { auth } from '../../App';
import { useNavigate } from 'react-router-dom';


function NavbarAdmin({toggle}){

  let navigate = useNavigate();

  function LogoutUser(e) {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

    return (
      <>
      <Nav>
        <NavbarContainer>
          <NavLogo>advis</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                  <NavLinks to='/adminMainPage'>Home</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='/statistics'>Statistici</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='/messagesFromUsers'>Mesaje</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/' onClick={LogoutUser}>Logout</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
    )
}

export default NavbarAdmin;
