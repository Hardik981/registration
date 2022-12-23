import '../App.css';
import { useState } from 'react';
function VerifyEmail() {
    const [wrongPat, setWrongPat] = useState(false);
    const [patName, setPatName] = useState("");
    function checkEmailPattern(data) {
        let pattern = /^\d{6}$/;
        if (pattern.test(data)) {
            setWrongPat(false)
        }
        else {
            setWrongPat(true)
            setPatName("Code must be 6 digit number")
        }
    }
    return (
        <>
            <h2>Email Verification</h2>
            <div className='input-block'>
                <label>Enter Code</label>
                <input type='email' onChange={(e) => checkEmailPattern(e.target.value)} />
            </div>
            {wrongPat ? <span className='wrgPatMsg'>{patName}</span> : <></>}
        </>
    );
}
export default VerifyEmail;