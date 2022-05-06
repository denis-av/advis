import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const InfoContainer = styled.div`
    background: #ffffff;
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
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`;

export const HeaderH1 = styled.h1`
    font-size: 2.5rem;
    color: #000000;
    text-align: center;
    margin: auto;
    margin: 5vh 0 0 0;
`
export const HeaderH2 = styled.h3`
    font-size: 2rem;
    color: #000000;
    text-align: center;
    margin: auto;
`

export const HeaderH4 = styled.h3`
    font-size: 1rem;
    color: #000000;
    text-align: justify;
    margin: 5vh 0;
`

export const InfoRow = styled.div`
    height: 100%;
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 3vh;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2 col3';
    align-items: center;
    @media screen and (max-width:768px){
        grid-template-areas: 'col1' 'col2' 'col3';
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    align-items: center;
`;

export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
    align-items: center;
`;

export const InfoRowColumns = styled.div`
    display: grid;
    padding: 0 35px;
    width: 100%;
    margin: -10vh 10vh 0 0;
    align-items: center;
    justify-content: center;
`;
export const InfoRowText = styled.div`
    display: grid;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 3vh;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2 col3';
    align-items: center;
    @media screen and (max-width:768px){
        grid-template-areas: 'col1' 'col2' 'col3';
    }
`;

export const Column1Text = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    height: 30vh;
    background: #dbd4ce;
    border: 3px;
    border-style: solid;
    border-color: #bfbdc1;
`;

export const Column2Text = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    height: 30vh;
    background: #bfbdc1;
`;

export const Column3Text = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
    height: 30vh;
    background: #dbd4ce;
    border: 3px;
    border-style: solid;
    border-color: #bfbdc1;
`;

