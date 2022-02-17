import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Home() {
  const data = {
    labels: [
      "Alice",
      "Bernard",
      "Catherine",
      "Dilyn",
      "Edward",
      "Francis",
      "George",
      "Henry",
      "Isobel",
      "Juliet",
      "Kaeden",
      "Luca",
      "Matilda",
      "Alice",
      "Bernard",
      "Catherine",
      "Dilyn",
      "Edward",
      "Francis",
      "George",
      "Henry",
      "Isobel",
      "Juliet",
      "Kaeden",
      "Luca",
      "Matilda",
    ],
    datasets: [
      {
        label: "No. of days read this week",
        data: [
          7, 4, 3, 5, 2, 6, 5, 4, 7, 5, 2, 3, 6, 5, 3, 5, 3, 6, 6, 2, 7, 4, 2,
          5, 4, 5,
        ],
        backgroundColor: "rgb(54, 162, 235)",
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "weekly target",
        backgroundColor: "red",
        borderColor: "red",
        type: "line",
        pointRadius: 1,

        data: [
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4,
        ],
      },
    ],
  };

  return (
    <div style={{ height: "700px" }}>
      <h2>Times read this week</h2>
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
