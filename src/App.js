import "./App.css";
import {
  PasswordInput,
  SearchInput,
  Textarea,
  TextInput,
} from "./componnets/TextInput";

const App = () => {
  const name = "Joseph";
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Hello, {name}</h1>
      <TextInput
        placeholder={"organization code"}
        suffix={".co"}
        prefix={"http:\\"}
      />

      <PasswordInput />
      <Textarea />
      <SearchInput />
    </div>
  );
};

export default App;
