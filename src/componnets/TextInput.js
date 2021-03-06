import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: 1,
    padding: 5,
  },
  labelContainer: {
    paddingRight: 10,
    paddingLeft: 14,
  },
  inputLabel: {
    color: "#3f3d56",
    fontSize: 12,
  },
  textContainer: {
    paddingLeft: 10,
    width: "100%",
  },
  inputStyle: {
    borderTopWidth: 0,
    borderLeft: 0,
    borderRight: 0,
    borderBottomColor: "#e3e3e3",
    color: "#3f3d56",
    padding: 5,
    backgroundColor: "transparent",
  },
  textareaStyle: {
    color: "#3f3d56",
    padding: 5,
    marginTop: 10,
    borderRadius: 3,
  },
  searchStyle: {
    color: "#3f3d56",
    borderRadius: 10,
    border: 0,
  },
  searchContainer: {
    width: "100%",
  },
});

export const TextInput = ({
  defaultValue,
  value,
  onChange,
  placeholder,
  suffix,
  prefix,
  label,
  style,
  autoFocus,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelContainer}>
        <label className={classes.inputLabel}>{label}</label>
      </div>
      <div className={classes.textContainer}>
        <Input
          className={style ? style : classes.inputStyle}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          suffix={suffix}
          prefix={prefix}
          onChange={onChange}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  );
};

export const PasswordInput = ({ placeholder, onChange, value, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelContainer}>
        <label className={classes.inputLabel}>{label}</label>
      </div>
      <div className={classes.textContainer}>
        <Input.Password
          className={classes.inputStyle}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </div>
    </div>
  );
};
export const Textarea = ({ placeholder, onChange, value, label, style }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelContainer}>
        <label className={classes.inputLabel}>{label}</label>
      </div>
      <div className={classes.textContainer}>
        <Input.TextArea
          className={style ? style : classes.textareaStyle}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export const SearchInput = ({
  placeholder,
  onChange,
  loading,
  onSearch,
  style,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.searchContainer}>
      <Input.Search
        className={style ? style : classes.searchStyle}
        placeholder={placeholder}
        onChange={onChange}
        loading={loading}
        onSearch={onSearch}
      />
    </div>
  );
};
