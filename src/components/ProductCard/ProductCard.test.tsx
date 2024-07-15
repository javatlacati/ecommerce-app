import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import {Product} from "../../models/Product";

describe('<ProductCard />', () => {
    test('it should mount', () => {
        let product: Product = {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 Description',
            price: 10,
            image: 'product1.jpg',
        };
        render(<ProductCard product={product}/>);


        expect(ProductCard).toBeInTheDocument();
    });
});