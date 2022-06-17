import styled from "styled-components";

export const BoxForTabel = styled.div`
    width: 1200px;
    height: 500px;
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

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled.button`
    border-radius: 50px;
    background-color: #bfbdc1;
    white-space: nowrap;
    font-weight: bold;
    font-family: 'Regular';
    padding:  10px 22px;
    color: #000;
    font-size: 1.3rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #DBD4CE;
        color: #000;
    }
`