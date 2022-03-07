import React from 'react';
import "react-step-progress-bar/styles.css";
import styles from '../../../styles/progressbarcomponent.module.css'
import rocketicon from '../../../images/rocketicon.png'
import Image from 'next/image';

import { ProgressBar, Step } from "react-step-progress-bar";

function ProgressBarComponent({studentDaysRead}) {
//   const studentDaysRead = 4;
  return (
    <div className={styles.progressbar}>
      <ProgressBar
        percent={Math.ceil((studentDaysRead / 7) * 100)}
        filledBackground="linear-gradient(to right, #ACF5DA, #51ECB4)"
      >
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
        <Step transition="rotate">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              height="50"
              src={rocketicon.src}
              alt="rocket"
            />
          )}
        </Step>
      </ProgressBar>
      <div className={styles.dayCount}>
        <p className={styles.day0}>Day 0</p>
        <p className={styles.day1}>Day 1</p>
        <p className={styles.day2}>Day 2</p>
        <p className={styles.day3}>Day 3</p>
        <p className={styles.day4}>Day 4</p>
        <p className={styles.day5}>Day 5</p>
        <p className={styles.day6}>Day 6</p>
        <p className={styles.day7}>Day 7</p>
      </div>
    </div>
  );
}

export default ProgressBarComponent