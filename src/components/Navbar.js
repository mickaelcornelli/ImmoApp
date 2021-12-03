import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    height: 60px;
    display:flex;
    justify-content:space-between;
    padding: 1rem 2rem;
    z-index: 1000;
    position: fixed;
    width:100%;
`
const NavLink = css`
    color: #fff;
    display:flex;
    align-item: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: .8s;

    &:hover {
        text-decoration: underline;
        padding: 1rem;
    }
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`
const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width: 768px) {
        display:block;
    }
`

const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`
const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right: 0px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">L'app. Immobilière</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Nous contacter</Button>
            </NavBtn>
        </Nav>
    );
}

export default Navbar;
