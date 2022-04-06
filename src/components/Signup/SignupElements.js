import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    background-color: #fff;
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`

export const IconWrap = styled.div`
   margin-top: 5vh;
   margin-left: -1.5vh;
`

export const Icon = styled(Link)`
    margin-top: 32px;
    margin-left: 10vh;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    width: 100%;

    @media screen and (max-width: 400px){
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #4f586b;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    /* box-shadow: 0 1px 3px rgba(0,0,0,0.9); */

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    font-weight: bold;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

export const FormButton = styled.button`
    background: #fff;
    font-weight: bold;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
`

export const InfoRow = styled.div`
    width: 50%;
    justify-content: center;
    margin-left: 25%;
    margin-top: -15vh;
    display: grid;
    border: 3px;
    border-style: solid;
    border-color: #4f586b;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width:768px){
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;
export const Column1 = styled.div`
    height: 100%;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    background: #4f586b;
    padding: 0 15px;
    grid-area: col2;
    height: 100%;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;