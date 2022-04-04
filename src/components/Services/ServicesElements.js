import styled from 'styled-components';

export const ServicesContent = styled.div`
    /* background-image: url("../../images/d3-country-bubble-chart-country-centers-colors.png"); */
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }

    ::before{
        content:"";
        display:block;
        height:10vh; /* fixed header height*/
        margin:-10vh 0 0; /* negative fixed header height */
    }
`
export const ServicesContainer = styled.div`
    display: flex;
    height: 860px;
    margin-bottom: 10vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen  and (max-width: 768px){
        height: 1500px;
    }

    @media screen and (max-width:480px){
        height: 1700px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 50px 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 100px;
        padding: 50px 50px;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-gap: 110px;
        padding: 50px 50px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    margin-top: -10vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    font-weight: bold;
    font-family: 'Regular';
    margin-bottom: 15vh;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    font-family: 'Regular';
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    font-family: 'Regular';
    text-align: justify;
`