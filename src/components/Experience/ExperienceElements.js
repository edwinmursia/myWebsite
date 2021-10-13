import styled from "styled-components";

export const ExperienceContainer = styled.div`
    background: #cfe2f3;
    height: 375px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 480px) {
        height: 2000px;
    }
`

export const ExperienceWrapper = styled.div`
    background: #cfe2f3;
    height: 300px;
    width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1000px) {
        width: 700px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        width: 450px;
        height: 400px;
        border: none;
    }
`

export const ContentWrapperOne = styled.div`
    background: #fff;
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0 0 20px;

    @media screen and (max-width: 1000px) {
        width: 150px;
    }

    @media screen and (max-width: 480px) {
        background: none;
        width: 450px;
        height: 100px;
    }
`

export const ContentWrapperTwo = styled.div`
    background: #01bf71;
    height: 300px;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 0 20px 20px 0;

    @media screen and (max-width: 1000px) {
        width: 550px;
    }

    @media screen and (max-width: 480px) {
        width: 450px;
        height: 370px;
    }
`

export const TheLogo = styled.img`
    max-width: 200px;
    height: auto;

    @media screen and (max-width: 1000px) {
        max-width: 120px;
    }

    @media screen and (max-width: 480px) {
        max-width: 70px;
    }
`

export const TheName = styled.div`
    height: 50px;
    width: 500px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1px solid #000;
    border-radius: 20px 20px 0 0;

    @media screen and (max-width: 480px) {
        width: 450px;
    }
`

export const TheDescription = styled.div`
    height: 160px;
    width: 500px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    border: 0.1px solid #000;
    border-radius: 0 0 20px 20px;

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 250px;
    }
`