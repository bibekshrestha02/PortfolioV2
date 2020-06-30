import React from "react";

export default function dashbordBtns(props) {
  const reload = () => {
    window.location.reload();
  };
  return (
    <div className='row pb-4 pt-5 '>
      <div className='col'>
        <button className='btn btn-warning' onClick={reload}>
          Reload
        </button>
      </div>
      <div className='col text-right'>
        <button className='btn btn-danger' onClick={props.update}>
          Update
        </button>
      </div>
    </div>
  );
}
