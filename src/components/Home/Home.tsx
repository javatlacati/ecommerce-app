import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";


interface HomeProps {
}

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 50px;
    background-color: purple;
    display: flex;
    flex-direction: column;`

const NavbarLinkContainer = styled.div`
    display: flex;
`

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    &:hover,
    &:focus {
        color: blue;
    }

    &:active {
        color: rgba(56, 58, 54, 0.78);
    }
;`

const Home: FC<HomeProps> = () => (
    //TODO Display a carousel or a grid of featured products.
    //TODO Style the homepage using CSS Modules or Styled Components.
    <div data-testid="Home">
        <NavbarContainer>
            <NavbarLinkContainer>
                <NavbarLink className="nav-link active" to="/">Home</NavbarLink>
                <NavbarLink className="nav-link" to="/cart">Cart</NavbarLink>
                <NavbarLink className="nav-link" to="/products">Products</NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    </div>
);

export default Home;
