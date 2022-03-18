import { defaultHeaders } from './defaultParams'
import { GET } from './methods'
import { Response, FetchParams } from './interface';
export default (url: string, options: FetchParams): Response => {

    const {
        body,
        cache = "no-cache",
        headers = defaultHeaders,
        credentials = "same-origin",
        method = GET
    } = options;
    return {
        data: {},
        code: 200
    }
}

let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}