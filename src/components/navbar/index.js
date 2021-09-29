import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Edwin</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>Studies</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Qualities</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
