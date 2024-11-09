import React from 'react'
import './Footer.css'; // Import CSS for styling
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div>This is Footer's Page</div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <p>Email: info@lms.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="footer-section social">
                        <h3>Follow Us</h3>
                        <ul className="social-links">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 LMS. All Rights Reserved.
                </div>
            </footer>
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

export default Footer