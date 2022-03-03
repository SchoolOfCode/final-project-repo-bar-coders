import React from "react";
import Styles from "../styles/teacherhome.module.css";
import Classlist from "../src/teacherComponents/classlist/classlist";
import Teachernavbar from "../src/teacherComponents/Teachernavbar/teachernavbar";
import Teacherinfo from "../src/teacherComponents/Teacherinfo/Teacherinfo";

function Teacherinfopage() {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftside}>
        <Classlist></Classlist>
      </div>

      <div className={Styles.rightside}>
        <Teachernavbar></Teachernavbar>
        <Teacherinfo></Teacherinfo>
      </div>
      <div></div>
    </div>
  );
}

export default Teacherinfopage;
