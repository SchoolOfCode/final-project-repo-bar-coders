import React from 'react';
import "react-step-progress-bar/styles.css";
import styles from '../../../styles/progressbarcomponent.module.css'

import { ProgressBar, Step } from "react-step-progress-bar";

function ProgressBarComponent() {
  return (
    <div className={styles.progressbar}>
      <ProgressBar
        percent={100}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="40"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="50"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="60"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="70"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="80"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="90"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="100"
              src="https://cdn-icons-png.flaticon.com/512/599/599193.png"
            />
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default ProgressBarComponent