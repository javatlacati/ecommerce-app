import {SortOrder} from "../ProductSorting";

export function primitiveSorting(a: any, b: any, fieldName: string, sortOrder: SortOrder): number {
    return sortOrder === SortOrder.ASCENDING ? b[fieldName] - a[fieldName] : a[fieldName] - b[fieldName];
}