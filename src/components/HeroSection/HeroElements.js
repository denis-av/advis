import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 90vh;
    position: relative;
    z-index: 1;


    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(255,255,255,0.3) 100%, rgba(0,0,0,0.3) 100%), linear-gradient(180deg, rgb(0,0,0,0.3) 10%, transparent 100%);
        z-index: 2;
    }
    /*  Add: before styles  */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a24;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #000;
    font-size: 2.5rem;
    text-align: center;
    font-size: bold;

    @media screen and (max-width: 768px){
        font-size: 2.25rem;
    }

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #000;
    font-size: 1.75rem;
    font-weight: bold;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 768px){
        font-size: 1.25rem;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 1.5rem;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 1.5rem;
`