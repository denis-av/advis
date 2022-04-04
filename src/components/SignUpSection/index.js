import React from 'react'
import { Button } from '../ButtonElement';
import {ReactComponent as YourSvg} from '../../images/undraw_sign_in_re_o58h.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrpaper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap} from '../InfoSection/InfoElements';

const SignupSection = ({lightBg,id,imgStart,topLine,headLine,lightText,darkText,description,buttonLabel, primary, dark, dark2}) => {
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
                            <BtnWrap>
                                <Button to='home' smooth={true} duration ={500} spy={true} offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
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

export default SignupSection
