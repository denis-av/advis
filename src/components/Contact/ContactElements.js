import styled from "styled-components";

export const BigContainer = styled.div`
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

export const ContactContent = styled.div`
    width: 75%;
    height: 75vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width:768px){
        height: 40vh;
        margin-top: 20vh;
    }

    @media screen and (max-width:1600px){
        width: 75%;
        height: 75vh;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10vh;
    }
`

export const InfoContent = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #546b7b;
`

export const IconWrapper = styled.div`
    width: 200px;
    height: 200px;
`

export const IconsDetails = styled.div`
    width:80%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-size: 24px;
`

export const SocialIconLink2 = styled.a`
    color:#546b7b;
    font-size: 24px;
`

export const InfoWrapper = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 10%;
`

export const InfoWrapperForm = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 10%;
`

export const FormContent = styled.div`
    width: 65%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #546b7b;
`

export const TopLine = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
`;

export const LabelInput = styled.div`
    width: 75%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const RowCell = styled.div`
    height: 20%;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const RowCellForm = styled.div`
    height: 25%;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const ServicesIcon = styled.img`
    width: 100%;
    height: auto;
    margin:auto;
`

export const FormLabel = styled.label`
    width: 85%;
    font-size: 13px;
    font-weight: bold;
    color: #546b7b;
    margin: auto;
    margin-bottom: -2%;
    `

export const FormInput = styled.input`
    width: 85%;
    padding: 10px 10px;
    margin: auto;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid #546b7b;
    box-shadow: none;
    outline: none;
    //box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

export const FormButton = styled.button`
    background: #bfbdc1;
    width: 40%;
    height: 50%;
    font-weight: bold;
    padding: 7px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #546b7b;
    font-size: 15px;
    cursor: pointer;
    margin: auto;
`