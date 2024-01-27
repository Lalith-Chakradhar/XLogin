import React, { useState } from 'react'

function App()
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [isloggedin, setIsloggedin] = useState(false);


  const handleUname = (e) => {
    setUsername(e.target.value);
    
  };
  const handlepwd = (e) => {
    setPassword(e.target.value);
   
  };

  const handlesubmit =(e) => {
    e.preventDefault();
    if(username === 'user' && password === 'password')
    {
       setMsg('Welcome, user!');
       setIsloggedin(true);
    }
    else{
        setMsg('Invalid username or password');
    }
  }

  return(
    <div>
        <h1>Login Page</h1>
        {isloggedin ? (
            <p>{msg}</p>
        ) :(
            <div>
            <p>{msg}</p>
        <form onSubmit={handlesubmit}>
            <label>Username:</label>
            <input type='text' value={username} placeholder='username'  onChange={handleUname} required/>
            <br/>
            <label>Password:</label>
            <input type='password' value={password} placeholder='password' onChange={handlepwd} required/>
            <br />
            <button type='submit'>Submit</button>
        </form>
        </div>
        )}
    </div>
  );
}
export default App;