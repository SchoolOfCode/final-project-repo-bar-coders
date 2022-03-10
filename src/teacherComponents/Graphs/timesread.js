import React, { useEffect } from "react";
import { Bar, Bubble } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useState } from "react";
import Styles from "../../../styles/charts.module.css";

function Timesread({ studentSelected, timesRead }) {


  const initialArray = new Array(30).fill("rgba(54, 162, 235, 0.6)");
  const initialOutlineArray = new Array(30).fill("rgb(54, 162, 235)");

  const [studentArray, setStudentArray] = useState(initialArray);

  const [studentOutlineArray, setStudentOutlineArray] =
    useState(initialOutlineArray);

  useEffect(() => {
    let index = timesRead.findIndex(
      (element) => studentSelected.id === element.student_id
    );
    if (index !== -1) {
      setStudentArray([
        ...initialArray.slice(0, index),
        "rgba(255, 99, 132, 0.9)",
        ...initialArray.slice(index + 1),
      ]);
      setStudentOutlineArray([
        ...initialOutlineArray.slice(0, index),
        "rgb(255, 99, 132)",
        ...initialOutlineArray.slice(index + 1),
      ]);
    } else {
      setStudentArray([
        "rgba(255, 99, 132, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 205, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(201, 203, 207, 0.6)",
      ]);
      setStudentOutlineArray([
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ]);
    }
  }, [studentSelected]);

  const studentNames = timesRead.map((student) => student.name);
  const studentTimes = timesRead.map((student) => student.count);

  const data = {
    labels: studentNames,
    datasets: [
      {
        type: "line",
        label: "target of 4 times",
        data: new Array(30).fill(4),
        backgroundColor: "rgba(49, 61, 139)",
        borderColor: "rgba(49, 61, 139)",
        borderWidth: 1.5,
        pointRadius: 0,
      },
      {
        label: "Times read this week",
        data: studentTimes,
        backgroundColor: studentArray,
        borderColor: studentOutlineArray,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={Styles.chart}>
      <Bar
        data={data}
        width={400}
        height={250}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
}

export default Timesread;
