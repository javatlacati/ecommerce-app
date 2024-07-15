import React, {FC} from 'react';
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    //TODO Display a carousel or a grid of featured products.
    <div data-testid="Home">
       <HeaderMenu />
        <div><h2>Featured products</h2></div>
    </div>
);

export default Home;
