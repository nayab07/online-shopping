// src/components/Signup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';  // Import the Signup CSS
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
// import Signup from './Signup';
import { auth } from './../firebase/firebaseConfig';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signed up with', {  email, password });
  };
  const signup=async()=>{
    if(!email || !password){
      return alert("please enter email or password")
    }
    try{
    const user=await createUserWithEmailAndPassword(auth,email,password);
    alert("signup successfull")
    setEmail("")
    setPassword("")
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
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
          <button onClick={signup} type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="signup-link">
          <p> have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
