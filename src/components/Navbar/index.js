import React, {useState, useEffect} from 'react';
import {animateScroll as scroll } from 'react-scroll';
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";
import { FaBars } from 'react-icons/fa';

import logo from '../../assets/images/logo.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNavbar = () => {
        if (window.scrollY > 80 ) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
       window.addEventListener("scroll", changeNavbar);
        
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }



    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} src={logo}>
                    🦅EAGLE
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                            smooth={true} spy={true} duration={500} exact="true" offset={-80}
                            to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            smooth={true} spy={true} duration={600} exact="true" offset={-80}
                            to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink
                        smooth={true} spy={true} duration={600} exact='true' offset={-80}
                        to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
