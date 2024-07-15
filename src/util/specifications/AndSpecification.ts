import {Specification} from "../ProductFilter";
import {Product} from "../../models/Product";

export class AndSpecification extends Specification {
    specs: Specification[];

    constructor(...specs: Specification[]) {
        super();
        this.specs = specs;
    }

    isSatisfiedBy(product: Product): boolean {
        return this.specs.every(spec => spec.isSatisfiedBy(product));
    }


}