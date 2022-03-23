import { Layout, Spin, notification } from "antd";

const useAlert = () => {
  const args = {
    message: "Notification Title",
    description:
      "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
    duration: 0,
  };

  return notification.open(args);
};
export default useAlert;
