import React from "react";
import Styles from "../../../styles/teacherinfo.module.css";
import Individualstats from "../Individualstats/individualstats";

function Teacherinfo({studentSelected}) {
  return (
    <div className={Styles.teacherinfo}>
          <div className={Styles.topcontainers}>
            <div className={Styles.topleft}> 
    
             <Individualstats studentSelected={studentSelected} className={Styles.p1}></Individualstats>
            </div>
            <div className={Styles.topright}>
              <p className={Styles.p2}> Send a Message to the Class </p>
              <input className={Styles.input} type="text" placeholder="Type Message Here ..."></input>
              <button className={Styles.button}> Send </button>
            </div>
          </div>

          <div className={Styles.bottomcontainers}>
            
            <div className={Styles.btmleft}>
               <p className={Styles.p3}> Select a student to see their daily reading summaries </p>
            </div>
            
            <div className={Styles.btmright}>
               <p className={Styles.p4}> Message Log </p>
               <p className={Styles.p5}>Alex you need to try read more</p>
               <p className={Styles.p6}>Well Done Alice keep up the pace</p>
               <p className={Styles.p7}>Norman I need to see your mother</p>
            </div>
          </div>
    </div>
  );
}

export default Teacherinfo;
