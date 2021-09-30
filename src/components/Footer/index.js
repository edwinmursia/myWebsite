import React from 'react'
import { FooterContainer, 
         FooterWrap, 
         FooterLinksContainer, 
         FooterLinksWrapper, 
         FooterLinkItems, 
         FooterTitle, 
         FooterH2, 
         SocialMedia, 
         SocialMediaWrap, 
         SocialLogo,
         SocialIcons,
         SocialIconLink,
         FooterEmail } from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterTitle>Thank you for visiting my website!</FooterTitle>
                                <FooterH2>I hope you enjoyed your stay</FooterH2>
                                <FooterEmail>For contacting purposes: mursia.edwin@gmail.com</FooterEmail>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Edwin
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
