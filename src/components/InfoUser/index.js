import React from 'react';
//import { HeaderH1, HeaderH2, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, Column3, HeaderH4, InfoRowColumns, Column1Text, Column2Text, Column3Text, InfoRowText} from './InfoElements';
import {ReactComponent as YourSvg} from '../../images/app_flow.svg';
import {ReactComponent as StartSvg} from '../../images/start2.svg';
import {ReactComponent as UploadSvg} from '../../images/upload.svg';
import {ReactComponent as VisualizeSvg} from '../../images/visualize.svg';
import { CircleImage, FullCircle, FullCircle2, InfoContainer, InfoWrapper, CircleGroup, EmptyCircle, TextAreaInfo, TopLine, Heading, Subtitle, TextDiv } from './InfoUserElements';

export default class InfoSectionUser extends React.Component {
    render(){
        return (
            <>
                {/* <InfoContainer id="infoUser">
                    <InfoWrapper>
                    <InfoRow style={{marginTop: "5vh", marginLeft: "auto", marginRight:"auto", alignContent: "center"}}>
                                <Column1>
                                    <StartSvg style={{width: "50%", height: "50%",
                                        margin: "5vh 0vh 13vh 13vh",
                                        paddingRight: "0"}} />
                                </Column1>
                                <Column2>
                                    <VisualizeSvg style={{width: "50%", height: "50%",
                                            margin: "5vh 0vh 13vh 13vh",
                                            paddingRight: "0"}} />
                                </Column2>
                                <Column3>
                                    <UploadSvg style={{width: "50%", height: "50%",
                                            margin: "5vh 0vh 13vh 13vh",
                                            paddingRight: "0"}} />
                                </Column3>
                        </InfoRow>
                        <InfoRowColumns>
                            <InfoRowText>
                                <Column1Text>
                                    <HeaderH4>ADVIS este un site care iți oferă posibilitatea de a crea diagrame bazate pe biblioteca D3. Aici poți vizualiza și analiza structura și aranjamentul codului tău pentru a identifica anumite probleme.</HeaderH4>
                                </Column1Text>
                                <Column2Text>
                                    <HeaderH4>Ca și portofoliu, pe baza fiecărui cod se pot genera trei tipuri de diagrame: Treemap, Bubble Chart sau Collapsibal Tree, fiecare cu alta structură și reprezentare.</HeaderH4>
                                </Column2Text>
                                <Column3Text>
                                    <HeaderH4>Îți poți urca în siguranță codul, pe baza căruia se vor crea anumite fișiere cu diferite metrici, cum ar fi numarul de linii ale codului sau numarul de metode pe care fiecare clasă din proiectul tău le conține, sau poți opta pentru o analiză asupra metodelor fiecărei clase în parte pentru a afla codeSize-ul lor.</HeaderH4>
                                </Column3Text>
                            </InfoRowText>
                        </InfoRowColumns>
                    </InfoWrapper>
                </InfoContainer> */}
                <InfoContainer>
                    <InfoWrapper>
                        <CircleImage>
                            <CircleGroup>
                                <FullCircle />  
                                <EmptyCircle />  
                            </CircleGroup>
                            <FullCircle2 />
                        </CircleImage>
                        <TextAreaInfo>
                            <TextDiv>
                                <TopLine>EXPLOREAZĂ DATE FOLOSIND ADVIS</TopLine>
                                <Heading lightText={false}>Folosește ADVIS pentru a explora și a vizualiza datele tale într-o manieră mult mai prietenoasă vizual
                                </Heading>
                                <Subtitle darkText={true}>Folosind ADVIS ai posibilitatea de a crea diagrame bazate pe biblioteca D3, pornind de la fișiere JSON cu o anumita structură care trebuie respectată.</Subtitle>
                                <Subtitle darkText={true}>Acest site a fost creat pentru a putea crea diagrame de vizualizare pentru proiecte de tip C#, însă datorită faptului că aceste diagrame se construiesc pe baza unor fisier
                                    JSON, fiecare utiliztor își poate crea propriile fișiere, și astfel poate crea diagrame, acoperind o arie mai mare decât cea a proiectelor C#.
                                </Subtitle>
                            </TextDiv>
                        </TextAreaInfo>
                    </InfoWrapper>
                </InfoContainer>

            </>
          )
    }
}
