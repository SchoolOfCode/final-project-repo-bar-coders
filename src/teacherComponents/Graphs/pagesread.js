import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Styles from "../../../styles/charts.module.css"

function Pagesread({ studentSelected }) {
  const [pagesRead, setPagesRead] = useState([]);

  async function getPagesReadData() {
    const response = await fetch(
      "https://fourweekproject.herokuapp.com/teachers/class"
    );
    const data = await response.json();
    const pagesData = data.pagesReadByClass;
    setPagesRead(pagesData.map((day) => day.pages));
  }

  async function getStudentPagesReadData(id) {
    const response = await fetch(
      `https://fourweekproject.herokuapp.com/teachers/student/${id}`
    );
    const data = await response.json();
    const pagesData = data.studentWeeklyPages;
    setPagesRead(pagesData.map((day) => day.pages));
  }



  useEffect(() => {
    if (studentSelected.isSelected === false) {
      getPagesReadData();
    } else {
      getStudentPagesReadData(studentSelected.id);
    }
  }, [studentSelected]);

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Number of pages read this week",
        data: pagesRead,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className={Styles.chart}>
      <Line
        data={data}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
}

export default Pagesread;
