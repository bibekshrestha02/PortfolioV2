import React, { useState } from "react";
import style from "./style/logIn.module.scss";
import Title from "./../../Assest/Title/Title";
import Auth from "./auth";
import { withRouter } from "react-router-dom";
import Validator from "validator";
import Axios from "./../../axios";
function Login(props) {
  const logIn = (token) => {
    return new Auth(token).login() ? props.history.push("/dashboard") : null;
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const formHandler = (e) => {
    const value = e.target.value;
    if (e.target.name === "email") {
      setEmail(value);
    } else if (e.target.name === "password") {
      setPassword(value);
    }
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrMessage("Enter your Email or Password");
      return setErr(true);
    }
    if (!Validator.isEmail(email)) {
      setErrMessage("Invalid Email");
      return setErr(true);
    }
    const data = {
      email: email,
      password: password,
    };
    Axios.post("/admin/login", data).then((res) => {
      if (!res.data.status) {
        setErrMessage(res.data.message);
        return setErr(true);
      }
      const token = res.data.token;
      logIn(token);
    });
  };
  return (
    <div className={style.loginform}>
      <Title Title='Admin Zone' />
      <form
        className='mt-5'
        style={{ borderTop: "5px solid #d82c2e", borderRadius: "20px" }}>
        {isErr ? (
          <span
            style={{
              color: "Red",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "12px",
            }}>
            * {errMessage}
          </span>
        ) : null}
        <div className='form-group '>
          <input
            onChange={formHandler}
            value={email}
            type='text'
            name='email'
            className='form-control'
            placeholder='Email'
            required='required'
          />
        </div>
        <div className='form-group'>
          <input
            name='password'
            onChange={formHandler}
            value={password}
            type='password'
            className='form-control'
            placeholder='Password'
            required='required'
          />
        </div>
        <div className='form-group'>
          <button
            type='button'
            className='btn btn-danger btn-block '
            onClick={submitHanlder}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
export default withRouter(Login);
