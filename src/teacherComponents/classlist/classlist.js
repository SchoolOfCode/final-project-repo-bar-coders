import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist({lessThanFour, moreThanFour}) {

  // const studentNames = lessThanFour.map((student) => student.name);
  // const studentTimes = lessThanFour.map((student)=>student.count)
 

  return (
    <div className={Styles.classlist}>
      <h1>Class List</h1>
      
    
          <div  className={Styles.names}>
          <button>Whole Class View</button>
          
          {/* Mapping through dummy data in app.js for students who read less than four times*/}
          {/* {lessThanFour && lessThanFour.length ? lessThanFour.map((student, index) => (
          <button key={index}>{student.name}</button>
        )
      ) : null} */}
        {/* {studentNames.map((name, index) => {
          return (<button key={index}> {name} </button>);
        })} */}
        

{/* 
          Mapping through dummy data in app.js for students who read four times
          or more - not populating the class list for some reason */}
          
        {/* {moreThanFour && moreThanFour.length ? moreThanFour.map((person, index) => (
          <button key={index}>{person.name}</button>
        )
      ) : null} */}
      



      </div>
     
     
    </div>
  );
}

export default Classlist;
