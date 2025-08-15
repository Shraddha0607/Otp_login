
import { useState } from 'react'
import './App.css'
import Otp from './components/Otp';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      { !isLoggedIn && <Otp
        setIsLoggedIn={setIsLoggedIn}
        
      />}
      {isLoggedIn && <Home setIsLoggedIn={setIsLoggedIn} />}
    </>
  )
}

export default App
