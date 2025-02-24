import { useState } from "react";
import styled from "styled-components";
import colors from "../colors.js";
import logo from "../assets/logo.png";
import menuBG from "../assets/menubg.png";
import TiresLine from "../assets/tiresLine.png";

import { FiMenu, FiX } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector.jsx";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <NavigationBar>
                <img src={logo} alt="company logo" />
                <DesktopMenu>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </DesktopMenu>

                <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX size={36} style={{color: `${colors.white}`}} /> : <FiMenu size={36} />}
                </Hamburger>
            </NavigationBar>

            <MobileMenuWrapper isOpen={isMenuOpen}>
                <MenuBackground>
                    <TopGradient />
                    <TiresLineIMG />
                </MenuBackground>

                <MobileContent>
                    <MobileMenu>
                        <a href="" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="" onClick={() => setIsMenuOpen(false)}>About Us</a>
                        <a href="" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </MobileMenu>

                    <LanguageSelector />
                </MobileContent>
            </MobileMenuWrapper>

            <Overlay isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
        </>
    );
}

const NavigationBar = styled.div`
    display: flex;
    align-items: center;
    height: 12rem;
    justify-content: space-between;
    max-width: 1116px;
    margin: 0 auto;
    padding: 0 2rem;

    img {
        height: 100px;
        width: 150px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
        justify-content: center;

        /* The logo should be placed below the hamburger in mobile view, centered */
        img {
            order: 2;
            margin-top: 5rem;
            height: 103px;
            width: 147px;
        }
    }
`;


const DesktopMenu = styled.div`
    display: flex;

    a:first-child {
        color: ${colors.primary};
    }

    a {
        color: ${colors.secondary};
        text-decoration: none;
        margin: 0 1rem;
        font-size: 1.4rem;
        font-family: Poppins;

        &:hover {
            color: ${colors.primary};
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    color: ${colors.primary};
    z-index: 2000;

    @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`;

const MobileMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(${({ isOpen }) => isOpen ? "0" : "-100%"});
    transition: transform 0.3s ease-in-out;
    z-index: 1500;
`;

const TiresLineIMG = styled.div`
    background-image: url(${TiresLine});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    height: 20vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: 2;
`;

const MenuBackground = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url(${menuBG});
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
`;

const TopGradient = styled.div`
    height: 100vh;
    background: linear-gradient(#FF3636 0%, #242424 70%);
    opacity: 0.85; 
    position: absolute; 
    width: 100%;
`;

const MobileContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20% 0;
    color: white; 
`;


const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 3rem;
    margin-top: -12rem;

    a {
        color: ${colors.white};
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.2s;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.7); // Árnyékolás

        &:hover {
            color: ${colors.primary};
        }
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

export default NavBar;