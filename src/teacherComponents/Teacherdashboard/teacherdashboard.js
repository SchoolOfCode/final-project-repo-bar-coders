import React from "react";
import Styles from "../../../styles/teacherdashboard.module.css";
import Timesread from "../Graphs/timesread";
import Pagesread from "../Graphs/pagesread";
import Booksfinished from "../Graphs/booksfinished";
import Minutesread from "../Graphs/minutesread";

function Teacherdashboard({timesRead, barChartData}) {
  return (
    <div className={Styles.teacherdashboard}>
      <div className={Styles.timesreadcontainer}>
        <Timesread timesRead={timesRead} barChartData={barChartData}></Timesread>
      </div>

      <div className={Styles.bottomsection}>
        <div className={Styles.squarecontainers}>
          <div className={Styles.topcontainers}>
            <Pagesread></Pagesread>
            <Minutesread></Minutesread>
          </div>

          <div className={Styles.bottomcontainers}>
            <Booksfinished></Booksfinished>
            <button>more info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherdashboard;
