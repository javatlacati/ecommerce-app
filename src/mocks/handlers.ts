import {http, HttpResponse} from "msw";

export const handlers = [
// @ts-ignore
    http.get('http://localhost:3000/api/products', async (req: any, res: any) => {
        return HttpResponse.json([{
            id: 1,
            name: 'Gorra café',
            price: 10.99,
            image: 'FOTOSURBAN-28.JPG',
            description: 'Description 1',
        },
            {
                id: 2,
                name: 'Gorra rosa',
                price: 7.24,
                image: 'FOTOSURBAN-29.JPG',
                description: 'Description 2',
            },
            {
                id: 3,
                name: 'Gorra negra logo gris',
                price: 7.24,
                image: 'FOTOSURBAN-31.JPG',
                description: 'Description 2',
            },
            {
                id: 4,
                name: 'Gorra negra logo rojo',
                price: 7.24,
                image: 'FOTOSURBAN-34.JPG',
                description: 'Description 2',
            }])
    })
]