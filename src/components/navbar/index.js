import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} >Edwin</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='studies'smooth={true} duration={500} spy={true} exact='true' offset={-80}>Studies</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='qualities' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Qualities</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experience' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/moreAbout'>About Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
