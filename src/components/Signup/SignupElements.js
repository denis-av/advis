import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    background-color: #fff;
    min-height: 600px;
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
`

export const IconWrap = styled.div`
   margin-left: -1.5vh;
   margin-top: 5vh;
`

export const Icon = styled(Link)`
    margin-left: 10vh;
    margin-top: 10vh;
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
        padding: 0px;
    }
`

export const FormMobileSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    width: 100%;
`

export const FormMobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: transparent;
    width: 95%;
    padding: 7px 7px;
    margin: auto;

    @media screen and (max-width: 400px){
        padding: 0px;
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
    margin-top: 25px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    font-weight: bold;
`

export const FormLabel = styled.label`
    margin-bottom: 3px;
    width: 85%;
    font-size: 11px;
    font-weight: bold;
    color: #000;
    margin: auto;
    `

export const FormInput = styled.input`
    width: 85%;
    padding: 7px 7px;
    margin: auto;
    margin-bottom: 15px;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid #9b9b9b;
    box-shadow: none;
    outline: none;
    //box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

export const FormSelect = styled.select`
    width: 85%;
    padding: 7px 7px;
    margin: auto;
    margin-bottom: 15px;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid #9b9b9b;
    box-shadow: none;
    outline: none;
`

export const FormButton = styled.button`
    background: #bfbdc1;
    width: 50%;
    font-weight: bold;
    padding: 7px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 15px;
    cursor: pointer;
    margin: auto;
`

export const Text = styled(Link)`
    text-align: center;
    margin-top: 15px;
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
    max-width: 355px;
    height: 100%;
`;

export const BigContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const SignUpContainer = styled.div`
    background-color: #fff;
    min-height: 600px;
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

export const SignupContent = styled.div`
    width: 60%;
    height: 80vh;
    margin: auto;
    background-color: #bfbdc1;
    box-shadow: 10px 5px 5px #888888;
    margin-top: 2%;
    margin-left: -3%;
`

export const SignupForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RegisterForm = styled.div`
    width: 90%;
    height: 85%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
`

export const ImgWrapper = styled.div`
    max-width: 355px;
    height: 100%;
`;

export const FormGroup = styled.div`
    margin-top: 1.25%;
    height: 95%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`