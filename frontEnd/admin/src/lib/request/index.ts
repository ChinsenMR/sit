// import fetch from 'whatwg-fetch';
import CreateHeader from './createHeader'

import { RequestParams } from './config/interface';
import fetch from './config/fetch';

async function Request(params: RequestParams) {

    const defaultHeaders = {
        "content-type": "application/json"
    }

    const {
        data,
        url = '/simple/api',
        cache = "no-cache",
        headers = defaultHeaders,
        credentials = "same-origin",
        method
    } = params;

    fetch(url, {
        body: data,
        cache, // *default, no-cache, reload, force-cache, only-if-cached
        credentials,
        headers,
        method: "POST",
        mode: "cors",
        redirect: "follow",
        referrer: "no-referrer"
    })
    return {}
}
export default Request;