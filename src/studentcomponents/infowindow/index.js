import React from "react";
import styles from "../../../styles/window.module.css";
import bag from "../../../images/bag.png";
import Image from "next/image";

function infoWindow({minutesRead}) {
  return (
    <div className={styles.window}>
      <div className={styles.inner}>
        <h1>Select a book to log today&apos;s reading </h1>
        <div data-testid="coins-earned">
          <p>You&apos;ve earned </p>
          <h2 className={styles.coinNumber}>{minutesRead}</h2>{" "}
          <p>coins this week! Keep going!</p>
          {/* <p2>You need {30} more coins to unlock the next icon!</p2> */}
        </div>
        <div className={styles.image}>
          <Image
            src={bag.src}
            // src="https://cdn-icons.flaticon.com/png/512/600/premium/600282.png?token=exp=1645891043~hmac=da962b9f69bcf60d158261c3a45550bb"
            alt="icon"
            width="160px"
            height="150px"
          />
        </div>
      </div>
    </div>
  );
}

export default infoWindow;
