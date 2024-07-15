import {Product} from "../../models/Product";
import {Specification} from "../ProductFilter";

export class PriceRangeSpecification extends Specification{
    minimumPrice: number;
    maximumPrice: number;


    constructor(minimumPrice: number, maximumPrice: number) {
        super();
        this.minimumPrice = minimumPrice;
        this.maximumPrice = maximumPrice;
    }

    isSatisfiedBy(product: Product): boolean {
        return product.price <= this.maximumPrice && product.price >= this.minimumPrice;
    }
}