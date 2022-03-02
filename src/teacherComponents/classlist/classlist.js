import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist() {
  return (
    <div className={Styles.classlist}>
      <h1>Class List</h1>
      <button>Alice</button>
      <button>John</button>
      <button>Samira</button>
      <button>Rayan</button>
    </div>
  );
}

export default Classlist;
