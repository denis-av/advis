import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarRoute, SidebarMenu, SidebarLink } from './SidebarElements';

export default class Sidebar extends React.Component {
    render(){
        return (
            <SidebarContainer isOpen={this.props.isOpen} onClick={this.props.toggle} style={{backgroundImage: "linear-gradient(#bfbdc1, #fcfcff)",backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'}}>
                <Icon onClick={this.props.toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={this.props.toggle}>Despre</SidebarLink>
                        <SidebarLink to='services' onClick={this.props.toggle}>Servicii</SidebarLink>
                        <SidebarLink to='signup' onClick={this.props.toggle}>Înregistrare</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">Login</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
            )
    }
  
}