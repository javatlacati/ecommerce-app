import {SortOrder} from "../ProductSorting";

export function stringFieldSorting(a: any, b: any, fieldName: string, sortOrder: SortOrder): number {
    if (a.hasOwnProperty(fieldName) && b.hasOwnProperty(fieldName)) {
        return sortOrder === SortOrder.ASCENDING ? a[fieldName].localeCompare(b[fieldName]) : b[fieldName].localeCompare(a[fieldName]);
    } else {
        throw new Error(`Object a or b does not have the property ${fieldName}`);
    }
}