// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = LoginValidation(values);
        setErrors(validationErrors);
        
        if (Object.values(validationErrors).every(error => error === "")) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/home'); // Redirect to home page upon successful login
                    } else {
                        alert("No record existed");
                    }
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <>
            <div>This is Login's Page</div>
            <br />
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign In</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter your email address' name='email' 
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter your password' name='password'
                            onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to='/signUp' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
            </div>
            <br />
            <Link to='/'>Landing Page</Link>
            <br />
            <Link to='/signUp'>SignUp</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/formSubmission'>Form</Link>
            <br />
            <Link to='/header'>Header</Link>
            <br />
            <Link to='/home' >Home</Link>
            <br />
            <Link to='/contact'>Contacts</Link>
            <br />
            <Link to='/about'>About</Link>
            <br />
            <Link to='/footer'>Footer</Link>
        </>
    )
}

export default Login