import '../App.css';
import { useState } from 'react';
function ForgetPass() {
    const [wrongPat, setWrongPat] = useState(false);
    const [patName, setPatName] = useState("");
    function checkEmailPattern(data) {
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (pattern.test(data)) {
            setWrongPat("false")
        }
        else {
            setWrongPat("true")
            setPatName("Code must be 6 digit number")
        }
    }
    return (
        <>
            <h2>Forget Passord</h2>
            <div className='input-block'>
                <label>Enter your Email to recieve Code</label>
                <input type='email' onChange={(e) => checkEmailPattern(e.target.value)} />
            </div>
            {wrongPat ? <span className='wrgPatMsg'>{patName}</span> : <></>}
        </>
    );
}
export default ForgetPass;