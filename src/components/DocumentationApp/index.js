import React from 'react';
import { Heading, InfoContainer, InfoWrapper, LogoWrapper, ServicesIcon, SiteDetails,SubSubtitle, TextDiv, SiteDetails2, Heading2, Subtitle2, TopLine, TopLine2, SocialIconLink, Subtitle, TextWrapper1, NavLinks, ImgWrapper1, ImgWrapper2, ImgWrapper3, TwoImg, OneImg, Subtitle3, TextIMG} from "./DocumentationAppElements"
import IconLogin from '../../images/advis_be_firstPage.png';
import IconAnalyze from '../../images/advis_be_analyzeClasses.PNG';
import IconScale from '../../images/scale.png';

function DocumentationApp () {
    return (
        <>
            <InfoContainer id="diagram">
            <InfoWrapper>
                    <SiteDetails2>
                        <TextDiv>
                                <TopLine2>APLICAȚIA DESKTOP ADVIS</TopLine2>
                                <Subtitle3 darkText={false}>Folosind aplicația ai posibiliatea de a crea fișiere JSON automat pentru a putea crea diagrame folosind site-ul nostru.</Subtitle3>
                                <TopLine style={{ marginTop:"15px"}}>LA CE ÎMI FOLOSEȘTE APLICAȚIA?</TopLine>
                                <Subtitle3 darkText={false}>Cu acestă aplicație iți poți analiza proiectele realizate in C#, însă ai și posibilitatea de a crea fișiere JSON customizate pentru alt tip de proiecte.</Subtitle3>
                                <TopLine style={{ marginTop:"15px"}}>ANALIZĂ ASUPRA PROIECTELOR C#</TopLine>
                                <Subtitle3 darkText={false}>Aplicația ADVIS lucrează cu fișierele .dll si cele .exe, realizând o analiză statică asupra proiectului tău, fapt pentru care proiectul tău trebuie sa aibă o varianta de Release sau Debug. Această analiză se poate realiza asupra claselor sau pe metodele claselor, folosind anumite metrici precum numarul de linii sau codeSize-ul.</Subtitle3>
                                <TopLine style={{marginTop:"15px"}}>FIȘIERE JSON CUSTOMIZATE</TopLine>
                                <Subtitle3 darkText={false}>Folosind plicația desktop, îți poți crea fișiere customizate pentru proiectele tale. Acest lucru se face foarte ușor prin interfața oferită de aplicație, care iți dă posibilitatea de a crea o structura ierarhică arborescentă necesară creări diagramelor.</Subtitle3>
                        </TextDiv>
                    </SiteDetails2>
                    <SiteDetails>
                        <OneImg>
                            <ImgWrapper1>
                                    <LogoWrapper>
                                            <ServicesIcon src={IconLogin} />
                                    </LogoWrapper>
                            </ImgWrapper1>
                       </OneImg>
                        <OneImg>
                            <ImgWrapper1>
                                    <LogoWrapper>
                                            <ServicesIcon src={IconAnalyze} />
                                    </LogoWrapper>
                            </ImgWrapper1>
                       </OneImg>
                    </SiteDetails>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DocumentationApp;