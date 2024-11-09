import React from 'react'
import './Header.css'; // Import CSS for styling
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div>This is Header's Page</div>
            <header className="header">
                <div className="logo">
                <Link to="/">LMS Logo</Link>
                </div>
                <nav className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                </nav>
            </header>
            <br />
            <Link to='/'>Landing Page</Link>
            <br />
            <Link to='/signUp'>SignUp</Link>
            <br />
            <Link to='/signUpValidation'>SignUp Validation</Link>
            <br />
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/loginValidation'>Login Validation</Link>
            <br />
            <Link to='/form'>Form</Link>
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

export default Header