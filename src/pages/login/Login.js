import React, { useState } from "react";
import { NavLink as Link } from 'react-router-dom';
import Form from "react-bootstrap-form";
import  Button  from "react-bootstrap-buttons";
import "./Login.css"

//Login Box
const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    const submitLogin = e => {
        e.preventDefault();
        console.log(userName)
    } 
  
      return (
        <div className="inner-container">
           <div>
        </div>
          <div className="header">
            Login
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                onChange = {e => setUserName(e.target.value)}
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange = {e => setPassword(e.target.value)}
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={submitLogin}>Login</button>
              <p>Not a member? Register </p>
              <Link to="/Register" style={{color: 'blue'}} activeStyle={{color: 'red'}}>Here</Link>
          </div>
        </div>
        </div>
      );
  }


export default Login;
