import React, {FC} from 'react';
import {Link} from "react-router-dom";


interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    //TODO Display a carousel or a grid of featured products.
    //TODO Style the homepage using CSS Modules or Styled Components.
    <div data-testid="Home">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Home;
