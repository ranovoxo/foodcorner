import React, { useState } from "react";
import {NavLink as Link} from 'react-router-dom';
import "./Register.css"

//Login Box
const Register = () => {
    
    const [form, setForm] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        passWord: "",
    });

    function updateForm(value)
    {
      return setForm((prev) => {
        return { ...prev, ...value};
      });
    }
   
    async function onSubmit(e) {
      e.preventDefault();
      
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newPerson = { ...form };

      console.log(JSON.stringify(newPerson))
      await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      })
      .catch(error => {
        window.alert(error);
        //this.setForm ({errorMessage: error.message})
        return;
      });

      setForm ({ // clear input form
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        passWord: "",
      })
    }

      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
            <form onSubmit={onSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={form.userName}
                onChange = {(e) => updateForm({userName: e.target.value})}
                className="login-input"
                placeholder="Username"/>
            </div>

            <div className="input-group">
              <label htmlFor="firstName">First Name</label> 
              <input
                type="text"
                name="firstname"
                value={form.firstName}
                onChange = {(e) => updateForm({firstName: e.target.value})}
                className="login-input"
                placeholder="Firstname"/>
            </div>

            <div className="input-group">                
              <label htmlFor="lastname">Last Name </label>
              <input
                type="text"
                name="lastname"
                value={form.lastName}
                onChange = {(e) => updateForm({lastName: e.target.value})}
                className="login-input"
                placeholder="Lastname"/>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange = {(e) => updateForm({email: e.target.value})}
                className="login-input"
                placeholder="Email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={form.passWord}
                onChange = {(e) => updateForm({passWord: e.target.value})}
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={onSubmit}>Login</button>
          </form>
              <p>Already a member?</p>
              <Link to="/" style={{color: 'blue'}} activeStyle={{color: 'red'}}>Sign In</Link>
          </div>
        </div>
      );
  }

export default Register;
