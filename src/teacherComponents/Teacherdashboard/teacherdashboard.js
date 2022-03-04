import React from "react";
import Styles from "../../../styles/teacherdashboard.module.css";
import Timesread from "../Graphs/timesread";
import Pagesread from "../Graphs/pagesread";
import Booksfinished from "../Graphs/booksfinished";
import Minutesread from "../Graphs/minutesread";
import Link from "next/link";

function Teacherdashboard({studentSelected}) {
  return (
    <div className={Styles.teacherdashboard}>
      <div className={Styles.timesreadcontainer}>
        <Timesread studentSelected={studentSelected}></Timesread>
      </div>

      <div className={Styles.bottomsection}>
        <div className={Styles.squarecontainers}>
          <div className={Styles.topcontainers}>
            <Pagesread studentSelected={studentSelected}></Pagesread>
            <Minutesread studentSelected={studentSelected}></Minutesread>
          </div>

          <div className={Styles.bottomcontainers}>
            <Booksfinished studentSelected={studentSelected}></Booksfinished>
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


