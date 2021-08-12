import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import "./TextInput.css";

export const TextInput = ({
  defaultValue,
  value,
  onChange,
  placeholder,
  suffix,
  prefix,
  label,
}) => {
  return (
    <div className="input-container">
      <div className="input-label-container">
        <label className="input-label">{label}</label>
      </div>
      <div className="input-text-container">
        <Input
          className="inputStyle"
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          suffix={suffix}
          prefix={prefix}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export const PasswordInput = ({ placeholder, onChange, value }) => {
  return (
    <Input.Password
      className="inputStyle"
      placeholder={placeholder}
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
      className="textareaStyle"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export const SearchInput = ({ placeholder, onChange, loading, onSearch }) => {
  return (
    <Input.Search
      className="textareaStyle"
      placeholder={placeholder}
      onChange={onChange}
      loading={loading}
      onSearch={onSearch}
    />
  );
};
