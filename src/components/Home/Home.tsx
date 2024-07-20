import React, {FC} from 'react';
import HeaderMenu from "../HeaderMenu/HeaderMenu.lazy";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.lazy";

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    //TODO Display a carousel or a grid of featured products.
    <div data-testid="Home">
       <HeaderMenu />
        <FeaturedProducts />
    </div>
);

export default Home;
