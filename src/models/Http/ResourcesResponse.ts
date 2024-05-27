export interface ResourcesResponse<T> {
    resultCode: string;
    resultMessage: string;
    data?: T[];
}