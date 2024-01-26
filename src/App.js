import { useState } from "react";

export default function App() {
  const [obj, setObj] = useState({});
  const [err, setErr] = useState(false);
  const changeHandler = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    const newObj = { ...obj, [`${name}`]: value };
    setObj(newObj);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (obj["username"] === "user" && obj["password"] === "password") {
      setErr(true);
    } else {
      setErr(false);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          UserName:
          <input
            id="username"
            onChange={changeHandler}
            name="username"
            type="text"
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            onChange={changeHandler}
            type="password"
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>{err ? "Welcome user" : ""}</p>
    </>
  );
}
