import React from 'react';
import { Heading, InfoContainer, InfoWrapper, LogoWrapper, ServicesIcon, SiteDetails,SubSubtitle, TextDiv, SiteDetails2, Heading2, Subtitle2, TopLine, TopLine2, SocialIconLink, Subtitle, TextWrapper1, NavLinks, ImgWrapper1, ImgWrapper2, ImgWrapper3, TwoImg, OneImg, Subtitle3, TextIMG} from "./DocumentationJSONElements"
import IconJSON from '../../images/json_format.png';

function DocumentationJSON () {
    return (
        <>
            <InfoContainer id="diagram">
            <InfoWrapper>
                    <SiteDetails>
                        <TextWrapper1 style={{margin:"auto"}}>
                                    <TopLine2>MODEL JSON</TopLine2>
                        </TextWrapper1>
                       <OneImg>
                        <ImgWrapper3>
                                <LogoWrapper>
                                        <ServicesIcon src={IconJSON} />
                                </LogoWrapper>
                        </ImgWrapper3>
                       </OneImg>
                    </SiteDetails>
                    <SiteDetails2>
                        <TextDiv style={{marginTop:"3%"}}>
                                <TopLine>FIȘIERELE JOSN</TopLine>
                                <Subtitle3 darkText={true}>Pentru a putea crea diagramele, este nevoie ca datele pe care dorin să le oferim ca și input să fie în 
                                format JSON și să respoecte anumite reguli. Aplicația desktop ADVIS are grijă ca aceste fișiere să fie create într-o manieră 
                                corespunzătoare, atât pentru analiza proiectelor software realizate în C#, cât și pentru fișierele JSON cutomizate. </Subtitle3>
                                <TopLine style={{marginTop:"5%"}}>CREAREA PROPRIE A FIȘIERELOR JSON</TopLine>
                                <Subtitle3 darkText={true}>Pentru crearea diagramelor, utilizatorul are posibilitatea de a încărca orice fișier în format JSON. Ca aceste
                                diagrame să fie create într-un mod corespunzător este nevoie de o structură asemănătoare cu cea prezentată în imaginea alăturată.</Subtitle3>
                                <Subtitle3 darkText={true}>Această structură trebuie să fie una arborescentă, care are două tipuri de elemente: nod și frunză. Nodurile poartă rol de părinte
                                ceea ce ne ajută să creăm structura ierarhică, și se continuă fie cu un nod asemănător (care nu are valoare, ci doar copii) pentru a continua
                                structura ierarhică, fie cu o frunză, fiind definită prin nume și valoare, care pune stop lanțului ierarhic.</Subtitle3>
                                <SubSubtitle darkText={true}>Nod - are ca și elemente "name" și "children"</SubSubtitle>
                                <SubSubtitle darkText={true}>Frunză - are ca și elemente "name" și "value"</SubSubtitle>
                                <Subtitle3 darkText={true} style={{marginTop:"5%"}}>Dacă acestă structură nu este respectată, în cazul în care se dorește realizarea fișierelor JSON
                                individual de aplicație, diagramele nu vor putea fi construite și vor apărea cu un text de "undefind".</Subtitle3>
                            </TextDiv>
                    </SiteDetails2>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DocumentationJSON;