import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {useState} from "react"

function Timesread() {
  
 const [timesRead, setTimesRead] = useState([
   {
     weekly: 10,
     count: "5",
     name: "Alice",
     student_id: "s01",
   },
   {
     weekly: 10,
     count: "1",
     name: "Juan",
     student_id: "s03",
   },
   {
     weekly: 10,
     count: "5",
     name: "Alice",
     student_id: "s01",
   },
   {
     weekly: 10,
     count: "1",
     name: "Juan",
     student_id: "s03",
   },
   {
     weekly: 10,
     count: "5",
     name: "Alice",
     student_id: "s01",
   },
   {
     weekly: 10,
     count: "1",
     name: "Juan",
     student_id: "s03",
   },
 ]);


  console.log(timesRead)

  const studentNames = timesRead.map((student) => student.name);
  
  const studentTimes = timesRead.map((student) => student.count);

     
  const data = {
    labels: studentNames,
    datasets: [
      {
        label: "My First Dataset",
        data: studentTimes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  

  

  return (
    <div>
      <Bar
      
        data={data}
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
