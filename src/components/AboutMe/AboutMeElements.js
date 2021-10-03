import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
    background: #cfe2f3;
    justify-content: center;
    align-items: center;
`

export const AboutMeWrapper = styled.div`
    background: #b6d7a8;
    height: 500px;
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: 5px 5px;
`

export const TextContainer = styled.div`
    display: flex;
    background: #01bf71;
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
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 30px;
    margin-right: 30px;
    position: relative;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px #000;
`

export const Image = styled.img`
    width: 296px;
    height: 363px;
    box-shadow: 4px 4px;
`

export const HeaderText = styled.h1`
    font-size: 40px;
    margin-bottom: 70px;
    text-shadow: 3px 3px #fff;
`