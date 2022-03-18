import React, { useState } from "react";

enum ArticleType {
  WEB = "前端",
  SERVER = "后端",
}
type ArticleTypeSettingProps = {
  getTextLen: () => [number, number];
};
const ArticleTypeSetting: React.FC<ArticleTypeSettingProps> = ({
  getTextLen,
}) => {
  console.log(" --- ArticleTypeSetting 组件重新渲染 --- ");

  const [articleType, setArticleType] = useState("前端");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleType(e.target.value as ArticleType);

    console.log(
      "埋点 >>> 切换类型，当前「标题」和「内容」长度：",
      getTextLen()
    );
  };

  return (
    <div>
      <div>文章类型组件，当选择类型时上报「标题」和「内容」长度</div>
      <div>
        {[ArticleType.WEB, ArticleType.SERVER].map((type) => (
          <div key={type}>
            <input
              type="radio"
              value={type}
              checked={articleType === type}
              onChange={handleChange}
            />
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};
export default React.memo(ArticleTypeSetting);
