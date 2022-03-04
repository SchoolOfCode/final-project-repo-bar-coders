import React from "react";
import Styles from "../../../styles/teacherdashboard.module.css";
import Timesread from "../Graphs/timesread";
import Pagesread from "../Graphs/pagesread";
import Booksfinished from "../Graphs/booksfinished";
import Minutesread from "../Graphs/minutesread";
import Link from "next/link";

function Teacherdashboard() {
  return (
    <div className={Styles.teacherdashboard}>
      <div className={Styles.timesreadcontainer}>
        <Timesread ></Timesread>
      </div>

      <div className={Styles.bottomsection}>
        <div className={Styles.squarecontainers}>
          <div className={Styles.topcontainers}>
            <Pagesread></Pagesread>
            <Minutesread></Minutesread>
          </div>

          <div className={Styles.bottomcontainers}>
            <Booksfinished></Booksfinished>
              <Link href="/teacherinfopage" passHref>
            <button>more info</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherdashboard;


