import React from 'react';
import { CircleImage, FullCircle, FullCircle2, InfoContainer, InfoWrapper, CircleGroup, CircleGroup2, EmptyCircle, FullCircle3, FullCircle4, TextAreaInfo, TopLine, Heading, Subtitle, TextDiv, ImageWrapper, ServicesIcon } from './InfoAdminAppElements';
import Icon from '../../images/logo_black.png';

function InfoAppAdmin () {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <TextAreaInfo>
                        <TextDiv>
                            <TopLine>ADVIS</TopLine>
                            <Heading lightText={false}>Bine ai venit in contul de ADMIN</Heading>
                            <Subtitle darkText={true}>Vizualizează statisticile ca să descoperi numărul de diagrame create pentru fiecre utilizator în parte. Acest lucru este disponibil momentan folosind o diagrama de tipul BarChart. </Subtitle>
                            <TopLine>
                                Contul tău admin
                            </TopLine>
                            <Subtitle darkText={true}>Acest cont îți oferă posibilitatea de a vizualiza și gestiona conturile folosite pe această platforma, dar și o modalitate de a comunica cu utilizatorii tăi.</Subtitle>
                        </TextDiv>
                    </TextAreaInfo>
                    <ImageWrapper>
                        <ServicesIcon src={Icon} />
                    </ImageWrapper>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoAppAdmin
