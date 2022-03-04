import React from "react";
import Styles from "../styles/teacherhome.module.css";
import Classlist from "../src/teacherComponents/classlist/classlist";
import Teacherdashboard from "../src/teacherComponents/Teacherdashboard/teacherdashboard";
import Teachernavbar from "../src/teacherComponents/Teachernavbar/teachernavbar";
// import { Bar } from "react-chartjs-2";

export default function Teacherhome({lessThanFour, moreThanFour, changeStudentSelected, studentSelected}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftside}>
        <Classlist
          lessThanFour={lessThanFour}
          moreThanFour={moreThanFour}
          changeStudentSelected={changeStudentSelected}
          studentSelected={studentSelected}
        />
      </div>

      <div className={Styles.rightside}>
        <Teachernavbar></Teachernavbar>
        <Teacherdashboard
          changeStudentSelected={changeStudentSelected}
          studentSelected={studentSelected}
        ></Teacherdashboard>
      </div>
      <div></div>
    </div>
  );
}


