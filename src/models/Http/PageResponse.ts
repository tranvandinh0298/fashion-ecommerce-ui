import { Link } from "./Link";
import { Page } from "./Page";

export interface PageResponse<T> {
    resultCode: string;
    resultMessage: string;
    data?: {
        links: Link[];
        content: T[];
        page: Page
    }
}