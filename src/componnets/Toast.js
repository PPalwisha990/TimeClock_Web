import { message } from "antd";

const Toast = {
  info: (msg) => message.info(msg),
  success: (msg) => message.success(msg),
  warning: (msg) => message.warning(msg),
  error: (msg) => message.error(msg),
};

export default Toast;
