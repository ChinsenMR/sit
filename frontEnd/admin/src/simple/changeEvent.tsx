import React from "react";

const MyInput = () => {
  const [value, setValue] = React.useState("");

  // 事件类型是“ChangeEvent”
  // 我们将 “HTMLInputElement” 传递给 input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <input value={value} onChange={onChange} id="input-example" />;
};
export default MyInput;
