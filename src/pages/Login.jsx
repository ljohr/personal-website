import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <main className='Login'>
            <h1>Login</h1>
            <form>
                <input required type='text' placeholder='username' name='username' />
                <input required type='email' placeholder='email' name ='email'/>
                <input required type='password' placeholder='password' name='password' />
                <button>Login</button>
                <p>This is an error!</p>
                <span>
                    Do you have an account? 
                    <Link to='/register'> Register</Link>
                </span>
            </form>
        </main>
    )
}

export default Login