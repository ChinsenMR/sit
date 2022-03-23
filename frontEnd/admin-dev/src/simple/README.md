关于 interface 或 type ，我们建议遵循 react-typescript-cheatsheet 社区提出的准则：

在编写库或第三方环境类型定义时，始终将 interface 用于公共 API 的定义。

考虑为你的 React 组件的 State 和 Props 使用 type ，因为它更受约束。”

始终使用 TSDoc 标记为你的 Props 添加描述性注释 /** comment */。

无论你为组件 Props 使用 type 还是 interfaces ，都应始终使用它们。

如果 props 是可选的，请适当处理或使用默认值。