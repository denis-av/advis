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
                                <Subtitle3 darkText={true}>Aceasta se poate realiza ??n dou?? moduri pentru Treemap Static ??i Bubblechart.</Subtitle3>
                                <SubSubtitle darkText={true}>Colorarea pe pachete - culorile se genereaz?? random la fiecare refresh de pagin??</SubSubtitle>
                                <TextIMG>
                                    <SubSubtitle darkText={true}>Colorarea ??n func??ie de marimea claselor - scar?? de 9 culori</SubSubtitle>
                                    <ServicesIcon src={IconScale} style={{width:"30%", marginLeft:"5%"}}/>
                                </TextIMG>
                                <Subtitle3 darkText={true}>Pentru Treemap dinamic, se poate alege o singur?? culoare sau colorarea ??n ad??ncime, plec??nd de la o valoare dat??</Subtitle3>
                                <TopLine style={{marginTop:"5%"}}>DIMENSIUNIILE DIAGRAMELOR</TopLine>
                                <Subtitle3 darkText={true}>Dup?? cum se poate vedea mai sus, diagramele noastre se pot customiza dupa bunul plac. Pentru a oferi clien??ilor no??tri o experien???? c??t mai pl??cut?? ??i 
                                pentru a putea vizualiza diagramele sub mai multe forme, ace??tia i??i pot alege dimensiunile diagramei astfel: pentru Treemap, ace??tia pot alege in??ltimea ??i lungimea ??n pixeli (max. 1100x750) 
                                iar ??n cazul diagramei de tip Bubblechart ace??tia pot alege diametru cercului ??n care se va vedea diagrama (max. 750px).</Subtitle3>
                                <TopLine style={{marginTop:"5%"}}>CREAREA ??I EDITAREA DIAGRAMELOR</TopLine>
                                <Subtitle3 darkText={true}>Pentru a crea o diagram?? trebuie sa accesezi sec??iunea "Proiecte" din cadrul contului t??u, dup?? care ape??i pe butonul "Creaz??".</Subtitle3>
                                <Subtitle3 darkText={true}>Ai nevoie de un fi??ier JSON, fie generat de aplica??ia noastr??, fie unul creat de tine (vezi sec??iunea FI??IERE JSON), pe care s?? ??l adaugi ??n cadrul unui proiect.</Subtitle3>
                            </TextDiv>
                    </SiteDetails2>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DocumentationDiagram;