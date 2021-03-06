
export function getQueryVariable(search: string, variable: string): string {
    let query = search || window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0].replace('?', '') === variable) { return pair[1]; }
    }
    return '';
}
/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/

export function debounce(fn: any, delay: number) {
    if (typeof fn !== 'function') throw Error('fn必须为函数')
    let timer: any = null //借助闭包
    return function () {
        if (timer) {
            clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
            timer = setTimeout(fn, delay)
        } else {
            timer = setTimeout(fn, delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
        }
    }
}
/*
* fn [function] 需要节流的函数
* delay [number] 毫秒，节流期限值
*/

export function throttle(fn: any, delay: number) {
    let valid = true;
    if (typeof fn !== 'function') throw Error('fn必须为函数')
    return function () {
        if (!valid) {
            //休息时间 暂不接客
            return false
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true;
        }, delay)
    }
}