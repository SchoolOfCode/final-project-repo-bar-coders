import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist({ lessThanFour, moreThanFour, changeStudentSelected, studentSelected }) {
  const studentsLessThan4 = lessThanFour
    ? lessThanFour.map((student) => { return { studentName: student.name, id: student.student_id, count: student.count } })
    : [];
  
  const studentsMoreThan4 = moreThanFour
    ? moreThanFour.map((student) => {
      return {
        studentName: student.name,
        id: student.student_id,
        count: student.count,
      };
    })
    : [];
 
  return (
    <div className={Styles.classlist}>
      <h1>Class List</h1>

      <div className={Styles.names}>
        <button onClick={() => { changeStudentSelected(false, null) }}>Whole Class View</button>

        {
          studentsLessThan4.map((student, index) => {
            return (
              <button
                className={Styles.lessthan}
                key={index}
                id={student.id}
                onClick={(e) => {
                  console.log(e.target.id);
                  changeStudentSelected(true, e.target.id);
                }}
              >
                {student.studentName}
              </button>
            );
          })}
        {
          studentsMoreThan4.map((student, index) => {
            return (
              <button
                className={Styles.morethan}
                key={index}
                id={student.id}
                onClick={(e) => {
                  console.log(e.target.id);
                  changeStudentSelected(true, e.target.id);
                }}
              >
                {student.studentName}
              </button>
            );
          })}

          </div>
    </div>
  );
}

export default Classlist;
