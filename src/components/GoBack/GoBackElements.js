import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const GoBackContainer = styled.div`
    display: flex;
    background: #cfe2f3;
    justify-content: flex-start;
    height: 50px;
    padding-top: 30px;
    border-top-style: solid;
    border-bottom-style: hidden;
`

export const GoBackWrapper = styled(LinkR)`
    display: flex;
    padding-left: 25px;
    height: 50px;
    flex-direction: row;
    cursor: pointer;
    text-decoration: none;
    color: #000;

    @media screen and (max-width: 480px) {
        padding-left: 10px;
    }
`

export const TheLogo = styled.div`
    font-size: 40px;

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`

export const TheText = styled.div`
    font-size: 12px;
    padding-top: 5px;

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`