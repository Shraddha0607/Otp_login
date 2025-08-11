import React, { useState } from 'react'

function Login({ setIsOtpSend }) {
    const [email, setEmail] = useState("");

    const sendOtpHandler = (event) => {
        event.preventDefault();
        try {
            // api call
            console.log("otp sent ", email);
            setIsOtpSend(true);
        } catch (error) {
            console.log(error);
        }

    }

    const emailOnChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    return (
        <>
            <h1>I am Login page</h1>
            <form>
                <label>Enter email</label>
                <input type='email' placeholder='Enter your email' value={email} onChange={(event) => emailOnChangeHandler(event)} />
                <button onClick={sendOtpHandler}>Send Otp</button>
            </form>

        </>
    )
}

export default Login
