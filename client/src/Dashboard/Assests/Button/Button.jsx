import React from "react";

export default function Button(props) {
  return (
    <div style={{ textAlign: "right", padding: "9px" }}>
      <span
        onClick={props.onClick}
        className={`btn ${props.color ? `btn-${props.color}` : `btn-primary`}`}>
        {props.value}
      </span>
    </div>
  );
}
