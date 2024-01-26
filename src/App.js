import { useState } from "react";

export default function App() {
  const [obj, setObj] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      setIsSubmitted(true);
    } else {
      setErr(false);
      setIsSubmitted(true);
    }
  };
  return (
    <>
    <h1>Login Page</h1>
      <form>
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
        <button onClick={submitHandler}>Submit</button>
      </form>
      {isSubmitted && err && <p>Welcome user</p>}
      {isSubmitted && !err && <p>Invalid username or password</p>}
    </>
  );
}

