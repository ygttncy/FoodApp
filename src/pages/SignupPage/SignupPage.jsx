//REACT
import "./SignupPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isConfirmVisible, setIsConfirmVisible] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState("Passwords do not match. Please try again.")
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const isFormValid = () => {
    return formData.email !== "" && formData.password !== "" && formData.username !== "" && formData.confirmPassword !== "";
  };

  const userData = JSON.parse(localStorage.getItem('users')) || [];

  function signUp() {
    if (formData.password == formData.confirmPassword) {
      if (userData.find(user => user.email === formData.email)) {
        setPasswordAlert("This email is already used")
        setIsConfirmVisible(true)
      } else {
        localStorage.setItem('users', JSON.stringify([...userData, { email: formData.email, username: formData.username,password: formData.password}]));
        setIsConfirmVisible(false)
        navigate("/login", { replace: true })
      }
    } else {
      setIsConfirmVisible(true)
    }
  }

  return (
    <div>
      <main className="signup-page">
        <div className="form-container">
          <h1>SIGN UP</h1>
          <input onKeyUp={(e) => handleChange(e)} name="email" type="email" placeholder="Enter Your Email" />
          <input onKeyUp={(e) => handleChange(e)} name="username" type="text" placeholder="Enter Your User Name" />
          <input onKeyUp={(e) => handleChange(e)} name="password" type="password" placeholder="Enter Your Password" />
          <input onKeyUp={(e) => handleChange(e)} name="confirmPassword" type="password" placeholder="Confirm Your Password" />
          {isConfirmVisible ? <div className="signup-alert">{passwordAlert}</div> : <div></div>}
          <div className="signup-alert"><span>Do you have an account? / </span><Link to={"/login"} style={{fontWeight:"bold"}}> Login</Link></div>
          <button className={isFormValid() ? "button-enabled" : "button-disabled"}   disabled={!isFormValid()} onClick={() => signUp() }>Sign Up</button>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
