import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist({ lessThanFour, moreThanFour }) {
  const studentsLessThan4 = lessThanFour
    ? lessThanFour.map((student) => { return { studentName: student.name, id: student.id, count: student.count } })
    : [];
  
  const studentsMoreThan4 = moreThanFour
    ? moreThanFour.map((student) => {
      return {
        studentName: student.name,
        id: student.id,
        count: student.count,
      };
    })
    : [];
  

  console.log(
    "4-:", studentsLessThan4,
    "4+:", studentsMoreThan4,
     );

  return (
    <div className={Styles.classlist}>
      <h1>Class List</h1>

      <div className={Styles.names}>
        <button>Whole Class View</button>

        {
          studentsLessThan4.map((student, index) => {
            return <button key={index} id={student.id}>{student.studentName}</button>;
          })}
        {
          studentsMoreThan4.map((student, index) => {
            return (
              <button key={index} id={student.id}>
                {student.studentName}
              </button>
            );
          })}

          </div>
    </div>
  );
}

export default Classlist;
