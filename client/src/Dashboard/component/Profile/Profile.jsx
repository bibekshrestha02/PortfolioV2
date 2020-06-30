import React, { useState, useEffect } from "react";
import Auth from "./../../Auth/auth";
import style from "./Profile.module.scss";
import Axios from "./../../../axios";
import { withRouter, Link } from "react-router-dom";
function Profile(props) {
  const [photo, setPhoto] = useState();
  const [fileData, setFileData] = useState("");
  const logOut = () => {
    return new Auth().logOut() ? props.history.push("/") : null;
  };
  useEffect(() => {
    Axios.get("/api/").then((res) => {
      const { data } = res.data;
      const { photo } = data;
      setPhoto(photo);
    });
  }, []);
  const Upload = () => {
    const form = new FormData();
    form.append("profile", fileData);
    const status = window.confirm("Are You sure?");
    if (status) {
      Axios.put("/api/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        window.location.reload();
      });
    }
  };
  const photoChanger = (e) => {
    setFileData(e.target.files[0]);
  };
  return (
    <div className={`${style.profile}`}>
      {/* image */}
      <div className='text-center pt-4'>
        <img className={`${style.img}`} src={photo} alt='profile' />
        <div className='row pt-3'>
          <div className='col-6'>
            <input
              type='file'
              onChange={photoChanger}
              style={{ width: "100px" }}
            />
          </div>
          <div className='col-6'>
            <input type='button' value='Upload' onClick={Upload} />
          </div>
        </div>
      </div>
      {/* email */}
      <div className='mt-3'>
        <span style={{ fontWeight: "600" }}>Email:</span>
        <span
          className='pl-1'
          style={{ color: "red", fontWeight: "600", letterSpacing: "1px" }}>
          {props.email}
        </span>
      </div>

      <div>
        <hr />
        <Link to='/dashboard/updatePassword'>Change Password</Link>

        <hr />
        <Link to='/dashboard/message'>Message</Link>
        <hr />
        <Link to='/dashboard/'>Form</Link>
        <hr />
      </div>
      <span className='btn btn-block btn-danger mt-3' onClick={logOut}>
        Log Out
      </span>
    </div>
  );
}

export default withRouter(Profile);
