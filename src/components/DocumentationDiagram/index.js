import React from 'react';
import { Heading, InfoContainer, InfoWrapper, LogoWrapper, ServicesIcon, SiteDetails,SubSubtitle, TextDiv, SiteDetails2, Heading2, Subtitle2, TopLine, TopLine2, SocialIconLink, Subtitle, TextWrapper1, NavLinks, ImgWrapper1, ImgWrapper2, ImgWrapper3, TwoImg, OneImg, Subtitle3, TextIMG} from "./DocumentationDiagramElements"
import IconTreemapPacket from '../../images/treemap_static1.png';
import IconTreemapScale from '../../images/treemap_zoom.png';
import IconBubblechart from '../../images/bubblechart.png';
import IconBarchart from '../../images/bar_chart_app.png';
import IconScale from '../../images/scale.png';

function DocumentationDiagram () {
    return (
        <>
            <InfoContainer id="diagram">
            <InfoWrapper>
                    <SiteDetails>
                        <TextWrapper1 style={{margin:"auto"}}>
                                    <TopLine2>TIPURI DE DIAGRAME</TopLine2>
                        </TextWrapper1>
                        <TwoImg>
                            <ImgWrapper1>
                                    <LogoWrapper>
                                            <ServicesIcon src={IconTreemapPacket} />
                                    </LogoWrapper>
                                    <TextWrapper1>
                                    <TopLine style={{fontSize:"15px", marginTop:"15px"}}>Treemap static</TopLine>
                                </TextWrapper1>
                            </ImgWrapper1>
                            <ImgWrapper2>
                                    <LogoWrapper>
                                            <ServicesIcon src={IconTreemapScale} />
                                    </LogoWrapper>
                                    <TextWrapper1>
                                    <TopLine style={{fontSize:"15px", marginTop:"15px"}}>Treemap dinamic</TopLine>
                                </TextWrapper1>
                            </ImgWrapper2>
                       </TwoImg>
                       <TwoImg>
                            <ImgWrapper1>
                                    <LogoWrapper>
                                            <ServicesIcon src={IconBubblechart} />
                                    </LogoWrapper>
                                    <TextWrapper1>
                                    <TopLine style={{fontSize:"15px", marginTop:"15px"}}>Bubblechart</TopLine>
                                </TextWrapper1>
                            </ImgWrapper1>
                            <ImgWrapper2>
                                    <LogoWrapper>
                                            <ServicesIcon src={IconBarchart} />
                                    </LogoWrapper>
                                    <TextWrapper1>
                                    <TopLine style={{fontSize:"15px", marginTop:"15px"}}>Barchart</TopLine>
                                </TextWrapper1>
                            </ImgWrapper2>
                       </TwoImg>
                       {/* <OneImg>
                        <ImgWrapper3>
                                <LogoWrapper>
                                        <ServicesIcon src={IconBubblechart} />
                                </LogoWrapper>
                                <TextWrapper1>
                                <TopLine style={{fontSize:"15px", marginTop:"15px"}}>Bubblechart</TopLine>
                            </TextWrapper1>
                        </ImgWrapper3>
                       </OneImg> */}
                    </SiteDetails>
                    <SiteDetails2>
                        <TextDiv style={{marginTop:"3%"}}>
                                <TopLine>COLORAREA DIAGRAMELOR</TopLine>
                                <Subtitle3 darkText={true}>Aceasta se poate realiza în două moduri pentru Treemap Static și Bubblechart.</Subtitle3>
                                <SubSubtitle darkText={true}>Colorarea pe pachete - culorile se generează random la fiecare refresh de pagină</SubSubtitle>
                                <TextIMG>
                                    <SubSubtitle darkText={true}>Colorarea în funcție de marimea claselor - scară de 9 culori</SubSubtitle>
                                    <ServicesIcon src={IconScale} style={{width:"30%", marginLeft:"5%"}}/>
                                </TextIMG>
                                <Subtitle3 darkText={true}>Pentru Treemap dinamic, se poate alege o singură culoare sau colorarea în adâncime, plecând de la o valoare dată</Subtitle3>
                                <TopLine style={{marginTop:"5%"}}>DIMENSIUNIILE DIAGRAMELOR</TopLine>
                                <Subtitle3 darkText={true}>După cum se poate vedea mai sus, diagramele noastre se pot customiza dupa bunul plac. Pentru a oferi clienților noștri o experiență cât mai plăcută și 
                                pentru a putea vizualiza diagramele sub mai multe forme, aceștia iși pot alege dimensiunile diagramei astfel: pentru Treemap, aceștia pot alege inăltimea și lungimea în pixeli (max. 1100x750) 
                                iar în cazul diagramei de tip Bubblechart aceștia pot alege diametru cercului în care se va vedea diagrama (max. 750px).</Subtitle3>
                                <TopLine style={{marginTop:"5%"}}>CREAREA ȘI EDITAREA DIAGRAMELOR</TopLine>
                                <Subtitle3 darkText={true}>Pentru a crea o diagramă trebuie sa accesezi secțiunea "Proiecte" din cadrul contului tău, după care apeși pe butonul "Crează".</Subtitle3>
                                <Subtitle3 darkText={true}>Ai nevoie de un fișier JSON, fie generat de aplicația noastră, fie unul creat de tine (vezi secțiunea FIȘIERE JSON), pe care să îl adaugi în cadrul unui proiect.</Subtitle3>
                            </TextDiv>
                    </SiteDetails2>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DocumentationDiagram;