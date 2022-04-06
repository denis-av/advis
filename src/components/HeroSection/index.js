import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP,ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
import { hover } from '@testing-library/user-event/dist/hover';


export default class HeroSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
    }

    handleHover = () => {
        this.setState({hover: !hover});
    }

    render(){
        return (
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Analizează-ți codul cu noi</HeroH1>
                    <HeroP>Crează-ți un cont acum și analizează-ți
                        codul sursă a proiectelor
                        realizate in C#.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={this.handleHover}
                        onMouseLeave={this.handleHover}
                        primary="true"
                        dark="true"
                        >
                            Începe acum {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        )
    }
}
