import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../App.css';
function Login() {
    const navigate = useNavigate();
    const [wrongPat, setWrongPat] = useState(false);
    const [patName, setPatName] = useState("");
    const [pass, setPass] = useState("");
    function checkEmailPattern(data) {
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (pattern.test(data)) {
            setWrongPat(false)
        }
        else {
            setWrongPat(true)
            setPatName("Wrong Email format")
        }
    }
    function checkPassPattern(data) {
        let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        if (pattern.test(data)) {
            setWrongPat(false)
            setPass(data)
        }
        else {
            setWrongPat(true)
            setPatName("Password must be between 8 to 20")
        }
    }
    function handleSubmit() {
        if (pass !== "password123") {
            navigate("/forgetPass")
        }
        else {
            navigate("/changePass")
        }
    }
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-block'>
                    <label>Email</label>
                    <input type="email" title="Email ID" onChange={(e) => checkEmailPattern(e.target.value)} />
                </div>
                <div className='input-block'>
                    <label>Password</label>
                    <input type="password" onChange={(e) => checkPassPattern(e.target.value)} />
                </div>
                <div className='input-block'>
                    <Link to="/register">Create Account</Link>
                    {wrongPat ? <span className='wrgPatMsg'>{patName}</span> : <></>}
                    <input type='submit' value='Submit' />
                </div>
            </form>
        </>
    );
}

export default Login;