import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarWrapper, SidebarRoute, SidebarMenu, SidebarLink } from '../Sidebar/SidebarElements';

function SidebarAdmin () {
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
                        <SidebarLink to='/adminMainPage' onClick={this.props.toggle}>Home</SidebarLink>
                        <SidebarLink to='/statistics' onClick={this.props.toggle}>Statistici</SidebarLink>
                        <SidebarLink to='/messagesFromUsers' onClick={this.props.toggle}>Mesaje</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
            )
}

export default SidebarAdmin