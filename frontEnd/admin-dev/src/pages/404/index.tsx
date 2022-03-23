import React from "react";
import { Result, Button } from "antd";
const defaultPage: React.FC = () => {
  return (
    <Result
      status="warning"
      title="找不到这个页面哦"
      extra={
        <Button type="primary" key="console">
          go back
        </Button>
      }
    />
  );
};
export default defaultPage;
