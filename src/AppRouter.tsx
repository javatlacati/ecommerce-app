import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home.lazy';
import ProductListing from "./components/ProductListing/ProductListing.lazy";
import Cart from "./components/Cart/Cart.lazy";
import ProductDetails from "./components/ProductDetails/ProductDetails.lazy";
import ErrorPage from "./components/ErrorPage/ErrorPage.lazy";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/products" element={<ProductListing/>}/>
            <Route path="/products/:productId" element={<ProductDetails/>}/>
            <Route path="*" element={<ErrorPage />} /> {/* Add this line to handle any unmatched routes */}
        </Routes>
    </BrowserRouter>
);

export default AppRouter;