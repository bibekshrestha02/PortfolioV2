import React, { useState, useEffect } from "react";
import Axios from "./../../axios";
import Loading from "./../../Assest/LoadingPage/Loading";
export default function Message() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emptyMessage, setEmptyMessage] = useState(true);
  useEffect(() => {
    Axios.get("/contact").then((res) => {
      const { message } = res.data;
      console.log(res);
      if (message.length < 1) {
        setLoading(false);
        return setEmptyMessage(true);
      }
      setEmptyMessage(false);
      setMessages(message);
      setLoading(false);
    });
  }, []);
  const deleteHandler = (id) => {
    const status = window.confirm("Are you sure to delete message?");
    if (status) {
      Axios.delete(`/contact/${id}`).then((res) => {
        alert("Message Deleted");
        window.location.reload();
      });
    }
  };
  let data;
  const emptyMessageInfo = (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <h4>No Message</h4>
    </div>
  );
  if (loading) {
    data = <Loading />;
  } else {
    data = (
      <div>
        {emptyMessage
          ? messages.map((message, i) => {
              return (
                <div key={i} className='card mt-3 bg-light'>
                  <div className='card-body'>
                    <b>Name: </b>
                    <span className='card-title'>{message.name}</span> <br />
                    <b>Email: </b>
                    <span className='card-title'>{message.email}</span> <br />
                    <b>Message: </b>
                    <span className='card-text'>{message.message}</span>
                    <br />
                    <b>Date: </b>
                    <span className='card-text'>
                      {Date(message.data).toString()}
                    </span>
                    <div className='text-right'>
                      <button
                        className='btn btn-danger'
                        onClick={() => deleteHandler(message._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : emptyMessageInfo}
      </div>
    );
  }

  return data;
}
