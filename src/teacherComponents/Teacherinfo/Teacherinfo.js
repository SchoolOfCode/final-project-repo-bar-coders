import React from "react";
import Styles from "../../../styles/teacherinfo.module.css";

function Teacherinfo() {
  return (
    <div className={Styles.teacherinfo}>
      <div className={Styles.bottomsection}>
        <div className={Styles.squarecontainers}>
          <div className={Styles.topcontainers}>
            <p>Small Card 1</p>
            <p>Small Card 2</p>
          </div>

          <div className={Styles.bottomcontainers}>
            <p>Big Card 1</p>
            <p>Big Card 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherinfo;
