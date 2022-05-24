import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from "./FooterElements";
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRightss, SocialIcons, SocialIconLink } from './FooterElements';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default class Footer extends React.Component{
    render(){
        return (
            <>
                <FooterContainer>
                    <FooterWrap>
                        <FooterLinksContainer>
                            <FooterLinkWrapper>
                                <FooterLinkItems>
                                    <FooterLinkTitle>Contact</FooterLinkTitle>
                                    <FooterLink to="/contact">Contact</FooterLink>
                                </FooterLinkItems>
                            </FooterLinkWrapper>
                            <FooterLinkWrapper>
                                <FooterLinkItems>
                                    <FooterLinkTitle>Social media</FooterLinkTitle>
                                    <FooterLink to="/">LinkedIn</FooterLink>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Instagram</FooterLink>
                                </FooterLinkItems>
                            </FooterLinkWrapper>
                        </FooterLinksContainer>
                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialLogo to='/'>
                                    advis
                                </SocialLogo>
                                <WebsiteRightss>advis © {new Date().getFullYear()} All rights reserved.</WebsiteRightss>
                                <SocialIcons>
                                    <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                    <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                    <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                                </SocialIcons>
                            </SocialMediaWrap>
                        </SocialMedia>
                    </FooterWrap>
                </FooterContainer>
            </>
        )
    }
}
