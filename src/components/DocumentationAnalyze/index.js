import React, {useRef, useState} from 'react';
import { Heading, InfoContainer, InfoWrapper, LogoWrapper, ServicesIcon, SiteDetails, TopLine, SocialIconLink, Subtitle, TextWrapper1, NavLinks} from './DocumentationAnalyzeElements';
import IconDiagram from '../../images/treemap_1.png';
import IconApplication from '../../images/logo_white.png';
import IconJSON from '../../images/json-logo.png';
import {FaArrowDown} from 'react-icons/fa';
import { style } from 'd3-selection';

function DocumentationAnalyze () {
    const titleRef = useRef();
    const [style, setStyle] = useState({background:"#546b7b"});


    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <SiteDetails>
                        <LogoWrapper>
                                <ServicesIcon src={IconDiagram} />
                        </LogoWrapper>
                        <TextWrapper1>
                            <TopLine>Diagramele noastre</TopLine>
                            <Subtitle>Află mai multe despre diagramele oferite de către site-ul nostru</Subtitle>
                        </TextWrapper1>
                        <SocialIconLink to='diagram'><FaArrowDown /></SocialIconLink>
                    </SiteDetails>
                    <SiteDetails style={{background:"#546b7b"}}>
                        <LogoWrapper>
                                <ServicesIcon src={IconApplication} />
                        </LogoWrapper>
                        <TextWrapper1>
                            <TopLine style={{color:"#fff"}}>Aplicația noastră</TopLine>
                            <Subtitle style={{color:"#fff"}}>Descoperă cum poți folosi aplicația desktop ADVIS</Subtitle>
                        </TextWrapper1>
                        <SocialIconLink href='#diagram' style={{color:"#fff"}}><FaArrowDown /></SocialIconLink>
                    </SiteDetails>
                    <SiteDetails>
                        <LogoWrapper>
                                <ServicesIcon src={IconJSON} />
                        </LogoWrapper>
                        <TextWrapper1>
                            <TopLine>Fișierele JSON</TopLine>
                            <Subtitle>Află cum iți poți folosi proprile fișiere pentru crearea diagramelor</Subtitle>
                        </TextWrapper1>
                        <SocialIconLink to="diagram"><FaArrowDown /></SocialIconLink>
                    </SiteDetails>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DocumentationAnalyze;