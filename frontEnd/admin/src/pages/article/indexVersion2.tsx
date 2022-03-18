import React, { useState, useEffect, useRef, useCallback } from "react";
import MemoArticleTypeSetting from "./components/MemoArticleTypeSetting";
// 新建文章组件
const EditArticle: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [other, setOther] = useState("");

  // 获取当前「标题」和「内容」的长度
  const getTextlenRef = useRef<() => [number, number]>(() => [0, 0]);

  getTextlenRef.current = () => [title.length, content.length];

  const report = () => {
    const [titleLen, contentLen] = getTextlenRef.current();
    if (contentLen > 0) {
      console.log(`埋点 >>> O长度 ${titleLen}, kr长度${contentLen}`);
    }
  };

  /**
   * 副作用
   * 当「标题」长度变化时，上报
   */
  useEffect(() => {
    report();
  }, [title]);

  return (
    <div className="App">
      文章标题
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      文章内容
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      其他不相关状态：
      <input value={other} onChange={(e) => setOther(e.target.value)} />
      <MemoArticleTypeSetting getTextLen={getTextlenRef.current} />
    </div>
  );
};

export default EditArticle;
