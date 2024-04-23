import React from "react";
import { Link } from "react-router-dom";
import './Login_Register.css';
import { BsEnvelopeFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className="wrapper">
        <div className="form-box login">
            <form>
            <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required aria-label="Username" />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required aria-label="Email" />
                    <BsEnvelopeFill className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required aria-label="Password" />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" required /> I agree to the terms & conditions
                    </label>
                </div>
                <button type="submit">Sign Up</button>
                <div className="register-link">
                    <p>Already have an account? <Link to="/">Sign In</Link></p>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Register
