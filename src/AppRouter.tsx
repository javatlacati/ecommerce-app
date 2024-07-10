import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home.lazy';
import ProductListing from "./components/ProductListing/ProductListing.lazy";
import Cart from "./components/Cart/Cart.lazy";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/products" element={<ProductListing/>}/>
        </Routes>
    </BrowserRouter>
);

export default AppRouter;