import "./LoginPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function LoginPage() {

  const [isFalse, setIsFalse] = useState(false);
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(localStorage.getItem('users')) || [{ email: "hasimgorucu@gmail.com", password: "123456",username: "hasim" }];
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const user = userData.find((user) =>
    formData.email == user.email && formData.password == user.password
  )

  function login() {
    if (user) {
      localStorage.setItem('currentuser', user.username);
      setLoading(true);
      setTimeout(()=>{
        navigate("/", { replace: true })
      },7000)
    } else {
      setIsFalse(true)
    }
  }

  const isFormValid = () => {
    return formData.email !== "" && formData.password !== "";
  };

  return (
    <div>
      <main className="login-page">
        <div className="form-container">
          <h1>LOGIN</h1>
          <input onKeyUp={(e) => handleChange(e)} name="email" type="email" placeholder="Enter Your Email" />
          <input onKeyUp={(e) => handleChange(e)} name="password" type="password" placeholder="Enter Your Password" />
          <div className="login-alert"><span>Dont you have an account? / </span><Link to={"/signup"} style={{fontWeight:"bold"}}> Sign Up</Link></div>
          {isFalse ? <div className="login-alert">Username or password is incorrect</div> : <div></div>}
          {loading ? <div className="login-alert">Please wait you are being directed....</div> : <div></div>}
          <button className={isFormValid() || !loading ? "button-enabled" : "button-disabled"} onClick={() => login()}>Login</button>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
