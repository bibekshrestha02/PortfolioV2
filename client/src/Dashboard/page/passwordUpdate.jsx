import React, { useState } from "react";
import style from "./../Auth/style/logIn.module.scss";
import Axios from "./../../axios";
export default function PasswordUpdate() {
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confromPassword, setconfromPassword] = useState("");

  const formHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "password") {
      return setPassword(value);
    } else if (name === "newPassword") {
      return setnewPassword(value);
    } else if (name === "confromPassword") {
      return setconfromPassword(value);
    }
  };
  const submitHanlder = () => {
    if (!password || !newPassword || !confromPassword) {
      setErr(true);
      return setErrMessage("Please Fill Up the form");
    }
    if (newPassword !== confromPassword) {
      setErr(true);
      return setErrMessage("Password doesn't matched with eachOther");
    }
    setErr(false);
    setErrMessage("");
    const data = {
      oldPassword: password,
      newPassword: newPassword,
      conformPassword: confromPassword,
    };
    Axios.patch("/admin/updatePassword", data).then((res) => {
      const { status } = res.data;
      const { message } = res.data;
      if (!status) {
        setErr(true);
        return setErrMessage(message);
      }
      setErrMessage("");
      setPassword("");
      setconfromPassword("");
      setnewPassword("");
      setErr(false);
      alert(message);
    });
  };
  return (
    <div className={style.loginform}>
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
            value={password}
            type='password'
            name='password'
            className='form-control'
            placeholder='Current Password'
            required='required'
          />
        </div>
        <div className='form-group'>
          <input
            name='newPassword'
            onChange={formHandler}
            value={newPassword}
            type='password'
            className='form-control'
            placeholder='New-Password'
            required='required'
          />
        </div>
        <div className='form-group'>
          <input
            name='confromPassword'
            onChange={formHandler}
            value={confromPassword}
            type='password'
            className='form-control'
            placeholder='Confrom-Password'
            required='required'
          />
        </div>
        <div className='form-group'>
          <button
            type='button'
            className='btn btn-danger btn-block '
            onClick={submitHanlder}>
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
