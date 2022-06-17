import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';

export const InfoContainer = styled.div`
    display: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0px;
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: 1;


    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        //background: linear-gradient(180deg, rgba(255,255,255,0.3) 100%, rgba(0,0,0,0.3) 100%), linear-gradient(180deg, rgb(0,0,0,0.3) 10%, transparent 100%);
        z-index: 2;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
`;

export const LogoWrapper = styled.div`
    width: 200px;
    height: 200px;
`

export const ServicesIcon = styled.img`
    width: 100%;
    height: auto;
    margin:auto;
`

export const SiteDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 60vh;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #DBD4CE;
        color: #000;
    }
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: '#01bf71';

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const TopLine = styled.p`
    color: #546b7b;
    font-size: 22px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const SocialIconLink = styled.a`
    color:#546b7b;
    font-size: 24px;
    margin-bottom: 5%;
`

export const Subtitle = styled.p`
    max-width: 650px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: '#010606';
    text-align: center;
`;

export const TextWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 50vh;
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: 'Regular';
    font-size: 1.3rem;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`
