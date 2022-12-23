import '../App.css';
import { useState } from 'react';
function ChangePass() {
    const [wrongPat, setWrongPat] = useState(false);
    const [patName, setPatName] = useState("");
    function checkPassPattern(data) {
        let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
        if (pattern.test(data)) {
            setWrongPat("false")
        }
        else {
            setWrongPat("true")
            setPatName("Password must be between 8 to 20")
        }
    }
    return (
        <>
            <h2>Login Successfull</h2>
            <div className='input-block'>
                <label>Change your Password</label>
                <input type='password' onChange={(e) => checkPassPattern(e.target.value)} />
            </div>
            {wrongPat ? <span className='wrgPatMsg'>{patName}</span> : <></>}
        </>
    );
}
export default ChangePass;