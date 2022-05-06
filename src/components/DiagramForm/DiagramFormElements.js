import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: 1;
`;

export const Wrapper = styled.div`
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
    background: #d6e0f5;
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
    background: #c2c2d6;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-left: -20%;
    margin-top: 5%;
`

export const FullCircle4 = styled.div`
    background: #b3e6cc;
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

export const FormArea = styled.div`
    width: 60%;
    height: 80%;
    margin: auto;
    margin-top: 10vh;
    margin-left: 10%;
`

export const FormWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #e8e6e6;
    box-shadow: 10px 5px 5px #888888;
`

export const FormH1 = styled.h1`
    margin-top: 5%;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    font-weight: bold;
`

export const DiagramFormWrap = styled.div`
    height: 70%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
`

export const FormLabel = styled.label`
    margin-bottom: 3px;
    width: 85%;
    font-size: 13px;
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

export const FormSelect2 = styled.select`
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

export const ProjectSelection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: transparent;
    width: 87%;
    padding: 7px 7px;
    margin: auto;
`

// export const FormSelect2 = styled.select`
//     width: 15%;
//     padding: 7px 7px;
//     margin: auto;
//     margin-bottom: 15px;
//     border: 0;
//     background-color: transparent;
//     border-bottom: 2px solid #9b9b9b;
//     box-shadow: none;
//     outline: none;
// `