import styled from 'styled-components';

export const DiagramContainer = styled.div`
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
`

export const DiagramWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
`

export const DiagramDiv = styled.div`
    max-width: 100%;
    overflow: auto;
    background: #ff0000;
`

