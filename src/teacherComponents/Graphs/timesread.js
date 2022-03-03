import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {useState} from "react"

function Timesread({timesRead}) {

    // Mapping through dummy data in app.js for times read
    // const readingData = timesRead.map((student) => {
    //   return {
    //     numberOfTimes: student.count,
    //     studentName: student.name
    //   }
    // });

    const [barChartData, setBarChartData] = useState({})

    setBarChartData({


      // Mapping through dummy data in app.js for student names in times read
      labels: timesRead && timesRead.length ? timesRead.map((student) => student.name) : null,
  
      datasets: [
        {
          label: "Number of times read this week",
  
          // Mapping through dummy data in app.js for count in times read
          data: timesRead && timesRead.length ? timesRead.map((student) => student.count) : null,
  
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
          borderWidth: 1,
        },
      ],
    })

  

  return (
    <div>
      <Bar
        barChartData={barChartData}
        timesRead={timesRead}
        data={barChartData}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default Timesread;
