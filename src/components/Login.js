import React from 'react';
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from "../Firebase/firebase";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Login = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
    }, []) 

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const logout = async () => {
        await signOut(auth);
      };

    return (
        <div className='login' >
            <form >
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <Form.Control
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <Form.Control
                        placeholder="Password..."
                        type="password"
                        onChange={(event) => {
                          setLoginPassword(event.target.value);
                        }}
                    />
                </div>
                <div className="d-grid">
                    <Button onClick={login}> Login</Button>
                </div>
            </form>
            <p>Or</p>
            <form >
                <h3>Sign up</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <Form.Control
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <Form.Control
                        placeholder="Password..."
                        type = "password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                    }}
                    />
                </div>
                <div className="d-grid">
                    <Button onClick={register}> Create User</Button>
                </div>
            </form>
            {user? <Button className="logoff" onClick={logout}> Sign Out </Button>: null}
        </div>
    );
};

export default Login;