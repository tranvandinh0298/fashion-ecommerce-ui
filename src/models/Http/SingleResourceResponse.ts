export interface SingleResponse<T> {
    resultCode: string;
    resultMessage: string;
    data?: T;
}