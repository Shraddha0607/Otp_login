
import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Otp from './components/Otp';
import Home from './components/Home';

function App() {
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    {!isOtpSend && <Login setIsOtpSend={setIsOtpSend}/>}
    {isOtpSend && !isLoggedIn && <Otp setIsLoggedIn={setIsLoggedIn} />}
    {isLoggedIn && <Home setIsLoggedIn={setIsLoggedIn} setIsOtpSend={setIsOtpSend} />  }
    </>
  )
}

export default App
