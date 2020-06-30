import React, { useState } from "react";
import style from "./contact.module.scss";
import Title from "./../../Assest/Title/Title";
import Axios from "./../../axios";
import Validator from "validator";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const formHandler = (e) => {
    const value = e.target.value;
    if (e.target.name === "name") {
      setName(value);
    } else if (e.target.name === "email") {
      setEmail(value);
    } else if (e.target.name === "message") {
      setMessage(value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !message || !name) {
      setErrMessage("* Please! fill up the form");
      return setErr(true);
    }
    if (!Validator.isEmail(email)) {
      setErrMessage("* Invalid Email");
      return setErr(true);
    }
    setErr(false);
    setErrMessage("");
    const data = {
      email: email,
      message: message,
      name: name,
    };
    Axios.post("/contact", data).then((res) => {
      if (res.data.status) {
        setMessage("");
        setEmail("");
        setName("");
        return alert("Message send to Bibek Shrestha");
      }
    });
  };
  return (
    <div className={style.contactPage}>
      <Title Title={"SHOOT A MESSAGE"} />
      <form className={` ${style.form} container-fluid`}>
        {err ? (
          <div className='text-center'>
            <span style={{ color: "red" }}>{errMessage}</span>
          </div>
        ) : null}
        <div className='row'>
          <div className='col'>
            <input
              name='name'
              type='text'
              className='form-control form-control-lg'
              value={name}
              onChange={formHandler}
              placeholder='Name'
            />
          </div>
          <div className='col'>
            <input
              name='email'
              value={email}
              onChange={formHandler}
              type='text'
              className='form-control form-control-lg'
              placeholder='Your Email'
            />
          </div>
        </div>
        <textarea
          name='message'
          value={message}
          onChange={formHandler}
          className='form-control mt-3 form-control-lg'
          rows='5'
          placeholder='Your Message'></textarea>
        <div className='text-center mt-4'>
          <button className='btn btn-danger btn-lg' onClick={submitHandler}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
