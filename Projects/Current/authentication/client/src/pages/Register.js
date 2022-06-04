import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const URL_BASE = 'http://localhost:3001/api'

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (event) =>{
    event.preventDefault();
    const response = await fetch(URL_BASE+'/register',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password 
      })
    });

    const data = await response.json();

    if(data.status === 'ok'){
      navigate('/login');
    }

    console.log(data);
    
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br/>
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
        <input type="submit" value="Register" />
        <br/>
      </form>
    </div>
  );
};

export default Register;
