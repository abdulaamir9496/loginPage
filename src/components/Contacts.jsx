import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <>
            <div>This is Contacts Page</div>
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

export default Contacts