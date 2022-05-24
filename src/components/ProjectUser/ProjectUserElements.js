import styled from "styled-components";

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

export const ProjectForm = styled.div`
    height: 90%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProjectMessage = styled.div`
    height: 10%;
    width: 90%;
    margin-left: 20%;
    margin-right: auto;

    @media screen and (max-width:1600px){
        margin-left: 7%;
    }
`
export const ProjectBttn = styled.div`
height: 10%;
width: 90%;
display: flex;
align-items: center;
justify-content: center;
`

export const ProjectsWrappers = styled.div`
    height: 80%;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ProjectsName = styled.div`
    height: 100%;
    width: 90%;
    margin: auto;
    background: #d9d9d9;
    box-shadow: 3px 3px 3px #888888;
`

export const ProjectsDocuments = styled.div`
    height: 100%;
    width: 90%;
    margin: auto;
    background: #d9d9d9;
    box-shadow: 3px 3px 3px #888888;
`

export const DiagramsDetails = styled.div`
    height: 92%;
    width: 90%;
    margin: auto;
    background: #d9d9d9;
    box-shadow: 3px 3px 3px #888888;
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

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const ServicesIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

export const ButtonProj = styled.button`
    width: 90%;
    max-height: 50px;
    font-size: 17px;
    line-height: 1.1;
    font-weight: 600;
    padding: 10px 10px;
    border: 1px #fff;
    background: #bcb8b1;
`

export const ButtonWrap = styled.div`
    color: black;
    margin: auto;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 5%;

    @media screen and (max-width:1600px){
        font-size: 13px;
    }


`

export const Settings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-top: 10%;
`

export const TabDimension = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 20%;
`

export const TabColor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 20%;
    //ing: 25px 25px;
`

export const TabDiagramType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 20%;
    //padding: 25px 25px;
`

export const TabButtonCreate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 10%;
    //padding: 25px 25px;
`

export const Title = styled.h2`
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.1;
    font-weight: 600;
    color: #546b7b;
`

export const DimensionWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    margin-bottom: 10%;
`

export const ColorSelect = styled.select`
    width: 85%;
    padding: 7px 7px;
    color: #546b7b;
    margin: auto;
    margin-bottom: 10%;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid #9b9b9b;
    box-shadow: none;
    outline: none;
`

export const Label = styled.label`
    margin-bottom: 3px;
    width: 85%;
    font-size: 11px;
    font-weight: bold;
    color: #546b7b;
    margin: auto;
`

export const Input = styled.input`
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

export const DimensionSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    width: 100%;
`

export const BtnText = styled.button`
    border: 2px solid #546b7b;
    background-color: #d9d9d9;
    color: #546b7b;
    padding: 10px 10px;
    font-size: 14px;
    cursor: pointer;
    width: 70%;
    margin: auto;
    transition: 0.5s;
    border-radius: 5px;

    @media screen and (max-width:1600px){
        font-size: 10px;
    }
`

export const ProjectsWrapp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 95%;
    margin: auto;
`

export const HeadingTitle = styled.h1`
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText}) => lightText ? '#f7f8fa' :'#010606'};

    @media screen and (max-width: 1600px){
        font-size: 15px;
    }
`;

export const BtnNew = styled.button`
    border: none;
    background-color: #01bf71;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    width: 50%;
    height: 50px;
    margin: auto;
    transition: 0.5s;
    border-radius: 5px;
`

export const DiagramWrapp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 95%;
    margin: auto;
`