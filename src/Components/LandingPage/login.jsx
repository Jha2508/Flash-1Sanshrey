import React, { useState } from 'react'
import './login.css'


const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')

    const [login, setlogin] = useState(true)

    const handleLogin = () => {
        if (email === '' || password === '') {
            return
        }
    }
    return (
        <>
            <div className="container landing-page-right" style={{ display: login ? "" : "none" }}>
                <h1>Login</h1>
                <p>Use your Password for login.</p>
                <hr className="ruler" />
                <div className="landing-form col-md-8">
                    <div className="input-group input-group-lg">
                        <input type="text" onChange={e => { setemail(e.target.value) }} className="form-control landing-input" placeholder="Email" value={email} />
                    </div>
                    <div className="input-group input-group-lg">
                        <input type="password" onChange={e => { setpassword(e.target.value) }} className="form-control landing-input" placeholder="Password" value={password} />
                    </div>
                    <button type="button" onClick={handleLogin} className="btn btn-lg btn-info landing-login">Login</button>
                </div>
                <p>Dont have an Account?<button type="button" className="btn btn-secondary btn-sm" onClick={() => setlogin(!login)}>Create Account</button></p>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------ */}
            <div className="container landing-page-right" style={{ display: login ? "none" : "" }}>
                <h1>Signup</h1>
                <p>Create a new Account.</p>
                <hr className="ruler" />
                <div className="landing-form col-md-8">
                    <div className="input-group input-group-md">
                        <input type="text" className="form-control landing-input" placeholder="Name" />
                    </div>
                    <div className="input-group input-group-md">
                        <input type="text" className="form-control landing-input" placeholder="Email" />
                    </div>
                    <div className="input-group input-group-md">
                        <input type="password" className="form-control landing-input" placeholder="Password" />
                    </div>
                    <div className="input-group input-group-md">
                        <input type="password" className="form-control landing-input" placeholder="Confirm Password" />
                    </div>

                    <button type="button" className="btn btn-lg btn-info landing-login">SignUp</button>
                    <p>Already have an account? <button type="button" className="btn btn-secondary btn-sm" onClick={() => setlogin(!login)}>Login Here</button></p>

                </div>
            </div>
        </>
    )
}

export default Login
