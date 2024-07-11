import React, {FC} from 'react';
import {NavbarContainer, NavbarLink, NavbarLinkContainer} from "../AppStyle";

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    //TODO Display a carousel or a grid of featured products.
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
