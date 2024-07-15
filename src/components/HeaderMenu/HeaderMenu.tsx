import React, { FC } from 'react';
import {NavbarContainer, NavbarLink, NavbarLinkContainer} from "../AppStyle";


export interface HeaderMenuProps {}

const HeaderMenu: FC<HeaderMenuProps> = () => (
  <div data-testid="HeaderMenu">
      <NavbarContainer>
          <NavbarLinkContainer>
              <NavbarLink className="nav-link active" to="/">Home</NavbarLink>
              <NavbarLink className="nav-link" to="/cart">Cart</NavbarLink>
              <NavbarLink className="nav-link" to="/products">Products</NavbarLink>
          </NavbarLinkContainer>
      </NavbarContainer>
  </div>
);

export default HeaderMenu;
