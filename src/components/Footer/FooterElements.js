import styled from "styled-components"
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.footer`
    background-color: #010522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterTitle = styled.h1`
    font-size: 34px;
    margin-bottom: 16px;
    cursor: pointer;
`

export const FooterH2 = styled.h2`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    font-size: 20px;
    cursor: pointer;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 70px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(LinkS)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    padding-right: 50px;

    @media screen and (max-width: 480px) {
        margin-right: 20px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    padding-bottom: 10px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin-left: 10px;
    margin-right: 10px;
`

export const FooterEmail = styled.h2`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    margin-top: 4rem;
    font-size: 14px;
    cursor: pointer;
`