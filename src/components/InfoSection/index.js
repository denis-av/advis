import React from 'react';
import {ReactComponent as YourSvg} from '../../images/treemap_2.svg';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrpaper, TopLine, Heading, Subtitle, Column2, ImgWrap} from './InfoElements';

export default class InfoSection extends React.Component {
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
