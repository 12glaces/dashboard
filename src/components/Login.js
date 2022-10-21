import React,{ useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword    
  } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
const Login = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
            setError(error.message);
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
          navigateToMap()
        } catch (error) {
            setError(error.message);
        }
      }; 

      const navigateToMap = () => {
        Navigate('/map');
      };

    return (
        <div className='login' >            
            <div className='login-container' >
                <form >
                    <div className="d-grid text-danger">
                        <p>{error}</p>
                    </div>
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
                </div>     
                <p>You can create an account or use this test account:</p>
                <p>email: test@test.com</p>
                <p>password: testtest</p>  
                
        </div>
    );
};

export default Login;