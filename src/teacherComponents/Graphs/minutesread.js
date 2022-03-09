import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import MyApp from "../../../pages/_app";
import Styles from "../../../styles/charts.module.css";

function Minutesread({ studentSelected, userObject }) {
  const [minutesRead, setMinutesRead] = useState([]);

  const fetchToken = userObject[0].getIDToken.id_token;

  async function getMinutesReadData() {
    const response = await fetch(
      "https://fourweekproject.herokuapp.com/teachers/class",
      {
        headers: {
          authorization: `Bearer ${fetchToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const minutesData = data.minutesReadByClass;
    setMinutesRead(minutesData.map((day) => day.minutes));
  }
  async function getStudentMinutesReadData(id) {
    const response = await fetch(
      `https://fourweekproject.herokuapp.com/teachers/student/${id}`,
      {
        headers: {
          authorization: `Bearer ${fetchToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const minutesData = data.studentWeeklyMinutes;
    setMinutesRead(minutesData.map((day) => day.minutes));
  }

  useEffect(() => {
    if (studentSelected.isSelected === false) {
      getMinutesReadData();
    } else {
      getStudentMinutesReadData(studentSelected.id);
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
        label: "Number of minutes read this week",
        data: minutesRead,
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

export default Minutesread;
