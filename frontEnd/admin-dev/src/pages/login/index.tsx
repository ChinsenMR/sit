import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/redux/slice";
import { getQueryVariable } from "@/lib/utils";
import "./style.less";
const Login: React.FC<JSX.Element> = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, 'targetUrl');
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const userInfo = {
      userId: "admin",
      loginStatus: true,
      userName: "Chinsen",
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    dispatch(setUserInfo(userInfo));
    let targetUrl = getQueryVariable(location.search, "url");
    console.log(targetUrl, 'tt')
    navigate(targetUrl);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-main">
      <div className="login-main-container">
        <div className="form-box">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
