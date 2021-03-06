import styled from "styled-components";

export const StyledSVG = styled.svg`
    background: #ddd;
    text {
    pointer-events: none;
    }
    .grandparent text {
    font-weight: bold;
    }
    rect {
    fill: none;
    stroke: #fff;
    }
    rect.parent,
    .grandparent rect {
    stroke-width: 2px;
    }
    .grandparent rect {
    fill: orange;
    }
    .grandparent:hover rect {
    fill: #ee9700;
    }
    .children rect.parent,
    .grandparent rect {
    cursor: pointer;
    }
    .children rect.parent {
    fill: #bbb;
    fill-opacity: .5;
    }
    .children:hover rect.child {
    fill: #bbb;
    }
`;