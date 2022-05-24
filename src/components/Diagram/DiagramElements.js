import styled from 'styled-components';

export const DiagramContainer = styled.div`
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
`

export const DiagramWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`

export const DiagramDiv = styled.div`
    max-width: 100%;
    overflow: auto;
    background: #ff0000;
`
export const DiagramWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    /* margin-left: 10%;
    margin-top: 3%; */
`

export const TextArea = styled.div`
    width:30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1600px){
        width:20%;
    }
`

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

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
