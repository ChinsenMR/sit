import { useRef, useCallback } from "react";
export default function useRefCallback<T extends (...args: any[]) => any>(callback: T) {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;
    return useCallback((...args: any[]) => callbackRef.current(...args), []) as T;
}

// 当「文章内容」的长度大于 0 时编辑「文章标题」就上报埋点，同时带上「文章标题」和「文章内容」的 字符长度。