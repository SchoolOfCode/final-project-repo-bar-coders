import React from 'react'
import Navbar from '../src/studentcomponents/navbar'
import Styles from '../styles/finishedbooks.module.css'



function finishedbooks({ isNewMessage, studentName }) {
  return (
    <div>
        {<Navbar isNewMessage={isNewMessage} studentName={studentName} />}
          <div className={Styles.container}>
              <div className={Styles.box}><img src='BB.JPG' alt="" width="350rem" height="350rem" />Completed: 02-02-2022</div>
              <div className={Styles.box}><img src='CA.JPG' alt="" width="350rem" height="350rem" />Completed: 15-12-2021</div>
              <div className={Styles.box}><img src='CW.JPG' alt="" width="350rem" height="350rem" />Completed: 10-12-2021</div>
              <div className={Styles.box}><img src='GB.JPG' alt="" width="350rem" height="350rem" />Completed: 01-01-2022</div>
          </div>
          <div className={Styles.container}>
            <div className={Styles.box}><img src='GE.JPG' alt="" width="350rem" height="350rem" />Completed: 26-05-2021</div>
            <div className={Styles.box}><img src='HP.JPG' alt="" width="350rem" height="350rem" />Completed: 13-08-2020</div>
            <div className={Styles.box}><img src='NA.JPG' alt="" width="350rem" height="350rem" />Completed: 12-06-2021</div>
            <div className={Styles.box}><img src='SS.JPG' alt="" width="350rem" height="350rem" />Completed: 17-07-2021</div>
          </div>
    </div>
  );
}
export default finishedbooks




