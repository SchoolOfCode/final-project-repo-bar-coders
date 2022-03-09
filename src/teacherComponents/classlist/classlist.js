import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist({
  lessThanFour,
  moreThanFour,
  changeStudentSelected,
  studentSelected,
}) {
  const studentsLessThan4 = lessThanFour
    ? lessThanFour.map((student) => {
        return {
          studentName: student.name,
          id: student.student_id,
          count: student.count,
        };
      })
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
      <h1>Class list: 5C</h1>
      <h4 className={Styles.lessThan4Key}>Read less than 4 times this week</h4>
      <h4 className={Styles.moreThan4Key}>Read four times or more this week</h4>

      <div className={Styles.names}>
        <button
          className={Styles.wholeClassButton}
          onClick={() => {
            changeStudentSelected(false, null, null);
          }}
        >
          Whole Class View
        </button>

        {studentsLessThan4.map((student, index) => {
          return (
            <button
              className={Styles.lessthan}
              key={index}
              id={student.id}
              // studentname={student.studentName}
              onClick={(e) => {
                console.log(e.target, e.target.id, student.studentName);
                changeStudentSelected(true, e.target.id, student.studentName);
              }}
            >
              {student.studentName}
            </button>
          );
        })}
        {studentsMoreThan4.map((student, index) => {
          return (
            <button
              className={Styles.morethan}
              key={index}
              id={student.id}
              onClick={(e) => {
                console.log(e.target.id);
                changeStudentSelected(true, e.target.id, student.studentName);
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
