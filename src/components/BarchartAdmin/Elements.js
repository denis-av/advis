import styled from "styled-components";

export const BoxForCharts = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const BoxForStatistic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
    color: #000;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;