import {Product} from "../models/Product";

export async function fetchProducts() {
    const response:Response = await fetch('https://dummyjson.com/products', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}