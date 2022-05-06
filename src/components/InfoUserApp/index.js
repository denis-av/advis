import React from 'react';
import { CircleImage, FullCircle, FullCircle2, InfoContainer, InfoWrapper, CircleGroup, CircleGroup2, EmptyCircle, FullCircle3, FullCircle4, TextAreaInfo, TopLine, Heading, Subtitle, TextDiv, ImageWrapper, ServicesIcon } from './InfoUserAppElements';
import Icon from '../../images/be_application.png';

export default class InfoAppUser extends React.Component {
    render(){
        return (
            <>
                <InfoContainer>
                    <InfoWrapper>
                        <TextAreaInfo>
                            <TextDiv>
                                <TopLine>ADVIS BE</TopLine>
                                <Heading lightText={false}>Folosește aplicția ADVID BE pentru a genera fișiere JSON pornind de la proiecte C#</Heading>
                                <Subtitle darkText={true}>Ca și utilizator ai posibilitatea de a beneficia de aplicația noastră ADVIS BE pentru a-ți crea fisiere JSON pentru proiectele tale JSON utilizând anumite metrici cum ar fi numarul de linii de cod sau codeSize-ul metodelor.</Subtitle>
                                <TopLine>
                                    Ce trebuie să  știi înainte de a utiliza aplicația noastră?
                                </TopLine>
                                <Subtitle darkText={true}>Aplicția ADVIS BE lucrează cu fisierele .dll si cele .exe, realizând o analiză statica asupra proiectului tău, fapt pentru care aplicatia trebuie sa aibe o variantă de Release sau Debug. Utilizând aplicația local, te asiguri că proiectul tău este in siguranță, iar metricile după care creezi fișierele stau la latitudinea ta de alegere.</Subtitle>
                            </TextDiv>
                        </TextAreaInfo>
                        {/* <CircleImage>
                            <CircleGroup>
                                <FullCircle />  
                                <FullCircle3 />  
                                <EmptyCircle />  
                            </CircleGroup>
                            <CircleGroup2>
                                <FullCircle4 />  
                                <FullCircle2 />
                            </CircleGroup2>
                        </CircleImage> */}
                        <ImageWrapper>
                            <ServicesIcon src={Icon} />
                        </ImageWrapper>
                    </InfoWrapper>
                </InfoContainer>

            </>
          )
    }
}
