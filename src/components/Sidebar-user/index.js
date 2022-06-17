import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarRoute, SidebarMenu, SidebarLink } from './SidebarElements';

export default class SidebarUser extends React.Component {
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
                        <SidebarLink to='/mainPage' onClick={this.props.toggle}>Home</SidebarLink>
                        <SidebarLink to='/projects' onClick={this.props.toggle}>Proiecte</SidebarLink>
                        <SidebarLink to='/documentation' onClick={this.props.toggle}>Documentatie</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
            )
    }
  
}