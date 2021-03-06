import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 817px;
    background: #cfe2f3;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        height: 830px;
    }
`

export const AboutMeWrapper = styled.div`
    background: #b6d7a8;
    height: 500px;
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: 5px 5px;

    @media screen and (max-width: 1024px) {
        height: 500px;
        width: 800px;
    }

    @media screen and (max-width: 1000px) {
        height: 500px;
        width: 700px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        height: 630px;
        width: 350px;
    }
    
`

export const TextContainer = styled.div`
    display: flex;
    background: #01bf71;
    height: 500px;
    width: 600px;
    border: 4px solid #134f5c;

    @media screen and (max-width: 1024px) {
        width: 400px;
    }

    @media screen and (max-width: 1000px) {
        height: 500px;
        width: 350px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        height: 180px;
        width: 350px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 600px;
    background: #134f5c;
    border: 4px solid #01bf71;

    @media screen and (max-width: 1024px) {
        width: 400px;
    }

    @media screen and (max-width: 1000px) {
        height: 500px;
        width: 350px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        height: 450px;
        width: 350px;
    }
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
    cursor: pointer;

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const Image = styled.img`
    width: 358px;
    height: 361px;
    box-shadow: 4px 4px;
    border-radius: 20px;

    &:hover {
        box-shadow: 5px 5px 5px #01bf71;
        transition: all 1s linear
    }

    @media screen and (max-width: 1024px) {
        width: 300px;
        height: 303px;
    }

    @media screen and (max-width: 768px) {
        width: 298px;
        height: 301px;
    }
`

export const HeaderText = styled.h1`
    font-size: 40px;
    margin-bottom: 70px;
    text-shadow: 3px 3px #fff;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`