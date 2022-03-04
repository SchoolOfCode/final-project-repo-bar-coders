import React from "react";
import Styles from "../../../styles/teacherdashboard.module.css";
import Timesread from "../Graphs/timesread";
import Pagesread from "../Graphs/pagesread";
import Booksfinished from "../Graphs/booksfinished";
import Minutesread from "../Graphs/minutesread";
import Link from "next/link";
import { styled } from "@chakra-ui/react";

function Teacherdashboard({studentSelected}) {
  return (
    <div className={Styles.teacherdashboard}>
      <div className={Styles.timesreadcontainer}>
        <Timesread studentSelected={studentSelected}></Timesread>
      </div>

      <div className={Styles.bottomsection}>
          <div className={Styles.topcontainers}>

            <div className={Styles.pages}><Pagesread studentSelected={studentSelected}></Pagesread></div>
            <div className={Styles.minutes}><Minutesread studentSelected={studentSelected}></Minutesread></div>
          </div>

          <div className={Styles.bottomcontainers}>
            <div className={Styles.finished}><Booksfinished studentSelected={studentSelected}></Booksfinished></div>
            
            <div className={Styles.info}>
              <Link href="/teacherinfopage" passHref>
           <button className={Styles.button}>more info</button>
              </Link>
              </div>
          

          </div>
        </div>
      </div>
    // </div>
  );
}

export default Teacherdashboard;


