// src/components/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link for navigation
import '../css/Login.css';  // Import Login CSS
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with', { email, password });
  };

  const signin=async()=>{
      if(!email || !password){
        return alert("please enter email or password")
      }
      try{
      const users=await signInWithEmailAndPassword(auth,email,password);
      const user = localStorage.setItem('user', JSON.stringify(users));
      alert("sigin successfull")
      navigate("/")
      setEmail("")
      setPassword("")
      }catch(err){
        console.log(err)
        alert("please enter valide email or password")
      }
      
    }
  

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button onClick={signin} type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
