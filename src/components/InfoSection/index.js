import React from 'react';
import {ReactComponent as YourSvg} from '../../images/treemap_2.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrpaper, TopLine, Heading, Subtitle, Column2, ImgWrap} from './InfoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,headLine,lightText,darkText,description,}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrpaper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrpaper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                        <YourSvg style={{width: "100%",
                                            margin: "0 0 10px 0",
                                            paddingRight: "0"}}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
