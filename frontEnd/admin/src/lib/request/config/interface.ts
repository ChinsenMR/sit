export interface RequestParams {
    url: string // request url
    data: [object, string,], // request data
    cache?: string, 
    headers?: object,
    method: string,
    credentials?: string,
    mode?: string
}

export interface FetchParams {
    body: [object, string],
    cache?: string,
    credentials?: string,  // include, same-origin, *omit
    headers: object, // must match 'Content-Type' header
    method: string, // *GET, POST, PUT, DELETE, etc.
    mode: string, // no-cors, cors, *same-origin
    redirect: string, // manual, *follow, error
    referrer: string // *client, no-referrer
}

export interface Response {
    data: any,
    code: number
}