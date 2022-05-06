import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';

export const IconWrap = styled.div`
   margin-left: -1.5vh;
   margin-top: 5vh;
`

export const Icon = styled(Link)`
    margin-left: 10vh;
    margin-top: 10vh;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormH1 = styled.h1`
    margin-top: 7%;
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

export const ImgWrap = styled.div`
    background-color: #000;
    max-width: 355px;
    height: 100%;
    margin: auto;
`;

export const SignInContainer = styled.div`
    background-color: #fff;
    min-height: 600px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;

`

export const SignInContent = styled.div`
    width: 40%;
    height: 60vh;
    margin-left: 10vh;
    margin-top: 10vh;
    background-color: #fff;
    box-shadow: 10px 5px 5px #888888;
`

export const SignInForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LoginForm = styled.div`
    width: 90%;
    height: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const ImgWrapper = styled.div`
    max-width: 225px;
    margin: auto;
    margin-top: -15%;

    @media screen and (max-width:768px){
        max-width: 125px;
    }
`;

export const FormGroup = styled.div`
    margin-top: 12%;
    height: 60%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`