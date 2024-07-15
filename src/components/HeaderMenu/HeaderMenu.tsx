import React, {FC} from 'react';
import {NavbarContainer, NavbarLink, NavbarLinkContainer} from "../AppStyle";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


export interface HeaderMenuProps {
}

const HeaderMenu: FC<HeaderMenuProps> = () => {
    const products = useSelector((state: RootState) => state.cart.items);
    return (
        <div data-testid="HeaderMenu">
            <NavbarContainer>
                <NavbarLinkContainer>
                    <NavbarLink className="nav-link active" to="/">Home</NavbarLink>
                    <NavbarLink className="nav-link" to="/cart">Cart</NavbarLink>
                    <NavbarLink className="nav-link" to="/products">Products</NavbarLink>
                    <div style={{
                        position: 'absolute',
                        right: '30px',
                        fontSize: '25px',
                        color: 'white',
                        float: 'right'
                    }}>cesta: {products && products.reduce((current, product) => current + product.productQuantity, 0)}</div>
                </NavbarLinkContainer>
            </NavbarContainer>
        </div>
    );
};

export default HeaderMenu;
