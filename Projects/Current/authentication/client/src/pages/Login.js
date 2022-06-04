import React, { useState } from "react";

const URL_BASE = 'http://localhost:3001/api'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) =>{
    event.preventDefault();
    const response = await fetch(URL_BASE+'/login',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email,
        password 
      })
    });

    const data = await response.json();

    if(data.user){
      localStorage.setItem('token',data.user);
      alert('Login Successful');
      window.location.href = '/dashboard';
    }else{
      alert('Please check your username and password')
    }
    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br/>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <br/>
        <input type="submit" value="Login" />
        <br/>
      </form>
    </div>
  );
};

export default Login;
