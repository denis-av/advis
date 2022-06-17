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
    color: #fff;
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
    color: #fff;
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
    color: #fff;
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

    @media screen and (max-width:768px){
        font-size: 11px;
    }
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
    height: 50vh;
    margin-left: 10vh;
    margin-top: 15vh;
    background-color: #546b7b;

    @media screen and (max-width:768px){
        height: 40vh;
        margin-top: 20vh;
    }

    @media screen and (max-width:1600px){
        width: 40%;
        height: 60vh;
        margin-left: 10vh;
        margin-top: 10vh;
    }
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
    margin-top: -20%;

    @media screen and (max-width:768px){
        max-width: 125px;
        margin-top: -65%;
    }
`;

export const FormGroup = styled.div`
    margin-top: 12%;
    height: 40%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:768px){
        max-width: 125px;
        margin-top: 7vh;
    }

    @media screen and (max-width:1600px){
        margin-top: 12%;
        height: 60%;
        width: 50%;
    }

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

export const TabElementCreate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: 1;
    background: #ffffff;
`

export const ServicesIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`