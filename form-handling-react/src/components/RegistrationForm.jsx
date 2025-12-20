import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function RegistrationForm() {
    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);

        const { username, email, password } = inputData;
        if (!username)
        {
            setErrors('Username is required')
        } else if (!email) {
            setErrors("Email is required")
        } else if (!password) {
            setErrors("Password is required")
        }
        setErrors("");
    }
    const { username, email, password } = inputData;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <FaRegEnvelope />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <FaRegEnvelope className="input-icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"  
                        value={email}
                        onChange={handleChange}
                        required    
                    />
                </div>
                <div className="input-group">
                    <MdLockOutline className="input-icon" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>  
                <button type="submit" className="submit-button">Register</button>
            </form>
            {/* <div className="alternative-signup">
                <p>Or sign up with:</p>
                <button className="google-signup-button">
                    <FaGoogle className="google-icon" /> Sign up with Google
                </button>
            </div>
            <div className="login-redirect">
                {/* <p>Already have an account? <Link to="/login">Log in</Link></p> 
            </div> */}
        </div>
    );
}