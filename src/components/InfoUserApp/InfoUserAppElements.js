import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
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
    height: 90vh;
    width: 100%;
`

export const CircleImage = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 40%;
    margin-top: 10vh;
    margin-bottom: 10vh;
`

export const CircleGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0%;
`
export const CircleGroup2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0%;
    margin-top: -10%;
`


export const FullCircle = styled.div`
    background: #cbcaca;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-left: 30%;
    margin-top: 20%;
`

export const FullCircle2 = styled.div`
    background: transparent;
    border-radius: 50%;
    border: 2px #000;
    border-style: solid;
    width: 150px;
    height: 150px;
    margin-left: 10%;
    margin-top: 5%;
`
export const FullCircle3 = styled.div`
    background: #cbcaca;
    border-radius: 50%;
    border: 2px #000;
    border-style: solid;
    width: 200px;
    height: 200px;
    margin-left: -20%;
    margin-top: 5%;
`

export const FullCircle4 = styled.div`
    background: #cbcaca;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 30%;
    margin-top: 5%;
`

export const EmptyCircle = styled.div`
    background: transparent;
    border-radius: 50%;
    border: 2px #000;
    border-style: solid;
    width: 150px;
    height: 150px;
    margin-left: -60%;
    margin-top: 20%;
`

export const TextAreaInfo = styled.div`
    width: 50%;
    height: 80%;
    margin: auto;
    margin-top: 10vh;
    margin-left: 0%;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText}) => lightText ? '#f7f8fa' :'#010606'};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 650px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => darkText ? '#010606' : '#fff'};
`;

export const TextDiv = styled.div`
    margin-top: 5vh;
    margin-left: 10vh;
    margin-right: 10vh;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 45%;
    margin-right: 5%;
    margin-top: 10vh;
    margin-bottom: 10vh;
    border: 2px #01bf71;
    border-style: solid;
`

export const ServicesIcon = styled.img`
    height: 80%;
    width: 80%;
    margin:auto;
`