import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist({lessThanFour, moreThanFour}) {

 

  return (
    <div className={Styles.classlist}>
      <h1>Class List</h1>
      
    
          <div  className={Styles.names}>
          <button>Whole Class View</button>
          
          {lessThanFour && lessThanFour.length ? lessThanFour.map((student, index) => (
          <button key={index}>{student.name}</button>
        )
      ) : null}

      {/* {moreThanFour && moreThanFour.length ? moreThanFour.map((person, index) => (
          <button key={index}>{person.name}</button>
        )
      ) : null} */}
      



      </div>
     
     
    </div>
  );
}

export default Classlist;
