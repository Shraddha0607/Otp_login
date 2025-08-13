import React from 'react'

function Otp({setIsLoggedIn}) {
  return (
    <>
      I am Otp
      <button onClick={() => setIsLoggedIn(true)}>Submit</button>
    </>
  )
}

export default Otp
