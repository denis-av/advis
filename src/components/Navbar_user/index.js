import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavbarElements";
import { signOut } from "firebase/auth";
import { auth } from '../../App';
import { useNavigate } from 'react-router-dom';


function NavbarUser({toggle}){

  let navigate = useNavigate();

  function LogoutUser(e) {
    signOut(auth).then(() => {
      navigate("/home");
      localStorage.removeItem("documentName");
      localStorage.removeItem("height");
      localStorage.removeItem("projectName");
      localStorage.removeItem("limitSize");
      localStorage.removeItem("diameter");
      localStorage.removeItem("color");
      localStorage.removeItem("data");
      localStorage.removeItem("user");
      localStorage.removeItem("type");
      localStorage.removeItem("userFirstName");
      localStorage.removeItem("width");
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
                  <NavLinks to='/mainPage'>Home</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='/projects'>Proiecte</NavLinks>
              </NavItem>
              {/* <NavItem>
                  <NavLinks to='/createDiagram'>Crează</NavLinks>
              </NavItem> */}
              <NavItem>
                  <NavLinks to='/documentation'>Documentatie</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to=''>Profil</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/home' onClick={LogoutUser}>Logout</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
    )
}

export default NavbarUser;
