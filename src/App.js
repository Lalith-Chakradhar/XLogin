import { useState } from "react";

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "user" && password === "password") {
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
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          UserName:
          <input
            id="username"
            onChange={handleNameChange}
            name="username"
            type="text"
            placeholder="username"
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
            onChange={handlePasswordChange}
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      {isSubmitted && err && <p>Welcome, user!</p>}
      {isSubmitted && !err && <p>Invalid username or password</p>}
    </>
  );
}

