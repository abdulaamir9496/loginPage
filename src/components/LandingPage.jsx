import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'; // Import CSS for styling

const LandingPage = () => {
    return (
        <>
            <Link to='/header'>Header</Link>
            <br />
            <div>This is Landing Page</div>
            <br />
            <Link to='/'>Landing Page</Link>
            <div className="landing-page-container">
            <div className="landing-page-content">
            <div className="left-content">
            <h1 className="main-heading">AMPLIFYING AWESOMENESS</h1>
            <p className="sub-heading">
                <strong>You. To the Power of the 'Genexhubai' Learning Management Platform.</strong>
            </p>
            <p className="paragraph">
                Educators are powerful people doing important, life-changing things.<br />
                Genexhubai doesn't get in the way of <br />
                that—it just makes those important, <br />
                life-changing things easier to do and easier to share.
            </p>
            </div>
            <div className="right-content">
            <img src="../images/Learning Management System img.jpg" alt="Learning Management System" className="lm-image" />
            </div>
            </div>
            </div>
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

export default LandingPage