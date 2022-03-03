import React from "react";
import Styles from "../styles/teacherhome.module.css";
import Classlist from "../src/teacherComponents/classlist/classlist";
import Teacherdashboard from "../src/teacherComponents/Teacherdashboard/teacherdashboard";
// import { Bar } from "react-chartjs-2";

function Teacherhome() {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftside}>
        <Classlist></Classlist>
      </div>

      <div className={Styles.rightside}>
    
        <Teacherdashboard></Teacherdashboard>
      </div>
      <div></div>
    </div>
  );
}

export default Teacherhome;
