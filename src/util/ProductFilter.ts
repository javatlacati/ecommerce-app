import {Product} from "../models/Product";

export abstract class Specification {
    public abstract isSatisfiedBy(product: Product): boolean;
}

export class ProductFilter {
    specification: Specification;

    constructor(specification: Specification) {
        this.specification = specification;
    }

    filter(items: Product[]): Product[] {
        return items.filter(value => this.specification.isSatisfiedBy(value));
    }
}