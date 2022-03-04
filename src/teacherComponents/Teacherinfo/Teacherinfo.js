import React from "react";
import Styles from "../../../styles/teacherinfo.module.css";

function Teacherinfo() {
  return (
    <div className={Styles.teacherinfo}>
      <div className={Styles.bottomsection}>
        <div className={Styles.squarecontainers}>
          <div className={Styles.topcontainers}>
            <div className={Styles.topleft}> 
              <p1 className={Styles.p1}> Select a student to see their individual stats </p1> 
            </div>
            <div className={Styles.topright}>
              <p2 className={Styles.p2}> Send a Message to the Class </p2>
              <input className={Styles.input} type="text" placeholder="Type Message Here ..."></input>
              <button className={Styles.button}> Send </button>
            </div>
          </div>

          <div className={Styles.bottomcontainers}>
            
            <div className={Styles.btmleft}>
               <p3 className={Styles.p3}> Select a student to see their daily reading summaries </p3>
            </div>
            
            <div className={Styles.btmright}>
               <p4 className={Styles.p4}> Message Log </p4>
               <p5 className={Styles.p5}>1</p5>
               <p6 className={Styles.p6}>2</p6>
               <p7 className={Styles.p7}>3</p7>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherinfo;
