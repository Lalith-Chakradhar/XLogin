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
    <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          UserName:
          <input
            id="username"
            onChange={changeHandler}
            name="username"
            type="text"
            required
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
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{err ? "Welcome, user!" : "Invalid username or password"}</p>
    </>
  );
}



