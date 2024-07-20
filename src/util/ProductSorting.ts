import {stringFieldSorting} from "./strategies/stringSorting";
import {primitiveSorting} from "./strategies/primitiveSorting";

export enum SortOrder {
    ASCENDING,
    DESCENDING,
}

export class ProductSorting<T> {
    sort(items: T[], fieldName: string, sortOrder: SortOrder): T[] {
        debugger
        return items.sort((a, b) => {
            // @ts-ignore
            const aValue = a[fieldName];
            // @ts-ignore
            const bValue = b[fieldName];
            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return stringFieldSorting(a, b, fieldName, sortOrder);
            } else {
                return primitiveSorting(a, b, fieldName, sortOrder);
            }
        });
    }
}