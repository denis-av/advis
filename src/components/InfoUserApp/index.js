import React from 'react';
import { CircleImage, FullCircle, FullCircle2, InfoContainer, InfoWrapper,NavBtn,NavBtnLink,  CircleGroup, CircleGroup2, EmptyCircle, FullCircle3, FullCircle4, TextAreaInfo, TopLine, Heading, Subtitle, TextDiv, ImageWrapper, ServicesIcon, ServicesIcon2,ServicesIcon3,WrappImg1, WrappImg2, WrappImg3 } from './InfoUserAppElements';
import Icon0 from '../../images/advis_be_firstPage.png';
import Icon1 from '../../images/advis_grid.png';
import Icon2 from '../../images/advis_be_analyzeClasses.PNG';
import Icon3 from '../../images/advis_be_createJSON.PNG';
import Axios from "axios";
import FileDownload from "js-file-download";


function InfoAppUser (){

    const downloadApplication=(e)=>{
        e.preventDefault();
        console.log("test");
        Axios({
          url: "http://localhost:3001/DownloadApplication",
          method: "GET",
          responseType: "blob"
        }).then((res) => {
          console.log(res);
          FileDownload(res.data,"ADVIS_application_v.1.0.zip");
        })
    }

        return (
            <>
                <InfoContainer>
                    <InfoWrapper>
                        <TextAreaInfo>
                            <TextDiv>
                                <TopLine>ADVIS BE</TopLine>
                                <Heading lightText={false}>Folosește aplicția ADVID pentru a genera fișiere JSON pornind de la proiecte C# sau pentru a crea fișiere customizate pentru vizualizări</Heading>
                                <Subtitle darkText={true}>Ca și utilizator ai posibilitatea de a beneficia de aplicația noastră ADVIS pentru a-ți crea fișiere JSON pentru proiectele tale realizate în C#, utilizând anumite metrici cum ar fi numarul de linii de cod sau codeSize-ul metodelor.</Subtitle>
                                <Subtitle darkText={true}>De asemenea, cu această aplicție poți crea și alt tip de fișiere/structuri pentru a putea fi vizualizate folosind site-ul nostru.</Subtitle>
                                <TopLine>
                                    Ce trebuie să  știi înainte de a utiliza aplicația noastră?
                                </TopLine>
                                <Subtitle darkText={true}>Aplicția ADVIS BE lucrează cu fisierele .dll și cele .exe, realizând o analiză statică asupra proiectului tău, fapt pentru care aplicația trebuie să aibă o variantă de Release sau Debug. Utilizând aplicația local, te asiguri că proiectul tău este în siguranță, iar metricile după care creezi fișierele stau la latitudinea ta de alegere.</Subtitle>
                                <NavBtn>
                                    <NavBtnLink onClick={downloadApplication}>Descarca acum</NavBtnLink>
                                </NavBtn>
                            </TextDiv>
                        </TextAreaInfo>
                        <ImageWrapper>
                                <ServicesIcon src={Icon1} />
                        </ImageWrapper>
                    </InfoWrapper>
                </InfoContainer>

            </>
          )
}

export default InfoAppUser;
