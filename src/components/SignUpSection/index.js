import React from 'react'
import {Link as LinkR} from 'react-router-dom';
import {ReactComponent as YourSvg} from '../../images/undraw_sign_in_re_o58h.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrpaper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, NavBtnLink} from '../InfoSection/InfoElements';

export default class SignupSection  extends React.Component{
    render(){
        return (
            <>
                <InfoContainer lightBg={this.props.lightBg} id={this.props.id}>
                    <InfoWrapper>
                        <InfoRow imgStart={this.props.imgStart}>
                            <Column1>
                                <TextWrpaper>
                                    <TopLine>{this.props.topLine}</TopLine>
                                    <Heading lightText={this.props.lightText}>{this.props.headLine}</Heading>
                                    <Subtitle darkText={this.props.darkText}>{this.props.description}</Subtitle>
                                    <BtnWrap>
                                        <NavBtnLink to="/signup" duration ={500} offset={-80} primary={this.props.primary ? 1 : 0} dark={this.props.dark ? 1 : 0} dark2={this.props.dark2 ? 1 : 0}>{this.props.buttonLabel}</NavBtnLink>
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
}
