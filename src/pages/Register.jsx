import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {
    const [inputs, setInputs] = useState({
        username:'',
        email:'',
        password:'',
    });

    const handleChange = e => {
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8800/test/auth/register", inputs);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main className='Register'>
            <h1>Register</h1>
            <form>
                <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
                <input required type='email' placeholder='email' name ='email' onChange={handleChange}/>
                <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={ handleSubmit }>Register</button>
                <p>This is an error!</p>
                <span>
                    Do you have an account? 
                    <Link to='/login'> Login</Link>
                </span>
            </form>
        </main>
    )
}

export default Register