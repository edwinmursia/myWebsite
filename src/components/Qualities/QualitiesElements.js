import styled from "styled-components";

export const QualitiesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const QualitiesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    z-index: 1;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const QualitiesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const QualitiesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const QualitiesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 1;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const QualitiesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const QualitiesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const QualitiesBg = styled.div`
    position: absolute;
    width: 100%;
    height: 800px;
    overflow: hidden;
    opacity: 7%;

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`