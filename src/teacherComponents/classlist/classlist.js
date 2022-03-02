import React from "react";
import Styles from "../../../styles/classlist.module.css";

function Classlist() {
  return (
    <div className={Styles.classlist}>
      <h1>Class List</h1>
      <div className={Styles.names}>
      <button>Whole Class View</button>
      <button>Alice</button>
      <button>John</button>
      <button>Samira</button>
      <button>Rayan</button>
      <button>Alice</button>
      <button className={Styles.examplehighlight}>John</button>
      <button>Samira</button>
      <button>Rayan</button>
      <button>Alice</button>
      <button>John</button>
      <button>Samira</button>
      <button>Rayan</button>
      <button>Alice</button>
      <button>John</button>
      <button>Samira</button>
      <button>Rayan</button>
      </div>
    </div>
  );
}

export default Classlist;
