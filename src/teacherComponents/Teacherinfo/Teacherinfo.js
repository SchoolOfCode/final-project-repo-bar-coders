import React from "react";
import Styles from "../../../styles/teacherinfo.module.css";

function Teacherinfo() {
  return (
    <div className={Styles.teacherinfo}>
      <div className={Styles.bottomsection}>
        <div className={Styles.squarecontainers}>
          <div className={Styles.topcontainers}>
            <p1 className={Styles.topleft}>Student Stats</p1>
            <p2 className={Styles.topright}>Send a Message to the Class</p2>
          </div>

          <div className={Styles.bottomcontainers}>
            <p3 className={Styles.btmleft}>Student Stats</p3>
            <p4 className={Styles.btmright}>Message Log</p4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherinfo;
