import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    height: 800px;
    background: #fff;
    justify-content: center;
    align-items: center;
`

export const AboutMeWrapper = styled.div`
    background: #b6d7a8;
    height: 500px;
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const TextContainer = styled.div`
    display: flex;
    background: #d8dbd7;
    max-height: 100%;
    max-width: 100%;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    max-width: 100%;
    background: #134f5c;
`

export const Text = styled.p`
    display: flex;
    font-size: 18px;
    margin: 110px 30px 0px 30px;
    position: relative;
`

export const Image = styled.img`
    width: 75%;
    height: 85%;
`