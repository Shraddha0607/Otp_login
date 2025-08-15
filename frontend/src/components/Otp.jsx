import { useState } from "react";

function Otp({ setIsLoggedIn }) {

  const [isOtpSend, setIsOtpSend] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    otp: "",
  });

  const sendOtpHandler = async (event) => {
    event.preventDefault();
    try {
      // api call
      const apiResponse = await fetch("http://localhost:3000/send-otp", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: formData.email })
      });

      if (!apiResponse.ok) {
        throw new Error("Error occured.");
      }

      window.alert("OTP sent successfully. Check your mail.");
      setIsOtpSend(true);
    } catch (error) {
      console.log(error);
    }

  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log("submit handler for user entity");
    console.log("form data is ", formData);

    // send to backend to call api
    try {
      const responseData = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)

      });

      if (!responseData.ok) {
        throw new Error("Error occurred");
      }

      window.alert("Signup done successfully.");
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Sign up </h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={changeHandler} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={changeHandler} />
          <button onClick={sendOtpHandler}>Send Otp</button>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={changeHandler} />
        </div>
        <div>
          <label>Role</label>
          <input type="text" name="role" value={formData.role} onChange={changeHandler} />
        </div>
        <div>
          <label>OTP</label>
          <input type="text" name="otp" value={formData.otp} onChange={changeHandler} disabled={!isOtpSend ? true : false} />
        </div>
        {isOtpSend && <button onClick={submitHandler}>Submit</button>}
      </form>
    </>
  )
}

export default Otp;
