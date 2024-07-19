import {Product} from "../models/Product";

export async function fetchProducts() {
    const response:Response = await fetch('http://localhost:9090/products', {
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