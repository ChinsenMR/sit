export function query(url: string) {
    url = url || window.location.search.substr(1);
    return url.split('&').reduce((pre: any, cur) => {
        pre[cur.split('=')[0]] = cur.split('=')[1];
        return pre;
    }, {});
}