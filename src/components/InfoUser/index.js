import React from 'react';
import { CircleImage, FullCircle, FullCircle2, InfoContainer, InfoWrapper, CircleGroup, EmptyCircle, TextAreaInfo, TopLine, Heading, Subtitle, TextDiv } from './InfoUserElements';

function InfoSectionUser () {
        return (
            <>
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

export default InfoSectionUser;