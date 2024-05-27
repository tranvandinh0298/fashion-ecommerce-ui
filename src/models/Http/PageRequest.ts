import { Filter } from "./Filter";
import { Sort } from "./Sort";

export interface PageRequest {
    filters: Filter[],
    sorts: Sort[],
    page: number;
    size: number;
}