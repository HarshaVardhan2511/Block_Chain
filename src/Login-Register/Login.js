import React from "react";
import { Link } from "react-router-dom";
import './Login_Register.css';


const Login = () => {
  return (
    <div className="wrapper">
        <div className="form-box login">
            <form>
                <div className="top">
                <h3>Login</h3>
                <p><Link to="/register">Don't have an account?</Link></p></div>
                <div className="input-box">
                    <p>Email Address</p><input type="email" placeholder="deps77@gmail.com" required/>

                </div>
                <div className="input-box">
                    <p>Password</p><input type="password" placeholder="Abcd@1234" required/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Keep me sign in
                    </label><Link to="/forgot">Forgot password?</Link>
                </div>
                <button type="submit">LogIn</button>
            </form>
        </div>
    </div>
  )
}

export default Login
