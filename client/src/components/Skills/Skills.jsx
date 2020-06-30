import React from "react";
import style from "./style.module.scss";
import Title from "./../../Assest/Title/Title";
export default function Skills(props) {
  const { skills } = props;
  const container = {
    width: "100%",
    height: "15px",
    backgroundColor: "#DAE0E2",
    borderRadius: "4px",
  };

  return (
    <div className={`${style.skillsPage} pt-4`}>
      <Title color Title={"Technical Skills"} />
      <div className={`row container-fluid mt-4`}>
        {skills.map((skills, i) => {
          return (
            <div key={i} className='col-6 pb-4 text-center'>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                  margin: "9px",
                }}>
                {skills.Title}
              </span>
              <div style={container} className='mt-2 '>
                <div
                  style={{
                    width: `${skills.portion * 1}%`,
                    height: "15px",
                    backgroundColor: "#2F363F",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "4px",
                    fontSize: "10px",
                  }}>
                  {skills.portion} %
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
