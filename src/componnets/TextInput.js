import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { Theme } from "../theme/Theme";

export const TextInput = ({
  defaultValue,
  value,
  onChange,
  placeholder,
  suffix,
  prefix,
}) => {
  return (
    <Input
      placeholder={placeholder}
      style={inputStyle}
      defaultValue={defaultValue}
      value={value}
      suffix={suffix}
      prefix={prefix}
      onChange={onChange}
    />
  );
};

export const PasswordInput = ({ placeholder, onChange, value }) => {
  return (
    <Input.Password
      placeholder={placeholder}
      style={inputStyle}
      onChange={onChange}
      value={value}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
};
export const Textarea = ({ placeholder, onChange, value }) => {
  return (
    <Input.TextArea
      placeholder={placeholder}
      value={value}
      style={textareaStyle}
      onChange={onChange}
    />
  );
};
export const SearchInput = ({ placeholder, onChange, loading, onSearch }) => {
  return (
    <Input.Search
      placeholder={placeholder}
      style={textareaStyle}
      onChange={onChange}
      loading={loading}
      onSearch={onSearch}
    />
  );
};

const inputStyle = {
  borderTopWidth: 0,
  borderLeft: 0,
  borderRight: 0,
  borderBottomColor: Theme.primaryBorder,
  color: Theme.primaryText,
  padding: 5,
  marginTop: 10,
};

const textareaStyle = {
  color: Theme.primaryText,
  padding: 5,
  marginTop: 10,
  borderRadius: 3,
};
